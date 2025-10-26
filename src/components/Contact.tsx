'use client'

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Form submitted')
  }

  return (
    <section className="flex flex-col gap-8 p-4">
      <div className="text-center">
        <h2 className="text-white text-3xl font-bold leading-tight tracking-tighter">
          Let&apos;s Create Together
        </h2>
        <p className="text-white/70 mt-2">
          Have an idea? Let&apos;s talk about how we can bring it to life.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <form 
          onSubmit={handleSubmit}
          className="md:col-span-2 flex flex-col gap-4 bg-white/[.03] p-6 rounded-lg border border-white/10"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              className="w-full bg-background-dark border-white/20 rounded-md focus:ring-primary focus:border-primary transition-colors"
              placeholder="Your Name"
              type="text"
            />
            <input
              className="w-full bg-background-dark border-white/20 rounded-md focus:ring-primary focus:border-primary transition-colors"
              placeholder="Your Email"
              type="email"
            />
          </div>
          <textarea
            className="w-full bg-background-dark border-white/20 rounded-md focus:ring-primary focus:border-primary transition-colors"
            placeholder="Your Message"
            rows={5}
          />
          <button
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors w-full sm:w-auto"
            type="submit"
          >
            <span className="truncate">Send Message</span>
          </button>
        </form>
        
        <div className="flex flex-col justify-center gap-4 text-center md:text-left">
          <h3 className="text-xl font-bold">Connect with us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a 
              className="text-white/70 hover:text-primary transition-colors" 
              href="#"
              aria-label="GitHub"
            >
              <svg 
                fill="none" 
                height="24" 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                width="24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              </svg>
            </a>
            <a 
              className="text-white/70 hover:text-primary transition-colors" 
              href="#"
              aria-label="LinkedIn"
            >
              <svg 
                fill="none" 
                height="24" 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                width="24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect height="12" width="4" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a 
              className="text-white/70 hover:text-primary transition-colors" 
              href="#"
              aria-label="Instagram"
            >
              <svg 
                fill="none" 
                height="24" 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                width="24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}