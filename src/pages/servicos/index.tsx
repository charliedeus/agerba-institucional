import { ReactElement, useState, ChangeEvent } from 'react'
import Head from 'next/head'

import type { NextPageWithLayout } from '../_app'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { GetServerSideProps } from 'next'
import { getLinhas, useLinhas } from '../../hooks/useLinhas'
import { Pagination } from '../../components/Pagination'
import { motion } from 'framer-motion'
import { Disclosure, Transition } from '@headlessui/react'
import { FileSearch } from 'phosphor-react'
import { debounce } from 'lodash'

interface ServicesPageProps {
  linhas:
    | {
        id: string
        attributes: {
          cdlinha?: number | undefined
          nulinha: string | null | undefined
          deorigem: string | null | undefined
          dedestino: string | null | undefined
          dedescricao: string | null | undefined
          nupermissionarios?: number | null | undefined
          boativo: boolean | null | undefined
        }
      }[]
    | undefined
  totalCountRegisters: number | undefined
  totalRegistersPerPage: number | undefined
  totalPages: number | undefined
}

const ServicesPage: NextPageWithLayout<ServicesPageProps> = ({
  linhas,
  totalCountRegisters,
  totalPages,
  totalRegistersPerPage,
}) => {
  const [items] = useState(linhas)
  const [query, setQuery] = useState('')

  const [page, setPage] = useState(1)
  // const [totalRecords, setTotalRecords] = useState(totalCountRegisters)
  // const [totalOfPages, setTotalOfPages] = useState(totalPages)
  // const [totalRecordsPerPage, setTotalRecordsPerPage] = useState(
  //   totalRegistersPerPage,
  // )

  const { data } = useLinhas(page, 2, query, {})

  const updateQuery = async (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)

    //   const { linhas, totalCountRegisters, totalPages, totalRegistersPerPage } =
    //     await getLinhas(page, 2, event.target.value)
    //   const result = linhas.map((linha) => {
    //     return {
    //       id: String(linha.id),
    //       attributes: {
    //         cdlinha: Number(linha.attributes?.cdlinha),
    //         nulinha: linha.attributes?.nulinha,
    //         deorigem: linha.attributes?.deorigem,
    //         dedestino: linha.attributes?.dedestino,
    //         dedescricao: linha.attributes?.dedescricao,
    //         nupermissionarios: linha.attributes?.nupermissionarios,
    //         boativo: linha.attributes?.boativo,
    //       },
    //     }
    //   })
    //   setItems(result)
    //   setTotalRecords(totalCountRegisters)
    //   setTotalOfPages(totalPages)
    //   setTotalRecordsPerPage(totalRegistersPerPage)
  }

  const debouncedOnChange = debounce(updateQuery, 500)

  return (
    <>
      <Head>
        <title>Linhas | AGERBA</title>
      </Head>
      <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
        <h1 className="font-bold text-[2rem]">Linhas</h1>
        <>
          <div className="flex items-center gap-2 rounded-lg">
            <div className="w-2/3">
              <label className="relative flex items-center gap-2 py-2 border rounded-md cursor-pointer border-zinc-500 bg-zinc-200 ">
                <FileSearch
                  size={16}
                  weight="light"
                  className="ml-2 text-gray-500"
                />
                <input
                  type="text"
                  onChange={debouncedOnChange}
                  placeholder="Buscar por linha, origem ou destino"
                  className="w-full py-2 bg-transparent outline-none"
                />
              </label>
            </div>
          </div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="transition-all duration-100 ease-in-out"
          >
            <ul role="list" className="flex flex-col gap-2">
              {data?.linhas.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-col gap-2 px-4 py-6 transition-colors duration-100 ease-in-out bg-gray-200 border rounded-lg laptop:flex-row hover:border-secondary"
                >
                  <Disclosure as="div" className="flex flex-col w-full gap-8">
                    <div className="flex flex-col gap-2 laptop:flex-row laptop:w-full">
                      <Disclosure.Button className="flex flex-col flex-1 gap-4 text-left laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center">
                        <span className="flex items-center flex-1 gap-2 font-bold">
                          {item.attributes.dedescricao}
                        </span>
                      </Disclosure.Button>
                    </div>

                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      {item.attributes.dedescricao && (
                        <Disclosure.Panel
                          as="div"
                          className="text-gray-500 text-sm text-left mt-[-1rem] bg-gray-200 p-4 rounded-b-lg line-clamp-4"
                        >
                          <p>{item.attributes.dedescricao}</p>
                        </Disclosure.Panel>
                      )}
                    </Transition>
                  </Disclosure>
                </li>
              ))}
            </ul>
          </motion.div>
          {items && (
            <Pagination
              totalCountRegisters={Number(totalCountRegisters)}
              currentPage={page}
              totalPages={Number(totalPages)}
              onPageChange={setPage}
              registersPerPage={Number(totalRegistersPerPage)}
            />
          )}
        </>
      </article>
    </>
  )
}

ServicesPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default ServicesPage

export const getServerSideProps: GetServerSideProps = async () => {
  const { linhas, totalCountRegisters, totalRegistersPerPage, totalPages } =
    await getLinhas(1, 2, '')

  return {
    props: {
      linhas,
      totalCountRegisters,
      totalRegistersPerPage,
      totalPages,
    },
  }
}
