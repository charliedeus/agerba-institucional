import Link from 'next/link'
import { List } from 'phosphor-react'
import { LogoWhite } from '../Logo'

export function Header() {
  return (
    <header className="w-full h-[3.125rem]">
      <div
        className={
          'absolute top-0 left-0 right-0 w-full h-[3.125rem] min-h-[3.125rem] bg-gradient-to-r from-[#EF3037] to-[#3F3F95] flex items-center justify-between text-white text-sm px-[14px]'
        }
      >
        <Link href="/">
          <a>
            <LogoWhite />
          </a>
        </Link>

        <Link href="/">
          <a>
            <List size={20} />
          </a>
        </Link>
      </div>
    </header>
  )
}
