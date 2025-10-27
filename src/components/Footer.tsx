export default function Footer() {
  return (
    <footer className="text-center py-8 border-t border-white/10 mt-16">
      <p className="text-sm text-white/50">
        Atomic Software Studio © 2025. Todos los derechos reservados.
      </p>
      <p className="text-sm text-white/30">
        By: <a 
              className="hover:text-primary transition-colors" 
              href="https://danielramirez.pro/" 
              aria-label="Daniel Fernando Ramírez Giraldo"
            >
              Daniel Ramirez.
            </a>
      </p>
    </footer>
  )
}