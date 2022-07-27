import { ReactElement } from 'react'
import { v4 as uuidv4 } from 'uuid'

import type { NextPageWithLayout } from '../_app'
import { DefaultLayout } from '../../layouts/DefaultLayout'

const structureItems = [
  {
    id: uuidv4(),
    title: 'Diretoria Executiva',
    members: [
      {
        id: uuidv4(),
        name: 'Carlos Henrique de Azevedo Martins',
        occupation: 'Diretor Executivo',
        phone: '71 3115-4828 / 8615 / 4863 / 8625',
        email: 'chenrique.martins@agerba.ba.gov.br',
      },
      {
        id: uuidv4(),
        name: 'Claudia Sousa Carvalho de Santana',
        occupation: 'Chefe de Gabinete',
        phone: '71 3115-8631',
        email: 'claudia.sousa@agerba.ba.gov.br',
      },
      {
        id: uuidv4(),
        name: 'Joaquim Cesar Campos Guerra',
        occupation: 'Assessor Chefe',
        phone: '71 3115-4889',
        email: 'joaquim.guerra@agerba.ba.gov.br',
      },
      {
        id: uuidv4(),
        name: 'Mário Simões Ferreira Junior',
        occupation: 'Coordenador',
        phone: '71 3115-4841',
        email: 'mario.junior@agerba.ba.gov.br',
      },
      {
        id: uuidv4(),
        name: 'Murilo Serafim da Costa',
        occupation: 'Ouvidor',
        phone: '71 3115-4702 / 4887',
        email: 'murilo.costa@agerba.ba.gov.br',
      },
      {
        id: uuidv4(),
        name: 'Lorena Lima de Jesus Carauna',
        occupation: 'Assessor de Comunicação',
        phone: '71 3115-8607',
        email: 'lorena.jesus@agerba.ba.gov.br',
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'Departamento de Tarifas e Pesquisas Socioeconômicas',
    members: [
      {
        id: uuidv4(),
        name: 'Tahis Flores Nunes Soares',
        occupation: 'Diretora Geral',
        phone: '71 3115-4839',
        email: 'tahis.soares@agerba.ba.gov.br',
      },
      {
        id: uuidv4(),
        name: 'Luciano Marcelo Dantas de Souza',
        occupation: 'Diretor de Tarifas',
        phone: '71 3115-4805',
        email: 'lucianomarcelo.souza1@agerba.ba.gov.br',
      },
      {
        id: uuidv4(),
        name: 'Nilton Roberto Martins Cabral Guimarães',
        occupation: 'Diretor de Pesquisas Socioeconomicas',
        phone: '71 3115-4866',
        email: 'nilton.guimaraes@agerba.ba.gov.br',
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'Departamento de Qualidade dos Serviços',
    members: [
      {
        id: uuidv4(),
        name: 'Sosthenes José Paes Campos Campos',
        occupation: 'Diretor Geral',
        phone: '71 3115-4830',
        email: 'sosthenes.campos@agerba.ba.gov.br',
      },
      {
        id: uuidv4(),
        name: 'Eurico Bonfim Isaac da Silva',
        occupation: 'Diretor de Fiscalização',
        phone: '71 3115-4861',
        email: 'eurico.silva@agerba.ba.gov.br',
      },
      {
        id: uuidv4(),
        name: 'Geraldo Joaquim Telles de Souza',
        occupation: 'Diretor de Planejamento Operacioanl',
        phone: '71 3115-4859',
        email: 'geraldojoaquim.souza@agerba.ba.gov.br',
      },
    ],
  },
]

const StructureOrganizationPage: NextPageWithLayout = () => {
  return (
    <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
      <h1 className="font-bold text-[2rem]">Estrutura Organizacional</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      {structureItems.map((section) => (
        <>
          <h1 className="font-bold text-lg border-gray-700 border-l-4 pl-4">
            {section.title}
          </h1>

          <div key={section.id} className="flex flex-wrap gap-2">
            {section.members.map((member) => (
              <li
                key={member.id}
                className="list-none w-full laptop:max-w-[25rem]"
              >
                <div className="group flex flex-col gap-4 items-center bg-gray-100 py-8 p-2 laptop:p-8">
                  <img
                    className="shrink-0 h-16 w-16 rounded-full"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=60"
                    alt=""
                  />
                  <div className="ltr:ml-3 rtl:mr-3 flex-1 pl-2">
                    <p className="text-base font-bold text-slate-300 group-hover:text-gray-900">
                      {member.name}
                    </p>
                    <p className="text-sm font-medium text-slate-500 group-hover:text-slate-300">
                      {member.occupation}
                    </p>
                    <p className="text-sm font-medium text-slate-500 group-hover:text-slate-300">
                      Tel: {member.phone}
                    </p>
                    <p className="text-sm font-medium text-slate-500 group-hover:text-slate-300">
                      e-mail: {member.email}
                    </p>
                  </div>
                </div>
              </li>
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
