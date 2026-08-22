/**
 * The Atomic mark, redrawn as vector.
 *
 * Replaces logo_icono.png (753KB) with ~1KB of geometry. The construction is
 * unchanged from the original — nucleus, three elliptical orbits, a broken
 * outer ring, two electrons — but the orbits are now regular (60° apart on a
 * shared -12° tilt) and the nucleus has lost its raster glow, which could not
 * scale.
 *
 * Monochrome by default and drawn in currentColor, so one file works on paper
 * and on ink. The cyan→green gradient survives only via `variant="color"`,
 * used at exactly two placements site-wide. See docs/redesign-brief.md §5.
 */

type AtomicMarkProps = {
  variant?: 'mono' | 'color'
  className?: string
  /** Set when the mark stands alone as a link or heading; omit when a sibling wordmark already names the studio. */
  title?: string
}

export default function AtomicMark({ variant = 'mono', className, title }: AtomicMarkProps) {
  const gradientId = 'atomic-mark-gradient'
  const stroke = variant === 'color' ? `url(#${gradientId})` : 'currentColor'

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {variant === 'color' && (
        <defs>
          <linearGradient id={gradientId} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#12BEF5" />
            <stop offset="100%" stopColor="#7CF3A0" />
          </linearGradient>
        </defs>
      )}

      <g stroke={stroke} strokeWidth="3.5" strokeLinecap="round">
        {/* Outer shell, open at the bottom. */}
        <path d="M37.84 95.4 A47 47 0 1 1 62.16 95.4" />

        {/* Three orbits, 60° apart, sharing a -12° tilt. */}
        <g transform="rotate(-12 50 50)">
          <ellipse cx="50" cy="50" rx="38" ry="14.5" />
          <ellipse cx="50" cy="50" rx="38" ry="14.5" transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="50" rx="38" ry="14.5" transform="rotate(120 50 50)" />

          {/* Electrons, sitting on the untilted orbit. */}
          <circle cx="12.8" cy="53" r="4.2" fill={stroke} stroke="none" />
          <circle cx="86.7" cy="46.25" r="4.2" fill={stroke} stroke="none" />
        </g>

        {/* Nucleus. */}
        <circle cx="50" cy="50" r="9" fill={stroke} stroke="none" />
      </g>
    </svg>
  )
}
