import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'

/**
 * Written in voice rather than as a shrug. An empty screen is an invitation to
 * act, and the error explains what happened without apologising for it.
 */

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" data-register="paper" className="w-full py-32 md:py-44">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
          <div className="grid grid-cols-1 gap-x-8 md:grid-cols-12">
            <div className="mb-8 md:col-span-3 md:mb-0">
              <p className="font-mono text-micro text-fg-muted uppercase">404 · no route</p>
            </div>

            <div className="md:col-span-9">
              <h1 className="max-w-headline text-display-l text-balance">
                This page never made it to production.
              </h1>
              <p className="mt-6 max-w-prose font-prose text-prose text-fg-muted">
                The address does not match anything we serve. It was probably renamed, or the link
                that brought you here was typed by hand.
              </p>

              <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
                <li>
                  <Link href="/" className="link-solid font-mono text-meta text-accent uppercase">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#work" className="link-solid font-mono text-meta text-accent uppercase">
                    Selected work
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="link-solid font-mono text-meta text-accent uppercase"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
