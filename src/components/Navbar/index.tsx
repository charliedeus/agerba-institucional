import Link from 'next/link'
import {
  Bank,
  BookBookmark,
  House,
  Info,
  List,
  LockOpen,
  Tag,
} from 'phosphor-react'

export function Navbar() {
  return (
    <>
      <nav
        className={
          'w-full h-[50px] min-h-[50px] bg-gradient-to-r from-[#EF3037] to-[#3F3F95] flex justify-center text-white text-sm transition-all duration-500 ease-linear'
        }
      >
        <div className="px-[14px] w-full h-full flex items-center justify-between tablet:hidden">
          <img className="max-w-[59px]" src="/logo-white.png" alt="" />
          <Link href="/">
            <a>
              <List size={24} />
            </a>
          </Link>
        </div>

        <div className="hidden w-full px-[14px] tablet:h-full tablet:max-w-[1280px] tablet:m-auto tablet:flex items-center justify-between gap-4">
          <Link href="/">
            <a className="flex items-center gap-2">
              <House size={20} weight="light" />
              <span className="font-normal">Início</span>
            </a>
          </Link>
          <Link href="/">
            <a className="flex items-center gap-2">
              <Bank size={20} weight="light" />
              <span className="font-normal">Institucional</span>
            </a>
          </Link>
          <Link href="/">
            <a className="flex items-center gap-2">
              <Tag size={20} weight="light" />
              <span className="font-normal">Serviços regulados</span>
            </a>
          </Link>
          <Link href="/">
            <a className="flex items-center gap-2">
              <Info size={20} weight="light" />
              <span className="font-normal">Informações Gerais</span>
            </a>
          </Link>
          <Link href="/">
            <a className="flex items-center gap-2">
              <BookBookmark size={20} weight="light" />
              <span className="font-normal ">Legislações</span>
            </a>
          </Link>
          <Link href="/">
            <a className="flex items-center gap-2">
              <LockOpen size={20} weight="light" />
              <span className="font-normal">Transparência</span>
            </a>
          </Link>
        </div>
      </nav>
    </>
  )
}
