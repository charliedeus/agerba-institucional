import { ReactElement } from 'react'
import { motion } from 'framer-motion'

import type { NextPageWithLayout } from '../_app'
import { DefaultLayout } from '../../layouts/DefaultLayout'

const AboutPage: NextPageWithLayout = () => {
  return (
    <motion.article
      exit={{ opacity: 0 }}
      className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed"
    >
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { scale: 0.8, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.5,
            },
          },
        }}
        className="font-bold text-[2rem]"
      >
        Quem somos
      </motion.h1>

      <p>
        A AGERBA - Agência Estadual de Regulação de Serviços Públicos de
        Energia, Transportes e Comunicações da Bahia, autarquia, em regime
        especial, vinculada à Secretaria de Infraestrutura do Estado da Bahia,
        foi criada em 19 de maio de 1998, pela Lei n.º 7.314, e regulamentada
        pelo Decreto n.º 7.426, de 31 de agosto de 1998.{' '}
      </p>

      <div className="w-full flex flex-col laptop:flex-row gap-8 bg-gray-200 rounded-lg p-8 laptop:pb-32">
        <div className="flex flex-col gap-2 laptop:w-1/3">
          <h1 className="font-bold text-lg border-gray-700 border-l-4 pl-4">
            Foco
          </h1>
          <p className="text-sm">
            Gestão dos serviços públicos delegados no estado da Bahia, através
            da regulação e fiscalização.
          </p>
        </div>
        <div className="flex flex-col gap-2 laptop:w-1/3">
          <h1 className="font-bold text-lg border-gray-700 border-l-4 pl-4">
            Missão
          </h1>
          <p className="text-sm">
            Promover o equilíbrio nas relações entre o poder concedente, as
            entidades reguladas e os usuários, visando a excelência dos serviços
            públicos delegados.
          </p>
        </div>
        <div className="flex flex-col gap-2 laptop:w-1/3">
          <h1 className="font-bold text-lg border-gray-700 border-l-4 pl-4">
            Visão
          </h1>
          <p className="text-sm">
            Ser reconhecida como referencial de excelência em regulação e
            fiscalização dos serviços públicos delegados, de forma criativa e
            inovadora, visando a máxima satisfação dos seus clientes e usuários.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col laptop:w-2/3 m-auto laptop:mt-[-7rem] gap-8 bg-white rounded-lg p-8">
        <h1 className="font-bold text-lg border-gray-700 border-l-4 pl-4">
          Objetivos
        </h1>
        <ul
          role="list"
          className="marker:text-primary list-disc pl-5 text-sm flex flex-col gap-4"
        >
          <li>
            Oferecer aos usuários um serviço público delegado com elevado nível
            de qualidade;
          </li>
          <li>
            Contribuir para a universalização dos serviços públicos delegados,
            permitindo o acesso a todos os cidadãos, independentes de sua
            condição socioeconômica;
          </li>
          <li>
            Conduzir a gestão da AGERBA em conformidade com a legislação emanada
            dos poderes federais e dos concedentes, bem como respaldada por sua
            missão, diretrizes e princípios essenciais;
          </li>
          <li>
            Promover a capacitação técnica e o desenvolvimento pessoal dos seus
            colaboradores internos, bem como a modernização do parque
            tecnológico;
          </li>
          <li>
            Implementar uma comunicação ágil, transparente e eficaz interna e
            externamente;
          </li>
          <li>
            Conseguir e manter uma situação econômico-financeira
            autossustentável, constituída pelas suas receitas próprias.
          </li>
        </ul>
      </div>
    </motion.article>
  )
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default AboutPage
