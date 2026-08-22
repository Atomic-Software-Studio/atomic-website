import type { ReactNode } from 'react'

/**
 * The page's structural unit: a 12-column grid where columns 1–3 are a meta
 * gutter and 4–10 carry the content.
 *
 * The gutter is not decoration. It carries the section index, the section
 * name, and — where relevant — the stack in play or a live status. It is the
 * margin annotation of a technical document, and repeating it down the page is
 * what makes the site read as one artifact rather than a stack of blocks.
 *
 * On mobile the gutter collapses above the content, where it reads as an
 * eyebrow. Same information, same order, no duplication.
 */

type SectionProps = {
  id?: string
  /** Two-digit index shown in the gutter. */
  index?: string
  /** Section name shown in the gutter. */
  label?: string
  /** Extra gutter annotations — stack in play, counts, status. */
  annotations?: ReactNode
  /** Which register this section renders in. Flips every contextual token. */
  register?: 'paper' | 'ink'
  /** Removes the default vertical rhythm, for sections that manage their own. */
  flush?: boolean
  className?: string
  children: ReactNode
}

export default function Section({
  id,
  index,
  label,
  annotations,
  register = 'paper',
  flush = false,
  className,
  children,
}: SectionProps) {
  const hasGutter = Boolean(index || label || annotations)

  return (
    <section
      id={id}
      data-register={register}
      className={`w-full ${flush ? '' : 'py-24 md:py-32 lg:py-40'} ${className ?? ''}`}
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="grid grid-cols-1 gap-x-8 md:grid-cols-12">
          {hasGutter && (
            <div className="mb-8 md:col-span-3 md:mb-0">
              <div className="flex flex-row items-baseline gap-3 md:flex-col md:gap-2">
                {index && (
                  <span className="font-mono text-micro text-fg-muted tabular-nums">{index}</span>
                )}
                {label && (
                  <h2 className="font-mono text-micro text-fg-muted uppercase">{label}</h2>
                )}
              </div>
              {annotations && (
                <div className="mt-6 hidden border-t border-hairline pt-4 md:block">
                  {annotations}
                </div>
              )}
            </div>
          )}

          <div className={hasGutter ? 'md:col-span-9 lg:col-span-8' : 'md:col-span-12'}>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
