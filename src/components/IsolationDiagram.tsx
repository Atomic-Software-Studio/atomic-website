/**
 * Original artwork replacing project_2.png.
 *
 * The old asset was a photograph of somebody else's multi-tenancy reference
 * architecture slide — borrowed, blurry, and not a picture of Atomic's system.
 * This draws the actual isolation model instead.
 *
 * Built in HTML rather than SVG on purpose: the labels are real text, so they
 * are selectable, translatable, screen-readable, and set in the site's own
 * type at the site's own scale. An SVG would have frozen all of that into
 * paths sized for one breakpoint.
 */

const TENANTS = [
  { name: 'Tenant A', channel: 'wa · +57 ···' },
  { name: 'Tenant B', channel: 'wa · +57 ···' },
  { name: 'Tenant C', channel: 'wa · +57 ···' },
] as const

const ISOLATED = ['workflows', 'credentials', 'data', 'failure domain'] as const

export default function IsolationDiagram() {
  return (
    <figure data-register="ink" className="w-full border border-ink-rule-strong p-6 md:p-8">
      <figcaption className="mb-8 border-b border-hairline pb-4 font-mono text-micro text-fg uppercase">
        isolation model
        <span className="text-fg-muted"> · one platform, separate walls</span>
      </figcaption>

      <div className="border border-hairline-strong p-4 md:p-6">
        <p className="mb-5 font-mono text-micro text-fg-muted uppercase">shared platform</p>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {TENANTS.map((tenant) => (
            <li key={tenant.name} className="border border-hairline-strong p-4">
              <p className="font-mono text-meta text-accent">{tenant.name}</p>
              <p className="mt-1 font-mono text-micro text-fg-muted">{tenant.channel}</p>

              <ul className="mt-4 flex flex-col gap-1.5 border-t border-hairline pt-3">
                {ISOLATED.map((item) => (
                  <li key={item} className="font-mono text-micro text-fg-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <p className="mt-5 border-t border-hairline pt-4 font-mono text-micro text-fg-muted uppercase">
          shared: the platform definition only. nothing else crosses a wall.
        </p>
      </div>
    </figure>
  )
}
