# Atomic Software Studio — Redesign Brief

**Status:** Phase 1 deliverable — awaiting sign-off before implementation.
**Date:** 2026-08-22
**Branch:** `redesign/brand-strategy` → `redesign/full-rebrand`

---

## 0. What the audit turned up

Before any strategy, the facts the redesign is built on. Everything below is from the repo, not invented.

**Real service lines:** AI chatbots & automation · web development · integrations & APIs · cloud.

**Real case study #1 — Appointment Workflow Automation.** The screenshot in `public/projects/project_1.png` is an actual n8n canvas. Reading the nodes: a WhatsApp trigger fires, audio is downloaded, an HTTP request pulls the file, OpenAI transcribes the voice note, the text is normalized and mapped, then an AI Agent runs with a chat model, simple memory, and two real tools — `check_availability` and `get_booking`. Stack: n8n, OpenAI, WhatsApp API, Google Cloud.

**Real case study #2 — Multi-Client Automation Manager.** Multiple clients' automations, isolated, in one environment. Stack: n8n, Meta Apps, WhatsApp API, Docker.

**Real client:** Grupo NexIA (one logo, currently in a carousel with arrows and pagination dots — a carousel for a single item).

**Real assets:** `logo_full.png`, `logo_nombre.png`, `logo_icono.png` — an atom mark (nucleus, three elliptical orbits, a broken outer ring, two electrons) in a cyan→spring-green gradient, plus a stacked wordmark where `ATOMIC` and `softwarestudio` are set to the *same optical width*. That width-matched lockup is the sharpest idea in the current identity.

**Two observations that shaped everything below:**

1. **The work already in the repo goes all the way into production.** Not a prototype, not a demo — a running pipeline with real tool-calling, real memory, real third-party APIs, deployed and isolated. That operations posture is the through-line across every service line, and it is the thing to position on.

2. **The evidence is unusually concrete for a studio this size.** A real agent with real tools. A real multi-tenant deployment. Most studios at this stage have opinions; this one has artifacts. The site's job is to show the artifacts rather than describe the opinions.

> **Scope correction (post-review, 2026-08-22).** An earlier draft of this brief positioned the studio on *WhatsApp-native voice-note automation* specifically. Per the founder: Atomic sells **AI solutions broadly** — agents, automation, web, integrations, cloud — and the service portfolio is not fixed yet. So the voice-note pipeline is demoted from *thesis* to *evidence*: it is the best proof we have that the systems reach production, and it appears as a case study, not as the definition of the business. Positioning below is written broad enough to hold new service lines without a rewrite, and specific enough in voice that "broad" never becomes "vague."

---

## 1. Positioning

### Statement

> **Atomic builds the systems that do the work.**
>
> AI systems, automation, integrations, and the software around them — taken all the way into production, where they run unattended and leave a trace when something breaks.

The positioning is deliberately **capability-broad and posture-narrow**. What Atomic builds stays open (AI is moving too fast, and the portfolio isn't fixed yet). *How* Atomic builds is the claim, and it's the same claim whatever the service line is.

### The three things we lead with

**1. It runs in production, or it isn't finished.**
The register is operations, not innovation. Everything on the site should imply *this is running somewhere right now* rather than *this is possible*. That's what separates a studio from an agency deck — and it's the one differentiator that holds across every service line, present and future.

**2. It's built on the systems you already run.**
Not a parallel tool your team has to adopt. Atomic works into the channels, databases, calendars, and APIs a business already depends on — which is where most AI projects actually die. The appointment pipeline is the proof: it reaches into WhatsApp, transcription, memory, and a real calendar, and none of it asked the client to change how they work.

**3. Your system, your walls.**
Isolation and ownership as a stated principle: your workflows, your credentials, your environment, your failure domain. Costs nothing to claim honestly, because it's already built.

### On staying broad without going vague

With no fixed service catalogue, the temptation is to write copy that covers everything and therefore says nothing — which lands straight in the banned register. The discipline that prevents it:

- **Describe capability broadly, evidence specifically.** "AI systems that use tools and act on real data" is a wide claim; it is immediately followed by a named, real example with a named stack. Every broad sentence on the site is within one scroll of a concrete artifact.
- **Never claim a service line we can't evidence.** Four capabilities, each traceable to something in the repo.
- **Widen scope with nouns, not adjectives.** "AI systems, automation, integrations, cloud" is broad and concrete. "End-to-end intelligent solutions" is broad and empty.

### Tone of voice

Engineering-plain. The confidence comes from specificity, not from adjectives.

| Do | Don't |
|---|---|
| Name the actual tool: "n8n", "Whisper", "WhatsApp Cloud API" | "cutting-edge AI stack" |
| Short declaratives. Full stops. | Sentences that build to a crescendo |
| Describe the mechanism | Describe the transformation |
| "It transcribes the voice note, then decides." | "Unlock the power of conversational AI." |
| Admit limits and scope | Imply unlimited capability |
| Sentence case everywhere | Title Case For Marketing Emphasis |

Banned vocabulary, permanently: *unlock, revolutionize, next-gen, seamless, cutting-edge, empower, harness, transform your business, take it to the next level, solutions that scale, the future of.*

The voice test: **would this sentence survive being read aloud by an engineer to another engineer?** If it would earn a wince, rewrite it.

---

## 2. Information architecture

Small studio, real depth in two places. One marketing page plus two case-study pages — enough room to prove the work without inventing a site that doesn't exist yet.

### `/` — Home

| # | Section | Purpose (one line) |
|---|---|---|
| 1 | **Hero** | State the thesis and immediately show a system executing, so the claim and the proof arrive together. |
| 2 | **Capabilities** | The four service lines as a spec table with real stack per row — scannable, hierarchical, not four equal cards. |
| 3 | **Selected work** | The two real case studies, told editorially, each linking to its own page. |
| 4 | **Operating principles** | Four opinions about how automation should be built, each defensible from work already shipped. This is the "why hire them" section. |
| 5 | **Stack & clients** | What we actually run, and who we run it for. Honest about being one named client. |
| 6 | **Contact** | One low-friction way in — WhatsApp — plus direct email and the founder line. |
| 7 | **Footer** | Identity, links, and a small closing signature. |

**The four capabilities**, written broad enough to hold new service lines, each anchored to something real in the repo:

| Capability | Scope | Evidenced by |
|---|---|---|
| **AI systems & agents** | Agents that use tools, hold context, and act on real data — not chat widgets. | Real agent with memory and two live tools (`check_availability`, `get_booking`); OpenAI transcription in-pipeline. |
| **Automation & workflow engineering** | The plumbing between the systems a business already runs. | n8n pipelines in production; both case studies. |
| **Web & product engineering** | Applications, dashboards, and client-facing surfaces. | Next.js + TypeScript; this site. |
| **Integrations, cloud & operations** | APIs, deployment, isolation, keeping it running. | WhatsApp Cloud API, Meta Apps, Google Cloud, Docker, multi-tenant isolation. |

The first row is set largest and carries the most detail — the hierarchy states what the studio leads with, without pretending the other three are equal-weight cards.

### `/work/appointment-automation` — Case study

Problem → the pipeline, drawn as a real architecture diagram → what it handles (voice notes, availability checks, confirmations) → stack → outcome `[NEEDS REAL DATA]`.

### `/work/multi-client-platform` — Case study

Problem (many clients, one environment, no cross-contamination) → the isolation model → what each tenant gets → stack → outcome `[NEEDS REAL DATA]`.

### `/404`

Written in voice, not a shrug.

### Removed on purpose

- **Vision section** — a centered box of abstract sentiment. Folded into the hero and the closing line, where it earns its place.
- **`/blog`** — nav currently points at a route that does not exist. Dead links cost more trust than missing ones. Confirmed removed.
- **Client carousel** — arrows and pagination for a single logo. Replaced with an honest single-client treatment that accepts more logos later without a redesign.
- **The contact form** — it posted to `console.log`, so every message ever sent through it was lost. Replaced with a WhatsApp link and a plain email address. For a studio that sells automation, a form that silently drops messages is the worst possible thing to have on the page; two links that provably work are better than a form that looks more serious.

---

## 3. Visual language

### The core idea: **paper and ink**

The site has two registers, and they mean different things.

- **Paper** — cool, light, generous. This is where the studio *speaks*: headlines, prose, positioning, contact.
- **Ink** — deep, dense, monospaced. This is where the machine *reports*: execution traces, architecture, logs, stack.

The flip between them is never decorative. Light means a person is talking. Dark means a system is running. Once that rule is set, every full-bleed dark panel on the page is carrying information rather than adding drama.

This also does the strategic job: it is neither the cream-and-serif editorial look nor the black-with-one-acid-accent developer look. It is a document with machine output in it.

### Color

The bold call: **the brand is essentially achromatic, and color is reserved for system state.**

Roughly 95% of the site is paper and ink. Color appears only where something is being *reported* — a live status, a trace row, a completed step, a stack tag, a link you can act on. Nothing is tinted for mood. This is restraint that reads as expensive, and it makes the cyan feel earned instead of sprayed.

Every value below is contrast-checked, not eyeballed. Ratios in the right-hand column are measured against the ground that token is actually used on.

| Token | Hex | Role & rationale | Measured |
|---|---|---|---|
| `--paper` | `#EDEEE9` | Primary light ground. Deliberately cool and slightly green-grey, **not** cream — cream plus serif is the default editorial look and we're avoiding it. Reads as technical paper, not stationery. | — |
| `--paper-sunk` | `#E2E4DE` | Secondary tint for insets and table zebra on paper. | — |
| `--ink` | `#0C1113` | Dark ground, and body text on paper. Near-black with a blue-green undertone so it sits in the same family as the mark instead of fighting it. | **16.3:1** on paper (AAA) |
| `--ink-raised` | `#141B1E` | Raised machine surface *on* ink — trace rows, code blocks. | — |
| `--ink-muted` | `#4B5558` | Secondary prose on paper. | 6.6:1 (AAA) |
| `--paper-muted` | `#9BA5A8` | Secondary prose on ink. | 7.6:1 (AAA) |
| `--rule` | `#CFD2CB` | Decorative hairline on paper. Purely visual separation. | 1.3:1 — decorative only |
| `--rule-strong` | `#83877E` | Functional border on paper: table separators that carry meaning, interactive row edges. | **3.1:1** (AA non-text) |
| `--ink-rule` | `#243033` | Decorative hairline on ink. | 1.4:1 — decorative only |
| `--ink-rule-strong` | `#556468` | Functional border on ink. | **3.1:1** (AA non-text) |
| `--signal` | `#3FE0CE` | **Brand colour, bright variant — on ink only.** Aqua-teal sitting between the logo's cyan and green. Means: live, committed, succeeded. | 11.6:1 (AAA) |
| `--signal-deep` | `#066974` | **Brand colour, dark variant — on paper only.** Same hue, contrast-safe for links and small text on both paper tints. | 5.5:1 paper / 5.0:1 sunk (AA) |
| `--flux` | `#F5B33C` | Amber on ink. Means: in flight, running, needs attention. The counterweight that stops this being a one-accent tech site. An instrument-panel pairing, not a gradient pairing. | 10.3:1 (AAA) |
| `--flux-deep` | `#7E5204` | Amber on paper. | 5.8:1 paper / 5.3:1 sunk (AA) |

**The rules that make it a system, not a palette:**

1. Teal and amber are **semantic**. Teal never means "nice heading," it means *this completed / this is live*. Amber never means "highlight," it means *this is in motion*. If a colour can't answer "what state is this reporting?", it doesn't get used.
2. **No gradients anywhere on the site.** The single exception is the logo mark itself, at its two largest placements. That's what keeps the mark feeling like an object rather than a style.
3. **Two hairline weights, and the distinction is honest.** Decorative rules stay whisper-light because forcing them to 3:1 would make the page grey and heavy. Anything that a user actually needs to perceive — a control edge, a meaningful separator — uses the `-strong` token and clears 3:1.
4. **The focus ring flips with the register**, like everything else: `--signal-deep` on paper (5.5:1), `--signal` on ink (11.6:1). Both clear the 3:1 non-text floor comfortably; a single fixed ring colour could not.
5. Contrast floor: AA for all text, AAA for body prose, 3:1 for functional non-text.

### Typography

Three faces, three jobs, mapped directly onto the paper/ink concept. No Inter.

| Role | Family | Why this one |
|---|---|---|
| **Display & UI** | **Archivo** (variable, 400–700) | A sturdy American grotesque with a large x-height, squared counters, and a wide weight range. Set heavy with tight negative tracking it reads engineered rather than startup-neutral. It also sits comfortably next to the existing geometric logotype without imitating it. |
| **Prose** | **Newsreader** (variable) | The *paper* voice. A low-contrast serif for anything a person is saying — section intros, case-study narrative, principles. Serif body on a technical studio site is the unusual move here, and it's what gives the light register real editorial warmth instead of generic marketing sans. |
| **Machine** | **IBM Plex Mono** (400, 500) | The *ink* voice. Every trace row, node name, timestamp, stack tag, section label and nav item. Genuine engineering pedigree, excellent small, and its slightly humanist details keep it from feeling like a code dump. |

The pairing logic in one line: **grotesque states it, serif explains it, mono proves it.**

**Scale** — fluid, `clamp()`-based, base 16px.

```
display-xl   clamp(2.75rem, 7vw, 6rem)      Archivo 700, tracking -0.03em   hero
display-l    clamp(2rem, 4.5vw, 3.5rem)     Archivo 700, tracking -0.025em  section h2
display-m    clamp(1.375rem, 2.5vw, 2rem)   Archivo 600, tracking -0.015em  h3
prose-l      1.1875rem / 1.6                Newsreader 400                  section intros
prose        1.0625rem / 1.7                Newsreader 400                  body
ui           0.9375rem / 1.5                Archivo 500                     buttons, nav
meta         0.8125rem / 1.4                Plex Mono 500, ucase, +0.08em   labels, tags
micro        0.6875rem / 1.3                Plex Mono 500, ucase, +0.12em   gutter annotations
```

Prose measure caps at **62ch**. Headlines cap at **18ch** so they break into deliberate lines rather than wherever the viewport decides.

### Grid & spacing

- 12 columns, 72rem max content width, 24px gutters on mobile / 32px desktop.
- **Asymmetric by default.** Prose sits at columns 4–10. Columns 1–3 are a **meta gutter**: small uppercase mono annotations carrying real information — section index, status, the stack in play. This is the margin-annotation device from a technical document, and it's the connective tissue that makes the whole page feel like one artifact.
- Ink panels go **full bleed**, breaking the paper column. The break is the point: the document opens up and shows you the machine.
- Spacing scale, 4px base: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 160`. Section separation uses the top of that range; the vertical rhythm should feel unhurried.
- Radius: `2px` on interactive elements, `0` on panels and rules. Nothing is pill-shaped. No card has a shadow.

### Motion

**One orchestrated moment, then quiet.**

- **The hero trace executes itself once on load** — rows resolving in sequence, ~90ms apart, each settling from amber (running) to teal (done). It runs once and rests. This is the entire motion budget for the page and it's spent proving the thesis.
- Everything else: 120–200ms, `ease-out`, opacity plus a 6px rise, triggered once on scroll. Never repeating, never staggered into a wave.
- **One looping animation on the whole site**: a 2s pulse on the live status dot. It loops because it means *still running*. Nothing else loops.
- Hover: a 120ms underline draw on links, a 1px border shift on rows. No lifts, no scales, no glows.
- `prefers-reduced-motion: reduce` → the trace renders complete instantly, the pulse becomes a static dot, reveals become plain opacity.

### Iconography

**None.** No icon set is installed, which removes `smart_toy` and its whole family from the board permanently. Where a mark is genuinely needed, it's drawn from the atom — a hairline orbit ellipse or a nucleus dot — or it's a typographic character. Service lines get no icons at all; they get names and stack.

---

## 4. The signature element: the execution trace

The one thing this site is remembered by.

A studio whose product is *systems that run unattended* should not show you a diagram of a robot. It should show you the evidence that something executed while no one was in the room.

The trace is a typographic table on an ink ground:

```
  TIME      NODE                          STATUS
  ───────────────────────────────────────────────
  00.000    whatsapp.trigger              ok
  00.___    audio.download                ok
  00.___    transcribe · whisper          ok
  00.___    normalize                     ok
  00.___    agent.plan                    ok
  00.___    calendar.check_availability   ok
  00.___    calendar.create               ok
  00.___    whatsapp.reply                ok
```

Every node name above is **real**, read off their actual n8n canvas. The durations are the one thing I will not invent — see `[NEEDS REAL DATA]` in §7.

**Hard rules so this reads as a record, not a fake terminal:**
- No window chrome. No traffic-light dots. No `$` prompt. No blinking block cursor.
- It is set in the page's own type at editorial scale, with real column structure.
- Framed honestly — labelled as a representative run of the appointment pipeline, never presented as a specific live log.

**It recurs as a motif:** each case study opens with its own trace strip, and the footer carries a single quiet trace line. That repetition is what turns a hero gimmick into an identity.

---

## 5. Logo treatment

The mark is genuinely good and — importantly — it is *not* an AI trope. It's a physics mark that's literal to the name, which puts it miles ahead of a robot or a circuit. It stays. What changes is its craft and its flexibility.

**Keep:**
- The construction of the mark: nucleus, three elliptical orbits, broken outer ring, two electrons.
- The stacked lockup where `ATOMIC` and the descriptor line are set to the **same optical width**. This is the strongest structural idea in the existing identity and it survives untouched.

**Adapt:**
- **Rebuild as SVG.** `logo_full.png` is 955KB and `logo_icono.png` is 753KB for what is fundamentally eight vector paths. This alone is a meaningful performance win.
- **Make it monochrome-first**, drawn in `currentColor` so it works on paper and on ink from one file. The cyan→green gradient survives as an optional full-colour variant used at exactly two placements — the largest hero mark and the footer. Everywhere else the mark is a single colour. A logo that can go one-colour is a logo that can go on a t-shirt, an invoice, and a favicon.
- **Reset the wordmark in Archivo**, heavy and tight-tracked, preserving the width-matched two-line construction. Right now the logotype is in a typeface that appears nowhere else on the site; after this it's in the system.
- **Tighten the orbit geometry** — the current orbits are slightly irregular and the nucleus carries a raster glow that can't scale.

**Deliverables:** `atomic-mark.svg` (mono), `atomic-mark-color.svg` (gradient), `atomic-lockup.svg`, `atomic-lockup-stacked.svg`, plus a favicon/apple-touch/OG set.

**Flagged:** I'll rebuild these as faithful SVG redraws from the PNGs. If vector originals exist (`.ai`, `.svg`, Figma), those are strictly better — see §7.

---

## 6. Concept check — is any of this a default?

Testing the plan against the aesthetics the brief bans and the ones AI design reliably falls into:

| Common default | Are we doing it? |
|---|---|
| Purple→blue gradient, glassmorphism, glowing orbs | No. Zero gradients outside the mark; no blur, no glow, no shadow on any surface. |
| Robot / chip / circuit icons | No icon set is installed at all. |
| Inter everywhere | No. Archivo + Newsreader + Plex Mono, each with a defined job. |
| Symmetric 3-column icon-card service grid | No. Capabilities are a hierarchical spec table with a dominant first row. |
| Cream + high-contrast serif + terracotta | Partially adjacent — we do use a serif. Avoided by making the ground cool grey-green rather than cream, the display face a grotesque rather than a serif, the accent teal rather than terracotta, and by the heavy mono presence. |
| Near-black + one bright acid accent | Avoided by making the site light-dominant, with ink used as a *semantic* register rather than the default ground. |
| Broadsheet hairlines + zero radius + dense columns | Partially adjacent — hairlines are used, but only where they encode structure, and the layout is asymmetric with generous whitespace rather than dense newspaper columns. |
| `01 / 02 / 03` numbered markers | Only where content is genuinely sequential — the case-study pipelines. Capabilities and principles are not sequences, so they aren't numbered. |

**The one real risk taken:** making the brand almost entirely achromatic and spending the colour budget exclusively on system state. If the trace doesn't land, the site is a very quiet document. I think it lands, and I'd rather be quiet and specific than loud and generic.

---

## 7. Decisions log — answered by the founder

All eleven flags resolved on 2026-08-22. Recorded here so the reasoning survives the conversation.

| # | Question | Answer | Consequence in code |
|---|---|---|---|
| 1 | Contact email | **`contact@atomicstudio.dev`** | Replaces `contacto@atomicstudio.io` everywhere. |
| 2 | Contact form backend | **Drop the form. Use a direct WhatsApp link.** Number `3000000000`, to be corrected later. | No form component ships. Primary CTA is `wa.me`. Number lives in one config constant, marked as a placeholder. |
| 3 | LinkedIn | Point at **`linkedin.com`** for now; exact URL later. | Same config constant pattern, marked placeholder. |
| 4 | `project_2.png` | **My call.** | It does not ship. Replaced with an original SVG diagram of the isolation model, drawn by us. |
| 5 | Case-study metrics | Placeholder | `[NEEDS REAL DATA: …]` rendered visibly in-page, not silently omitted. |
| 6 | Trace durations | Placeholder | Trace ships with node names real and timings withheld rather than invented. |
| 7 | Grupo NexIA | **Permission granted.** More clients later. | Named on the site. Client section built to take more logos without redesign. |
| 8 | City | **Medellín** | Hero eyebrow, footer, and `LocalBusiness` structured data. |
| 9 | Who's behind it | **Daniel Ramirez, founder.** References at `danielramirez.pro`. | A short founder line ships — the strongest trust signal available to a studio this size. |
| 10 | Blog | **Remove for now.** | Dropped from nav; no route. |
| 11 | Vector logo originals | **None exist.** | We redraw the mark as SVG from the PNGs. This becomes a real deliverable, not a nice-to-have. |

### Placeholder policy

Placeholders are **visible, not invisible**. A metric we don't have renders as a marked slot in the page rather than being quietly cut, so that (a) nothing fabricated ever ships, and (b) the gaps are impossible to forget before launch. Every one is greppable:

```
[NEEDS REAL DATA: ...]     content gaps  — visible in the rendered page
PLACEHOLDER                config values — WhatsApp number, LinkedIn URL
```

A single `npm run check:placeholders` script will list them all before launch.

---

## 8. What happens next, on sign-off

- **Phase 2** — tokens and primitives on `redesign/design-system`: CSS custom properties, Tailwind theme, type scale, the meta-gutter layout primitive, button/link/rule/tag/trace-row components, SVG logo rebuild.
- **Phase 3** — all copy written to the §1 voice on `redesign/content`.
- **Phase 4** — sections and the two case-study pages.
- **Phase 5** — mobile-first responsive, a11y (semantics, contrast, focus, reduced-motion), image optimization, font loading, metadata and OG.
- **Phase 6** — self-review against this brief, deviation list, single PR into `main`.
