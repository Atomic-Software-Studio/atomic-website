'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

/**
 * Scroll reveal: opacity plus a 6px rise, 200ms, once.
 *
 * Never repeating, never staggered into a wave — a page where everything
 * arrives on a delay reads as decoration rather than craft. Under
 * prefers-reduced-motion the element is simply present from the start.
 */

export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -12% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'none' : 'translateY(6px)',
        transition: `opacity 200ms var(--ease-out-quart) ${delay}ms, transform 200ms var(--ease-out-quart) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
