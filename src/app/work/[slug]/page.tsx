import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import ExecutionTrace from '@/components/ExecutionTrace'
import IsolationDiagram from '@/components/IsolationDiagram'
import { TagList } from '@/components/primitives/ui'
import { caseStudies, caseStudyList } from '@/content/case-studies'

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return caseStudyList.map((study) => ({ slug: study.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const study = caseStudies[slug]
  if (!study) return {}

  return {
    title: study.name,
    description: study.summary,
    openGraph: { title: study.name, description: study.summary },
    alternates: { canonical: `/work/${study.slug}` },
  }
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params
  const study = caseStudies[slug]

  if (!study) notFound()

  return (
    <>
      <Header />
      <main id="main">
        <article>
          {/* Title block */}
          <section data-register="paper" className="w-full pt-16 pb-20 md:pt-24 md:pb-28">
            <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
              <div className="grid grid-cols-1 gap-x-8 md:grid-cols-12">
                <div className="mb-8 md:col-span-3 md:mb-0">
                  <Link
                    href="/#work"
                    className="link-draw font-mono text-micro text-fg-muted uppercase transition-colors hover:text-fg"
                  >
                    &larr; Selected work
                  </Link>
                </div>

                <div className="md:col-span-9">
                  <h1 className="max-w-headline text-display-xl text-balance">{study.name}</h1>
                  <p className="mt-8 max-w-prose font-prose text-prose-l text-fg-muted">
                    {study.summary}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* The artifact, straight after the title — same argument as the home hero. */}
          <section data-register="paper" className="w-full pb-24 md:pb-32">
            <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
              {study.slug === 'appointment-automation' ? <ExecutionTrace /> : <IsolationDiagram />}
            </div>
          </section>

          {/* Problem */}
          <section data-register="paper" className="w-full pb-24 md:pb-32">
            <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
              <div className="grid grid-cols-1 gap-x-8 md:grid-cols-12">
                <div className="mb-8 md:col-span-3 md:mb-0">
                  <h2 className="font-mono text-micro text-fg-muted uppercase">The problem</h2>
                </div>
                <div className="md:col-span-9 lg:col-span-8">
                  {study.problem.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 32)}
                      className="mb-6 max-w-prose font-prose text-prose text-fg last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Approach — genuinely sequential, so it is genuinely numbered. */}
          <section data-register="paper" className="w-full pb-24 md:pb-32">
            <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
              <div className="grid grid-cols-1 gap-x-8 md:grid-cols-12">
                <div className="mb-8 md:col-span-3 md:mb-0">
                  <h2 className="font-mono text-micro text-fg-muted uppercase">
                    {study.sequenceLabel}
                  </h2>
                </div>

                <div className="md:col-span-9 lg:col-span-8">
                  <ol className="flex flex-col">
                    {study.approach.map((step, index) => (
                      <li
                        key={step.name}
                        className="grid grid-cols-[auto_1fr] gap-x-6 border-t border-hairline-strong py-8"
                      >
                        <span
                          aria-hidden="true"
                          className="font-mono text-micro text-fg-muted tabular-nums"
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <h3 className="font-display text-prose-l font-semibold">{step.name}</h3>
                          <p className="mt-3 max-w-prose font-prose text-prose text-fg-muted">
                            {step.body}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* What it handles + stack, on ink: this is machine inventory. */}
          <section data-register="ink" className="w-full py-24 md:py-32">
            <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
              <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
                <div className="md:col-span-3">
                  <h2 className="font-mono text-micro text-fg-muted uppercase">What it handles</h2>
                </div>

                <div className="md:col-span-5">
                  <ul className="flex flex-col">
                    {study.handles.map((item) => (
                      <li
                        key={item}
                        className="border-t border-hairline py-3 font-mono text-meta text-fg"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-4">
                  <h2 className="font-mono text-micro text-fg-muted uppercase">Stack</h2>
                  <div className="mt-4 flex flex-col gap-5">
                    {study.stack.map((group) => (
                      <div key={group.group}>
                        <h3 className="mb-2 font-mono text-micro text-fg-muted uppercase">
                          {group.group}
                        </h3>
                        <TagList items={group.items} label={`${group.group} stack`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-16 border-t border-hairline-strong pt-8">
                <h2 className="font-mono text-micro text-fg-muted uppercase">Outcome</h2>
                <p className="mt-4 max-w-prose font-prose text-prose-l text-fg">{study.outcome}</p>

                {/* Renders nothing until measured figures exist, so the first
                    number added is a content change and not a layout change. */}
                {study.metrics.length > 0 && (
                  <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
                    {study.metrics.map((metric) => (
                      <div key={metric.label}>
                        <dt className="sr-only">{metric.label}</dt>
                        <dd className="font-display text-display-m text-accent tabular-nums">
                          {metric.value}
                        </dd>
                        <p aria-hidden="true" className="mt-2 font-mono text-micro text-fg-muted uppercase">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </dl>
                )}
              </div>
            </div>
          </section>

          {/* Next */}
          <section data-register="paper" className="w-full py-20 md:py-28">
            <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
              <div className="border-t border-hairline-strong pt-8">
                <p className="font-mono text-micro text-fg-muted uppercase">Next case study</p>
                <Link
                  href={`/work/${study.next.slug}`}
                  className="link-draw mt-4 inline-block text-display-m"
                >
                  {study.next.name}
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}
