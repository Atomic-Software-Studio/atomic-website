import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-plus-jakarta',
})

export const metadata: Metadata = {
  title: 'Atomic Software Studio',
  description: 'We create innovative, automated solutions to propel your business into the next digital era.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className={`${plusJakarta.variable} bg-background-dark font-display text-white`}>
        {children}
      </body>
    </html>
  )
}