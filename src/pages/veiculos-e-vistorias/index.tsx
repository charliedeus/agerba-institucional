import { ReactElement, useState } from 'react'
import Link from 'next/link'
import { v4 as uuidV4 } from 'uuid'
import { File, FileArrowDown } from 'phosphor-react'

import type { NextPageWithLayout } from '../_app'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { useGetConteudoSetorQuery } from '../../graphql/generated'
import { urlBuilder } from '../../lib/urlBuilder'

const questions = [
  {
    id: uuidV4(),
    title: 'Cadastros',
    description: '',
    url: '/cadastros',
    questions: [
      { id: uuidV4(), question: 'O que é?', answer: '' },
      {
        id: uuidV4(),
        question: 'Quais os tipos de cadastro disponíveis?',
        answer: '',
      },
      {
        id: uuidV4(),
        question: 'Quais os tipos de serviço disponíveis?',
        answer: '',
      },
      {
        id: uuidV4(),
        question: 'Pergunta 04',
        answer: '',
      },
      {
        id: uuidV4(),
        question: 'Pergunta 05?',
        answer: '',
      },
      {
        id: uuidV4(),
        question: 'Pergunta 06?',
        answer: '',
      },
      {
        id: uuidV4(),
        question: 'Pergunta 07?',
        answer: '',
      },
      {
        id: uuidV4(),
        question: 'Pergunta 08?',
        answer: '',
      },
      {
        id: uuidV4(),
        question: 'Pergunta 09?',
        answer: '',
      },
      {
        id: uuidV4(),
        question: 'Pergunta 10?',
        answer: '',
      },
    ],
  },
]

const CovitPage: NextPageWithLayout = () => {
  const [page] = useState(1)
  const [isSelectQuestion, setIsSelectQuestion] = useState(0)

  const { data } = useGetConteudoSetorQuery({
    variables: {
      limit: 5,
      start: (page - 1) * 5,
      type: 'Veículos e Vistorias',
    },
  })

  return (
    <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
      {questions.map((item) => (
        <div key={item.id} className="flex flex-col gap-6">
          <h1 className="font-bold text-[2rem]">
            Veículos e Vistorias
          </h1>

          <p>
            Esta resolução define as regras para a inspeção técnica de veículos que operam no Sistema de Transporte Rodoviário Intermunicipal de Passageiros do Estado da Bahia (SRI)
          </p>

          {data?.departments?.data[0]?.attributes?.sections && (
            <ul className="flex flex-wrap gap-2">
              {data?.departments?.data[0].attributes?.sections.map(
                (question, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 transition-colors duration-75 ease-in-out rounded-lg cursor-pointer bg-primary hover:bg-opacity-90"
                    onClick={(e) => setIsSelectQuestion(index)}
                  >
                    <span className="text-white">{question?.question}</span>
                  </button>
                ),
              )}
            </ul>
          )}

          {data?.departments?.data[0]?.attributes?.sections && (
            <article className="flex flex-col gap-14">
              {data?.departments?.data[0].attributes?.sections[
                isSelectQuestion
              ]?.answers?.map((answer) => (
                <section
                  key={answer?.id}
                  className="flex flex-col w-full h-full gap-4"
                >
                  {answer?.cover?.data && (
                    <div className="overflow-hidden shadow-lg rounded-xl">
                      <picture>
                        <img
                          src={urlBuilder(answer.cover.data?.attributes?.url)}
                          alt={answer.cover.data?.attributes?.name}
                          className="object-cover object-center w-full h-80 max-h-80"
                        />
                      </picture>
                    </div>
                  )}

                  <h1 className="pl-4 text-xl font-bold border-l-4 border-gray-700">
                    {answer?.title}
                  </h1>

                  {answer?.subtitle && (
                    <h1 className="pl-4 text-base font-bold text-gray-500 border-l-4 border-transparent">
                      {answer?.subtitle}
                    </h1>
                  )}

                  <div
                    className="flex flex-col gap-2 px-4 text-gray-700 border-l-4 border-transparent"
                    dangerouslySetInnerHTML={{
                      __html: answer?.content!,
                    }}
                  />
                </section>
              ))}

              {data.departments?.data[0]?.attributes?.sections[isSelectQuestion]
                ?.documents &&
                data!.departments!.data[0]!.attributes!.sections[
                  isSelectQuestion
                ]!.documents!.length > 0 && (
                  <>
                    <h1 className="-mb-10 font-bold text-gray-900 text-md">
                      Arquivos de apoio:
                    </h1>
                    <ul role="list" className="flex flex-col gap-2 rounded-lg">
                      {data.departments.data[0].attributes.sections[
                        isSelectQuestion
                      ]?.documents?.map((document) => (
                        <li
                          key={document?.file.data?.attributes?.url}
                          className={`flex items-center justify-between laptop:flex-row gap-2 bg-gray-200 px-6 py-4 rounded-lg transition-colors duration-100 ease-in-out border border-transparent box-border hover:bg-gray-300`}
                        >
                          <div className="flex items-center gap-2">
                            <File
                              size={16}
                              weight="light"
                              className="text-gray-500"
                            />
                            <span className="font-bold text-gray-900 text-md">
                              {document?.name}
                            </span>
                          </div>
                          <Link
                            legacyBehavior
                            href={urlBuilder(
                              document?.file.data?.attributes?.url,
                            )}
                          >
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
                              <span className="text-sm font-normal group-hover:text-primary">
                                Baixar
                              </span>
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
            </article>
          )}
        </div>
      ))}
    </article>
  )
}

CovitPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default CovitPage
