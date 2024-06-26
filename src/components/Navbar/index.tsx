'use client'

import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import {
  Bank,
  BookBookmark,
  House,
  Info,
  LockOpen,
  Tag,
  X,
} from 'phosphor-react'

import { NextLink } from '../NextLink'

// const fileUrl = `/.well-known/pki-validation/arquivo.txt`

export function Navbar() {
  function handleOpenMenu() {
    document.body.classList.add('menu-expanded')
    document.querySelector('.menu')?.classList.remove('hidden')
  }

  function handleCloseMenu() {
    document.body.classList.remove('menu-expanded')
    document.querySelector('.menu')?.classList.add('hidden')
  }

  return (
    <nav
      className={
        'w-full h-[70px] laptop:h-[50px] bg-gradient-to-r from-[#EF3037] to-[#3F3F95] flex justify-center text-white text-sm transition-all duration-500 ease-linear z-50'
      }
    >
      <div className="px-[14px] w-full h-full flex items-center justify-between laptop:hidden">
        <Link href="/">
          <picture>
            <img className="w-[90px]" src="/logo-white.png" alt="" />
          </picture>
        </Link>

        <a>
          <button
            aria-expanded="false"
            aria-label="Abrir menu"
            className="open-menu"
            onClick={handleOpenMenu}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 20H30"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 12H30"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 28L30 28"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </a>

        <div className="hidden menu">
          <div className="w-full h-[70px] flex items-center justify-between laptop:hidden">
            <Link href="/">
              <picture>
                <img className="w-[90px]" src="/logo-white.png" alt="" />
              </picture>
            </Link>
            <a>
              <button
                aria-expanded="false"
                aria-label="Abrir menu"
                onClick={handleCloseMenu}
              >
                <X size={32} weight="light" />
              </button>
            </a>
          </div>

          <ul className="flex flex-col items-center justify-center flex-1 h-full text-lg">
            <li>
              <Link legacyBehavior href="/noticias">
                <a onClick={handleCloseMenu}>Notícias</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/sobre">
                <a onClick={handleCloseMenu}>Quem somos</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/estrutura">
                <a onClick={handleCloseMenu}>Estrutura Organizacional</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/transportes/hidroviario">
                <a onClick={handleCloseMenu}>Transporte Hidroviário</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/terminais">
                <a onClick={handleCloseMenu}>Terminais</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/terminais/rodoviarios">
                <a onClick={handleCloseMenu}>Terminais Rodoviários</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/terminais/aeroviarios">
                <a onClick={handleCloseMenu}>Terminais Aeroviários</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/faq">
                <a onClick={handleCloseMenu}>FAQ</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="hidden w-full px-[14px] laptop:h-full laptop:max-w-[1280px] laptop:m-auto laptop:flex items-center justify-between gap-4 z-10">
        <Link legacyBehavior href="/">
          <a className="flex items-center gap-2">
            <House size={20} weight="light" />
            <span className="font-normal">Início</span>
          </a>
        </Link>

        <Menu as="div" className="relative h-full">
          <Menu.Button className="flex items-center h-full gap-2">
            <Bank size={20} weight="light" />
            <span className="font-normal">Institucional</span>
          </Menu.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="absolute flex flex-col justify-around gap-2 px-6 py-2 mt-4 bg-white border border-gray-400 rounded w-max">
              <Menu.Item>
                {({ active }) => (
                  <NextLink
                    href="/sobre"
                    className={`${active && 'text-gray-900'}`}
                  >
                    Quem somos
                  </NextLink>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <NextLink
                    href="/estrutura"
                    className={`${active && 'text-gray-900'}`}
                  >
                    Estrutura Organizacional
                  </NextLink>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <NextLink
                    href="/organograma"
                    className={`${active && 'text-gray-900'}`}
                  >
                    Organograma
                  </NextLink>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <NextLink
                    href="/polosba"
                    className={`${active && 'text-gray-900'}`}
                  >
                    Polos Regionais
                  </NextLink>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>

        <Menu as="div" className="relative">
          <Menu.Button className="flex items-center gap-2">
            <Tag size={20} weight="light" />
            <span className="font-normal">Serviços Regulados</span>
          </Menu.Button>
          <Menu.Items className="absolute flex flex-col justify-around gap-2 px-6 py-2 mt-4 bg-white border border-gray-400 rounded w-max">
            {/* <Menu.Item>
              {({ active }) => (
                <NextLink href="/" className={`${active && 'text-gray-900'}`}>
                  <span className="opacity-50 cursor-not-allowed">
                    Transporte Rodoviário (em breve)
                  </span>
                </NextLink>
              )}
            </Menu.Item> */}
            <Menu.Item>
              {({ active }) => (
                <NextLink
                  href="/transportes/hidroviario"
                  className={`${active && 'text-gray-900'}`}
                >
                  <span>Transporte Hidroviário</span>
                </NextLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NextLink
                  href="/servicos"
                  className={`${active && 'text-gray-900'}`}
                >
                  <span>Serviços</span>
                </NextLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NextLink
                  href="/terminais"
                  className={`${active && 'text-gray-900'}`}
                >
                  <span>Terminais</span>
                </NextLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NextLink
                  href="/tarifas"
                  className={`${active && 'text-gray-900'}`}
                >
                  <span>Tarifas</span>
                </NextLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NextLink
                  href="/rodovias"
                  className={`${active && 'text-gray-900'}`}
                >
                  <span>Rodovias Concessionadas</span>
                </NextLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NextLink
                  href="/gas"
                  className={`${active && 'text-gray-900'}`}
                >
                  <span>Gás</span>
                </NextLink>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>

        <Menu as="div" className="relative">
          <Menu.Button className="flex items-center gap-2">
            <Info size={20} weight="light" />
            <span className="font-normal">Informações Gerais</span>
          </Menu.Button>

          <Menu.Items className="absolute flex flex-col justify-around gap-2 px-6 py-2 mt-4 bg-white border border-gray-400 rounded w-max">
            <Menu.Item>
              {({ active }) => (
                <NextLink
                  href="/contato"
                  className={`${active && 'text-gray-900'}`}
                >
                  <span>Declaração de Tarifa</span>
                </NextLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NextLink
                  href="/cadastros"
                  className={`${active && 'text-gray-900'}`}
                >
                  <span>Cadastro</span>
                </NextLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NextLink
                  href="/veiculos-e-vistorias"
                  className={`${active && 'text-gray-900'}`}
                >
                  <span>Veículos e Vistorias</span>
                </NextLink>
              )}
            </Menu.Item>
            {/* <Menu.Item>
              {({ active }) => (
                <NextLink href="/" className={`${active && 'text-gray-900'}`}>
                  <span className="opacity-50 cursor-not-allowed">
                    Vistorias (em breve)
                  </span>
                </NextLink>
              )}
            </Menu.Item> */}
            {/* <Menu.Item>
              {({ active }) => (
                <NextLink href="/" className={`${active && 'text-gray-900'}`}>
                  <span className="opacity-50 cursor-not-allowed">
                    Licenças (em breve)
                  </span>
                </NextLink>
              )}
            </Menu.Item> */}
            {/* <Menu.Item>
              {({ active }) => (
                <NextLink href="/" className={`${active && 'text-gray-900'}`}>
                  <span className="opacity-50 cursor-not-allowed">
                    Taxas (em breve)
                  </span>
                </NextLink>
              )}
            </Menu.Item> */}
            {/* <Menu.Item>
              {({ active }) => (
                <NextLink href="/" className={`${active && 'text-gray-900'}`}>
                  <span className="opacity-50 cursor-not-allowed">
                    Multas (em breve)
                  </span>
                </NextLink>
              )}
            </Menu.Item> */}
            <Menu.Item>
              {({ active }) => (
                <NextLink
                  href="/beneficios"
                  className={`${active && 'text-gray-900'}`}
                >
                  <span>Benefícios</span>
                </NextLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NextLink
                  href="/direitos-e-deveres"
                  className={`${active && 'text-gray-900'}`}
                >
                  <span>Direitos e Deveres</span>
                </NextLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NextLink
                  href="/noticias"
                  className={`${active && 'text-gray-900'}`}
                >
                  <span>Notícias</span>
                </NextLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NextLink
                  href="/faq"
                  className={`${active && 'text-gray-900'}`}
                >
                  <span>FAQ</span>
                </NextLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NextLink
                  href="/cartilhas"
                  className={`${active && 'text-gray-900'}`}
                >
                  <span>Cartilhas</span>
                </NextLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NextLink
                  href="/taxas"
                  className={`${active && 'text-gray-900'}`}
                >
                  <span>Taxas de Serviços</span>
                </NextLink>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>

        <Link legacyBehavior href="/legislacoes">
          <a className="flex items-center gap-2">
            <BookBookmark size={20} weight="light" />
            <span className="font-normal">Legislações</span>
          </a>
        </Link>

        <Menu as="div" className="relative">
          <Menu.Button className="flex items-center gap-2">
            <LockOpen size={20} weight="light" />
            <span className="font-normal">Transparência</span>
          </Menu.Button>
          <Menu.Items className="absolute flex flex-col justify-around gap-2 px-6 py-2 mt-4 bg-white border border-gray-400 rounded w-max">
            <Menu.Item>
              {({ active }) => (
                <NextLink
                  href="/pesquisas-resultados"
                  className={`${active && 'text-gray-900'}`}
                >
                  <span>Resultados de Pesquisas</span>
                </NextLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NextLink
                  href="/audiencias-publicas"
                  className={`${active && 'text-gray-900'}`}
                >
                  <span>Audiências Públicas</span>
                </NextLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NextLink
                  href="/consultas-publicas"
                  className={`${active && 'text-gray-900'}`}
                >
                  <span>Consultas Públicas</span>
                </NextLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NextLink
                  href="/licitacoes"
                  className={`${active && 'text-gray-900'}`}
                >
                  <span>Licitações</span>
                </NextLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NextLink
                  href="/atas-do-colegiado"
                  className={`${active && 'text-gray-900'}`}
                >
                  <span>Atas do Colegiado</span>
                </NextLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NextLink
                  href="/atas-de-julgamento"
                  className={`${active && 'text-gray-900'}`}
                >
                  <span>Atas de Julgamento</span>
                </NextLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NextLink
                  href="http://sider.agerba.ba.gov.br/cnd"
                  target="_blank"
                  className={`${active && 'text-gray-900'}`}
                >
                  <span>Portal CND</span>
                </NextLink>
              )}
            </Menu.Item>
            {/* <Menu.Item>
              {({ active }) => (
                <NextLink href="/" className={`${active && 'text-gray-900'}`}>
                  <span className="opacity-50 cursor-not-allowed">
                    Transparências COVID (em breve)
                  </span>
                </NextLink>
              )}
            </Menu.Item> */}
            {/* <Menu.Item>
              {({ active }) => (
                <NextLink
                  href={fileUrl}
                  download
                  className={`${active && 'text-gray-900'}`}
                >
                  <span>Valida certificado</span>
                </NextLink>
              )}
            </Menu.Item> */}
          </Menu.Items>
        </Menu>

        <Link legacyBehavior href="http://www.acessoainformacao.ba.gov.br">
          <a
            className="flex items-center gap-2 bg-white rounded-lg"
            target="_blank"
          >
            <picture>
              <img
                src="http://www.agerba.ba.gov.br/themes/custom/secom/image/acessoinformacao.png"
                alt=""
              />
            </picture>
          </a>
        </Link>
      </div>
    </nav>
  )
}
