import Link from 'next/link'

export function Footer() {
  return (
    <footer className="min-h-[300px] flex items-center justify-center bg-[#3F3F95] py-16">
      <div className="w-full desktop:max-w-[1280px] flex flex-col desktop:flex-row items-center justify-between gap-10 text-white">
        <Link href="/">
          <a>
            <img className="max-w-[10rem]" src="/logo-white.png" alt="" />
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
            <li>Arquivos</li>
            <li>Audiências Públicas</li>
            <li>Consultas Públicas</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-4">
            <li>Consultas Processos - SEI</li>
            <li>Ouvidoria</li>
            <li>Contratos e Aquisições - COVID 19</li>
            <li>Portal de Serviços - STIP</li>
            <li>Licitações</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-4">
            <li>Hidroviário</li>
            <li>Terminais</li>
            <li>Rodoviário</li>
            <li>Resoluções</li>
            <li>Taxas</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
