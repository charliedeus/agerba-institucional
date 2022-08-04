import Link from 'next/link'
import { NextLink } from '../NextLink'

export function Footer() {
  return (
    <footer className="min-h-[300px] flex items-center justify-center bg-[#3F3F95] py-16">
      <div className="w-full desktop:max-w-[1280px] flex flex-col desktop:flex-row items-center laptop:items-start justify-between gap-10 text-white">
        <Link href="/">
          <a>
            <picture>
              <img className="max-w-[10rem]" src="/logo-white.png" alt="" />
            </picture>
          </a>
        </Link>
        <div>
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="http://sider.agerba.ba.gov.br/atendimento">
                <a target="_blank">Protocolo Online</a>
              </Link>
            </li>
            <li>
              <Link href="http://carteira.agerba.ba.gov.br/">
                <a target="_blank">Carteira Estudantil</a>
              </Link>
            </li>
            <li>
              <NextLink href="#" className="text-gray-400">
                <span className="opacity-75 cursor-not-allowed">
                  Arquivos (em breve)
                </span>
              </NextLink>
            </li>
            <li>
              <NextLink href="#" className="text-gray-400">
                <span className="opacity-75 cursor-not-allowed">
                  Audiências Públicas (em breve)
                </span>
              </NextLink>
            </li>
            <li>
              <NextLink href="/consultas-publicas">
                <span className="text-white">Consultas Públicas</span>
              </NextLink>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="http://www.portalseibahia.saeb.ba.gov.br/">
                <a target="_blank" className="text-white">
                  Consultas Processos
                </a>
              </Link>
            </li>
            <li>
              <NextLink href="/ouvidoria">
                <span className="text-white">Ouvidoria</span>
              </NextLink>
            </li>
            <li>
              <NextLink href="#" className="text-gray-400">
                <span className="opacity-75 cursor-not-allowed">
                  Contratos e Aquisições - COVID 19 (em breve)
                </span>
              </NextLink>
            </li>
            <li>
              <Link href="http://agerba.stipweb.com.br">
                <a target="_blank" className="text-white">
                  Portal de Serviços STIP
                </a>
              </Link>
            </li>
            <li>
              <NextLink href="#" className="text-gray-400">
                <span className="opacity-75 cursor-not-allowed">
                  Licitações (em breve)
                </span>
              </NextLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
