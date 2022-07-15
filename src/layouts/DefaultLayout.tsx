import { ReactNode } from 'react'

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
      <div className="mx-auto transition-all duration-500 ease-linear">
        <main className="m-auto">{children}</main>
      </div>
    </>
  )
}
