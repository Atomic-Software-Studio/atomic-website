/**
 * All page copy, in one place.
 *
 * Voice rules (docs/redesign-brief.md §1): engineering-plain, specific over
 * superlative, sentence case, short declaratives. Name the actual tool. Every
 * broad claim sits within one scroll of a concrete artifact.
 *
 * Permanently banned: unlock, revolutionize, next-gen, seamless, cutting-edge,
 * empower, harness, transform your business, take it to the next level,
 * solutions that scale, the future of.
 *
 * Nothing here is invented. Services, stacks, case studies and the client name
 * all come from the studio's real work. Where a claim would need a number we
 * do not have, it renders as a visible placeholder instead.
 */

export const hero = {
  eyebrow: { role: 'Software studio', place: 'Medellín, Colombia' },
  headline: 'We build the systems that do the work.',
  standfirst:
    'AI systems, automation, integrations, and the software around them. We take them all the way into production — where they run unattended, and leave a trace when something breaks.',
  primaryCta: 'Start a conversation',
  secondaryCta: 'contact@atomicstudio.dev',
} as const

export type Capability = {
  name: string
  body: string
  stack: readonly string[]
  /** The one the studio actually leads with. Set on exactly one item. */
  lead?: boolean
}

export const capabilities: {
  index: string
  label: string
  heading: string
  intro: string
  items: readonly Capability[]
} = {
  index: '01',
  label: 'Capabilities',
  heading: 'Four things, and the lines between them are thin.',
  intro:
    'Most projects touch at least three. An agent is only useful once it can reach a real calendar; an integration is only finished once someone can see what it did. We scope the work by the outcome, not by the category it belongs to.',
  items: [
    {
      name: 'AI systems & agents',
      body: 'Agents that use tools, hold context, and act on systems that matter — not a chat window bolted onto a FAQ. We decide what the model is allowed to do, what it has to ask about, and what happens on the days it gets something wrong.',
      stack: ['OpenAI', 'Whisper', 'tool calling', 'memory'],
      lead: true,
    },
    {
      name: 'Automation & workflow engineering',
      body: 'The connective work between systems that were never designed to talk to each other. Triggers, retries, and the unglamorous error handling that decides whether an automation survives contact with real traffic.',
      stack: ['n8n', 'webhooks', 'schedulers', 'error handling'],
    },
    {
      name: 'Web & product engineering',
      body: 'Applications, dashboards, and the interfaces around a system — the place people go when they need to see what the automation actually did.',
      stack: ['Next.js', 'TypeScript', 'React', 'Tailwind'],
    },
    {
      name: 'Integrations, cloud & operations',
      body: 'APIs, deployment, isolation, monitoring. Going live is a milestone, not the finish line — most of the value shows up in the months afterwards.',
      stack: ['WhatsApp Cloud API', 'Meta Apps', 'Google Cloud', 'Docker'],
    },
  ],
}

export const work = {
  index: '02',
  label: 'Selected work',
  heading: 'Two systems, both running.',
  intro:
    'Not concepts. Both of these are deployed, and both handle traffic we did not schedule.',
  items: [
    {
      slug: 'appointment-automation',
      name: 'Appointment automation',
      summary: 'A booking system that starts with a voice note.',
      body: 'Someone sends a WhatsApp message — often audio, often at an hour when nobody is at a desk. The system transcribes it, works out what was actually being asked, checks the calendar, books the slot, and replies. No form, no callback, no queue.',
      stack: ['n8n', 'OpenAI', 'WhatsApp Cloud API', 'Google Cloud'],
      outcomeLabel: 'Outcome',
      outcome: '[NEEDS REAL DATA: bookings handled, response time, period covered]',
    },
    {
      slug: 'multi-client-platform',
      name: 'Multi-client automation platform',
      summary: 'One environment, many clients, no shared blast radius.',
      body: 'Each client’s workflows, credentials and data sit behind their own walls, so a change made for one can never reach another. Onboarding a client is a provisioning step rather than a rebuild, which is the difference between running a platform and maintaining a pile of one-offs.',
      stack: ['n8n', 'Docker', 'Meta Apps', 'WhatsApp Cloud API'],
      outcomeLabel: 'Outcome',
      outcome: '[NEEDS REAL DATA: tenants running, uptime, onboarding time]',
    },
  ],
} as const

export const principles = {
  index: '03',
  label: 'How we work',
  heading: 'Four opinions we are not flexible about.',
  intro:
    'These are not preferences. Each one is a decision that has already been made in the systems above, and each one costs something up front to hold.',
  items: [
    {
      name: 'Production is the deliverable',
      body: 'A workflow running on somebody’s laptop is a prototype. We hand over systems that are deployed, credentialed and monitored — and until that is true, the work is not finished.',
    },
    {
      name: 'Meet the systems already in place',
      body: 'Most automation dies at the integration boundary, not at the idea. We build into the tools a business already runs on rather than asking a team to migrate to something new to make our job easier.',
    },
    {
      name: 'Isolation by default',
      body: 'Every client gets their own environment. Your credentials, your data, your failure domain. A problem in one place should not be able to travel to another, and that has to be designed in rather than promised.',
    },
    {
      name: 'Everything leaves a trace',
      body: 'Things break. The only question that matters is how quickly you can see why. Runs are logged, failures are visible, and the path through the system stays legible after the fact.',
    },
  ],
} as const

export const stack = {
  index: '04',
  label: 'Stack & clients',
  heading: 'What we actually run.',
  intro:
    'Not a certification wall. This is what is in production right now — if something is not on this list, we will say so rather than learn it on your budget.',
  // Every entry below is evidenced by shipped work. Nothing aspirational
  // sits in this list, because the heading above claims it is all running.
  groups: [
    { name: 'Automation', items: ['n8n', 'Webhooks', 'Scheduled triggers', 'Error handling'] },
    { name: 'AI', items: ['OpenAI', 'Whisper', 'Tool calling', 'Conversation memory'] },
    { name: 'Web', items: ['Next.js', 'React', 'TypeScript', 'Tailwind'] },
    { name: 'Infrastructure', items: ['Docker', 'Google Cloud', 'Meta Apps', 'WhatsApp Cloud API'] },
  ],
  clientsLabel: 'Working with',
  clients: [{ name: 'Grupo NexIA', logo: '/clients/client_1.png' }],
} as const

export const contact = {
  index: '05',
  label: 'Contact',
  heading: 'Start with the problem, not the brief.',
  intro:
    'Tell us what the system needs to do and what currently happens instead. If we are the right studio for it we will say so, and if we are not we will usually know who is.',
  whatsappNote: 'Fastest way in — fitting, given how much of what we build lives there.',
  emailNote: 'If you would rather write it all down first.',
  founderNote: 'Atomic is led by Daniel Ramirez in Medellín, Colombia.',
} as const

export const footer = {
  closing:
    'A studio for the software that runs after everyone has gone home.',
} as const
