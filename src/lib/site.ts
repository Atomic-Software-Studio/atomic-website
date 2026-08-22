/**
 * Single source of truth for identity, contact and links.
 *
 * Values marked PLACEHOLDER are confirmed-temporary and must be corrected
 * before launch. They are deliberately greppable — `npm run check:placeholders`
 * fails the build-adjacent check while any remain.
 */

export const site = {
  name: 'Atomic Software Studio',
  shortName: 'Atomic',
  domain: 'atomicstudio.dev',
  url: 'https://atomicstudio.dev',

  /** Positioning statement. docs/redesign-brief.md §1 */
  tagline: 'We build the systems that do the work.',
  description:
    'Atomic is a software studio in Medellín, Colombia. We build AI systems, automation, integrations and the software around them — and take them into production, where they run unattended.',

  location: {
    city: 'Medellín',
    country: 'Colombia',
    countryCode: 'CO',
  },

  founder: {
    name: 'Daniel Ramirez',
    role: 'Founder',
    url: 'https://danielramirez.pro',
  },

  contact: {
    email: 'contact@atomicstudio.dev',
    /** PLACEHOLDER: real WhatsApp number pending. Digits only, country code first. */
    whatsappNumber: '3000000000',
    whatsappMessage: 'Hi Atomic — I have a project I would like to talk through.',
  },

  social: {
    github: 'https://github.com/Atomic-Software-Studio',
    instagram: 'https://www.instagram.com/atomic.software',
    /** PLACEHOLDER: exact company page URL pending. */
    linkedin: 'https://www.linkedin.com',
  },
} as const

/** Prebuilt wa.me deep link with the opening message attached. */
export const whatsappHref = `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(
  site.contact.whatsappMessage,
)}`

export const mailtoHref = `mailto:${site.contact.email}`
