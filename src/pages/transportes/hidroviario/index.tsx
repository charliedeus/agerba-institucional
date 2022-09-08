import { Disclosure, Transition } from '@headlessui/react'
import Link from 'next/link'
import { EnvelopeSimple, FileArrowDown, Phone, File } from 'phosphor-react'
import { ReactElement, useState } from 'react'
import { useGetTransportesHidroviariosQuery } from '../../../graphql/generated'
import { DefaultLayout } from '../../../layouts/DefaultLayout'
import { urlBuilder } from '../../../lib/urlBuilder'
import { NextPageWithLayout } from '../../_app'

const WaterwayTransportPage: NextPageWithLayout = () => {
  const [page] = useState(1)

  const { data } = useGetTransportesHidroviariosQuery({
    variables: {
      limit: 5,
      start: (page - 1) * 5,
    },
  })

  console.log(data)

  return (
    <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
      <h1 className="font-bold text-[2rem]">Transporte Hidroviário</h1>
      <p>
        O transporte hidroviário de passageiros e veículos é um serviço público
        de competência do Estado, conforme estabelecem a Lei nº. 12.044/2011
        (Dispõe sobre o Sistema de Transporte Hidroviário Intermunicipal de
        Passageiros e Veículos do Estado da Bahia) e o Decreto nº. 13.168/2011.
        Contudo, é outorgado à iniciativa privada por meio de uma concessão ou
        permissão, precedida de licitação.
      </p>

      <p>
        A mesma Lei estabelece que os serviços deverão ser planejados,
        coordenados, controlados, concedidos, permitidos, regulados e
        fiscalizados pela Agência Estadual de Regulação de Serviços Públicos de
        Energia, Transportes e Comunicações da Bahia - AGERBA, autarquia sob
        regim e especial, vinculada à Secretaria de Infraestrutura - SEINFRA.
      </p>

      <h1 className="font-bold text-lg border-gray-700 border-l-4 pl-4">
        Ferry Boat
      </h1>
      <p>
        O sistema <span className="font-bold">Ferry Boat</span> nasceu de uma
        necessidade de integrar a Bahia de Todos os Santos. Em 1969 foi iniciada
        a construção do Terminal Marítimo de Bom Despacho, uma das prioridades
        era a construção de um quebra-mar para proteger os barcos de grandes
        temporais. Do outro lado da costa, simultaneamente, era construído, nas
        proximidades do bairro de Água de Meninos, o Terminal de São Joaquim. A
        obra dos dois terminais e um trecho da estrada foi encomendada pelo
        Governo do Estado durante a gestão do governador Luís Vianna Filho. No
        dia 08 de dezembro de 1970 foi inaugurado o sistema{' '}
        <span className="font-bold">Ferry Boat</span>.
      </p>

      <p>
        É operadora do sistema <span className="font-bold">Ferry Boat</span>:
      </p>

      <ul role="list" className="flex flex-col gap-2">
        {data?.ferryBoat?.data.map((item) => (
          <li
            key={item.id}
            className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg"
          >
            <Disclosure as="div" className="flex flex-col gap-8 w-full">
              <div className="flex flex-col laptop:flex-row laptop:w-full gap-2">
                <Disclosure.Button className="flex flex-col gap-4 flex-1 laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center text-left">
                  <picture>
                    <img
                      className="shrink-0 h-12 w-12 rounded-full"
                      src="https://images.unsplash.com/photo-1520670255513-79161a36e39c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJvYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=40"
                      alt=""
                    />
                  </picture>
                  <div className="flex flex-col laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center">
                    <span className="font-bold laptop:flex-1 laptop:pl-2">
                      {item.attributes?.name}
                    </span>
                    <span className="laptop:w-1/5 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
                      <Phone
                        size={16}
                        weight="light"
                        className="text-gray-500"
                      />{' '}
                      (71) 3014 4086
                    </span>
                    <span className="laptop:w-1/3 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
                      <EnvelopeSimple
                        size={16}
                        weight="light"
                        className="text-gray-500"
                      />{' '}
                      {item.attributes?.email}
                    </span>
                  </div>
                </Disclosure.Button>
              </div>
              {item.attributes?.address && (
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel
                    as="div"
                    className="text-gray-500 text-sm text-left mt-[-1rem] bg-gray-200 p-4 rounded-b-lg line-clamp-4"
                    dangerouslySetInnerHTML={{
                      __html: item.attributes?.address,
                    }}
                  />

                  <Disclosure.Panel
                    as="div"
                    className="text-gray-500 text-sm text-left mt-[-1rem] bg-gray-200 p-4 rounded-b-lg line-clamp-4"
                  >
                    <h1 className="text-md font-bold text-gray-900 pb-4">
                      Documentos relacionados:
                    </h1>

                    <ul
                      role="list"
                      className="flex flex-col gap-2 pt-2 border border-primary rounded-lg p-4"
                    >
                      {item.attributes.documents?.map((document) => (
                        <li
                          key={document?.id}
                          className="flex items-center justify-between laptop:flex-row gap-2 bg-gray-200 px-4 py-2 rounded-lg transition-colors duration-100 ease-in-out border border-transparent hover:border-secondary box-border"
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
                  </Disclosure.Panel>
                </Transition>
              )}
            </Disclosure>
          </li>
        ))}
      </ul>

      <h1 className="font-bold text-lg border-gray-700 border-l-4 pl-4">
        Lanchas
      </h1>
      <p>
        O sistema de <span className="font-bold">Lanchas</span> nasceu de uma
        necessidade de integrar a Bahia de Todos os Santos. Em 1969 foi iniciada
        a construção do Terminal Marítimo de Bom Despacho, uma das prioridades
        era a construção de um quebra-mar para proteger os barcos de grandes
        temporais. Do outro lado da costa, simultaneamente, era construído, nas
        proximidades do bairro de Água de Meninos, o Terminal de São Joaquim. A
        obra dos dois terminais e um trecho da estrada foi encomendada pelo
        Governo do Estado durante a gestão do governador Luís Vianna Filho. No
        dia 08 de dezembro de 1970 foi inaugurado o sistema de{' '}
        <span className="font-bold">Lanchas</span>.
      </p>

      <p>
        São operadoras do sistema de <span className="font-bold">Lanchas</span>:
      </p>

      <ul role="list" className="flex flex-col gap-2">
        {data?.lanchas?.data.map((item) => (
          <li
            key={item.id}
            className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg"
          >
            <Disclosure as="div" className="flex flex-col gap-8 w-full">
              <div className="flex flex-col laptop:flex-row laptop:w-full gap-2">
                <Disclosure.Button className="flex flex-col gap-4 flex-1 laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center text-left">
                  <picture>
                    <img
                      className="shrink-0 h-12 w-12 rounded-full"
                      src="https://images.unsplash.com/photo-1520670255513-79161a36e39c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJvYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=40"
                      alt=""
                    />
                  </picture>
                  <div className="flex flex-col laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center">
                    <span className="font-bold laptop:flex-1 laptop:pl-2">
                      {item.attributes?.name}
                    </span>
                    <span className="laptop:w-1/5 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
                      <Phone
                        size={16}
                        weight="light"
                        className="text-gray-500"
                      />{' '}
                      (71) 3014 4086
                    </span>
                    <span className="laptop:w-1/3 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
                      <EnvelopeSimple
                        size={16}
                        weight="light"
                        className="text-gray-500"
                      />{' '}
                      {item.attributes?.email}
                    </span>
                  </div>
                </Disclosure.Button>
              </div>
              {item.attributes?.address && (
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel
                    as="div"
                    className="text-gray-500 text-sm text-left mt-[-1rem] bg-gray-200 p-4 rounded-b-lg line-clamp-4"
                    dangerouslySetInnerHTML={{
                      __html: item.attributes?.address,
                    }}
                  />

                  <Disclosure.Panel
                    as="div"
                    className="text-gray-500 text-sm text-left mt-[-1rem] bg-gray-200 p-4 rounded-b-lg line-clamp-4"
                  >
                    <h1 className="text-md font-bold text-gray-900 pb-4">
                      Documentos relacionados:
                    </h1>

                    <ul
                      role="list"
                      className="flex flex-col gap-2 pt-2 border border-primary rounded-lg p-4"
                    >
                      {item.attributes.documents?.map((document) => (
                        <li
                          key={document?.id}
                          className="flex items-center justify-between laptop:flex-row gap-2 bg-gray-200 px-4 py-2 rounded-lg transition-colors duration-100 ease-in-out border border-transparent hover:border-secondary box-border"
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
                  </Disclosure.Panel>
                </Transition>
              )}
            </Disclosure>
          </li>
        ))}
      </ul>

      <h1 className="font-bold text-lg border-gray-700 border-l-4 pl-4">
        Catamarã
      </h1>

      <p>
        São operadoras do sistema <span className="font-bold">Catamarã</span>:
      </p>

      <ul role="list" className="flex flex-col gap-2">
        {data?.catamara?.data.map((item) => (
          <li
            key={item.id}
            className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg"
          >
            <Disclosure as="div" className="flex flex-col gap-8 w-full">
              <div className="flex flex-col laptop:flex-row laptop:w-full gap-2">
                <Disclosure.Button className="flex flex-col gap-4 flex-1 laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center text-left">
                  <picture>
                    <img
                      className="shrink-0 h-12 w-12 rounded-full"
                      src="https://images.unsplash.com/photo-1520670255513-79161a36e39c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJvYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=40"
                      alt=""
                    />
                  </picture>
                  <div className="flex flex-col laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center">
                    <span className="font-bold laptop:flex-1 laptop:pl-2">
                      {item.attributes?.name}
                    </span>
                    <span className="laptop:w-1/5 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
                      <Phone
                        size={16}
                        weight="light"
                        className="text-gray-500"
                      />{' '}
                      (71) 3014 4086
                    </span>
                    <span className="laptop:w-1/3 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
                      <EnvelopeSimple
                        size={16}
                        weight="light"
                        className="text-gray-500"
                      />{' '}
                      {item.attributes?.email}
                    </span>
                  </div>
                </Disclosure.Button>
              </div>
              {item.attributes?.address && (
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel
                    as="div"
                    className="text-gray-500 text-sm text-left mt-[-1rem] bg-gray-200 p-4 rounded-b-lg line-clamp-4"
                    dangerouslySetInnerHTML={{
                      __html: item.attributes?.address,
                    }}
                  />

                  <Disclosure.Panel
                    as="div"
                    className="text-gray-500 text-sm text-left mt-[-1rem] bg-gray-200 p-4 rounded-b-lg line-clamp-4"
                  >
                    <h1 className="text-md font-bold text-gray-900 pb-4">
                      Documentos relacionados:
                    </h1>

                    <ul
                      role="list"
                      className="flex flex-col gap-2 pt-2 border border-primary rounded-lg p-4"
                    >
                      {item.attributes.documents?.map((document) => (
                        <li
                          key={document?.id}
                          className="flex items-center justify-between laptop:flex-row gap-2 bg-gray-200 px-4 py-2 rounded-lg transition-colors duration-100 ease-in-out border border-transparent hover:border-secondary box-border"
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
                  </Disclosure.Panel>
                </Transition>
              )}
            </Disclosure>
          </li>
        ))}
      </ul>
    </article>
  )
}

WaterwayTransportPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default WaterwayTransportPage
