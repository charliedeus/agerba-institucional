import type { ReactElement } from 'react'
import { DefaultLayout } from '../layouts/DefaultLayout'
import type { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return (
    <section className="w-full h-[calc(100vh-50px)] tablet:h-[calc(100vh-150px)] relative">
      <div className="w-full h-full flex flex-col justify-end gap-4 px-8 pb-16 absolute top-0 z-50">
        <h3 className="font-bold text-white">
          RELATÓRIOS DO PLANO DIRETOR DO SISTEMA DE TRAVESSIA POR TRANSPORTE
          HIDROVIÁRIO DE VALENÇA E ÁREAS DE INFLUÊNCIA
        </h3>

        <button className="font-normal px-8 py-2 text-white outline-none border border-white rounded-lg">
          Leia mais
        </button>
      </div>

      <div className="w-full h-full relative p-[14px]">
        <img
          className="w-full h-full object-cover object-center rounded-lg"
          src="https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=60"
          alt=""
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-blue-300 opacity-20"></div>
      </div>
    </section>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
