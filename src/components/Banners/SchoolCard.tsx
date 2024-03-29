import Link from 'next/link'

export function SchoolCard() {
  return (
    <section className="w-full pb-8 desktop:w-[1280px] desktop:max-w-[1280px] flex justify-center m-auto">
      <Link href="http://carteira.agerba.ba.gov.br/">
        <div>
          <picture>
            <img
              className="object-cover"
              src="/banner-carteira-estudante.png"
              alt=""
            />
          </picture>
        </div>
      </Link>
    </section>
  )
}
