import Logo from '@/components/brand/Logo'
import { footer } from '@/content/home'
import { site } from '@/lib/site'

/**
 * One of exactly two sanctioned placements for the gradient mark — the other
 * being none, currently. Keeping the full-colour logo rare is what stops the
 * gradient reading as a style the site is wearing, and keeps it reading as an
 * object the studio owns.
 */

const LINKS = [
  { href: site.social.github, label: 'GitHub' },
  { href: site.social.instagram, label: 'Instagram' },
  { href: site.social.linkedin, label: 'LinkedIn' },
] as const

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer data-register="ink" className="w-full border-t border-hairline-strong">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <Logo variant="color" className="text-2xl" />
            <p className="mt-6 max-w-prose font-prose text-prose text-fg-muted">
              {footer.closing}
            </p>
          </div>

          <div className="md:col-span-3">
            <h2 className="font-mono text-micro text-fg-muted uppercase">Elsewhere</h2>
            <ul className="mt-4 flex flex-col gap-2">
              {LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-draw font-mono text-meta text-fg-muted transition-colors hover:text-fg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h2 className="font-mono text-micro text-fg-muted uppercase">Contact</h2>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="link-draw font-mono text-meta text-fg-muted transition-colors hover:text-fg"
                >
                  {site.contact.email}
                </a>
              </li>
              <li className="font-mono text-meta text-fg-muted">
                {site.location.city}, {site.location.country}
              </li>
            </ul>
          </div>
        </div>

        {/* The trace motif, quietly, one last time. */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6">
          <p className="font-mono text-micro text-fg-muted uppercase">
            {site.name} · {year}
          </p>
          <p className="font-mono text-micro text-fg-muted uppercase">
            built by{' '}
            <a
              href={site.founder.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-draw transition-colors hover:text-fg"
            >
              {site.founder.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
