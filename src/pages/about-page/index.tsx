import { ReactElement } from 'react'

import type { NextPageWithLayout } from '../_app'
import { DefaultLayout } from '../../layouts/DefaultLayout'

const AboutPage: NextPageWithLayout = () => {
  return (
    <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 font-normal text-lg">
      <h1 className="font-bold text-[2rem]">Quem somos</h1>

      <p>
        A AGERBA - Agência Estadual de Regulação de Serviços Públicos de
        Energia, Transportes e Comunicações da Bahia, autarquia, em regime
        especial, vinculada à Secretaria de Infraestrutura do Estado da Bahia,
        foi criada em 19 de maio de 1998, pela Lei n.º 7.314, e regulamentada
        pelo Decreto n.º 7.426, de 31 de agosto de 1998.{' '}
      </p>

      <span className="border-gray-700 border-l-4 pl-4 font-bold">
        Foco no Negócio
      </span>

      <p>
        Gestão dos serviços públicos delegados no estado da Bahia, através da
        regulação e fiscalização.
      </p>

      <span className="border-gray-700 border-l-4 pl-4 font-bold">Missão</span>

      <p>
        Promover o equilíbrio nas relações entre o poder concedente, as
        entidades reguladas e os usuários, visando a excelência dos serviços
        públicos delegados.
      </p>

      <span className="border-gray-700 border-l-4 pl-4 font-bold">Visão</span>

      <p>
        Ser reconhecida como referencial de excelência em regulação e
        fiscalização dos serviços públicos delegados, de forma criativa e
        inovadora, visando a máxima satisfação dos seus clientes e usuários.
      </p>
    </article>
  )
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default AboutPage
