'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  // Cierra el menú cuando navegas a un #ancla
  useEffect(() => {
    const handler = () => setOpen(false)
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [])

  return (
    <>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 px-6 sm:px-10 py-3 fixed top-0 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[960px] bg-background-dark/50 backdrop-blur-md rounded-lg z-50">
        <div className="flex items-center gap-4 text-white">
          <div className="size-5 relative">
            <Image
              src="/logo_icono.png"
              alt="Atomic Software Studio Icon"
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
            Atomic Software Studio
          </h2>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-7">
            <a className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal" href="#">
              Inicio
            </a>
            <a className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal" href="#services">
              Servicios
            </a>
            <a className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal" href="#projects">
              Proyectos
            </a>
            <a 
                className="block rounded-md text-white/90 hover:text-white hover:bg-white/10" 
                href="#"
                target="_blank"
                rel="noopener noreferrer">
                  Blog 
                  <span 
                    className="material-symbols-outlined align-middle opacity-70 ml-1" 
                    style={{ fontSize: '12px', lineHeight: '1' }}>
                      open_in_new
                  </span>
              </a>
          </div>
          <a
            href="#contact"
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
          >
            <span className="truncate">Construyamos algo</span>
          </a>
        </div>

        {/* Botón móvil */}
        <button
          className="flex md:hidden items-center justify-center rounded-lg h-10 w-10 bg-white/10 hover:bg-white/20 transition-colors text-white"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span className="material-symbols-outlined">
            {open ? 'close' : 'menu'}
          </span>
        </button>
      </header>

      {/* Overlay para cerrar tocando fuera */}
      {open && (
        <button
          aria-hidden
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Panel móvil */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed top-14 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[960px] z-50 transition-[opacity,transform] ${
          open ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 -translate-y-2'
        }`}
      >
        <nav className="bg-background-dark/95 backdrop-blur-md border border-white/10 rounded-lg p-4 shadow-xl">
          <ul className="flex flex-col gap-2">
            <li>
              <a className="block px-3 py-2 rounded-md text-white/90 hover:text-white hover:bg-white/10" href="#">
                Inicio
              </a>
            </li>
            <li>
              <a className="block px-3 py-2 rounded-md text-white/90 hover:text-white hover:bg-white/10" href="#services">
                Servicios
              </a>
            </li>
            <li>
              <a className="block px-3 py-2 rounded-md text-white/90 hover:text-white hover:bg-white/10" href="#projects">
                Proyectos
              </a>
            </li>
            <li>
              <a 
                className="block px-3 py-2 rounded-md text-white/90 hover:text-white hover:bg-white/10" 
                href="#"
                target="_blank"
                rel="noopener noreferrer">
                  Blog
                  <span className="material-symbols-outlined text-sm opacity-70 ml-1"
                        style={{ fontSize: '12px', lineHeight: '1' }}>
                          open_in_new
                  </span>
              </a>
            </li>
            <li className="pt-1">
              <a
                href="#contact"
                className="block text-center rounded-lg h-10 leading-10 bg-primary text-white font-bold hover:bg-primary/90"
              >
                Construyamos algo
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
