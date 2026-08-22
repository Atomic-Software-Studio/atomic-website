import Section from '@/components/primitives/Section'
import Reveal from '@/components/primitives/Reveal'
import { TagList } from '@/components/primitives/ui'
import { capabilities } from '@/content/home'

/**
 * A spec table, not four equal cards.
 *
 * The first row is set larger and given more room because the studio genuinely
 * leads with it. Four identical tiles would flatten that into a lie, and a
 * three-across icon grid is the single most templated shape on the web.
 * Hierarchy here is information, not styling.
 */

export default function Capabilities() {
  return (
    <Section
      id="capabilities"
      index={capabilities.index}
      label={capabilities.label}
      annotations={
        <p className="font-mono text-micro text-fg-muted uppercase">
          {capabilities.items.length} lines · most projects touch three
        </p>
      }
    >
      <h3 className="max-w-headline text-display-l text-balance">{capabilities.heading}</h3>
      <p className="mt-6 max-w-prose font-prose text-prose text-fg-muted">{capabilities.intro}</p>

      <ul className="mt-16">
        {capabilities.items.map((item, index) => (
          <li key={item.name} className="border-t border-hairline-strong">
            <Reveal delay={index * 40}>
              <div
                className={`grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-12 ${
                  item.lead ? 'py-10 md:py-14' : 'py-8 md:py-10'
                }`}
              >
                <h4
                  className={`lg:col-span-5 ${
                    item.lead ? 'text-display-m' : 'font-display text-prose-l font-semibold'
                  }`}
                >
                  {item.name}
                </h4>

                <div className="lg:col-span-7">
                  <p
                    className={`max-w-prose font-prose ${
                      item.lead ? 'text-prose-l text-fg' : 'text-prose text-fg-muted'
                    }`}
                  >
                    {item.body}
                  </p>
                  <div className="mt-5">
                    <TagList items={item.stack} label={`${item.name} stack`} />
                  </div>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
