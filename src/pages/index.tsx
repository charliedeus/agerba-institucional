import type { ReactElement } from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'

import type { NextPageWithLayout } from './_app'

import { DefaultLayout } from '../layouts/DefaultLayout'
import 'swiper/css'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <section className="w-full desktop:w-[1280px] desktop:max-w-[1280px] h-[calc(100vh-50px)] m-auto tablet:h-[calc(100vh-150px)] relative">
        <div className="w-full h-full flex flex-col justify-end gap-4 px-8 laptop:px-24 pb-16 laptop:pb-24 absolute top-0 z-50">
          <h3 className="font-bold text-white laptop:text-[1.75rem] tablet:text-[1.5rem] leading-tight laptop:leading-relaxed tablet:leading-snug laptop:w-[50rem] tablet:w-[30rem]">
            RELATÓRIOS DO PLANO DIRETOR DO SISTEMA DE TRAVESSIA POR TRANSPORTE
            HIDROVIÁRIO DE VALENÇA E ÁREAS DE INFLUÊNCIA
          </h3>

          <button className="font-normal laptop:w-80 px-8 py-2 laptop:py-4 text-white outline-none border border-white rounded-lg">
            Leia mais
          </button>
        </div>

        <div className="w-full h-full relative p-[14px]">
          <img
            className="w-full h-full object-cover object-center rounded-lg"
            src="https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=60"
            alt=""
          />
        </div>
      </section>

      <section className="bg-green-300 py-12">
        <Link href="http://www.transparencia.ba.gov.br/">
          <a
            className="flex flex-col tablet:flex-row items-center justify-center gap-8 px-14 laptop:px-0 laptop:w-[1024px] laptop:max-w-[1024px] laptop:m-auto"
            target="_blank"
          >
            <img className="w-56" src="/portal-transparencia.png" alt="" />
            <h3 className="tablet:h-full text-sm laptop:text-lg font-bold leading-snug">
              Acompanhe, de forma fácil e intuitiva, os recursos arrecadados
              pelo Estado da Bahia e suas aplicações.
            </h3>
          </a>
        </Link>
      </section>

      <section className="w-full h-screen p-[14px] m-auto">
        <h3 className="font-bold text-base uppercase">PAINEL DE SERVIÇOS</h3>

        <div className="h-[300px] flex flex-wrap gap-4 items-center justify-center mt-[0.875rem]">
          <Swiper className="h-full border border-black" slidesPerView={4}>
            <SwiperSlide className="bg-red-300">
              <h3>Rodoviário</h3>
            </SwiperSlide>
            <SwiperSlide className="">
              <h3>Hidroviários</h3>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
