import { ReactElement } from 'react'
import { useRouter } from 'next/router'
import { CalendarBlank, File, FileArrowDown } from 'phosphor-react'

import { DefaultLayout } from '../../layouts/DefaultLayout'
import type { NextPageWithLayout } from '../_app'

import { useGetAudienciaPublicaByIdQuery } from '../../graphql/generated'
import Link from 'next/link'
import { urlBuilder } from '../../lib/urlBuilder'

const PublicHearingPage: NextPageWithLayout = () => {
  const router = useRouter()

  const { data } = useGetAudienciaPublicaByIdQuery({
    variables: {
      id: String(router.query.id),
    },
  })

  return (
    <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
      <h1 className="font-bold text-[2rem]">
        {data?.audienciasPublica?.Titulo}
      </h1>

      {data?.audienciasPublica?.comunica && (
        <div
          dangerouslySetInnerHTML={{
            __html: data?.audienciasPublica?.comunica,
          }}
        ></div>
      )}

      <h1 className="font-bold text-lg border-gray-700 border-l-4 pl-4">
        Calendário
      </h1>

      <ul className="flex flex-col gap-2">
        {data?.audienciasPublica?.Calendario?.map((evento) => (
          <li
            key={evento?.id}
            className="px-4 py-6 bg-gray-200 rounded-lg flex flex-col laptop:flex-row gap-2"
          >
            <div className="flex items-center gap-2 laptop:w-1/5 laptop:min-w-1/5">
              <CalendarBlank
                size={16}
                weight="light"
                className="text-gray-500"
              />
              <span className="font-bold">
                {new Date(evento?.inicial).toLocaleDateString('pt-BR', {
                  timeZone: 'UTC',
                })}{' '}
                {evento?.inicial !== evento?.final &&
                  `à ${new Date(evento?.final).toLocaleDateString('pt-BR', {
                    timeZone: 'UTC',
                  })}`}
              </span>
            </div>

            <div className="flex flex-1 items-center gap-2">
              <File
                size={16}
                weight="light"
                className="text-gray-500 hidden laptop:inline"
              />
              <span className="font-bold">{evento?.descricao}</span>
            </div>
          </li>
        ))}
      </ul>

      <h1 className="font-bold text-lg border-gray-700 border-l-4 pl-4">
        Participação
      </h1>
      {data?.audienciasPublica?.participacao && (
        <div
          dangerouslySetInnerHTML={{
            __html: data?.audienciasPublica?.participacao,
          }}
        ></div>
      )}

      <h1 className="font-bold text-lg border-gray-700 border-l-4 pl-4">
        Encerramento e Divulgação
      </h1>
      {data?.audienciasPublica?.encerramento && (
        <div
          dangerouslySetInnerHTML={{
            __html: data?.audienciasPublica?.encerramento,
          }}
        ></div>
      )}

      {data?.audienciasPublica?.documentos &&
        data?.audienciasPublica?.documentos.length > 0 && (
          <h1 className="font-bold text-lg border-gray-700 border-l-4 pl-4">
            Documentos Anexos
          </h1>
        )}

      <ul className="flex flex-col gap-2">
        {data?.audienciasPublica?.documentos?.map((documento) => (
          <li
            key={documento?.id}
            className="px-4 py-6 bg-gray-200 rounded-lg flex flex-col laptop:justify-between laptop:flex-row  gap-2"
          >
            <div className="flex flex-1 items-center gap-2">
              <span>{documento?.name}</span>
            </div>
            {documento?.url && (
              <Link href={urlBuilder(documento?.url)}>
                <a
                  download
                  target="_blank"
                  className="laptop:w-1/12 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center justify-center gap-2"
                >
                  <FileArrowDown
                    size={24}
                    weight="light"
                    className="text-gray-900"
                  />
                </a>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </article>
  )
}

PublicHearingPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default PublicHearingPage
