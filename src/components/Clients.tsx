'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Clients() {
  const clients = [
    { name: 'Grupo NexIA', logo: '/clients/client_1.png' },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3 // Número de logos visibles a la vez
  const totalSlides = Math.ceil(clients.length / itemsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  return (
    <section className="flex flex-col gap-8 py-8">
      <div className="text-center px-4">
        <h2 className="text-white text-3xl font-bold leading-tight tracking-tighter">
          Nuestros clientes
        </h2>
        <p className="text-white/70 mt-2 max-w-2xl mx-auto">
          Empresas que confían en nosotros para impulsar su transformación digital
        </p>
      </div>

      <div className="relative px-4">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="min-w-full flex justify-center gap-8 px-4">
                {clients
                  .slice(slideIndex * itemsPerView, (slideIndex + 1) * itemsPerView)
                  .map((client, index) => (
                    <div
                      key={index}
                      className="flex-1 max-w-[200px] h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                    >
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={160}
                        height={96}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Botones de navegación */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary/20 hover:bg-primary/40 text-white p-2 rounded-full transition-colors backdrop-blur-sm border border-primary/40"
          aria-label="Anterior"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary/20 hover:bg-primary/40 text-white p-2 rounded-full transition-colors backdrop-blur-sm border border-primary/40"
          aria-label="Siguiente"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Indicadores de página */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-primary w-8'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Ir a página ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}