#!/usr/bin/env node
/**
 * Pre-launch check: what on this site is still not real?
 *
 * Two separate things, because they fail differently:
 *
 *   1. Content gaps — a `[NEEDS REAL DATA: …]` marker renders visibly in the
 *      page. Nothing fabricated ever ships, so these are loud by design.
 *
 *   2. Degraded config — the WhatsApp number and LinkedIn URL have real
 *      placeholder values. The site does not break on these: the WhatsApp CTA
 *      falls back to email and the LinkedIn link is hidden (see src/lib/site.ts).
 *      But it is running with a hand tied behind its back until they are set.
 *
 *   npm run check:placeholders          report, exit 0
 *   npm run check:placeholders -- --ci  report, exit 1 if anything is unreal
 */

import { readdir, readFile } from 'node:fs/promises'
import { join, relative } from 'node:path'

const ROOT = process.cwd()
const EXTENSIONS = /\.(tsx?|jsx?|mdx?|css)$/
const NEEDS_DATA = /\[NEEDS REAL DATA[^\]]*\]/gi

/** Kept in sync with the guards in src/lib/site.ts. */
const DEGRADED = [
  {
    label: 'WhatsApp number',
    pattern: /whatsappNumber:\s*'3000000000'/,
    effect: 'primary CTA falls back to email instead of opening WhatsApp',
  },
  {
    label: 'LinkedIn URL',
    pattern: /linkedin:\s*'https:\/\/www\.linkedin\.com'/,
    effect: 'LinkedIn link is hidden from the footer',
  },
]

async function* walk(dir) {
  let entries
  try {
    entries = await readdir(dir, { withFileTypes: true })
  } catch {
    return
  }

  for (const entry of entries) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue
      yield* walk(path)
    } else if (EXTENSIONS.test(entry.name)) {
      yield path
    }
  }
}

// 1. Content gaps.
const gaps = []
for await (const path of walk(join(ROOT, 'src'))) {
  const lines = (await readFile(path, 'utf8')).split('\n')
  lines.forEach((line, index) => {
    NEEDS_DATA.lastIndex = 0
    const match = NEEDS_DATA.exec(line)
    if (match) {
      gaps.push({ file: relative(ROOT, path).replaceAll('\\', '/'), line: index + 1, text: match[0] })
    }
  })
}

// 2. Degraded config.
const site = await readFile(join(ROOT, 'src/lib/site.ts'), 'utf8')
const degraded = DEGRADED.filter((item) => item.pattern.test(site))

if (gaps.length === 0 && degraded.length === 0) {
  console.log('\nEverything on the site is real. Nothing left to swap.\n')
  process.exit(0)
}

if (gaps.length > 0) {
  console.log(`\nContent gaps — these render visibly in the page (${gaps.length}):\n`)
  for (const gap of gaps) {
    console.log(`  ${gap.file}:${gap.line}`)
    console.log(`    ${gap.text}\n`)
  }
}

if (degraded.length > 0) {
  console.log(`\nStill placeholder — the site degrades gracefully, but is not at full strength:\n`)
  for (const item of degraded) {
    console.log(`  ${item.label}  (src/lib/site.ts)`)
    console.log(`    -> ${item.effect}\n`)
  }
}

process.exit(process.argv.includes('--ci') ? 1 : 0)
