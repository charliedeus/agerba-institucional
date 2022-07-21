import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full min-h-[300px] flex items-center justify-center bg-[#3F3F95] py-10">
      <div className="w-full desktop:max-w-[1280px] flex flex-col items-center justify-between gap-10 text-white">
        <Link href="/">
          <a className="w-full flex items-center justify-center ">
            <img className="max-w-[10rem]" src="/logo-white.png" alt="" />
          </a>
        </Link>
        <div>
          <ul>
            <li>Protocolo Online</li>
            <li>Carteira Estudantil</li>
            <li>Arquivos</li>
            <li>Audiências Públicas</li>
            <li>Consultas Públicas</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Protocolo Online</li>
            <li>Carteira Estudantil</li>
            <li>Arquivos</li>
            <li>Audiências Públicas</li>
            <li>Consultas Públicas</li>
          </ul>
        </div>
        <div>
          <ul>
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
