import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Clients from '@/components/Clients'
import Vision from '@/components/Vision'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="relative w-full flex flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1 gap-16">
            <Header />
            <main className="flex flex-col gap-16 md:gap-24 pt-28">
              <Hero />
              <Services />
              <Projects />
              <Clients />
              <Vision />
              <Contact />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}