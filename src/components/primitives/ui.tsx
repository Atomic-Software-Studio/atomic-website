import type { ReactNode } from 'react'

/* ==========================================================================
   Small primitives. Every one of them assumes it may be rendered on either
   register and reads its colours from the contextual tokens rather than
   naming paper or ink directly.
   ========================================================================== */

/** Uppercase mono label. The connective tissue between machine surfaces. */
export function MetaLabel({
  children,
  className,
  as: Tag = 'span',
}: {
  children: ReactNode
  className?: string
  as?: 'span' | 'div' | 'h3' | 'dt'
}) {
  return (
    <Tag className={`font-mono text-meta text-fg-muted uppercase ${className ?? ''}`}>
      {children}
    </Tag>
  )
}

/**
 * A stack tag. Names a real tool, so it is set in mono and never abbreviated
 * or prettified — "n8n" stays lowercase, "Next.js" keeps its dot, "WhatsApp
 * Cloud API" stays long.
 *
 * Deliberately NOT uppercased: a text-transform would render n8n as "N8N" and
 * Next.js as "NEXT.JS", which is the site telling a small lie about the names
 * of other people's software. Tracking carries the mono texture instead.
 */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="border border-hairline-strong px-2 py-1 font-mono text-micro tracking-normal text-fg-muted">
      {children}
    </li>
  )
}

export function TagList({ items, label }: { items: readonly string[]; label?: string }) {
  return (
    <ul aria-label={label ?? 'Stack'} className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <Tag key={item}>{item}</Tag>
      ))}
    </ul>
  )
}

/**
 * The primary action. Square, no shadow, no lift — the border and ground
 * invert on hover and that is the entire interaction.
 */
export function ActionLink({
  href,
  children,
  variant = 'solid',
  external = false,
  className,
}: {
  href: string
  children: ReactNode
  variant?: 'solid' | 'outline'
  external?: boolean
  className?: string
}) {
  const base =
    'inline-flex items-center gap-2 rounded-sharp px-5 py-3 font-display text-ui font-medium transition-colors duration-150'

  const styles =
    variant === 'solid'
      ? 'bg-fg text-ground hover:bg-accent hover:text-ground'
      : 'border border-hairline-strong text-fg hover:border-accent hover:text-accent'

  return (
    <a
      href={href}
      className={`${base} ${styles} ${className ?? ''}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  )
}

/**
 * A visible gap where real data belongs.
 *
 * Placeholders are deliberately rendered rather than silently omitted: nothing
 * fabricated ever ships, and the gaps are impossible to forget before launch.
 * See docs/redesign-brief.md §7.
 */
export function NeedsData({ children }: { children: ReactNode }) {
  return (
    <span
      data-needs-real-data
      title="Placeholder — awaiting real data before launch"
      className="border border-dashed border-accent-flux px-1.5 py-0.5 font-mono text-micro text-accent-flux uppercase"
    >
      {children}
    </span>
  )
}

/**
 * The live indicator. The only looping animation on the site — it loops
 * because it means "still running".
 */
export function LiveDot({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block size-1.5 rounded-full bg-accent motion-safe:animate-pulse-live ${className ?? ''}`}
    />
  )
}

/** Full-width hairline. Structure, not decoration. */
export function Rule({ strong = false }: { strong?: boolean }) {
  return (
    <hr className={`border-0 border-t ${strong ? 'border-hairline-strong' : 'border-hairline'}`} />
  )
}
