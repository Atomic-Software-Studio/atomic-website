import Image from 'next/image'
import Section from '@/components/primitives/Section'
import Reveal from '@/components/primitives/Reveal'
import { stack } from '@/content/home'

/**
 * On the ink register, because a stack list is machine inventory rather than
 * the studio talking — the same category of surface as the trace.
 *
 * The client block is built as a list that happens to have one entry. No
 * carousel, no arrows, no pagination dots for a single logo: the previous
 * site's controls advertised an emptiness that was never there. Adding the
 * second and third client is a data change, not a redesign.
 */

export default function StackAndClients() {
  return (
    <Section
      id="stack"
      index={stack.index}
      label={stack.label}
      register="ink"
      annotations={
        <p className="font-mono text-micro text-fg-muted uppercase">
          in production · not aspirational
        </p>
      }
    >
      <h3 className="max-w-headline text-display-l text-balance">{stack.heading}</h3>
      <p className="mt-6 max-w-prose font-prose text-prose text-fg-muted">{stack.intro}</p>

      <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
        {stack.groups.map((group, index) => (
          <Reveal key={group.name} delay={index * 40}>
            <h4 className="border-t border-hairline-strong pt-4 font-mono text-micro text-fg-muted uppercase">
              {group.name}
            </h4>
            <ul className="mt-4 flex flex-col gap-2">
              {group.items.map((item) => (
                <li key={item} className="font-mono text-meta text-fg">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <div className="mt-20 border-t border-hairline-strong pt-8">
        <h4 className="font-mono text-micro text-fg-muted uppercase">{stack.clientsLabel}</h4>
        <ul className="mt-6 flex flex-wrap items-center gap-10">
          {stack.clients.map((client) => (
            <li key={client.name}>
              <Image
                src={client.logo}
                alt={client.name}
                width={200}
                height={64}
                sizes="200px"
                className="h-12 w-auto object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
