'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <div id="home" className="w-full @container">
      <div className="@[480px]:p-4">
        <div 
          className="group/hero relative flex min-h-[480px] flex-col gap-8 bg-cover bg-center bg-no-repeat @[480px]:gap-10 @[480px]:rounded-xl items-center justify-center p-4 overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(135deg, #063e5b 0%, #0b2a3a 100%)`
          }}
        >
          <div 
            className="absolute inset-0 opacity-0 group-hover/hero:opacity-100 transition-opacity duration-500 @[480px]:rounded-xl"
            style={{
              backgroundImage: `linear-gradient(135deg, #0da6f2 0%, #063e5b 100%)`
            }}
          />
          
          <div className="relative z-10 flex flex-col gap-6 text-center max-w-4xl w-full px-4">
            <div className="w-full max-w-4xl mx-auto relative h-40 @[480px]:h-56 md:h-[280px] transition-transform duration-500 group-hover/hero:scale-110">
              <Image
                src="/logo_full.png"
                alt="Building the Future with Intelligent Software"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-white/80 text-lg font-normal leading-normal @[480px]:text-xl md:text-lg transition-all duration-500 group-hover/hero:text-white">
              Creamos soluciones inteligentes y automatizadas que impulsan tu negocio hacia el futuro digital.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}