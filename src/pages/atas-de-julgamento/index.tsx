import { ReactElement, useState } from 'react'

import type { NextPageWithLayout } from '../_app'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { File, Bookmark, CalendarBlank, FileArrowDown } from 'phosphor-react'

import { useGetAtasDeJulgamentoQuery } from '../../graphql/generated'
import { motion } from 'framer-motion'
import ptBR from 'date-fns/locale/pt-BR'
import { format } from 'date-fns'
import Link from 'next/link'
import { urlBuilder } from '../../lib/urlBuilder'
import { Disclosure, Transition } from '@headlessui/react'
import { Pagination } from '../../components/Pagination'

const CollegiateMinutesPage: NextPageWithLayout = () => {
  const [page, setPage] = useState(1)

  const { data } = useGetAtasDeJulgamentoQuery({
    variables: {
      limit: 5,
      start: (page - 1) * 5,
    },
  })

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
        {data?.judgmentNotes?.data.map((note) => {
          return (
            <li
              key={note.id}
              className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg transition-colors duration-100 ease-in-out border border-transparent hover:border-secondary box-border"
            >
              <Disclosure as="div" className="flex flex-col gap-8 w-full">
                <div className="flex flex-col laptop:flex-row laptop:w-full gap-2">
                  <Disclosure.Button className="flex flex-col gap-4 flex-1 laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center text-left">
                    <span className="font-bold flex items-center gap-2">
                      <CalendarBlank
                        size={16}
                        weight="light"
                        className="text-gray-500"
                      />
                      <span className="font-bold ">
                        {format(
                          new Date(note.attributes?.judgment_date),
                          'dd/MM/yyyy',
                          {
                            locale: ptBR,
                          },
                        )}
                        , às{' '}
                        {format(
                          new Date(note.attributes?.judgment_date),
                          "HH':'mm",
                          {
                            locale: ptBR,
                          },
                        )}
                      </span>
                    </span>
                    <span className="font-bold flex-1 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
                      <File
                        size={16}
                        weight="light"
                        className="text-gray-500"
                      />{' '}
                      {note.attributes?.title}
                    </span>
                    <span className="flex laptop:border-l-2 laptop:border-primary laptop:pl-2 items-center gap-2">
                      <Bookmark
                        size={16}
                        weight="light"
                        className="text-gray-500"
                      />
                      <span className="font-normal text-xs text-gray-500">
                        Atas de Julgamento
                      </span>
                    </span>
                  </Disclosure.Button>
                  <div className="flex items-center justify-center w-full laptop:max-w-[8rem] p-2 laptop:border-l-2 laptop:border-primary laptop:pl-2 text">
                    {note.attributes?.document.data ? (
                      <Link
                        href={urlBuilder(
                          note.attributes.document.data.attributes?.url,
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
                    ) : (
                      <button
                        disabled
                        className="flex gap-2 items-center justify-center bg-primary hover:bg-white text-white hover:text-primary px-4 py-2 rounded-[4px] hover:border hover:border-primary group disabled:cursor-not-allowed disabled:bg-gray-400"
                      >
                        <FileArrowDown
                          size={24}
                          weight="light"
                          className="text-white group-hover:text-primary group-disabled:text-gray-600"
                        />
                        <span className="font-normal text-sm group-hover:text-primary group-disabled:text-gray-600">
                          Baixar
                        </span>
                      </button>
                    )}
                  </div>
                </div>
                {note.attributes?.description && (
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
                        __html: note.attributes?.description,
                      }}
                    ></Disclosure.Panel>
                  </Transition>
                )}
              </Disclosure>
            </li>
          )
        })}
        <Pagination
          totalCountRegisters={Number(
            data?.judgmentNotes?.meta.pagination.total,
          )}
          currentPage={page}
          totalPages={Number(data?.judgmentNotes?.meta.pagination.pageCount)}
          onPageChange={setPage}
          registersPerPage={Number(
            data?.judgmentNotes?.meta.pagination.pageSize,
          )}
        />
      </ul>

      {/* <ul role="list" className="flex flex-col gap-2">
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
      </ul> */}
    </article>
  )
}

CollegiateMinutesPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default CollegiateMinutesPage
