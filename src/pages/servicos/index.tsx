import { ReactElement, useState, ChangeEvent, Fragment, useEffect } from 'react'
import Head from 'next/head'

import type { NextPageWithLayout } from '../_app'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { GetServerSideProps } from 'next'
import { getLinhas, useLinhas } from '../../hooks/useLinhas'
import { Pagination } from '../../components/Pagination'
import { Loader } from '../../components/Loader'
import { motion } from 'framer-motion'
import { Disclosure, Transition } from '@headlessui/react'
import { FileSearch } from 'phosphor-react'
import { debounce } from 'lodash'

interface ServicesPageProps {
  linhas: {
    id: string
    attributes: {
      cdlinha: number
      nulinha: string
      deorigem: string
      dedestino: string
      dedescricao: string
      nupermissionarios: number
      boativo: boolean
    }
  }[]
  totalCountRegisters: number
  totalRegistersPerPage: number
  totalPages: number
}

const ServicesPage: NextPageWithLayout<ServicesPageProps> = ({
  linhas,
  totalCountRegisters,
  totalPages,
  totalRegistersPerPage,
}) => {
  const [selectedItem, setSelectedItem] = useState('')
  const [query, setQuery] = useState<string>('')
  const [items, setItems] = useState(linhas)

  const [page, setPage] = useState(1)

  const { data, isLoading, error } = useLinhas(page, 10, query, {})

  // const updateQuery = async (event: ChangeEvent<HTMLInputElement>) => {
  //   setQuery(event.target.value)
  //   const { linhas } = await getLinhas(1, 10, query)
  //   console.log(linhas)
  // }

  const updateQuery = async (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)

    console.log(event.target.value)
  }

  const debouncedOnChange = debounce(updateQuery, 500)

  return (
    <>
      <Head>
        <title>Linhas | AGERBA</title>
      </Head>
      <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
        <h1 className="font-bold text-[2rem]">Linhas</h1>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <p>Erro ao carregar dados...</p>
        ) : (
          <>
            <div className="flex items-center gap-2 rounded-lg">
              <div className="w-2/3">
                <label className="flex items-center gap-2 py-2 border border-zinc-500 bg-zinc-200 rounded-md relative cursor-pointer ">
                  <FileSearch
                    size={16}
                    weight="light"
                    className="ml-2 text-gray-500"
                  />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Buscar por linha, origem ou destino"
                    className="w-full py-2 bg-transparent outline-none"
                  />
                </label>

                <label className="flex items-center gap-2 py-2 border border-zinc-500 bg-zinc-200 rounded-md relative cursor-pointer ">
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
                    className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg transition-colors duration-100 ease-in-out border hover:border-secondary"
                  >
                    <Disclosure as="div" className="flex flex-col gap-8 w-full">
                      <div className="flex flex-col laptop:flex-row laptop:w-full gap-2">
                        <Disclosure.Button className="flex flex-col gap-4 flex-1 laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center text-left">
                          <span className="font-bold flex-1 flex items-center gap-2">
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
        )}
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
    await getLinhas(1, 10, '')

  return {
    props: {
      linhas,
      totalCountRegisters,
      totalRegistersPerPage,
      totalPages,
    },
  }
}
