'use client'

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 px-6 sm:px-10 py-3 fixed top-5 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[960px] bg-background-dark/50 backdrop-blur-sm rounded-lg z-50">
      <div className="flex items-center gap-4 text-white">
        <div className="size-5">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" 
              fill="currentColor"
            />
          </svg>
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          Atomic Software Studio
        </h2>
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