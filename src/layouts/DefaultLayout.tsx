import { ReactNode } from 'react'
import { Footer } from '../components/Footer'

import { Header } from '../components/Header'
import { Navbar } from '../components/Navbar'

interface LayoutProps {
  children: ReactNode
}

export function DefaultLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Navbar />
      <main className="transition-all duration-500 ease-linear">
        {children}
      </main>
      <Footer />
    </>
  )
}
