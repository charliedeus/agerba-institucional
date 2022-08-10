import { ReactElement } from 'react'

import type { NextPageWithLayout } from '../_app'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { CalendarBlank, FileArrowDown } from 'phosphor-react'

import { useGetAtasDeJulgamentoQuery } from '../../graphql/generated'
import { motion } from 'framer-motion'
import ptBR from 'date-fns/locale/pt-BR'
import { format } from 'date-fns'
import Link from 'next/link'
import { urlBuilder } from '../../lib/urlBuilder'

const CollegiateMinutesPage: NextPageWithLayout = () => {
  const { data } = useGetAtasDeJulgamentoQuery()

  return (
    <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { scale: 0.8, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.5,
            },
          },
        }}
        className="font-bold text-[2rem]"
      >
        Atas de Julgamento
      </motion.h1>
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

      <ul role="list" className="flex flex-col gap-2">
        {data?.atasDeJulgamentos?.map((ata) => (
          <li
            key={ata?.id}
            className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg hover:bg-primary hover:text-white group transition-colors duration-100 ease-in-out border-2 border-transparent hover:border-secondary"
          >
            <div className="flex flex-col gap-8 w-full">
              <div className="flex flex-col laptop:flex-row laptop:w-full gap-2">
                <div className="flex flex-col flex-1 laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center text-left">
                  <span className="flex items-center gap-2 laptop:w-1/6">
                    <CalendarBlank
                      size={16}
                      weight="light"
                      className="text-gray-500"
                    />
                    <span className="font-bold ">
                      {format(new Date(ata?.Data), 'dd/MM/yyyy', {
                        locale: ptBR,
                      })}
                      , às{' '}
                      {format(new Date(ata?.Data), "HH':'mm", {
                        locale: ptBR,
                      })}
                    </span>
                  </span>
                  <span className="font-bold laptop:border-l-2 laptop:border-primary laptop:hover:border-white laptop:pl-2 flex-1 group-hover:border-white">
                    {ata?.Titulo.toUpperCase()}
                  </span>
                  {ata?.Documentos && (
                    <Link href={urlBuilder(ata?.Documentos[0]?.url)}>
                      <a
                        download
                        target="_blank"
                        className="laptop:w-1/12 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center justify-center gap-2 group group-hover:border-white"
                      >
                        <FileArrowDown
                          size={24}
                          weight="light"
                          className="text-gray-900 group-hover:text-white"
                        />
                      </a>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </article>
  )
}

CollegiateMinutesPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default CollegiateMinutesPage
