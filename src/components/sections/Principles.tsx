import Section from '@/components/primitives/Section'
import Reveal from '@/components/primitives/Reveal'
import { principles } from '@/content/home'

/**
 * Deliberately not numbered.
 *
 * These four are simultaneous commitments, not steps in a process, so an
 * 01/02/03 rail would be pure decoration — it would imply an order that does
 * not exist. The two case-study pipelines *are* sequences and those are
 * numbered; this is not, and it isn't.
 *
 * Differentiated from Capabilities by texture rather than register: no stack
 * tags, larger serif, more air. Same paper ground, different rhythm.
 */

export default function Principles() {
  return (
    <Section
      id="principles"
      index={principles.index}
      label={principles.label}
      annotations={
        <p className="font-mono text-micro text-fg-muted uppercase">
          not preferences · each one costs something to hold
        </p>
      }
    >
      <h3 className="max-w-headline text-display-l text-balance">{principles.heading}</h3>
      <p className="mt-6 max-w-prose font-prose text-prose text-fg-muted">{principles.intro}</p>

      <ul className="mt-16 grid grid-cols-1 gap-x-12 gap-y-14 sm:grid-cols-2">
        {principles.items.map((item, index) => (
          <li key={item.name}>
            <Reveal delay={index * 40}>
              <h4 className="border-t border-hairline-strong pt-5 font-display text-prose-l font-semibold">
                {item.name}
              </h4>
              <p className="mt-4 font-prose text-prose text-fg-muted">{item.body}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
