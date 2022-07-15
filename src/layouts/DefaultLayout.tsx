import { ReactNode } from 'react'
import { Header } from '../components/Header'

interface LayoutProps {
  children: ReactNode
}

export function DefaultLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div className="mx-auto transition-all duration-500 ease-linear">
        <main className="m-auto">{children}</main>
      </div>
    </>
  )
}
