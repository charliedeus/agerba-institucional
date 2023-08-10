import { ReactElement } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { motion } from 'framer-motion'
import { EnvelopeSimple, Phone } from 'phosphor-react'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import type { NextPageWithLayout } from '../_app'

const structureItems = [
  {
    id: uuidv4(),
    title: 'Diretoria Executiva',
    members: [
      {
        id: uuidv4(),
        initials: 'CM',
        name: 'Carlos Henrique de Azevedo Martins',
        occupation: 'Diretor Executivo',
        phone: '71 3115-4828 / 8615 / 4863 / 8625',
        email: 'diretoria.executiva@agerba.ba.gov.br',
      },
      {
        id: uuidv4(),
        initials: 'CS',
        name: 'Claudia Sousa Carvalho de Santana',
        occupation: 'Chefe de Gabinete',
        phone: '71 3115-8631',
        email: 'chefe.gabinete@agerba.ba.gov.br',
      },
      {
        id: uuidv4(),
        initials: 'NF',
        name: 'Napoleão Batista Lemos Filho',
        occupation: 'Assessor Chefe',
        phone: '71 3115-4889',
        email: 'assessoria.estrategico@agerba.ba.gov.br',
      },
      {
        id: uuidv4(),
        initials: 'JG',
        name: 'Joaquim Cesar Campos Guerra',
        occupation: 'Coordenador',
        phone: '71 3115-4841',
        email: 'cafi@agerba.ba.gov.br',
      },
      {
        id: uuidv4(),
        initials: 'GM',
        name: 'Gláucia Lopes Pedreira Macêdo',
        occupation: 'Ouvidora',
        phone: '71 3115-4702 / 4887',
        email: 'agerba.ouvidoria@agerba.ba.gov.br',
      },
      {
        id: uuidv4(),
        initials: '',
        name: 'Assessoria de Comunicação',
        occupation: 'Assessor de Comunicação',
        phone: '71 3115-8607',
        email: 'ascom@agerba.ba.gov.br',
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'Departamento de Tarifas e Pesquisas Socioeconômicas',
    members: [
      {
        id: uuidv4(),
        initials: 'TS',
        name: 'Tahis Flores Nunes Soares',
        occupation: 'Diretora Geral',
        phone: '71 3115-4839',
        email: 'dpe@agerba.ba.gov.br',
      },
      {
        id: uuidv4(),
        initials: 'LS',
        name: 'Luciano Marcelo Dantas de Souza',
        occupation: 'Diretor de Tarifas',
        phone: '71 3115-4805',
        email: 'diretoria.tarifas@agerba.ba.gov.br',
      },
      {
        id: uuidv4(),
        initials: 'NG',
        name: 'Nilton Roberto Martins Cabral Guimarães',
        occupation: 'Diretor de Pesquisas Socioeconomicas',
        phone: '71 3115-4866',
        email: 'dpse@agerba.ba.gov.br',
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'Departamento de Qualidade dos Serviços',
    members: [
      {
        id: uuidv4(),
        initials: 'ES',
        name: 'Eurico Bonfim Isaac da Silva',
        occupation: 'Diretor Geral',
        phone: '71 3115-4830',
        email: 'diretoria.servicos@agerba.ba.gov.br',
      },
      {
        id: uuidv4(),
        initials: 'FB',
        name: 'Felipe Augusto Silveira Behrens',
        occupation: 'Diretor de Fiscalização',
        phone: '71 3115-4861',
        email: 'diretoria.fiscalizacao@agerba.ba.gov.br',
      },
      {
        id: uuidv4(),
        initials: 'GS',
        name: 'Geraldo Joaquim Telles de Souza',
        occupation: 'Diretor de Planejamento Operacional',
        phone: '71 3115-4859',
        email: 'dplo@agerba.ba.gov.br',
      },
    ],
  },
]

const StructureOrganizationPage: NextPageWithLayout = () => {
  return (
    <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
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
        Estrutura Organizacional
      </motion.h1>

      {structureItems.map((section) => (
        <>
          <h1 className="pl-4 text-lg font-bold border-l-4 border-gray-700">
            {section.title}
          </h1>

          <div key={section.id} className="flex flex-wrap gap-2">
            {section.members.map((member) => (
              <motion.li
                whileHover={{
                  position: 'relative',
                  zIndex: 1,
                  scale: [1, 1.1, 1.05],
                  transition: {
                    duration: 0.3,
                  },
                }}
                key={member.id}
                className="list-none w-full laptop:max-w-[25rem]"
              >
                <div className="flex flex-col items-center gap-4 p-2 py-8 transition-colors duration-75 bg-gray-100 rounded-lg group laptop:p-8 hover:bg-primary">
                  <div className="flex items-center justify-center w-16 h-16 font-bold text-white rounded-full bg-primary group-hover:bg-gray-100 group-hover:text-primary">
                    {member.initials}
                  </div>
                  <div className="flex-1 pl-2 ltr:ml-3 rtl:mr-3">
                    <p className="text-base font-bold text-gray-900 group-hover:text-gray-100">
                      {member.name}
                    </p>
                    <p className="text-sm font-medium text-gray-900 group-hover:text-gray-200">
                      {member.occupation}
                    </p>
                    <p className="flex gap-2 text-sm font-medium text-gray-700 group-hover:text-gray-300">
                      <Phone
                        size={16}
                        weight="light"
                        className="text-gray-700 group-hover:text-gray-300"
                      />
                      {member.phone}
                    </p>
                    <p className="flex gap-2 text-sm font-medium text-gray-700 group-hover:text-gray-300">
                      <EnvelopeSimple
                        size={16}
                        weight="light"
                        className="text-gray-700 group-hover:text-gray-300"
                      />
                      {member.email}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </div>
        </>
      ))}
    </article>
  )
}

StructureOrganizationPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default StructureOrganizationPage
