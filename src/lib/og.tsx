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

/** Intrinsic size of the supplied lockup artwork. */
const LOCKUP_ASPECT = 1906 / 803

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

/**
 * The real lockup, inlined as a data URI.
 *
 * Satori cannot resolve a relative path, and a build should not make a network
 * call to render its own link preview — so the file is read from disk and
 * embedded. It costs nothing at runtime: this all happens once, at build, and
 * the output is a flat PNG.
 */
export async function loadOgLockup() {
  const file = await readFile(join(process.cwd(), 'public/brand/atomic-lockup-color.png'))
  return `data:image/png;base64,${file.toString('base64')}`
}

export function OgFrame({
  kicker,
  title,
  lockup,
  titleSize = 78,
}: {
  kicker?: string
  title: string
  /** Data URI from loadOgLockup(). */
  lockup: string
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
      {/* The studio's own lockup, not a reconstruction of it. */}
      <div style={{ display: 'flex' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={lockup}
          alt="Atomic Software Studio"
          width={Math.round(108 * LOCKUP_ASPECT)}
          height={108}
        />
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
