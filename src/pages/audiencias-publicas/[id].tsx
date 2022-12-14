/* eslint-disable prettier/prettier */
import { ReactElement } from 'react'
import { useRouter } from 'next/router'
import { ArrowUUpLeft, CalendarBlank, File, FileArrowDown, FileDoc } from 'phosphor-react'
import { format } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR'

import { DefaultLayout } from '../../layouts/DefaultLayout'
import type { NextPageWithLayout } from '../_app'

import { useGetAudienciaPublicaByIdQuery } from '../../graphql/generated'
import Link from 'next/link'
import { urlBuilder } from '../../lib/urlBuilder'
import { Loader } from '../../components/Loader';

const PublicHearingPage: NextPageWithLayout = () => {
  const router = useRouter()

  const { data, loading } = useGetAudienciaPublicaByIdQuery({
    variables: {
      id: String(router.query.id),
    },
  })

  if (!data) {
    return <h1>Erro</h1>
  }

  const hasRetification = data?.eventoPublico?.data?.attributes?.calendar?.map(item => {
    return !!item?.retification
  })

  const formattedEvent = {
    ...data?.eventoPublico?.data,
    formattedTitle: `Audiência Pública ${data?.eventoPublico?.data?.attributes?.title
      }/${new Date(
        data?.eventoPublico?.data?.attributes?.date,
      ).toLocaleDateString('pt-BR', {
        year: 'numeric',
        timeZone: 'UTC',
      })}`,
    formattedNotify: `A Agência Estadual de Regulação de Serviços Públicos de Energia Transportes e Comunicações do Estado da Bahia – Agerba vem informar ${data?.eventoPublico?.data?.attributes?.notify?.replace(/(<([^>]+)>)/gi, "")} que realizará a <strong> AUDIÊNCIA PÚBLICA Nº ${data?.eventoPublico?.data?.attributes?.title
      }/${new Date(
        data?.eventoPublico?.data?.attributes?.date,
      ).toLocaleDateString('pt-BR', {
        year: 'numeric',
        timeZone: 'UTC',
      })}</strong >, no dia ${new Date(
        data?.eventoPublico?.data?.attributes?.date,
      ).toLocaleDateString('pt-BR', {
        timeZone: 'UTC',
      })
      }</strong >, conforme agenda abaixo:</p >`,
  }

  return (
    <article
      className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed"
    >

      {loading ?
        <div className='w-full h-1/2 flex items-center justify-center'>
          <Loader />
        </div> :
        <>
          <div className='flex items-center gap-4'>
            <Link href='/audiencias-publicas' className='w-8 h-8 flex items-center justify-center'>
              <ArrowUUpLeft size={24} weight="light" />
            </Link>
            <h1 className="font-bold text-[2rem]">{formattedEvent.formattedTitle}</h1>
            {[hasRetification?.includes(true), !!formattedEvent.attributes?.justification].includes(true) && (
              <>

                <div className='relative group py-2 px-4 bg-secondary rounded-lg text-white text-sm border border-transparent'>
                  Retificada
                </div>

              </>
            )}
          </div>

          {
            formattedEvent.attributes?.notify && (
              <div
                dangerouslySetInnerHTML={{
                  __html: formattedEvent.formattedNotify,
                }}
                className='text-justify'
              />
            )
          }

          {!!formattedEvent.attributes?.justification && (
            <p className='font-bold p-2 bg-gray-100 w-fit'>
              {formattedEvent.attributes?.justification}
            </p>
          )}

          {formattedEvent.attributes?.meetLink && (
            <p>
              Para acesso simplificado ao evento ao vivo, clique <strong><a href="http://www.agerba.ba.gov.br/sites/default/files/documentos/2021-08/Passo%20a%20Passo%20-%20Ingresso%20na%20Transmi%C3%A7%C3%A3o%20Ao%20ViVo_PDLT%20de%20Valen%C3%A7a%20%282%29.pdf" target="_blank" download rel="noreferrer">aqui</a></strong>
            </p>
          )}

          {
            formattedEvent.attributes?.calendar && (
              <>
                <h1 className="font-bold text-lg border-primary border-l-4 pl-4">
                  Calendário
                </h1>

                {formattedEvent.attributes.calendar.length > 0 ? (
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
                        <div className="flex flex-1 items-center gap-2 laptop:w-2/5 laptop:min-w-2/5">
                          <File
                            size={16}
                            weight="light"
                            className="text-gray-500"
                          />
                          {evento?.title === 'Publicacao_do_Aviso' && (
                            <span className="font-bold">
                              Publicação do Aviso de Audiência Pública
                            </span>
                          )}

                          {evento?.title === 'Recebimento_de_Contribuicoes' && (
                            <span className="font-bold">
                              Recebimento de Contribuições
                            </span>
                          )}

                          {evento?.title === 'Audiencia_Publica' && (
                            <span className="font-bold">
                              Audiência Pública
                            </span>
                          )}

                          {evento?.retification && (
                            <div className='py-1 px-2 bg-secondary rounded-lg text-white text-xs ml-auto border border-transparent'>
                              Retificação
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className='w-full h-48 flex items-center justify-center text-secondary bg-gray-50 font-bold'>
                    Não possui dados...
                  </div>
                )}
              </>
            )
          }

          {
            formattedEvent.attributes?.onlyRemote ? (
              <>
                <h1 className="font-bold text-lg border-primary border-l-4 pl-4">
                  Local de Realização
                </h1>

                <div className='flex flex-col gap-4'>
                  <p>
                    Os interessados em participar da {formattedEvent.attributes?.event_type === 'Audiencia_Publica' ? 'Audiência Pública' : 'Consulta Pública'} deverão acessar o link, disponibilizado em {new Date(
                      formattedEvent.attributes.date,
                    ).toLocaleDateString('pt-BR', {
                      timeZone: 'UTC',
                    })
                    }, no endereço virtual disponível no site <Link href='/' target={'_blank'} className='text-primary font-bold underline'>http://agerba.ba.gov.br</Link> ou <Link href='http://www.infraestrutura.ba.gov.br/' target={'_blank'} passHref className='text-primary font-bold underline'>http://www.infraestrutura.ba.gov.br</Link>. O link direcionará à transmissão ao vivo, através da <span className='font-bold italic'>plataforma online Microsoft Teams</span>.
                  </p>
                  {formattedEvent.attributes.meetLink ? (
                    <>
                      <p>
                        Para acessar, basta clicar no botão abaixo:
                      </p>

                      <Link href={formattedEvent.attributes?.meetLink} target='_blank' className='flex items-center justify-center py-2 px-4 bg-primary hover:transform hover:-translate-y-[2px] hover:shadow-lg hover:bg-primary/90 transition-all duration-150 ease-in-out rounded-lg text-white w-full laptop:w-1/2 m-auto'>
                        Acessar a Reunião
                      </Link>
                    </>
                  ) : (
                    <button disabled className='flex items-center justify-center py-2 px-4 bg-gray-500 rounded-lg text-white w-full laptop:w-1/2 m-auto'>
                      Acessar a Reunião (endereço ainda será divulgado)
                    </button>
                  )}
                </div>
              </>
            ) : formattedEvent.attributes?.place && (
              <>
                <h1 className="font-bold text-lg border-primary border-l-4 pl-4">
                  Local de Realização
                </h1>

                <div
                  dangerouslySetInnerHTML={{
                    __html: formattedEvent.attributes?.place
                  }}
                  className='text-justify'
                />

                {formattedEvent.attributes.meetLink && (
                  <>
                    <p>
                      O evento <span className='font-bold'>também contará</span> com transmissão transmissão ao vivo, através da <span className='font-bold italic'>plataforma online Microsoft Teams</span>.
                    </p>

                    <p>
                      Para acessar, basta clicar no botão abaixo:
                    </p>

                    <Link href={formattedEvent.attributes?.meetLink} target='_blank' className='flex items-center justify-center py-2 px-4 bg-primary hover:transform hover:-translate-y-[2px] hover:shadow-lg hover:bg-primary/90 transition-all duration-150 ease-in-out rounded-lg text-white w-full laptop:w-1/2 m-auto'>
                      Acessar a Reunião
                    </Link>
                  </>
                )}
              </>
            )
          }

          {
            formattedEvent.attributes?.Documentos && formattedEvent.attributes?.Documentos?.length > 0 && (
              <>
                <h1 className="font-bold text-lg border-primary border-l-4 pl-4">
                  Documentos Anexos
                </h1>

                <ul role="list" className="flex flex-col gap-2">
                  {formattedEvent.attributes?.Documentos?.map((documento) => (
                    <li
                      key={documento?.file.data?.attributes?.url}
                      className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg"
                    >
                      <div className="flex flex-col laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center">
                        <span className="font-bold laptop:flex-1 flex items-center gap-2">
                          <FileDoc size={16} weight="light" className="text-gray-500" />{' '}
                          {documento?.name}
                        </span>

                        {documento?.file.data?.attributes?.url && (
                          <Link
                            legacyBehavior
                            href={urlBuilder(
                              documento?.file.data?.attributes?.url,
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
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )
          }

          {
            formattedEvent.attributes?.finalReport && formattedEvent.attributes?.finalReport.length > 0 && (
              <>
                <h1 className="font-bold text-lg border-primary border-l-4 pl-4">
                  Relatório Final
                </h1>

                <ul role="list" className="flex flex-col gap-2">
                  {formattedEvent.attributes?.finalReport?.map((documento) => (
                    <li
                      key={documento?.file.data?.attributes?.url}
                      className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg"
                    >
                      <div className="flex flex-col laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center">
                        <span className="font-bold laptop:flex-1 flex items-center gap-2">
                          <FileDoc size={16} weight="light" className="text-gray-500" />{' '}
                          {documento?.name}
                        </span>

                        {documento?.file.data?.attributes?.url && (
                          <Link
                            legacyBehavior
                            href={urlBuilder(
                              documento?.file.data?.attributes?.url,
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
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )
          }
        </>
      }

    </article>
  )
}

PublicHearingPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default PublicHearingPage