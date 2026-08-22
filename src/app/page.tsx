import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import Capabilities from '@/components/sections/Capabilities'
import Work from '@/components/sections/Work'
import Principles from '@/components/sections/Principles'
import StackAndClients from '@/components/sections/StackAndClients'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
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
