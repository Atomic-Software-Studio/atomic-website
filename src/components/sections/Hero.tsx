import ExecutionTrace from '@/components/ExecutionTrace'
import { hero } from '@/content/home'
import { mailtoHref, whatsappHref } from '@/lib/site'

/**
 * The thesis, then the proof — with the register flip happening inside the
 * first screen. The studio states the claim on paper; the machine reports on
 * ink directly beneath it. That adjacency is the whole argument of the page,
 * and it is why the trace is not buried further down.
 */

export default function Hero() {
  return (
    <section id="top" data-register="paper" className="w-full pt-16 pb-0 md:pt-24">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="grid grid-cols-1 gap-x-8 md:grid-cols-12">
          {/* Two deliberate lines rather than one that wraps wherever the
              gutter runs out. No status dot here: the accent colours report
              system state, and a location is not a state. */}
          <div className="mb-8 md:col-span-3 md:mb-0">
            <p className="font-mono text-micro text-fg-muted uppercase">
              {hero.eyebrow.role}
              <br />
              {hero.eyebrow.place}
            </p>
          </div>

          <div className="md:col-span-9">
            <h1 className="max-w-headline text-display-xl text-balance">{hero.headline}</h1>

            <p className="mt-8 max-w-prose font-prose text-prose-l text-fg-muted">
              {hero.standfirst}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sharp bg-ink px-6 py-3.5 font-display text-ui font-medium text-paper transition-colors hover:bg-signal-deep"
              >
                {hero.primaryCta}
              </a>
              <a
                href={mailtoHref}
                className="link-draw font-mono text-meta text-fg-muted uppercase transition-colors hover:text-fg"
              >
                {hero.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Full bleed. The document opens up and shows you the machine. */}
      <div className="mt-20 md:mt-28">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
          <ExecutionTrace />
        </div>
      </div>
    </section>
  )
}
