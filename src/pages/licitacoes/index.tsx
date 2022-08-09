import { ReactElement } from 'react'

import { NextPageWithLayout } from '../_app'

import { DefaultLayout } from '../../layouts/DefaultLayout'
import { useGetLicitacoesQuery } from '../../graphql/generated'
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
  const { data } = useGetLicitacoesQuery()

  return (
    <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
      <h1 className="font-bold text-[2rem]">Licitações</h1>

      <div className="flex flex-col gap-6 laptop:flex-row">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>

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
    </article>
  )
}

BidsPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default BidsPage
