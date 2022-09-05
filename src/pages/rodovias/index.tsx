import { ReactElement } from 'react'

import type { NextPageWithLayout } from '../_app'
import { DefaultLayout } from '../../layouts/DefaultLayout'

// import { useGetRodoviasConcessionadasQuery } from '../../graphql/generated'

const HighwaysPage: NextPageWithLayout = () => {
  // const { data } = useGetRodoviasConcessionadasQuery()

  return (
    <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
      <h1 className="font-bold text-[2rem]">Rodovias Concessionadas</h1>

      <p>
        A AGERBA - Agência Estadual de Regulação de Serviços Públicos de
        Energia, Transportes e Comunicações da Bahia, autarquia, em regime
        especial, vinculada à Secretaria de Infraestrutura do Estado da Bahia,
        foi criada em 19 de maio de 1998, pela Lei n.º 7.314, e regulamentada
        pelo Decreto n.º 7.426, de 31 de agosto de 1998.{' '}
      </p>

      <p>
        São as <span className="font-bold">Rodovias Concessionadas</span>:
      </p>

      {/* <ul role="list" className="flex flex-col gap-2">
        {data?.rodovias?.map((rodovia) => (
          <li
            key={rodovia?.id}
            className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg"
          >
            <picture>
              <img
                className="shrink-0 h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1566054299976-3eb6f6a44ead?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGlnaHdheXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=40"
                alt=""
              />
            </picture>
            <div className="flex flex-col laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center">
              <span className="font-bold laptop:flex-1 laptop:pl-2">
                {rodovia?.Nome}
              </span>
              <span className="laptop:w-1/5 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
                <Phone size={16} weight="light" className="text-gray-500" />{' '}
                {rodovia?.Concessao && rodovia?.Concessao[0]?.telefone}
              </span>
              <span className="laptop:w-1/3 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
                <EnvelopeSimple
                  size={16}
                  weight="light"
                  className="text-gray-500"
                />{' '}
                {rodovia?.Concessao && rodovia?.Concessao[0]?.ouvidoria}
              </span>
            </div>
          </li>
        ))}
      </ul> */}
    </article>
  )
}

HighwaysPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default HighwaysPage
