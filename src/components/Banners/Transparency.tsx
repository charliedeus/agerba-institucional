import Link from 'next/link'

export function Transparency() {
  return (
    <section className="px-[14px] h-[150px] bg-green-200">
      <div className="flex items-center justify-center h-full gap-6 m-auto laptop:w-[1024px] desktop:w-[1280px] max-w-[1280px]">
        <Link href="http://www.transparencia.ba.gov.br/">
          <a className="flex-1" target="_blank">
            <img src="/portal-transparencia.png" alt="" />
          </a>
        </Link>

        <h3 className="w-[10rem] laptop:w-[50%] h-full text-sm laptop:text-lg font-bold leading-snug flex items-center">
          Acompanhe, de forma fácil e intuitiva, os recursos arrecadados pelo
          Estado da Bahia e suas aplicações.
        </h3>
      </div>
    </section>
  )
}
