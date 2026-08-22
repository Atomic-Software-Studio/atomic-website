#!/usr/bin/env node
/**
 * Lists every deliberate placeholder still in the source tree.
 *
 * Placeholders are visible by policy rather than hidden (docs §7), which means
 * they are easy to ship by accident. This makes them impossible to miss:
 * run it before any launch and the exit code tells you whether the site is
 * still carrying gaps.
 *
 *   npm run check:placeholders          list them, exit 0
 *   npm run check:placeholders -- --ci  list them, exit 1 if any remain
 */

import { readdir, readFile } from 'node:fs/promises'
import { join, relative } from 'node:path'

const ROOT = process.cwd()
const SEARCH_DIRS = ['src']
const EXTENSIONS = /\.(tsx?|jsx?|mdx?|css)$/
const PATTERNS = [/NEEDS REAL DATA[^\]]*/gi, /PLACEHOLDER/g]

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

const findings = []

for (const dir of SEARCH_DIRS) {
  for await (const path of walk(join(ROOT, dir))) {
    const contents = await readFile(path, 'utf8')
    const lines = contents.split('\n')

    lines.forEach((line, index) => {
      for (const pattern of PATTERNS) {
        pattern.lastIndex = 0
        if (pattern.test(line)) {
          findings.push({
            file: relative(ROOT, path).replaceAll('\\', '/'),
            line: index + 1,
            text: line.trim().slice(0, 100),
          })
          break
        }
      }
    })
  }
}

if (findings.length === 0) {
  console.log('No placeholders remaining. Ready to launch.')
  process.exit(0)
}

console.log(`\n${findings.length} placeholder${findings.length === 1 ? '' : 's'} still in the tree:\n`)
for (const { file, line, text } of findings) {
  console.log(`  ${file}:${line}`)
  console.log(`    ${text}\n`)
}

process.exit(process.argv.includes('--ci') ? 1 : 0)
