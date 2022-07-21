import Link from 'next/link'

export function Transparency() {
  return (
    <section className="py-12 bg-green-300">
      <Link href="http://www.transparencia.ba.gov.br/">
        <a
          className="flex flex-col tablet:flex-row items-center justify-center gap-8 px-14 laptop:px-0 laptop:w-[1024px] laptop:max-w-[1024px] laptop:m-auto"
          target="_blank"
        >
          <img className="w-56" src="/portal-transparencia.png" alt="" />
          <h3 className="tablet:h-full text-sm laptop:text-lg font-bold leading-snug">
            Acompanhe, de forma fácil e intuitiva, os recursos arrecadados pelo
            Estado da Bahia e suas aplicações.
          </h3>
        </a>
      </Link>
    </section>
  )
}
