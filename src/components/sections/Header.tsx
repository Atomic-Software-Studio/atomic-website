'use client'

import { useEffect, useState } from 'react'
import Logo from '@/components/brand/Logo'
import { whatsappHref } from '@/lib/site'

/**
 * Slim sticky bar on a solid ground.
 *
 * Deliberately not a blurred translucent panel — the whole visual system is
 * built on flat, opaque surfaces, and a frosted header would be the one piece
 * of glassmorphism on the site. A hairline appears once the page has moved,
 * which is the only state this component has.
 */

const NAV = [
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#work', label: 'Work' },
  { href: '#principles', label: 'How we work' },
  { href: '#contact', label: 'Contact' },
] as const

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close on Escape, and lock the page while the panel is open.
  useEffect(() => {
    if (!open) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      data-register="paper"
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-200 ${
        scrolled ? 'border-hairline-strong' : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4 md:px-8">
        <a href="#top" className="rounded-sharp" aria-label="Atomic Software Studio, back to top">
          <Logo className="text-lg" />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-draw font-mono text-micro text-fg-muted uppercase transition-colors hover:text-fg"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sharp bg-ink px-4 py-2 font-mono text-micro text-paper uppercase transition-colors hover:bg-signal-deep"
          >
            Start a conversation
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="rounded-sharp border border-hairline-strong px-3 py-2 font-mono text-micro uppercase md:hidden"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          data-register="paper"
          className="border-t border-hairline-strong md:hidden"
        >
          <nav aria-label="Primary" className="mx-auto max-w-6xl px-6 py-4">
            <ul className="flex flex-col">
              {NAV.map((item) => (
                <li key={item.href} className="border-b border-hairline">
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-mono text-meta uppercase"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 block rounded-sharp bg-ink px-4 py-3 text-center font-mono text-micro text-paper uppercase"
            >
              Start a conversation
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
