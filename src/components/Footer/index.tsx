import Link from 'next/link'
import { NextLink } from '../NextLink'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="h-full min-h-[300px] flex items-center justify-center bg-[#3F3F95] py-16 border">
      <div className="w-full h-full desktop:max-w-[1280px] flex flex-col desktop:flex-row items-center laptop:items-start justify-between gap-10 text-white">
        <div className="flex flex-col gap-2">
          <Link href="/">
            <picture>
              <Image
                className="max-w-[10rem]"
                src="/logo-white.png"
                alt=""
                width={200}
                height={200}
              />
            </picture>
          </Link>
          <p>4º Avenida, 435 - Centro Administrativo da Bahia</p>
          <p>Salvador - BA, 41745-002</p>
        </div>
        <div>
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="http://sider.agerba.ba.gov.br/atendimento">
                <span>Protocolo Online</span>
              </Link>
            </li>
            <li>
              <Link href="/licitacoes">
                <span>Licitações</span>
              </Link>
            </li>
            <li>
              <Link href="/audiencias-publicas">
                <span className="text-white">Audiências Públicas</span>
              </Link>
            </li>
            <li>
              <NextLink href="#" className="text-gray-400">
                <span className="opacity-75 cursor-not-allowed">
                  Consultas Públicas (em breve)
                </span>
              </NextLink>
            </li>
            <li>
              <Link href="http://www.portalseibahia.saeb.ba.gov.br/">
                <span className="text-white">Consultas Processos</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-4">
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
                <span className="text-white">Portal de Serviços STIP</span>
              </Link>
            </li>
            <li>
              <NextLink href="/licitacoes">
                <span className="text-white">Licitações</span>
              </NextLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
