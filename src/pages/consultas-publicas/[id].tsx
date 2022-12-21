/* eslint-disable prettier/prettier */
import { ReactElement } from 'react'
import { CalendarBlank, File, FileArrowDown, FileDoc } from 'phosphor-react'
import { format } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR'

import { DefaultLayout } from '../../layouts/DefaultLayout'
import type { NextPageWithLayout } from '../_app'

import { GetConsultaPublicaByidDocument, GetConsultaPublicaByidQuery } from '../../graphql/generated'
import Link from 'next/link'
import { urlBuilder } from '../../lib/urlBuilder'
import { GetServerSideProps } from 'next';
import { initializeApollo } from '../../lib/apollo';

interface ConsultaPublicaProps {
  data: {
    id: string
    attributes: {
      title: string
      eventType: string
      notify: string
      participation: string
      closure: string
      date: string
      calendar: {
        id: string
        title: string
        starts_in: string
        finish_in: string
        retification: boolean
      }[]
      documents: {
        id: string
        name: string
        file: {
          data: {
            attributes: {
              name: string
              alternativeText: string
              url: string
            }
          }
        }
      }[]
    }
  }
}

const PublicHearingPage: NextPageWithLayout<ConsultaPublicaProps> = ({ data }) => {

  const formattedEvent = {
    ...data,
    formattedTitle: `Consulta Pública ${data?.attributes?.title}/${new Date(
      data?.attributes?.date
    ).toLocaleDateString('pt-BR', {
      year: 'numeric',
      timeZone: 'UTC',
    })}`,
    formattedNotify: `A Agência Estadual de Regulação de Serviços Públicos de Energia Transportes e Comunicações do Estado da Bahia – Agerba vem informar ${data?.attributes?.notify?.replace(/(<([^>]+)>)/gi, "")}</p>`,
  }

  return (
    <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
      <h1 className="font-bold text-[2rem]">{formattedEvent.formattedTitle}</h1>

      {formattedEvent.formattedNotify && (
        <div
          dangerouslySetInnerHTML={{
            __html: formattedEvent.formattedNotify,
          }}
        />
      )}

      {formattedEvent?.attributes?.calendar && (
        <>
          <h1 className="font-bold text-lg border-primary border-l-4 pl-4">
            Calendário
          </h1>

          <ul className="flex flex-col gap-2">
            {formattedEvent.attributes.calendar.map(evento => (
              <li
                key={evento?.id}
                className="px-4 py-6 bg-gray-200 rounded-lg flex flex-col laptop:flex-row gap-2"
              >
                <div className="flex items-center gap-2 laptop:w-2/5 laptop:min-w-2/5">
                  <CalendarBlank
                    size={16}
                    weight="light"
                    className="text-gray-500"
                  />
                  <span className="font-bold">
                    {new Date(evento?.starts_in).toLocaleDateString('pt-BR', {
                      timeZone: 'UTC'
                    })}

                    {new Date(evento?.starts_in).getHours() > 0 && format(new Date(evento?.starts_in), "', às 'HH':'mm", {
                      locale: ptBR,
                    })}

                    {evento?.finish_in && (
                      <>
                        {evento?.finish_in && (
                          ` a `
                        )}
                        {new Date(evento?.finish_in).toLocaleDateString('pt-BR', {
                          timeZone: 'UTC'
                        })}
                        {new Date(evento?.finish_in).getHours() > 0 && format(new Date(evento?.finish_in), "', às 'HH':'mm", {
                          locale: ptBR,
                        })}
                      </>
                    )}
                  </span>
                </div>
                <div className="flex items-center gap-2 laptop:w-2/5 laptop:min-w-2/5">
                  <File
                    size={16}
                    weight="light"
                    className="text-gray-500"
                  />
                  {evento?.title === 'Publicacao_do_Aviso' && (
                    <span className="font-bold">
                      Publicação do Aviso de Consulta Pública
                    </span>
                  )}

                  {evento?.title === 'Recebimento_de_Contribuicoes' && (
                    <span className="font-bold">
                      Recebimento de Contribuições
                    </span>
                  )}

                  {evento?.title === 'Audiencia_Publica' && (
                    <span className="font-bold">
                      Consulta Pública
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </>
      )
      }

      {formattedEvent.attributes.participation && (
        <>
          <h1 className="font-bold text-lg border-primary border-l-4 pl-4">
            Participação
          </h1>

          <div
            dangerouslySetInnerHTML={{
              __html: formattedEvent.attributes.participation,
            }}
          />
        </>
      )}

      {formattedEvent.attributes.closure && (
        <>
          <h1 className="font-bold text-lg border-primary border-l-4 pl-4">
            Encerramento
          </h1>

          <div
            dangerouslySetInnerHTML={{
              __html: formattedEvent.attributes.closure,
            }}
          />
        </>
      )}


      {formattedEvent.attributes?.documents && formattedEvent.attributes?.documents.length > 0 && (
        <>
          <h1 className="font-bold text-lg border-primary border-l-4 pl-4">
            Documentos Anexos
          </h1>

          <ul role="list" className="flex flex-col gap-2">
            {formattedEvent.attributes?.documents.map((documento) => (
              <li
                key={documento.id}
                className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg"
              >
                <div className="flex flex-col laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center">
                  <span className="font-bold laptop:flex-1 flex items-center gap-2">
                    <FileDoc size={16} weight="light" className="text-gray-500" />{' '}
                    {documento.name}
                  </span>

                  {documento.file.data.attributes && (
                    <Link
                      legacyBehavior
                      href={urlBuilder(
                        documento.file.data.attributes.url,
                      )}
                    >
                      <a
                        className="laptop:w-1/12 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center justify-center gap-2"
                        download
                        target="_blank"
                      >
                        <FileArrowDown
                          size={24}
                          weight="light"
                          className="text-gray-900"
                        />{' '}
                      </a>
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </article >
  )
}

PublicHearingPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default PublicHearingPage

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const apolloClient = initializeApollo()
  const { id } = query

  const { data } = await apolloClient.query<GetConsultaPublicaByidQuery>({
    query: GetConsultaPublicaByidDocument,
    variables: {
      id
    }
  })

  const consultaPublica = data.publicConsultation?.data

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      data: consultaPublica
    }
  }
}
