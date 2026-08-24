import type { Metadata, Viewport } from 'next'
import { Archivo, Newsreader, IBM_Plex_Mono } from 'next/font/google'
import { site } from '@/lib/site'
import './globals.css'

/**
 * Three faces, three jobs: grotesque states it, serif explains it, mono
 * proves it. All self-hosted through next/font, so there is no render-blocking
 * request to Google and no layout shift on load.
 */

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
  axes: ['wdth'],
})

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
  style: ['normal', 'italic'],
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-plex-mono',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.founder.name, url: site.founder.url }],
  creator: site.founder.name,
  keywords: [
    'AI systems',
    'automation',
    'workflow automation',
    'integrations',
    'API development',
    'web development',
    'software studio',
    'Medellín',
    'Colombia',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
}

export const viewport: Viewport = {
  themeColor: '#EDEEE9',
  colorScheme: 'light',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${newsreader.variable} ${plexMono.variable}`}>
      <body className="bg-paper text-ink antialiased">
        <a
          href="#main"
          className="sr-only rounded-sharp focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-meta focus:text-paper focus:uppercase"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
