import { ReactElement, useState } from 'react'
import Head from 'next/head'

import type { NextPageWithLayout } from '../_app'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { Bookmark, CalendarBlank, File, FileArrowDown } from 'phosphor-react'

import Link from 'next/link'
import { urlBuilder } from '../../lib/urlBuilder'
import { Disclosure, Transition } from '@headlessui/react'
import { useGetLegislacoesQuery } from '../../graphql/generated'
import { motion } from 'framer-motion'
import { Pagination } from '../../components/Pagination'
import classNames from 'classnames'

const tabItems = ['Resoluções', 'Leis', 'Decretos']

const LegislationPage: NextPageWithLayout = () => {
  const [page, setPage] = useState(1)
  const [isSelectedTab, setIsSelectedTab] = useState(0)

  const { data } = useGetLegislacoesQuery({
    variables: {
      limit: 5,
      start: (page - 1) * 5,
    },
  })

  return (
    <>
      <Head>
        <title>Legislações | AGERBA</title>
      </Head>
      <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
        <h1 className="font-bold text-[2rem]">Legislações</h1>

        <ul className="w-full h-full flex flex-col laptop:grid laptop:grid-cols-3 gap-4 text-gray-900 text-[1.25rem] font-bold">
          {tabItems.map((tabItem, index) => (
            <li
              key={index}
              onClick={() => setIsSelectedTab(index)}
              className={classNames(
                'bg-gray-200 px-4 py-2 rounded-lg hover:bg-primary hover:text-white cursor-pointer transition-colors duration-75 ease-in-out',
                {
                  'bg-primary text-white': isSelectedTab === index,
                },
              )}
            >
              {tabItem}
            </li>
          ))}
        </ul>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="transition-all duration-100 ease-in-out"
        >
          {isSelectedTab === 0 && (
            <ul role="list" className="flex flex-col gap-2">
              {data?.resolutions?.data.map((legislation) => {
                if (legislation.attributes?.type === 'Resolucoes') {
                  return (
                    <li
                      key={legislation.id}
                      className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg transition-colors duration-100 ease-in-out border border-transparent hover:border-secondary box-border"
                    >
                      <Disclosure
                        as="div"
                        className="flex flex-col gap-8 w-full"
                      >
                        <div className="flex flex-col laptop:flex-row laptop:w-full gap-2">
                          <Disclosure.Button className="flex flex-col gap-4 flex-1 laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center text-left">
                            <span className="font-bold flex-1 flex items-center gap-2">
                              <File
                                size={16}
                                weight="light"
                                className="text-gray-500"
                              />{' '}
                              {legislation.attributes.title}
                            </span>
                            <span className="flex laptop:border-l-2 laptop:border-primary laptop:pl-2 items-center gap-2">
                              <Bookmark
                                size={16}
                                weight="light"
                                className="text-gray-500"
                              />
                              <span className="font-normal text-xs text-gray-500">
                                {legislation.attributes.type}
                              </span>
                            </span>
                            <span className="laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
                              <CalendarBlank
                                size={16}
                                weight="light"
                                className="text-gray-500"
                              />
                              <span className="font-bold">
                                {new Date(
                                  legislation.attributes.publication_date,
                                ).toLocaleDateString('pt-BR', {
                                  timeZone: 'UTC',
                                })}
                              </span>
                            </span>
                          </Disclosure.Button>
                          <div className="flex items-center justify-center w-full laptop:max-w-[8rem] p-2 laptop:border-l-2 laptop:border-primary laptop:pl-2 text">
                            {legislation.attributes.file ? (
                              <Link
                                legacyBehavior
                                href={urlBuilder(
                                  legislation.attributes.file.data?.attributes
                                    ?.url,
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
                        <Transition
                          enter="transition duration-100 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-75 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0"
                        >
                          {legislation.attributes.menu && (
                            <Disclosure.Panel
                              as="div"
                              className="text-gray-500 text-sm text-left mt-[-1rem] bg-gray-200 p-4 rounded-b-lg line-clamp-4"
                              dangerouslySetInnerHTML={{
                                __html: legislation.attributes.menu,
                              }}
                            ></Disclosure.Panel>
                          )}
                        </Transition>
                      </Disclosure>
                    </li>
                  )
                }
                return null
              })}
              {data?.resolutions?.meta?.pagination &&
                data?.resolutions?.meta?.pagination.total > 0 && (
                  <Pagination
                    totalCountRegisters={Number(
                      data?.resolutions?.meta.pagination.total,
                    )}
                    currentPage={page}
                    totalPages={Number(
                      data?.resolutions?.meta.pagination.pageCount,
                    )}
                    onPageChange={setPage}
                    registersPerPage={Number(
                      data?.resolutions?.meta.pagination.pageSize,
                    )}
                  />
                )}
            </ul>
          )}

          {isSelectedTab === 1 && (
            <ul role="list" className="flex flex-col gap-2">
              {data?.laws?.data.map((legislation) => {
                if (legislation.attributes?.type === 'Leis') {
                  return (
                    <li
                      key={legislation.id}
                      className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg transition-colors duration-100 ease-in-out border border-transparent hover:border-secondary"
                    >
                      <Disclosure
                        as="div"
                        className="flex flex-col gap-8 w-full"
                      >
                        <div className="flex flex-col laptop:flex-row laptop:w-full gap-2">
                          <Disclosure.Button className="flex flex-col gap-4 flex-1 laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center text-left">
                            <span className="font-bold flex-1 flex items-center gap-2">
                              <File
                                size={16}
                                weight="light"
                                className="text-gray-500"
                              />{' '}
                              {legislation.attributes.title}
                            </span>
                            <span className="flex flex-1 laptop:border-l-2 laptop:border-primary laptop:pl-2 items-center gap-2">
                              <Bookmark
                                size={16}
                                weight="light"
                                className="text-gray-500"
                              />
                              <span className="font-normal text-xs text-gray-500">
                                {legislation.attributes.type}
                              </span>
                            </span>
                            <span className="laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
                              <CalendarBlank
                                size={16}
                                weight="light"
                                className="text-gray-500"
                              />
                              <span className="font-bold">
                                {new Date(
                                  legislation.attributes.publication_date,
                                ).toLocaleDateString('pt-BR', {
                                  timeZone: 'UTC',
                                })}
                              </span>
                            </span>
                          </Disclosure.Button>
                          <div className="flex items-center justify-center w-full laptop:max-w-[8rem] p-2 laptop:border-l-2 laptop:border-primary laptop:pl-2 text">
                            {legislation.attributes.file ? (
                              <Link
                                legacyBehavior
                                href={urlBuilder(
                                  legislation.attributes.file.data?.attributes
                                    ?.url,
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
                                className="flex gap-2 items-center justify-center bg-primary hover:bg-white text-white hover:text-primary px-4 py-2 rounded-[4px] border hover:border-primary group disabled:cursor-not-allowed disabled:bg-gray-400"
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
                        <Transition
                          enter="transition duration-100 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-75 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0"
                        >
                          {legislation.attributes.menu && (
                            <Disclosure.Panel
                              as="div"
                              className="text-gray-500 text-sm text-left mt-[-1rem] bg-gray-200 p-4 rounded-b-lg line-clamp-4"
                              dangerouslySetInnerHTML={{
                                __html: legislation.attributes.menu,
                              }}
                            ></Disclosure.Panel>
                          )}
                        </Transition>
                      </Disclosure>
                    </li>
                  )
                }
                return null
              })}
              {data?.laws?.meta?.pagination &&
                data?.laws?.meta?.pagination.total > 0 && (
                  <Pagination
                    totalCountRegisters={Number(
                      data?.laws?.meta.pagination.total,
                    )}
                    currentPage={page}
                    totalPages={Number(data?.laws?.meta.pagination.pageCount)}
                    onPageChange={setPage}
                    registersPerPage={Number(
                      data?.laws?.meta.pagination.pageSize,
                    )}
                  />
                )}
            </ul>
          )}

          {isSelectedTab === 2 && (
            <ul role="list" className="flex flex-col gap-2">
              {data?.decrees?.data.map((legislation) => {
                if (legislation.attributes?.type === 'Decretos') {
                  return (
                    <li
                      key={legislation.id}
                      className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg transition-colors duration-100 ease-in-out border border-transparent hover:border-secondary box-border"
                    >
                      <Disclosure
                        as="div"
                        className="flex flex-col gap-8 w-full"
                      >
                        <div className="flex flex-col laptop:flex-row laptop:w-full gap-2">
                          <Disclosure.Button className="flex flex-col gap-4 flex-1 laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center text-left">
                            <span className="font-bold flex-1 flex items-center gap-2">
                              <File
                                size={16}
                                weight="light"
                                className="text-gray-500"
                              />{' '}
                              {legislation.attributes.title}
                            </span>
                            <span className="flex flex-1 laptop:border-l-2 laptop:border-primary laptop:pl-2 items-center gap-2">
                              <Bookmark
                                size={16}
                                weight="light"
                                className="text-gray-500"
                              />
                              <span className="font-normal text-xs text-gray-500">
                                {legislation.attributes.type}
                              </span>
                            </span>
                            <span className="laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
                              <CalendarBlank
                                size={16}
                                weight="light"
                                className="text-gray-500"
                              />
                              <span className="font-bold">
                                {new Date(
                                  legislation.attributes.publication_date,
                                ).toLocaleDateString('pt-BR', {
                                  timeZone: 'UTC',
                                })}
                              </span>
                            </span>
                          </Disclosure.Button>
                          <div className="flex items-center justify-center w-full laptop:max-w-[8rem] p-2 laptop:border-l-2 laptop:border-primary laptop:pl-2 text">
                            {legislation.attributes.file ? (
                              <Link
                                legacyBehavior
                                href={urlBuilder(
                                  legislation.attributes.file.data?.attributes
                                    ?.url,
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
                        <Transition
                          enter="transition duration-100 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-75 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0"
                        >
                          {legislation.attributes.menu && (
                            <Disclosure.Panel
                              as="div"
                              className="text-gray-500 text-sm text-left mt-[-1rem] bg-gray-200 p-4 rounded-b-lg line-clamp-4"
                              dangerouslySetInnerHTML={{
                                __html: legislation.attributes.menu,
                              }}
                            ></Disclosure.Panel>
                          )}
                        </Transition>
                      </Disclosure>
                    </li>
                  )
                }
                return null
              })}
              {data?.decrees?.meta?.pagination &&
                data?.decrees?.meta?.pagination.total > 0 && (
                  <Pagination
                    totalCountRegisters={Number(
                      data?.decrees?.meta.pagination.total,
                    )}
                    currentPage={page}
                    totalPages={Number(
                      data?.decrees?.meta.pagination.pageCount,
                    )}
                    onPageChange={setPage}
                    registersPerPage={Number(
                      data?.decrees?.meta.pagination.pageSize,
                    )}
                  />
                )}
            </ul>
          )}
        </motion.div>
      </article>
    </>
  )
}

LegislationPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default LegislationPage
