import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { ReactNode } from 'react'

import Container from '../components/Container'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Navbar } from '../components/Navbar'
import './globals.css'

export const metadata: Metadata = {
  title: 'Início | AGERBA',
  description: '',
}

const roboto = Roboto({
  display: 'swap',
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="antialiased scroll-smooth">
      <body
        className={`${roboto.className} font-sans flex flex-1 flex-col min-h-screen`}
      >
        <main className="flex flex-col flex-1 min-h-screen">
          <Header />
          <Navbar />
          <Container>{children}</Container>
        </main>
        <Footer />
      </body>
    </html>
  )
}
