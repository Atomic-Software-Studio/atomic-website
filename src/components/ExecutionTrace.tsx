'use client'

import { useEffect, useState } from 'react'

/**
 * THE SIGNATURE ELEMENT.
 *
 * A studio whose product is systems that run unattended should not show you a
 * picture of a robot. It should show you the evidence that something executed
 * while nobody was in the room.
 *
 * Rules that keep this a record rather than a fake terminal:
 *   · no window chrome, no traffic lights, no $ prompt, no blinking cursor
 *   · set in the page's own type, at editorial scale, with real columns
 *   · every node name is real, read off the studio's actual n8n canvas
 *   · the elapsed column is withheld, not invented — see docs §7
 *
 * It runs once on mount and then rests. That is the entire motion budget for
 * the page, and it is spent proving the thesis. Under prefers-reduced-motion
 * it renders complete on the first frame.
 */

type Node = {
  name: string
  /** Shown beneath the node name on the widest breakpoint only. */
  detail?: string
}

/** Read directly from the appointment pipeline's n8n canvas. Nothing invented. */
const NODES: readonly Node[] = [
  { name: 'whatsapp.trigger', detail: 'inbound message' },
  { name: 'audio.download', detail: 'voice note' },
  { name: 'transcribe · whisper', detail: 'speech to text' },
  { name: 'normalize', detail: 'shape payload' },
  { name: 'fields_mapping', detail: 'resolve entities' },
  { name: 'agent.plan', detail: 'model + memory' },
  { name: 'tool · check_availability', detail: 'calendar read' },
  { name: 'tool · get_booking', detail: 'calendar write' },
  { name: 'whatsapp.reply', detail: 'confirmation sent' },
]

const STEP_MS = 130

export default function ExecutionTrace() {
  // Start complete, then rewind to 0 only if motion is welcome. This way the
  // server render and the no-JS render are both the finished state.
  const [step, setStep] = useState(NODES.length + 1)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    setStep(0)
    const timer = window.setInterval(() => {
      setStep((current) => {
        if (current > NODES.length) {
          window.clearInterval(timer)
          return current
        }
        return current + 1
      })
    }, STEP_MS)

    return () => window.clearInterval(timer)
  }, [])

  const finished = step > NODES.length

  return (
    <figure
      data-register="ink"
      className="w-full border border-ink-rule-strong p-4 sm:p-6 md:p-8"
    >
      <figcaption className="mb-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-hairline pb-4">
        <span className="font-mono text-micro text-fg uppercase">
          appointment pipeline
          <span className="text-fg-muted"> · representative run</span>
        </span>
        <span className="flex items-center gap-2 font-mono text-micro uppercase">
          <span
            aria-hidden="true"
            className={
              finished
                ? 'inline-block size-1.5 rounded-full bg-accent'
                : 'inline-block size-1.5 rounded-full bg-accent-flux motion-safe:animate-pulse-live'
            }
          />
          <span className={finished ? 'text-accent' : 'text-accent-flux'}>
            {finished ? 'completed' : 'running'}
          </span>
        </span>
      </figcaption>

      {/* A table, because it is tabular data. */}
      <table className="w-full border-collapse text-left font-mono">
        <caption className="sr-only">
          A representative execution trace of the appointment automation pipeline, listing each
          node in the order it runs.
        </caption>
        <thead>
          <tr className="text-micro text-fg-muted uppercase">
            <th scope="col" className="pb-3 font-medium">
              node
            </th>
            {/* An `elapsed` column lived here until launch, showing withheld
                values. Rather than fill it with plausible-looking latencies,
                it is removed until a real run is exported: the trace makes its
                argument from the node names and their order, and a column of
                invented numbers would weaken exactly the claim it decorates.
                Re-add it here and in each row when the figures are measured. */}
            <th scope="col" className="pb-3 pl-3 text-right font-medium sm:pl-6">
              status
            </th>
          </tr>
        </thead>
        <tbody>
          {NODES.map((node, index) => {
            const state = step > index + 1 ? 'ok' : step === index + 1 ? 'running' : 'pending'

            return (
              <tr
                key={node.name}
                className="border-t border-hairline align-baseline transition-opacity duration-200"
                style={{ opacity: state === 'pending' ? 0 : 1 }}
              >
                <th scope="row" className="py-2.5 pr-4 text-meta font-normal text-fg">
                  {node.name}
                  {node.detail && (
                    <span className="ml-2 hidden text-micro text-fg-muted lg:inline">
                      {node.detail}
                    </span>
                  )}
                </th>

                <td className="py-2.5 pl-3 text-right text-meta sm:pl-6">
                  <span
                    className={
                      state === 'ok'
                        ? 'text-accent'
                        : state === 'running'
                          ? 'text-accent-flux'
                          : 'text-fg-muted'
                    }
                  >
                    {state === 'ok' ? 'ok' : state === 'running' ? '···' : ''}
                  </span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <p className="mt-6 border-t border-hairline pt-4 font-mono text-micro text-fg-muted uppercase">
        node names and order read from the live workflow
      </p>
    </figure>
  )
}
