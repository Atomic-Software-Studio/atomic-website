import Image from 'next/image'
import Link from 'next/link'
import Section from '@/components/primitives/Section'
import Reveal from '@/components/primitives/Reveal'
import { NeedsData, TagList } from '@/components/primitives/ui'
import { work } from '@/content/home'

/**
 * Two case studies, told editorially rather than as tiles.
 *
 * Only the first carries an image, because only the first has a real one — a
 * photograph of the actual n8n canvas. The second study's original imagery is
 * a diagram on its own page; padding this section with a stock substitute
 * would undo the point of the whole redesign.
 */

export default function Work() {
  return (
    <Section
      id="work"
      index={work.index}
      label={work.label}
      annotations={
        <p className="font-mono text-micro text-fg-muted uppercase">
          both deployed · both handling unscheduled traffic
        </p>
      }
    >
      <h3 className="max-w-headline text-display-l text-balance">{work.heading}</h3>
      <p className="mt-6 max-w-prose font-prose text-prose text-fg-muted">{work.intro}</p>

      <div className="mt-16 flex flex-col gap-20 md:gap-28">
        {work.items.map((item, index) => (
          <Reveal key={item.slug}>
            <article className="border-t border-hairline-strong pt-8">
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <h4 className="text-display-m">{item.name}</h4>
                <span className="font-mono text-micro text-fg-muted uppercase tabular-nums">
                  {String(index + 1).padStart(2, '0')} / {String(work.items.length).padStart(2, '0')}
                </span>
              </div>

              <p className="mt-4 max-w-prose font-prose text-prose-l text-fg">{item.summary}</p>
              <p className="mt-4 max-w-prose font-prose text-prose text-fg-muted">{item.body}</p>

              {/* A plate, not a hero image. The source photograph is a screen
                  full of violet-and-blue editor chrome, which is precisely the
                  palette this redesign exists to get away from — so it is
                  desaturated to sit inside the system and captioned so it
                  reads as evidence rather than decoration. No hover
                  colour-reveal: the treatment is a decision, not a trick. */}
              {index === 0 && (
                <figure className="mt-10">
                  <div className="border border-hairline-strong">
                    <Image
                      src="/projects/project_1.png"
                      alt="The appointment pipeline open on an n8n canvas: a WhatsApp trigger feeding audio download, an OpenAI transcription node, a normalize step, and an AI agent wired to calendar tools."
                      width={1143}
                      height={714}
                      sizes="(min-width: 1024px) 640px, 100vw"
                      className="w-full [filter:saturate(0.3)_contrast(1.05)]"
                    />
                  </div>
                  <figcaption className="mt-3 font-mono text-micro text-fg-muted uppercase">
                    The pipeline on its n8n canvas
                  </figcaption>
                </figure>
              )}

              <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <dt className="font-mono text-micro text-fg-muted uppercase">Stack</dt>
                  <dd className="mt-3">
                    <TagList items={item.stack} label={`${item.name} stack`} />
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-micro text-fg-muted uppercase">
                    {item.outcomeLabel}
                  </dt>
                  <dd className="mt-3">
                    <NeedsData>{item.outcome}</NeedsData>
                  </dd>
                </div>
              </dl>

              <Link
                href={`/work/${item.slug}`}
                className="link-solid mt-10 inline-block font-display text-ui font-medium text-accent"
              >
                Read the case study
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
