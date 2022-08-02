import { ReactElement } from 'react'
import { useRouter } from 'next/router'
import { CalendarBlank, File, FileArrowDown } from 'phosphor-react'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { DefaultLayout } from '../../layouts/DefaultLayout'
import type { NextPageWithLayout } from '../_app'

import { useGetConsultaPublicaByIdQuery } from '../../graphql/generated'
import Link from 'next/link'
import { urlBuilder } from '../../lib/urlBuilder'

const PublicConsultationPage: NextPageWithLayout = () => {
  const router = useRouter()

  const { data } = useGetConsultaPublicaByIdQuery({
    variables: {
      id: String(router.query.id),
    },
  })

  return (
    <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
      <h1 className="font-bold text-[2rem]">
        {data?.consultasPublica?.Titulo}
      </h1>

      {data?.consultasPublica && (
        <div
          dangerouslySetInnerHTML={{
            __html: data?.consultasPublica?.comunica,
          }}
        ></div>
      )}

      <h1 className="font-bold text-lg border-gray-700 border-l-4 pl-4">
        Calendário
      </h1>

      <ul className="flex flex-col gap-2">
        {data?.consultasPublica?.Calendario?.map((evento) => (
          <li
            key={evento?.id}
            className="px-4 py-6 bg-gray-200 rounded-lg flex flex-col laptop:flex-row  gap-2"
          >
            <div className="flex items-center gap-2 laptop:w-1/5 laptop:min-w-1/5">
              <CalendarBlank
                size={16}
                weight="light"
                className="text-gray-500"
              />
              <span className="font-bold">
                {format(new Date(evento?.inicial), 'dd/MM/yyyy', {
                  locale: ptBR,
                })}{' '}
                {evento?.inicial !== evento?.final &&
                  `à ${format(new Date(evento?.final), 'dd/MM/yyyy', {
                    locale: ptBR,
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
      {data?.consultasPublica?.participacao && (
        <div
          dangerouslySetInnerHTML={{
            __html: data?.consultasPublica?.participacao,
          }}
        ></div>
      )}

      <h1 className="font-bold text-lg border-gray-700 border-l-4 pl-4">
        Encerramento e Divulgação
      </h1>
      {data?.consultasPublica?.encerramento && (
        <div
          dangerouslySetInnerHTML={{
            __html: data?.consultasPublica?.encerramento,
          }}
        ></div>
      )}

      {data?.consultasPublica?.documentos &&
        data?.consultasPublica?.documentos.length > 0 && (
          <h1 className="font-bold text-lg border-gray-700 border-l-4 pl-4">
            Documentos Anexos
          </h1>
        )}

      <ul className="flex flex-col gap-2">
        {data?.consultasPublica?.documentos?.map((documento) => (
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

PublicConsultationPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default PublicConsultationPage
