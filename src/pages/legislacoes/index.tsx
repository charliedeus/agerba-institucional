import { ReactElement } from 'react'
import { v4 as uuidV4 } from 'uuid'

import type { NextPageWithLayout } from '../_app'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { Bookmark, File, FileArrowDown } from 'phosphor-react'

import { useGetResolucoesQuery } from '../../graphql/generated'
import Link from 'next/link'
import { urlBuilder } from '../../lib/urlBuilder'
import { Disclosure, Transition } from '@headlessui/react'

interface PublicationProps {
  id: string
  type: string
  title: string
  description: string
  publishedAt: Date
  documentUrl: string
}

interface LegislacaoProps {
  id: string
  type: string
  publications: PublicationProps[]
}

const leisPublicadas: Array<LegislacaoProps> = [
  {
    id: uuidV4(),
    type: 'Leis',
    publications: [
      {
        id: uuidV4(),
        title: 'LEI Nº 13.574 DE 14 DE SETEMBRO DE 2016',
        type: 'Leis',
        description:
          'Dispõe sobre a obrigatoriedade de instalação de dispositivo de segurança em veículos de transporte coletivo, objetivando garantir a segurança pública.',
        publishedAt: new Date(2016, 9, 14),
        documentUrl:
          'http://www.agerba.ba.gov.br/sites/default/files/documentos/2019-05/L13574-2016.pdf',
      },
      {
        id: uuidV4(),
        title: 'LEI Nº 13.464 DE 17 DE DEZEMBRO DE 2015',
        type: 'Leis',
        description:
          'Institui o regime de redução do valor de multas disciplinadas pelo Sistema de Transporte Rodoviário Intermunicipal de Passageiros do Estado da Bahia - SRI.',
        publishedAt: new Date(2015, 12, 17),
        documentUrl:
          'http://www.agerba.ba.gov.br/sites/default/files/documentos/2019-05/LEI%20N%C2%BA%2013.464.pdf',
      },
      {
        id: uuidV4(),
        title: 'LEI Nº 12.803 DE 27 DE MARÇO DE 2013',
        type: 'Leis',
        description:
          'Dispõe sobre o uso de aparelhos sonoros ou musicais no interior dos transportes coletivos intermunicipais no âmbito do Estado da Bahia e dá outras providências.',
        publishedAt: new Date(2013, 3, 27),
        documentUrl:
          'http://www.agerba.ba.gov.br/sites/default/files/documentos/2019-05/LEI%20N%C2%BA%2012.803.13.pdf',
      },
      {
        id: uuidV4(),
        title: 'LEI Nº 12.605, DE 14 DE DEZEMBRO DE 2012',
        type: 'Leis',
        description:
          'Altera os dispositivos da Lei nº 11.631, de 30 de dezembro de 2009 instituindo a Taxa de Poder de Policia no SISTEMA DE TRANSPORTE HIDROVIÁRIO INTERMUNICIPAL DE PASSAGEIROS DO ESTADO DA BAHIA – SHI.',
        publishedAt: new Date(2012, 12, 14),
        documentUrl:
          'http://www.agerba.ba.gov.br/sites/default/files/documentos/2019-05/Lei%2012.605.pdf',
      },
      {
        id: uuidV4(),
        title: 'LEI Nº 12.575 DE 26 DE ABRIL DE 2012',
        type: 'Leis',
        description:
          'Dispõe sobre a gratuidade para pessoas com deficiência nos transportes coletivos intermunicipais do Estado da Bahia.',
        publishedAt: new Date(2012, 4, 26),
        documentUrl:
          'http://www.agerba.ba.gov.br/sites/default/files/documentos/2019-05/Lei%2012.575.2012.pdf',
      },
      {
        id: uuidV4(),
        title: 'LEI Nº 12.044 DE 04 DE JANEIRO DE 2011',
        type: 'Leis',
        description:
          'Dispõe sobre o Sistema de Transporte Hidroviário Intermunicipal de Passageiros e Veículos do Estado da Bahia - SHI, e dá outras providências.',
        publishedAt: new Date(2011, 1, 4),
        documentUrl:
          'http://www.agerba.ba.gov.br/sites/default/files/documentos/2019-05/Lei%20n%2012.044.pdf',
      },
      {
        id: uuidV4(),
        title: 'LEI Nº 11.378 DE 18 DE FEVEREIRO DE 2009',
        type: 'Leis',
        description:
          'Dispõe sobre organização, planejamento, fiscalização e poder de polícia do Sistema de Transporte Rodoviário Intermunicipal de Passageiros do Estado da Bahia - SRI, e dá outras providências.',
        publishedAt: new Date(2009, 2, 18),
        documentUrl:
          'http://www.agerba.ba.gov.br/sites/default/files/documentos/2019-07/lei%20n%C2%BA%2011.378.pdf',
      },
      {
        id: uuidV4(),
        title: 'LEI COMPLEMENTAR N° 30 DE 03 DE JANEIRO DE 2008',
        type: 'Leis',
        description:
          'Dispõe sobre a inclusão dos municípios de São Sebastião do Passé e Mata de São João na Região Metropolitana de Salvador, e dá outras providências.',
        publishedAt: new Date(2008, 1, 3),
        documentUrl:
          'http://www.agerba.ba.gov.br/sites/default/files/documentos/2019-05/Lei%20complementar3008.pdf',
      },
      {
        id: uuidV4(),
        title: 'Lei nº 9.835 de 14 de dezembro de 2005',
        type: 'Leis',
        description:
          'Dispõe sobre a outorga de permissão e concessão para exploração do serviço de transporte hidroviário intermunicipal de passageiros e dá outras providências.',
        publishedAt: new Date(2005, 12, 14),
        documentUrl:
          'http://www.agerba.ba.gov.br/sites/default/files/documentos/2019-05/Lei9835.pdf',
      },
      {
        id: uuidV4(),
        title: 'Lei nº 6.566 de 10 de janeiro de 1994',
        type: 'Leis',
        description:
          'Dispõe sobre os serviços de transporte intermunicipal de passageiros e dá outras providências.',
        publishedAt: new Date(1994, 1, 10),
        documentUrl:
          'http://www.agerba.ba.gov.br/sites/default/files/documentos/2019-05/LEI%20N%C2%B0%206.566.pdf',
      },
      {
        id: uuidV4(),
        title: 'Lei nº 4.193 de 09 de dezembro de 1983',
        type: 'Leis',
        description:
          'Institui taxas pelo exercício do poder de polícia e de prestação de serviços e dá outras providências.',
        publishedAt: new Date(1983, 12, 9),
        documentUrl:
          'http://www.agerba.ba.gov.br/sites/default/files/documentos/2019-05/LEI%20N%C2%B0%204.193.pdf',
      },
    ],
  },
]

const decretosPublicados: Array<LegislacaoProps> = [
  {
    id: uuidV4(),
    type: 'Decretos',
    publications: [
      {
        id: uuidV4(),
        title: 'DECRETO Nº 13.168 DE 12 DE AGOSTO DE 2011',
        type: 'Decretos',
        description:
          'Regulamenta a Lei Estadual n º 12.044, de 04 de janeiro de 2011, que dispõe sobre o Sistema de Transporte Hidroviário Intermunicipal de Passageiros e Veículos do Estado da Bahia - SHI, e dá outras providências.',
        publishedAt: new Date(2011, 8, 12),
        documentUrl:
          'http://www.agerba.ba.gov.br/sites/default/files/documentos/2019-05/DECRETO%20N%C2%BA%2013.168.pdf',
      },
      {
        id: uuidV4(),
        title: 'DECRETO Nº 11.832 DE 09 DE NOVEMBRO DE 2009',
        type: 'Decretos',
        description:
          'Institui a Política Estadual de Transporte Rodoviário Intermunicipal de Passageiros - POTIP, regulamenta a Lei nº 11.378, de 18 de fevereiro de 2009, que dispõe sobre organização, planejamento, fiscalização e poder de polícia do Sistema de Transporte Rodoviário Intermunicipal de Passageiros do Estado da Bahia - SRI, e dá outras providências.',
        publishedAt: new Date(2009, 11, 9),
        documentUrl:
          'http://www.agerba.ba.gov.br/sites/default/files/documentos/2019-05/Dec11832-09.pdf',
      },
      {
        id: uuidV4(),
        title: 'Decreto nº 9595 de 19 de outubro de 2005',
        type: 'Decretos',
        description:
          'Aprova o Regulamento da Concessão do Serviço Público de Transporte Hidroviário de Navegação Marítima Interior, de passageiros, cargas e veículos, na Baía de Todos os Santos, no Estado da Bahia.',
        publishedAt: new Date(2005, 10, 19),
        documentUrl:
          'http://www.agerba.ba.gov.br/sites/default/files/documentos/2019-05/decretoe9595.pdf',
      },
      {
        id: uuidV4(),
        title: 'Decreto nº 9596 de 19 de outubro de 2005',
        type: 'Decretos',
        description:
          'Autoriza a concessão dos serviços públicos de transporte hidroviário de navegação marítima interior, de passageiros, cargas e veículos, na Baía de Todos os Santos, regula as condições gerais da concessão e dá outras providências.',
        publishedAt: new Date(2005, 10, 19),
        documentUrl:
          'http://www.agerba.ba.gov.br/sites/default/files/documentos/2019-05/decretoe9596.pdf',
      },
    ],
  },
]

const LegislationPage: NextPageWithLayout = () => {
  const { data } = useGetResolucoesQuery()

  const resolucoesPublicadas = data?.resolucoes?.map((resolucao) => {
    return {
      id: uuidV4(),
      title: resolucao?.Titulo.toUpperCase(),
      type: 'Resoluções',
      description: resolucao?.ementa,
      publishedAt: new Date(resolucao?.data),
      documentUrl: resolucao?.Documents && resolucao?.Documents[0]?.url,
    }
  })

  const legislacoesPublicadas = [
    {
      id: uuidV4(),
      type: 'Resoluções',
      publications: resolucoesPublicadas,
    },
    ...leisPublicadas,
    ...decretosPublicados,
  ]

  return (
    <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
      <h1 className="font-bold text-[2rem]">Legislações</h1>
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

      {legislacoesPublicadas.map((legislacao) => (
        <ul key={legislacao.id} role="list" className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl border-gray-700 border-l-4 pl-4 py-4">
            {legislacao.type}
          </h1>

          {legislacao.publications?.map((publicacao) => (
            <li
              key={publicacao.id}
              className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg transition-colors duration-100 ease-in-out border hover:border-secondary box-border"
            >
              <Disclosure as="div" className="flex flex-col gap-8 w-full">
                <div className="flex flex-col laptop:flex-row laptop:w-full gap-2">
                  <Disclosure.Button className="flex flex-col gap-4 flex-1 laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center text-left">
                    <span className="font-bold flex-1 flex items-center gap-2">
                      <File
                        size={16}
                        weight="light"
                        className="text-gray-500"
                      />{' '}
                      {publicacao.title?.toUpperCase()}
                    </span>
                    <span className="flex w-2/12 laptop:w-2/12 laptop:max-w-2/12 laptop:border-l-2 laptop:border-primary laptop:pl-2 items-center gap-2">
                      <Bookmark
                        size={16}
                        weight="light"
                        className="text-gray-500"
                      />
                      <span className="font-normal text-xs text-gray-500">
                        {publicacao.type}
                      </span>
                    </span>
                    {/* <span className="laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
                      <CalendarBlank
                        size={16}
                        weight="light"
                        className="text-gray-500"
                      />
                      <span className="font-bold">
                        {new Date(publicacao.publishedAt).toLocaleDateString(
                          'pt-BR',
                          {
                            timeZone: 'UTC',
                          },
                        )}
                      </span>
                    </span> */}
                  </Disclosure.Button>
                  <div className="flex items-center justify-center w-full laptop:max-w-[8rem] p-2 laptop:border-l-2 laptop:border-primary laptop:pl-2 text">
                    {publicacao.documentUrl ? (
                      <Link href={urlBuilder(publicacao.documentUrl)}>
                        <a
                          download
                          target="_blank"
                          className="flex gap-2 items-center justify-center bg-primary hover:bg-white text-white hover:text-primary px-4 py-2 rounded-[4px] border border-transparent hover:border-primary group"
                        >
                          <FileArrowDown
                            size={24}
                            weight="light"
                            className="text-white group-hover:text-primary"
                          />
                          <span className="font-normal text-sm group-hover:text-primary">
                            Baixar
                          </span>
                        </a>
                      </Link>
                    ) : (
                      <button
                        disabled
                        className="flex gap-2 items-center justify-center bg-primary hover:bg-white text-white hover:text-primary px-4 py-2 rounded-[4px]  group disabled:cursor-not-allowed disabled:bg-gray-400"
                      >
                        <FileArrowDown
                          size={24}
                          weight="light"
                          className="text-white group-hover:text-primary group-disabled:text-gray-600"
                        />
                        <span className="font-normal text-sm group-hover:text-primary group-disabled:text-gray-600">
                          Baixar
                        </span>
                      </button>
                    )}
                  </div>
                </div>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  {publicacao.description && (
                    <Disclosure.Panel
                      as="div"
                      className="text-gray-500 text-sm text-left mt-[-1rem] bg-gray-200 p-4 rounded-b-lg line-clamp-4"
                      dangerouslySetInnerHTML={{
                        __html: publicacao.description,
                      }}
                    ></Disclosure.Panel>
                  )}
                </Transition>
              </Disclosure>
            </li>
          ))}
        </ul>
      ))}

      {/* <ul role="list" className="flex flex-col gap-2">
        {todasAsLegislacoes.map((item: any) => (
          <li
            key={item?.id}
            className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg transition-colors duration-100 ease-in-out border hover:border-secondary box-border"
          >
            <Disclosure as="div" className="flex flex-col gap-8 w-full">
              <div className="flex flex-col laptop:flex-row laptop:w-full gap-2">
                <Disclosure.Button className="flex flex-col gap-4 flex-1 laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center text-left">
                  <span className="font-bold flex-1 flex items-center gap-2">
                    <File size={16} weight="light" className="text-gray-500" />{' '}
                    {item?.Titulo}
                  </span>
                  <span className="flex flex-1 laptop:border-l-2 laptop:border-primary laptop:pl-2 items-center gap-2">
                    <Bookmark
                      size={16}
                      weight="light"
                      className="text-gray-500"
                    />
                    <span className="font-normal text-xs text-gray-500">
                      {item?.tipos_de_resolucoe?.tipo}
                    </span>
                  </span>
                  <span className="laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
                    <CalendarBlank
                      size={16}
                      weight="light"
                      className="text-gray-500"
                    />
                    <span className="font-bold">
                      {new Date(item?.data).toLocaleDateString('pt-BR', {
                        timeZone: 'UTC',
                      })}
                    </span>
                  </span>
                </Disclosure.Button>
                <div className="flex items-center justify-center w-full laptop:max-w-[8rem] p-2 laptop:border-l-2 laptop:border-primary laptop:pl-2 text">
                  {item?.Documents && item.Documents.length > 0 ? (
                    <Link href={urlBuilder(item?.Documents[0]?.url)}>
                      <a
                        download
                        target="_blank"
                        className="flex gap-2 items-center justify-center bg-primary hover:bg-white text-white hover:text-primary px-4 py-2 rounded-[4px] hover:border hover:border-primary group"
                      >
                        <FileArrowDown
                          size={24}
                          weight="light"
                          className="text-white group-hover:text-primary"
                        />
                        <span className="font-normal text-sm group-hover:text-primary">
                          Baixar
                        </span>
                      </a>
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="flex gap-2 items-center justify-center bg-primary hover:bg-white text-white hover:text-primary px-4 py-2 rounded-[4px] hover:border hover:border-primary group disabled:cursor-not-allowed disabled:bg-gray-400"
                    >
                      <FileArrowDown
                        size={24}
                        weight="light"
                        className="text-white group-hover:text-primary group-disabled:text-gray-600"
                      />
                      <span className="font-normal text-sm group-hover:text-primary group-disabled:text-gray-600">
                        Baixar
                      </span>
                    </button>
                  )}
                </div>
              </div>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                {item?.ementa && (
                  <Disclosure.Panel
                    as="div"
                    className="text-gray-500 text-sm text-left mt-[-1rem] bg-gray-200 p-4 rounded-b-lg line-clamp-4"
                    dangerouslySetInnerHTML={{
                      __html: item.ementa,
                    }}
                  ></Disclosure.Panel>
                )}
              </Transition>
            </Disclosure>
          </li>
        ))}
      </ul> */}
    </article>
  )
}

LegislationPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default LegislationPage
