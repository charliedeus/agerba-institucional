import Link from 'next/link'
import { Bank, BookBookmark, House, Info, LockOpen, Tag } from 'phosphor-react'
import { Menu, Transition } from '@headlessui/react'

import { NextLink } from '../NextLink'

export function Navbar() {
  return (
    <>
      <nav
        className={
          'w-full h-[70px] laptop:h-[50px] bg-gradient-to-r from-[#EF3037] to-[#3F3F95] flex justify-center text-white text-sm transition-all duration-500 ease-linear'
        }
      >
        <div className="px-[14px] w-full h-full flex items-center justify-between laptop:hidden">
          <Link href="/">
            <img className="w-[90px]" src="/logo-white.png" alt="" />
          </Link>

          <Link href="/">
            <a>
              {/* <List size={24} /> */}
              <button
                aria-expanded="false"
                aria-label="Abrir menu"
                className="open-menu"
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
          </Link>
        </div>

        <div className="hidden w-full px-[14px] laptop:h-full laptop:max-w-[1280px] laptop:m-auto laptop:flex items-center justify-between gap-4">
          <Link href="/">
            <a className="flex items-center gap-2">
              <House size={20} weight="light" />
              <span className="font-normal">Início</span>
            </a>
          </Link>

          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center gap-2">
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
              <Menu.Items className="absolute flex flex-col justify-around gap-2 w-max mt-4 py-2 px-6 border border-gray-400 rounded bg-white">
                <Menu.Item>
                  {({ active }) => (
                    <NextLink
                      href="/about-page"
                      className={`${active && 'text-gray-900'}`}
                    >
                      Quem somos
                    </NextLink>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <NextLink
                      href="/"
                      className={`${active && 'text-gray-900'}`}
                    >
                      Estrutura Organizacional
                    </NextLink>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <NextLink
                      href="/"
                      className={`${active && 'text-gray-900'}`}
                    >
                      Organograma
                    </NextLink>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <NextLink
                      href="/"
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
            <Menu.Items className="absolute flex flex-col justify-around gap-2 w-max mt-4 py-2 px-6 border border-gray-400 rounded bg-white">
              <Menu.Item as="div">
                <span className="font-base text-gray-900 cursor-pointer">
                  Transporte Rodoviário
                </span>
              </Menu.Item>
              <Menu.Item as="div">
                <span className="font-base text-gray-900 cursor-pointer">
                  Transporte Hidroviário
                </span>
              </Menu.Item>
              <Menu.Item as="div">
                <span className="font-base text-gray-900 cursor-pointer">
                  Terminais Rodoviários
                </span>
              </Menu.Item>
              <Menu.Item as="div">
                <span className="font-base text-gray-900 cursor-pointer">
                  Terminais Hidroviários
                </span>
              </Menu.Item>
              <Menu.Item as="div">
                <span className="font-base text-gray-900 cursor-pointer">
                  Terminais Aeroviários
                </span>
              </Menu.Item>
              <Menu.Item as="div">
                <span className="font-base text-gray-900 cursor-pointer">
                  Rodovias Concessionadas
                </span>
              </Menu.Item>
              <Menu.Item as="div">
                <span className="font-base text-gray-900 cursor-pointer">
                  Gás
                </span>
              </Menu.Item>
            </Menu.Items>
          </Menu>

          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center gap-2">
              <Info size={20} weight="light" />
              <span className="font-normal">Informações Gerais</span>
            </Menu.Button>
            <Menu.Items className="absolute flex flex-col justify-around gap-2 w-max mt-4 py-2 px-6 border border-gray-400 rounded bg-white">
              <Menu.Item as="div">
                <span className="font-base text-gray-900 cursor-pointer">
                  Cadastro
                </span>
              </Menu.Item>
              <Menu.Item as="div">
                <span className="font-base text-gray-900 cursor-pointer">
                  Vistorias
                </span>
              </Menu.Item>
              <Menu.Item as="div">
                <span className="font-base text-gray-900 cursor-pointer">
                  Licenças
                </span>
              </Menu.Item>
              <Menu.Item as="div">
                <span className="font-base text-gray-900 cursor-pointer">
                  Taxas
                </span>
              </Menu.Item>
              <Menu.Item as="div">
                <span className="font-base text-gray-900 cursor-pointer">
                  Multas
                </span>
              </Menu.Item>
              <Menu.Item as="div">
                <span className="font-base text-gray-900 cursor-pointer">
                  Benefícios
                </span>
              </Menu.Item>
              <Menu.Item as="div">
                <span className="font-base text-gray-900 cursor-pointer">
                  Direitos e Deveres
                </span>
              </Menu.Item>
              <Menu.Item as="div">
                <span className="font-base text-gray-900 cursor-pointer">
                  Notícias
                </span>
              </Menu.Item>
              <Menu.Item as="div">
                <span className="font-base text-gray-900 cursor-pointer">
                  Perguntas Frequentes
                </span>
              </Menu.Item>
              <Menu.Item as="div">
                <span className="font-base text-gray-900 cursor-pointer">
                  Cartilhas
                </span>
              </Menu.Item>
            </Menu.Items>
          </Menu>

          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center gap-2">
              <BookBookmark size={20} weight="light" />
              <span className="font-normal">Legislações</span>
            </Menu.Button>
            <Menu.Items className="absolute flex flex-col justify-around gap-2 w-max mt-4 py-2 px-6 border border-gray-400 rounded bg-white">
              <Menu.Item as="div">
                <span className="font-base text-gray-900 cursor-pointer">
                  Resoluções
                </span>
              </Menu.Item>
              <Menu.Item as="div">
                <span className="font-base text-gray-900 cursor-pointer">
                  Leis/Decretos
                </span>
              </Menu.Item>
            </Menu.Items>
          </Menu>

          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center gap-2">
              <LockOpen size={20} weight="light" />
              <span className="font-normal">Transparência</span>
            </Menu.Button>
            <Menu.Items className="absolute flex flex-col justify-around gap-2 w-max mt-4 py-2 px-6 border border-gray-400 rounded bg-white">
              <Menu.Item as="div">
                <span className="font-base text-gray-900 cursor-pointer">
                  Audiências Públicas
                </span>
              </Menu.Item>
              <Menu.Item as="div">
                <span className="font-base text-gray-900 cursor-pointer">
                  Consultas Públicas
                </span>
              </Menu.Item>
              <Menu.Item as="div">
                <span className="font-base text-gray-900 cursor-pointer">
                  Licitações
                </span>
              </Menu.Item>
              <Menu.Item as="div">
                <span className="font-base text-gray-900 cursor-pointer">
                  Atas do Colegiado
                </span>
              </Menu.Item>
              <Menu.Item as="div">
                <span className="font-base text-gray-900 cursor-pointer">
                  Atas de Julgamento
                </span>
              </Menu.Item>
              <Menu.Item as="div">
                <span className="font-base text-gray-900 cursor-pointer">
                  Transparências COVID
                </span>
              </Menu.Item>
            </Menu.Items>
          </Menu>

          <Link href="http://www.acessoainformacao.ba.gov.br">
            <a
              className="flex items-center rounded-lg bg-white gap-2"
              target="_blank"
            >
              <img
                src="http://www.agerba.ba.gov.br/themes/custom/secom/image/acessoinformacao.png"
                alt=""
              />
            </a>
          </Link>
        </div>
      </nav>
    </>
  )
}
