'use client'

import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 px-6 sm:px-10 py-3 fixed top-5 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[960px] bg-background-dark/50 backdrop-blur-sm rounded-lg z-50">
      <div className="flex items-center gap-4 text-white">
        <div className="size-5 relative">
          <Image
            src="/logo_icono.png"
            alt="Atomic Software Studio Icon"
            fill
            className="object-contain"
          />
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]"> Atomic Software Studio </h2>
      </div>
      
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <a className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal" href="#">
            Home
          </a>
          <a className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal" href="#">
            Services
          </a>
          <a className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal" href="#">
            Projects
          </a>
          <a className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal" href="#">
            Contact
          </a>
        </div>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
          <span className="truncate">Let&apos;s Build Something</span>
        </button>
      </div>
      
      <button className="flex md:hidden items-center justify-center rounded-lg h-10 w-10 bg-white/10 hover:bg-white/20 transition-colors">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </header>
  )
}