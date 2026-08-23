# Atomic Software Studio

The studio site — [atomicstudio.dev](https://atomicstudio.dev).

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 4.

```bash
npm install
npm run dev          # http://localhost:3000
```

| Script | What it does |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (flat config) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run check:placeholders` | Lists every deliberate placeholder still in `src/`. Add `-- --ci` to fail when any remain. |

> **Do not run `build` while `dev` is running.** They share `.next/` and will clobber each other.

---

## Before launch

The site ships with **visible** placeholders rather than invented content. Run:

```bash
npm run check:placeholders
```

Everything it lists needs a real value. The two config placeholders live in `src/lib/site.ts`:

- `contact.whatsappNumber` — currently `3000000000`
- `social.linkedin` — currently the generic `linkedin.com`

The rest are `[NEEDS REAL DATA: …]` slots that render in the page, so they cannot be forgotten.

The design rationale for shipping gaps visibly rather than hiding them is in
[`docs/redesign-brief.md`](docs/redesign-brief.md) §7.

---

## How the design system works

The full rationale is in [`docs/redesign-brief.md`](docs/redesign-brief.md). The two things worth
knowing before editing anything:

### 1. Two registers, and they mean something

The site has a **paper** register and an **ink** register. Paper is where the studio speaks. Ink is
where the machine reports — traces, diagrams, stack inventory. The flip is never decorative.

It is implemented as a mechanism, not a convention. Put `data-register="ink"` on any element and
every contextual token beneath it re-points, including the focus ring:

```tsx
<section data-register="ink">
  <p className="text-fg">…</p>        {/* paper-coloured text on ink */}
  <hr className="border-hairline" />   {/* the ink hairline */}
  <span className="text-accent">ok</span>  {/* the bright teal */}
</section>
```

Use the contextual utilities — `bg-ground`, `text-fg`, `text-fg-muted`, `border-hairline`,
`border-hairline-strong`, `text-accent`, `text-accent-flux` — rather than naming `paper` or `ink`
directly. Components written that way work on either ground with no branching.

### 2. Colour is semantic

There are no decorative colours. Teal (`--signal` / `--signal-deep`) means *done, live, succeeded*.
Amber (`--flux` / `--flux-deep`) means *in flight, needs attention*. If a colour cannot answer
"what state is this reporting?", it does not belong.

There are **no gradients** anywhere except the logo itself — the footer lockup and the generated OG
images. Keeping it rare is what makes it read as an object the studio owns rather than a style the
site wears.

### Other rules that are easy to break by accident

- **Hairlines come in two weights.** `--rule` / `--ink-rule` are decorative and deliberately below
  3:1. Anything a user must actually perceive uses `-strong`, which clears 3:1.
- **Stack tags are never uppercased.** A `text-transform` renders `n8n` as `N8N` and `Next.js` as
  `NEXT.JS`, which misspells other people's software.
- **Numbering means sequence.** The case-study pipelines are numbered because they genuinely are
  ordered. Capabilities and principles are not sequences and are not numbered.
- **One looping animation exists** — the live dot, because it means "still running".

---

## Layout

```
src/
  app/
    page.tsx                    home
    work/[slug]/page.tsx        case studies (SSG)
    not-found.tsx               404
    opengraph-image.tsx         generated link preview
    icon.png / apple-icon.png   favicon and touch icon
    _fonts/                     TTFs for OG generation only — never served
    globals.css                 all design tokens
  components/
    brand/                      Logo
    primitives/                 Section, Reveal, ui.tsx
    sections/                   the page sections
    ExecutionTrace.tsx          the signature element
    IsolationDiagram.tsx        original case-study artwork
  content/                      all copy, separate from layout
  lib/site.ts                   identity, contact, links
```

Copy lives in `src/content/` and never inline in components, so wording can be changed without
touching layout.

## Brand assets

The logo is the studio's own artwork, never a reconstruction. Variant is chosen by the **ground it
sits on**, not by preference:

| Asset | Used by |
|---|---|
| `public/brand/atomic-lockup-dark.png` | header — the paper register |
| `public/brand/atomic-lockup-color.png` | footer — the ink register, and inlined into every generated OG image |
| `src/app/icon.png` · `src/app/apple-icon.png` | favicon and touch icon — the mark on an ink ground |

Render it through `<Logo variant="dark" | "color" />`, which passes the intrinsic 1906×803 through
to `next/image` so the box is reserved (no layout shift) and a resized AVIF/WebP is served rather
than the source PNG. Set display size in CSS via `className`, not by editing the component.

**Adding the logo to a new dark surface needs a variant, not a class.** Raster artwork can't inherit
`currentColor`. `brand-source/atomic-lockup-light.png` is a light-grey version held in reserve for
exactly that case; the colour lockup is the better choice on ink unless the gradient is already in
use nearby.

Everything supplied by the studio lives in `brand-source/` as the source of record. The legacy
`logo_*.png` files in `public/` are kept deliberately — they may be linked externally — but nothing
on the site loads them.

## Fonts

Archivo (display/UI), Newsreader (prose), IBM Plex Mono (machine surfaces) — self-hosted through
`next/font`, so there is no render-blocking request to Google and no layout shift.

The two TTFs in `src/app/_fonts/` are used only to render OG images at build time and are never
sent to a browser. Archivo is SIL Open Font License 1.1.
