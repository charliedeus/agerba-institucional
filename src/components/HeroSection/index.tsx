import { CaretDoubleRight } from 'phosphor-react'

export function HeroSection() {
  return (
    <>
      <section className="w-full desktop:max-w-[1280px] h-[calc(100vh-70px)] m-auto tablet:h-[calc(100vh-170px)]">
        <div className="h-full flex flex-col justify-end gap-4 px-8 laptop:px-24 pb-16 laptop:pb-24 absolute top-0 z-50 ">
          <h3 className="font-bold text-white laptop:text-[1.75rem] tablet:text-[1.5rem] leading-tight laptop:leading-relaxed tablet:leading-snug laptop:max-w-[50rem] tablet:max-w-[30rem]">
            RELATÓRIOS DO PLANO DIRETOR DO SISTEMA DE TRAVESSIA POR TRANSPORTE
            HIDROVIÁRIO DE VALENÇA E ÁREAS DE INFLUÊNCIA
          </h3>

          <button className="font-normal flex items-center justify-center gap-2 laptop:w-80 px-8 py-2 laptop:py-4 text-white outline-none border border-white rounded-lg hover:bg-primary ">
            <span>Leia mais</span>
            <CaretDoubleRight />
          </button>
        </div>

        <div className="w-full h-full p-[14px]">
          <img
            className="w-full h-full object-cover object-center rounded-lg"
            src="https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=60"
            alt=""
          />
        </div>
      </section>
    </>
  )
}
