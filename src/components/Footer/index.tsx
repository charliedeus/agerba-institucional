import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full min-h-[300px] flex items-center justify-center bg-[#3F3F95] py-16">
      <div className="w-full desktop:max-w-[1280px] flex flex-col desktop:flex-row items-center justify-between gap-10 text-white">
        <Link href="/">
          <a>
            <img className="max-w-[10rem]" src="/logo-white.png" alt="" />
          </a>
        </Link>
        <div>
          <ul className="flex flex-col gap-4">
            <li>Protocolo Online</li>
            <li>Carteira Estudantil</li>
            <li>Arquivos</li>
            <li>Audiências Públicas</li>
            <li>Consultas Públicas</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-4">
            <li>Protocolo Online</li>
            <li>Carteira Estudantil</li>
            <li>Arquivos</li>
            <li>Audiências Públicas</li>
            <li>Consultas Públicas</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-4">
            <li>Protocolo Online</li>
            <li>Carteira Estudantil</li>
            <li>Arquivos</li>
            <li>Audiências Públicas</li>
            <li>Consultas Públicas</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
