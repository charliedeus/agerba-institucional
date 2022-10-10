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
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
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

const RegistrationsPage: NextPageWithLayout = () => {
  const [page] = useState(1)
  const [isSelectQuestion, setIsSelectQuestion] = useState(0)

  const { data } = useGetConteudoSetorQuery({
    variables: {
      limit: 5,
      start: (page - 1) * 5,
      type: 'Cadastros',
    },
  })

  return (
    <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
      {questions.map((item) => (
        <div key={item.id} className="flex flex-col gap-6">
          <h1 className="font-bold text-[2rem]">
            {data?.departments?.data[0].attributes?.type}
          </h1>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          {data?.departments?.data[0].attributes?.sections && (
            <ul className="flex flex-wrap gap-2">
              {data?.departments?.data[0].attributes?.sections.map(
                (question, index) => (
                  <button
                    key={index}
                    className="bg-primary py-2 px-4 rounded-lg cursor-pointer hover:bg-opacity-90 transition-colors duration-75 ease-in-out"
                    onClick={(e) => setIsSelectQuestion(index)}
                  >
                    <span className="text-white">{question?.question}</span>
                  </button>
                ),
              )}
            </ul>
          )}

          {data?.departments?.data[0].attributes?.sections && (
            <article className="flex flex-col gap-14">
              {data?.departments?.data[0].attributes?.sections[
                isSelectQuestion
              ]?.answers?.map((answer) => (
                <section
                  key={answer?.id}
                  className="w-full h-full flex flex-col gap-4"
                >
                  {answer?.cover?.data && (
                    <div className="shadow-lg">
                      <picture>
                        <img
                          src={urlBuilder(answer.cover.data?.attributes?.url)}
                          alt={answer.cover.data?.attributes?.name}
                          className="object-cover object-center w-full h-80 max-h-80"
                        />
                      </picture>
                    </div>
                  )}

                  <h1 className="font-bold text-xl border-gray-700 border-l-4 pl-4">
                    {answer?.title}
                  </h1>

                  {answer?.subtitle && (
                    <h1 className="font-bold text-base text-gray-500 border-l-4 border-transparent pl-4">
                      {answer?.subtitle}
                    </h1>
                  )}

                  <div
                    className="text-gray-700 border-l-4 border-transparent px-4 flex flex-col gap-2"
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
                    <h1 className="text-md font-bold text-gray-900 -mb-10">
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
                            <span className="font-bold text-md text-gray-900">
                              {document?.name}
                            </span>
                          </div>
                          <Link
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
                              <span className="font-normal text-sm group-hover:text-primary">
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

      {/* <ul role="list" className="flex flex-col gap-2">
        {orderedList?.map((consulta) => (
          <li
            key={consulta?.id}
            className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg"
          >
            <Disclosure as="div" className="flex flex-col gap-8 w-full">
              <div className="flex flex-col laptop:flex-row laptop:w-full gap-2">
                <Disclosure.Button className="flex flex-col flex-1 laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center  text-left">
                  <span className="font-bold laptop:flex-1 flex items-center gap-2">
                    <BellRinging
                      size={16}
                      weight="light"
                      className="text-gray-500"
                    />{' '}
                    {consulta?.Titulo}
                  </span>
                </Disclosure.Button>
                <Link href={`/consultas-publicas/${consulta?.id}`}>
                  <a className="font-bold bg-primary w-1/2 laptop:w-auto m-auto rounded-lg p-2 flex items-center justify-center">
                    <Info size={16} weight="bold" className="text-white" />{' '}
                  </a>
                </Link>
              </div>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                {consulta?.comunica && (
                  <Disclosure.Panel
                    as="div"
                    className="text-gray-500 text-sm text-left mt-[-1rem] bg-gray-200 p-4 rounded-b-lg"
                    dangerouslySetInnerHTML={{
                      __html: consulta?.comunica,
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

RegistrationsPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default RegistrationsPage
