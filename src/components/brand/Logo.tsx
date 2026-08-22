import AtomicMark from './AtomicMark'

/**
 * The lockup: mark + width-matched wordmark.
 *
 * The one structural idea worth keeping from the original identity is that
 * ATOMIC and the descriptor below it are set to the same optical width. In the
 * old PNG that match was baked in by hand at one fixed size. Here it is a
 * mechanism: the flex column takes its width from the wider line (ATOMIC), and
 * the descriptor uses text-align-last:justify to spread to exactly that width.
 * It stays matched at every size, in every weight, forever.
 *
 * The wordmark is real text rather than an image — selectable, translatable,
 * readable by a screen reader, and ~160KB lighter than logo_nombre.png.
 */

type LogoProps = {
  /** `color` uses the gradient mark. Reserved for the two largest placements. */
  variant?: 'mono' | 'color'
  /** Hides the wordmark, leaving only the mark. */
  markOnly?: boolean
  className?: string
}

export default function Logo({ variant = 'mono', markOnly = false, className }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ''}`}>
      <AtomicMark variant={variant} className="h-[1.9em] w-[1.9em] shrink-0" />

      {markOnly ? (
        <span className="sr-only">Atomic Software Studio</span>
      ) : (
        <span aria-hidden="true" className="inline-flex flex-col leading-none">
          <span className="font-display text-[1em] leading-[0.9] font-bold tracking-[-0.015em]">
            ATOMIC
          </span>
          <span
            className="font-mono text-[0.375em] leading-none uppercase"
            style={{ textAlignLast: 'justify' }}
          >
            software studio
          </span>
        </span>
      )}

      {!markOnly && <span className="sr-only">Atomic Software Studio</span>}
    </span>
  )
}
