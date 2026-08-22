import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import type { ReactElement } from 'react'
import { site } from '@/lib/site'

/**
 * Shared frame for every generated link preview, so the home page and each
 * case study share one layout instead of drifting apart.
 *
 * Archivo is read from disk rather than fetched: the link preview is the
 * most-shared brand asset there is, so it should be set in the actual display
 * face, and a build should not depend on a network call to produce it. The
 * TTFs in src/app/_fonts are build-time only — they are never served to a
 * browser, which gets woff2 subsets from next/font. Archivo is SIL OFL 1.1.
 */

export const OG_SIZE = { width: 1200, height: 630 }
export const OG_CONTENT_TYPE = 'image/png'

const DESCRIPTOR = 'SOFTWARE STUDIO'

export async function loadOgFonts() {
  const [bold, regular] = await Promise.all([
    readFile(join(process.cwd(), 'src/app/_fonts/Archivo-Bold.ttf')),
    readFile(join(process.cwd(), 'src/app/_fonts/Archivo-Regular.ttf')),
  ])

  return [
    { name: 'Archivo', data: bold, weight: 700 as const, style: 'normal' as const },
    { name: 'Archivo', data: regular, weight: 400 as const, style: 'normal' as const },
  ]
}

export function OgFrame({
  kicker,
  title,
  titleSize = 78,
}: {
  kicker?: string
  title: string
  titleSize?: number
}): ReactElement {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#0C1113',
        color: '#EDEEE9',
        padding: '72px',
        fontFamily: 'Archivo',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        {/* The mark, inline so no asset fetch is needed at build. */}
        <svg width="76" height="76" viewBox="0 0 100 100" fill="none">
          <g stroke="#3FE0CE" strokeWidth="3.5" strokeLinecap="round">
            <path d="M37.84 95.4 A47 47 0 1 1 62.16 95.4" />
            <g transform="rotate(-12 50 50)">
              <ellipse cx="50" cy="50" rx="38" ry="14.5" />
              <ellipse cx="50" cy="50" rx="38" ry="14.5" transform="rotate(60 50 50)" />
              <ellipse cx="50" cy="50" rx="38" ry="14.5" transform="rotate(120 50 50)" />
              <circle cx="12.8" cy="53" r="4.2" fill="#3FE0CE" stroke="none" />
              <circle cx="86.7" cy="46.25" r="4.2" fill="#3FE0CE" stroke="none" />
            </g>
            <circle cx="50" cy="50" r="9" fill="#3FE0CE" stroke="none" />
          </g>
        </svg>

        {/* The width match, rebuilt for a layout engine with no
            text-align-last: the column shrinks to ATOMIC, and the descriptor
            spreads its letters across exactly that width. */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <span style={{ fontSize: 38, fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1 }}>
            ATOMIC
          </span>
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              fontSize: 13,
              color: '#9BA5A8',
              marginTop: 6,
            }}
          >
            {/* space-between distributes evenly between every child, so a
                plain space collapses into the letter rhythm. Two nbsp keep
                the word gap visibly wider than the letter gap. */}
            {[...DESCRIPTOR].map((char, index) => (
              <span key={`${char}-${index}`}>{char === ' ' ? '  ' : char}</span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {kicker && (
          <div style={{ fontSize: 20, color: '#3FE0CE', marginBottom: 20, letterSpacing: '0.1em' }}>
            {kicker.toUpperCase()}
          </div>
        )}
        <div
          style={{
            fontSize: titleSize,
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: '-0.03em',
            maxWidth: 940,
          }}
        >
          {title}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 19,
          color: '#9BA5A8',
          borderTop: '1px solid #243033',
          paddingTop: '24px',
        }}
      >
        <span>
          {site.location.city}, {site.location.country}
        </span>
        <span>{site.domain}</span>
      </div>
    </div>
  )
}
