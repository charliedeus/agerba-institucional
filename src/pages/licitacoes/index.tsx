import { ReactElement, useState } from 'react'

import { NextPageWithLayout } from '../_app'

import { DefaultLayout } from '../../layouts/DefaultLayout'
import { useGetLicitacoesFuturasQuery } from '../../graphql/generated'
import {
  CalendarBlank,
  File,
  FileArrowDown,
  MapPinLine,
  TextT,
} from 'phosphor-react'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import Link from 'next/link'
import { urlBuilder } from '../../lib/urlBuilder'

const BidsPage: NextPageWithLayout = () => {
  const [today] = useState(new Date().toISOString())

  const { data } = useGetLicitacoesFuturasQuery({
    variables: {
      data_atual: today,
    },
  })

  return (
    <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
      <h1 className="font-bold text-[2rem]">Licitações</h1>

      <p>
        A Comissão Permanente de Licitações – CPL, no uso de suas atribuições,
        diante da pandemia do Novo Coronavírus - COVID-19, decretada pela
        Organização Mundial da Saúde, no dia 11 de março de 2020 e em
        conformidade com o decreto Estadual nº19549/2020, de 18/03/2020, o qual
        declarou situação de emergência em território baiano, cumulado com o
        quanto disposto na{' '}
        <a
          download
          target="_blank"
          href="http://www.agerba.ba.gov.br/sites/default/files/2020-05/in_saeb_n_0162020_1.pdf"
          rel="noreferrer"
          className="font-bold text-primary hover:underline"
        >
          Instrução Normativa SAEB Nº 016/2020
        </a>
        , informa que as licitações abaixo seguirão seu rito por
        videoconferência.
      </p>

      <p>
        A plataforma que será utilizada para a realização dos procedimentos
        licitatórios por videoconferência é o Microsoft Teams. Uma chave de
        acesso para a sala, será disponibilizada na coluna LINK da tabela
        abaixo. Cada licitação ocorrerá em uma sala com DATA e HORA. A sala será
        aberta 30 minutos antes da hora marcada na tabela abaixo.
      </p>

      {data?.licitacoes ? (
        <div className="flex flex-col gap-4 flex-1 items-center">
          <h1 className="font-bold text-lg">
            Não há registros a serem exibidos.
          </h1>
          <Link href="/" passHref>
            <a className="px-4 py-2 bg-secondary rounded-md text-white text-sm hover:bg-opacity-90">
              <span>Voltar à Página Principal</span>
            </a>
          </Link>
        </div>
      ) : (
        <ul role="list" className="flex flex-col gap-2">
          {data?.licitacoes?.map((licitacao) => (
            <li
              key={licitacao?.id}
              className="flex flex-col gap-4 bg-gray-200 px-4 py-6 rounded-lg transition-colors duration-100 ease-in-out border hover:border-secondary box-border"
            >
              <div className="flex flex-col laptop:flex-row gap-4">
                <div className="flex items-center gap-2 w-full laptop:w-1/6 laptop:max-w-1/6">
                  <span>
                    <CalendarBlank
                      size={16}
                      weight="light"
                      className="text-gray-500"
                    />
                  </span>
                  <span className="font-bold">
                    {format(new Date(licitacao?.dataHora), 'dd/MM/yyyy', {
                      locale: ptBR,
                    })}
                    , às{' '}
                    {format(new Date(licitacao?.dataHora), "HH':'mm", {
                      locale: ptBR,
                    })}
                  </span>
                </div>
                <div className="flex flex-1 items-center gap-2 w-full">
                  <span>
                    <File size={16} weight="light" className="text-gray-500" />
                  </span>
                  <span className="font-bold">{licitacao?.Title}</span>
                </div>
                <div>
                  <span className="text-xs text-white shadow-lg bg-secondary p-2 rounded-lg">
                    {licitacao?.Tipo}
                  </span>
                </div>
              </div>
              <div className="flex flex-col laptop:flex-row gap-4">
                <div className="flex laptop:w-2/3 laptop:min-w-2/3 gap-2">
                  <span>
                    <TextT size={16} weight="light" className="text-gray-500" />
                  </span>
                  {licitacao?.SubTitulo && (
                    <div
                      className="text-gray-500 text-sm"
                      dangerouslySetInnerHTML={{
                        __html: licitacao?.SubTitulo,
                      }}
                    />
                  )}
                </div>
                <div className="flex flex-1 gap-2">
                  <span>
                    <MapPinLine
                      size={16}
                      weight="light"
                      className="text-gray-500"
                    />
                  </span>
                  {licitacao?.Local && (
                    <div
                      className="text-gray-500 text-sm"
                      dangerouslySetInnerHTML={{
                        __html: licitacao?.Local,
                      }}
                    />
                  )}
                </div>
              </div>

              {licitacao?.Documentos && licitacao.Documentos.length > 0 && (
                <>
                  <div className="w-full h-[2px] bg-gray-300" />
                  {licitacao?.Documentos?.map((documento) => (
                    <div
                      key={documento?.id}
                      className="flex flex-col laptop:flex-row gap-4"
                    >
                      <div className="flex flex-1 items-center justify-start gap-2">
                        <span>
                          <FileArrowDown
                            size={16}
                            weight="light"
                            className="text-gray-500"
                          />
                        </span>
                        <Link href={urlBuilder(documento?.url)}>
                          <a
                            download
                            target="_blank"
                            className="hover:font-bold hover:underline"
                          >
                            <span className="text-sm text-primary">
                              {documento?.name}
                            </span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

BidsPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default BidsPage
