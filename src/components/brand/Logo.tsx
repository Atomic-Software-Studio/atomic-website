import Image from 'next/image'

/**
 * The real lockup, as supplied by the studio.
 *
 * This replaces an earlier SVG redraw of the mark. The redraw was close but
 * not right — the orbit geometry, the break in the outer ring, the stroke
 * weights and the weight contrast between "software" and "studio" were all
 * subtly off, and those are exactly the things a logo cannot be approximately
 * correct about. The artwork now ships as the studio's own files.
 *
 * Variant is chosen by the ground it sits on, not by preference:
 *   dark  — near-black artwork, for the paper register
 *   color — the cyan-to-green gradient, for the ink register
 *
 * The gradient stays rare on purpose (docs §3): it appears at one placement so
 * it reads as an object the studio owns rather than a style the site wears.
 *
 * Intrinsic dimensions are passed through exactly so Next reserves the correct
 * box (no layout shift) and serves a resized AVIF/WebP rather than the source
 * PNG. Display size is set by the caller in CSS, so it can be responsive.
 */

const LOCKUP = {
  width: 1906,
  height: 803,
  src: {
    dark: '/brand/atomic-lockup-dark.png',
    color: '/brand/atomic-lockup-color.png',
  },
} as const

type LogoProps = {
  /** Match this to the register the logo sits on. */
  variant: 'dark' | 'color'
  /** Height utilities, e.g. "h-9 sm:h-11". Width is always auto. */
  className?: string
  /** Widest rendered width in CSS px, so Next picks a sensible source. */
  maxWidth: number
  priority?: boolean
}

export default function Logo({ variant, className, maxWidth, priority = false }: LogoProps) {
  return (
    <Image
      src={LOCKUP.src[variant]}
      alt="Atomic Software Studio"
      width={LOCKUP.width}
      height={LOCKUP.height}
      sizes={`${maxWidth}px`}
      priority={priority}
      className={`w-auto ${className ?? ''}`}
    />
  )
}
