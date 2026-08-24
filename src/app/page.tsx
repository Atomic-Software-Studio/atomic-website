import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import Capabilities from '@/components/sections/Capabilities'
import Work from '@/components/sections/Work'
import Principles from '@/components/sections/Principles'
import StackAndClients from '@/components/sections/StackAndClients'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import { capabilities } from '@/content/home'
import { site } from '@/lib/site'

/**
 * Structured data. The WhatsApp number is deliberately absent: it is still a
 * placeholder, and publishing a placeholder as machine-readable contact detail
 * would put a wrong number into search results. Email only until it is real.
 */
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.name,
  url: site.url,
  description: site.description,
  email: site.contact.email,
  slogan: site.tagline,
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.location.city,
    addressCountry: site.location.countryCode,
  },
  founder: {
    '@type': 'Person',
    name: site.founder.name,
    url: site.founder.url,
  },
  sameAs: [site.social.github, site.social.instagram],
  knowsAbout: capabilities.items.map((item) => item.name),
  areaServed: { '@type': 'Country', name: site.location.country },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main id="main">
        <Hero />
        <Capabilities />
        <Work />
        <Principles />
        <StackAndClients />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
