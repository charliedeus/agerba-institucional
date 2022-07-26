import Link from 'next/link'
import { LogoDefault } from '../LogoDefault'

export function Header() {
  return (
    <header className="hidden px-[14px] laptop:px=0 tablet:flex tablet:w-full tablet:h-full border-t-8 border-t-secondary">
      <div className="w-full desktop:max-w-[1280px] h-[6.25rem] flex items-center m-auto relative">
        <Link href="/">
          <a>
            <LogoDefault />
          </a>
        </Link>
      </div>
    </header>
  )
}
