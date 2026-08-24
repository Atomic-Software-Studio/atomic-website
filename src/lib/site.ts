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

export const mailtoHref = `mailto:${site.contact.email}`

/**
 * Launch guards.
 *
 * The site went live before the real WhatsApp number and LinkedIn URL existed.
 * Shipping the placeholders as-is would have been worse than shipping nothing:
 * `3000000000` is a plausible Colombian mobile, so the primary call to action
 * on every page would have sent real enquiries to a stranger, and a "LinkedIn"
 * link landing on linkedin.com's homepage reads as a broken site.
 *
 * So both degrade instead of breaking, and both heal themselves the moment a
 * real value is set in `site` above — no component needs editing.
 */

const PLACEHOLDER_WHATSAPP = '3000000000'
const PLACEHOLDER_LINKEDIN = 'https://www.linkedin.com'

export const hasRealWhatsapp = site.contact.whatsappNumber !== PLACEHOLDER_WHATSAPP
export const hasRealLinkedin = site.social.linkedin !== PLACEHOLDER_LINKEDIN

/** wa.me deep link with the opening message attached — email until the number is real. */
export const whatsappHref = hasRealWhatsapp
  ? `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(
      site.contact.whatsappMessage,
    )}`
  : mailtoHref

/** Label the CTA by where it actually goes, so the button never lies. */
export const primaryContactLabel = hasRealWhatsapp ? 'WhatsApp' : 'Email'
