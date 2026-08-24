import Section from '@/components/primitives/Section'
import { contact } from '@/content/home'
import { hasRealWhatsapp, mailtoHref, site, whatsappHref } from '@/lib/site'

/**
 * Two links that provably work, in place of a form that did not.
 *
 * The previous form posted to console.log, so every message ever sent through
 * it was lost. For a studio that sells automation, a contact form that
 * silently drops messages is the worst possible thing to have on the page —
 * and two honest links outperform a form that merely looks more serious.
 */

export default function Contact() {
  return (
    <Section
      id="contact"
      index={contact.index}
      label={contact.label}
      annotations={
        <p className="font-mono text-micro text-fg-muted uppercase">
          {site.location.city} · {site.location.country}
        </p>
      }
    >
      <h3 className="max-w-headline text-display-l text-balance">{contact.heading}</h3>
      <p className="mt-6 max-w-prose font-prose text-prose text-fg-muted">{contact.intro}</p>

      {/* The WhatsApp route only appears once the number is real. Naming a
          channel the link does not actually reach would be the one dishonest
          thing on the page. */}
      <div className={`mt-14 grid grid-cols-1 gap-8 ${hasRealWhatsapp ? 'sm:grid-cols-2' : ''}`}>
        {hasRealWhatsapp && (
          <div className="border-t border-hairline-strong pt-6">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-baseline gap-3 font-display text-display-m"
            >
              <span className="link-draw">WhatsApp</span>
              <span aria-hidden="true" className="font-mono text-meta text-fg-muted">
                &rarr;
              </span>
            </a>
            <p className="mt-3 max-w-prose font-prose text-prose text-fg-muted">
              {contact.whatsappNote}
            </p>
          </div>
        )}

        <div className="border-t border-hairline-strong pt-6">
          <a
            href={mailtoHref}
            className="group inline-flex items-baseline gap-3 font-display text-display-m"
          >
            <span className="link-draw">Email</span>
            <span aria-hidden="true" className="font-mono text-meta text-fg-muted">
              &rarr;
            </span>
          </a>
          <p className="mt-3 max-w-prose font-prose text-prose text-fg-muted">
            {hasRealWhatsapp ? contact.emailNote : contact.emailOnlyNote}
          </p>
          <p className="mt-2 font-mono text-meta text-fg-muted">{site.contact.email}</p>
        </div>
      </div>

      <p className="mt-14 max-w-prose border-t border-hairline pt-6 font-prose text-prose text-fg-muted">
        {contact.founderNote}{' '}
        <a
          href={site.founder.url}
          target="_blank"
          rel="noopener noreferrer"
          className="link-solid text-accent"
        >
          More about {site.founder.name}
        </a>
        .
      </p>
    </Section>
  )
}
