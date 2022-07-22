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

        {/* <div className="absolute top-[-10px] rounded-xl rounded-t-none bg-primary px-4 mx-auto">
          <ul className="flex items-center justify-center gap-8 p-2 text-white text-xs">
            <li>Governo do Estado</li>
            <li>Sites do Governo</li>
            <li>Transparência</li>
            <li>Ouvidoria Geral</li>
            <li>Acesso à informação</li>
            <li>Redes Sociais Governo</li>
          </ul>
        </div> */}
      </div>
    </header>
  )
}
