/**
 * Case study detail copy.
 *
 * Both studies are real and deployed. The pipelines and isolation model
 * described here are read from the studio's own n8n canvases and deployment
 * setup.
 *
 * Outcomes are stated qualitatively because measured figures do not exist yet.
 * Every sentence in an `outcome` is defensible from the system as built. When
 * numbers arrive they go in `metrics`, which renders nothing while empty.
 */

export type CaseStudy = {
  slug: string
  name: string
  summary: string
  /** Sequential, so numbering it is honest rather than decorative. */
  sequenceLabel: string
  problem: string[]
  approach: { name: string; body: string }[]
  handles: string[]
  stack: { group: string; items: string[] }[]
  /** Stated qualitatively and truthfully while measured figures do not exist. */
  outcome: string
  /**
   * Measured results. Empty until real figures exist — the section renders
   * nothing rather than showing an empty state, so adding the first number is
   * a content change and not a layout change.
   *
   * Example once measured:
   *   metrics: [{ value: '1,200+', label: 'bookings handled' }]
   */
  metrics: { value: string; label: string }[]
  next: { slug: string; name: string }
}

export const caseStudies: Record<string, CaseStudy> = {
  'appointment-automation': {
    slug: 'appointment-automation',
    name: 'Appointment automation',
    summary: 'A booking system that starts with a voice note.',
    sequenceLabel: 'The pipeline, in order',
    problem: [
      'Booking by message is how a great deal of business already works in Colombia. The friction is not the customer — it is what happens after they press send. Someone has to read the message, work out what was being asked, open a calendar, check whether the slot is free, book it, and write back. At 11pm on a Sunday, nobody does.',
      'The harder part is the format. People do not type carefully worded requests; they send a forty-second voice note while driving. Any system that only accepts clean text has already lost most of its input.',
    ],
    approach: [
      {
        name: 'Take the message as it actually arrives',
        body: 'A WhatsApp trigger fires on the inbound message and the audio is pulled down before anything else happens. Voice is a first-class input here, not a fallback path bolted on later.',
      },
      {
        name: 'Transcribe before reasoning',
        body: 'The audio goes through Whisper and becomes text. Everything downstream — planning, tool selection, the reply — works from that transcript, which keeps a single, inspectable representation of what the customer said.',
      },
      {
        name: 'Normalize and resolve',
        body: 'The transcript is shaped into a predictable payload and the loose parts of a human request — “next Tuesday afternoon”, “same as last time” — are resolved into concrete fields the rest of the system can act on.',
      },
      {
        name: 'Let the agent plan, with tools',
        body: 'An agent runs with a chat model and conversation memory, and is given real tools rather than instructions to imagine an outcome. It can check availability and it can create a booking. Those are the two things it can do, which is the point — the boundary is the design.',
      },
      {
        name: 'Close the loop',
        body: 'A confirmation goes back on the same thread the customer started. From their side it is one conversation, and no part of it required a person.',
      },
    ],
    handles: [
      'Voice notes and typed messages on the same path',
      'Availability lookups against a live calendar',
      'Booking creation and confirmation',
      'Conversation memory across a thread',
      'Messages arriving outside working hours',
    ],
    stack: [
      { group: 'Automation', items: ['n8n'] },
      { group: 'AI', items: ['OpenAI', 'Whisper', 'Tool calling', 'Memory'] },
      { group: 'Channel', items: ['WhatsApp Cloud API'] },
      { group: 'Infrastructure', items: ['Google Cloud'] },
    ],
    outcome:
      'Booking runs end to end with nobody in the loop. A request that arrives as a voice note at eleven at night is transcribed, understood, checked against the calendar and confirmed on the same thread — with no queue for someone to work through the next morning.',
    metrics: [],
    next: { slug: 'multi-client-platform', name: 'Multi-client automation platform' },
  },

  'multi-client-platform': {
    slug: 'multi-client-platform',
    name: 'Multi-client automation platform',
    summary: 'One environment, many clients, no shared blast radius.',
    sequenceLabel: 'How a tenant is stood up',
    problem: [
      'Running automation for several clients out of one shared environment is the fastest way to start and the fastest way to get hurt. Credentials sit next to each other. A workflow edited for one client runs for all of them. One rate limit, one bad deploy, or one noisy integration becomes everybody’s outage.',
      'The alternative most studios land on is a separate hand-built setup per client, which trades one problem for another: nothing is consistent, nothing is reusable, and onboarding gets slower with every client added.',
    ],
    approach: [
      {
        name: 'Give every client their own walls',
        body: 'Each client runs in an isolated environment with their own workflows, their own credentials, and their own data. Nothing is shared by default, so a change made for one client has no path to another.',
      },
      {
        name: 'Containerize the unit, not the client',
        body: 'The environment is defined once and provisioned per tenant with Docker. What each client gets is identical in shape and separate in state, which is what makes the setup reproducible rather than bespoke.',
      },
      {
        name: 'Separate the channel identities',
        body: 'Each client connects through their own Meta app and WhatsApp number, so messaging identity, rate limits and permissions belong to the client rather than to a shared pool.',
      },
      {
        name: 'Make onboarding a provisioning step',
        body: 'Adding a client is standing up a new tenant from a known-good definition, not rebuilding an integration from scratch. The cost of the tenth client looks like the cost of the second.',
      },
    ],
    handles: [
      'Per-client workflow isolation',
      'Per-client credential storage',
      'Separate WhatsApp identities and rate limits',
      'Reproducible tenant provisioning',
      'Independent failure domains',
    ],
    stack: [
      { group: 'Automation', items: ['n8n'] },
      { group: 'Channel', items: ['Meta Apps', 'WhatsApp Cloud API'] },
      { group: 'Infrastructure', items: ['Docker'] },
    ],
    outcome:
      'A change or a failure inside one client environment has no path into another. Onboarding a client is a provisioning step from a known-good definition rather than a rebuild, so the cost of the tenth looks like the cost of the second.',
    metrics: [],
    next: { slug: 'appointment-automation', name: 'Appointment automation' },
  },
}

export const caseStudyList = Object.values(caseStudies)
