import { ReactElement, useState } from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import { Bookmark, CalendarBlank, File, FileArrowDown } from 'phosphor-react'
import { motion } from 'framer-motion'
import { Disclosure, Transition } from '@headlessui/react'

import type { NextPageWithLayout } from '../_app'
import { DefaultLayout } from '../../layouts/DefaultLayout'

import { Pagination } from '../../components/Pagination'
import { useGetTarifasDeTransportesQuery } from '../../graphql/generated'
import { urlBuilder } from '../../lib/urlBuilder'
import { GetStaticPaths } from 'next'

const tabItems = [
  'Intermunicipal',
  'Metropolitano e Semi-Urbano',
  'Complementar',
]

const TariffsPage: NextPageWithLayout = () => {
  const [page, setPage] = useState(1)
  const [isSelectedTab, setIsSelectedTab] = useState(0)

  const { data } = useGetTarifasDeTransportesQuery({
    variables: {
      limit: 5,
      start: (page - 1) * 5,
    },
  })

  console.log(data)

  return (
    <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
      <h1 className="font-bold text-[2rem]">Tarifas</h1>
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
            {data?.intermunicipal?.data.map((transportItem) => {
              return (
                <li
                  key={transportItem.id}
                  className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg transition-colors duration-100 ease-in-out border border-transparent hover:border-secondary box-border"
                >
                  <Disclosure as="div" className="flex flex-col gap-8 w-full">
                    <div className="flex flex-col laptop:flex-row laptop:w-full gap-2">
                      <Disclosure.Button className="flex flex-col gap-4 flex-1 laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center text-left">
                        <span className="font-bold flex-1 flex items-center gap-2">
                          <File
                            size={16}
                            weight="light"
                            className="text-gray-500"
                          />{' '}
                          {transportItem.attributes?.name}
                        </span>
                        <span className="flex laptop:border-l-2 laptop:border-primary laptop:pl-2 items-center gap-2">
                          <Bookmark
                            size={16}
                            weight="light"
                            className="text-gray-500"
                          />
                          <span className="font-normal text-xs text-gray-500">
                            {transportItem?.attributes?.transportType}
                          </span>
                        </span>
                        <span className="laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
                          <CalendarBlank
                            size={16}
                            weight="light"
                            className="text-gray-500"
                          />
                          {transportItem.attributes?.files && (
                            <span className="font-bold">
                              <span>Registro atual vigente desde: </span>
                              {new Date(
                                transportItem.attributes?.files[0]?.starts_in,
                              ).toLocaleDateString('pt-BR', {
                                timeZone: 'UTC',
                              })}
                            </span>
                          )}
                        </span>
                      </Disclosure.Button>
                      <div className="flex items-center justify-center w-full laptop:max-w-[8rem] p-2 laptop:border-l-2 laptop:border-primary laptop:pl-2 text">
                        {transportItem.attributes?.files ? (
                          <Link
                            href={urlBuilder(
                              transportItem.attributes.files[0]?.file.data
                                ?.attributes?.url,
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
                      {transportItem.attributes?.files && (
                        <Disclosure.Panel
                          as="div"
                          className="text-gray-500 text-sm text-left mt-[-1rem] bg-gray-200 rounded-b-lg"
                        >
                          <h1 className="text-md font-bold text-gray-900 pb-4">
                            Todas as tabelas publicadas:
                          </h1>

                          <ul
                            role="list"
                            className="flex flex-col gap-2 rounded-lg"
                          >
                            {transportItem.attributes.files.map((document) => (
                              <li
                                key={document?.file.data?.attributes?.url}
                                className="flex items-center justify-between laptop:flex-row gap-2 bg-gray-200 py-2 rounded-lg transition-colors duration-100 ease-in-out border border-transparent box-border hover:bg-gray-300"
                              >
                                <div className="flex items-center gap-2">
                                  <File
                                    size={16}
                                    weight="light"
                                    className="text-gray-500"
                                  />
                                  <span className="font-bold text-md text-gray-900">
                                    <span>Vigente desde: </span>
                                    {new Date(
                                      document?.starts_in,
                                    ).toLocaleDateString('pt-BR', {
                                      timeZone: 'UTC',
                                    })}
                                  </span>
                                </div>
                                <Link
                                  href={urlBuilder(
                                    document?.file.data?.attributes?.url,
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
                              </li>
                            ))}
                          </ul>
                        </Disclosure.Panel>
                      )}
                    </Transition>
                  </Disclosure>
                </li>
              )
            })}
            {data?.intermunicipal?.meta?.pagination &&
              data?.intermunicipal?.meta?.pagination.total > 0 && (
                <Pagination
                  totalCountRegisters={Number(
                    data?.intermunicipal?.meta.pagination.total,
                  )}
                  currentPage={page}
                  totalPages={Number(
                    data?.intermunicipal?.meta.pagination.pageCount,
                  )}
                  onPageChange={setPage}
                  registersPerPage={Number(
                    data?.intermunicipal?.meta.pagination.pageSize,
                  )}
                />
              )}
          </ul>
        )}

        {isSelectedTab === 1 && (
          <ul role="list" className="flex flex-col gap-2">
            {data?.metropolitanoESemiUrbano?.data.map((transportItem) => {
              return (
                <li
                  key={transportItem.id}
                  className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg transition-colors duration-100 ease-in-out border border-transparent hover:border-secondary box-border"
                >
                  <Disclosure as="div" className="flex flex-col gap-8 w-full">
                    <div className="flex flex-col laptop:flex-row laptop:w-full gap-2">
                      <Disclosure.Button className="flex flex-col gap-4 flex-1 laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center text-left">
                        <span className="font-bold flex-1 flex items-center gap-2">
                          <File
                            size={16}
                            weight="light"
                            className="text-gray-500"
                          />{' '}
                          {transportItem.attributes?.name}
                        </span>
                        <span className="flex laptop:border-l-2 laptop:border-primary laptop:pl-2 items-center gap-2">
                          <Bookmark
                            size={16}
                            weight="light"
                            className="text-gray-500"
                          />
                          <span className="font-normal text-xs text-gray-500">
                            {transportItem?.attributes?.transportType}
                          </span>
                        </span>
                        <span className="laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
                          <CalendarBlank
                            size={16}
                            weight="light"
                            className="text-gray-500"
                          />
                          {transportItem.attributes?.files && (
                            <span className="font-bold">
                              <span>Registro atual vigente desde: </span>
                              {new Date(
                                transportItem.attributes?.files[0]?.starts_in,
                              ).toLocaleDateString('pt-BR', {
                                timeZone: 'UTC',
                              })}
                            </span>
                          )}
                        </span>
                      </Disclosure.Button>
                      <div className="flex items-center justify-center w-full laptop:max-w-[8rem] p-2 laptop:border-l-2 laptop:border-primary laptop:pl-2 text">
                        {transportItem.attributes?.files ? (
                          <Link
                            href={urlBuilder(
                              transportItem.attributes.files[0]?.file.data
                                ?.attributes?.url,
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
                      {transportItem.attributes?.files && (
                        <Disclosure.Panel
                          as="div"
                          className="text-gray-500 text-sm text-left mt-[-1rem] bg-gray-200 rounded-b-lg"
                        >
                          <h1 className="text-md font-bold text-gray-900 pb-4">
                            Todas as tabelas publicadas:
                          </h1>

                          <ul
                            role="list"
                            className="flex flex-col gap-2 rounded-lg"
                          >
                            {transportItem.attributes.files.map((document) => (
                              <li
                                key={document?.file.data?.attributes?.url}
                                className="flex items-center justify-between laptop:flex-row gap-2 bg-gray-200 py-2 rounded-lg transition-colors duration-100 ease-in-out border border-transparent box-border hover:bg-gray-300"
                              >
                                <div className="flex items-center gap-2">
                                  <File
                                    size={16}
                                    weight="light"
                                    className="text-gray-500"
                                  />
                                  <span className="font-bold text-md text-gray-900">
                                    <span>Vigente desde: </span>
                                    {new Date(
                                      document?.starts_in,
                                    ).toLocaleDateString('pt-BR', {
                                      timeZone: 'UTC',
                                    })}
                                  </span>
                                </div>
                                <Link
                                  href={urlBuilder(
                                    document?.file.data?.attributes?.url,
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
                              </li>
                            ))}
                          </ul>
                        </Disclosure.Panel>
                      )}
                    </Transition>
                  </Disclosure>
                </li>
              )
            })}
            {data?.metropolitanoESemiUrbano?.meta?.pagination &&
              data?.metropolitanoESemiUrbano?.meta?.pagination.total > 0 && (
                <Pagination
                  totalCountRegisters={Number(
                    data?.metropolitanoESemiUrbano?.meta.pagination.total,
                  )}
                  currentPage={page}
                  totalPages={Number(
                    data?.metropolitanoESemiUrbano?.meta.pagination.pageCount,
                  )}
                  onPageChange={setPage}
                  registersPerPage={Number(
                    data?.metropolitanoESemiUrbano?.meta.pagination.pageSize,
                  )}
                />
              )}
          </ul>
        )}

        {isSelectedTab === 2 && (
          <ul role="list" className="flex flex-col gap-2">
            {data?.complementar?.data.map((transportItem) => {
              return (
                <li
                  key={transportItem.id}
                  className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg transition-colors duration-100 ease-in-out border border-transparent hover:border-secondary box-border"
                >
                  <Disclosure as="div" className="flex flex-col gap-8 w-full">
                    <div className="flex flex-col laptop:flex-row laptop:w-full gap-2">
                      <Disclosure.Button className="flex flex-col gap-4 flex-1 laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center text-left">
                        <span className="font-bold flex-1 flex items-center gap-2">
                          <File
                            size={16}
                            weight="light"
                            className="text-gray-500"
                          />{' '}
                          {transportItem.attributes?.name}
                        </span>
                        <span className="flex laptop:border-l-2 laptop:border-primary laptop:pl-2 items-center gap-2">
                          <Bookmark
                            size={16}
                            weight="light"
                            className="text-gray-500"
                          />
                          <span className="font-normal text-xs text-gray-500">
                            {transportItem?.attributes?.transportType}
                          </span>
                        </span>
                        <span className="laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
                          <CalendarBlank
                            size={16}
                            weight="light"
                            className="text-gray-500"
                          />
                          {transportItem.attributes?.files && (
                            <span className="font-bold">
                              <span>Registro atual vigente desde: </span>
                              {new Date(
                                transportItem.attributes?.files[0]?.starts_in,
                              ).toLocaleDateString('pt-BR', {
                                timeZone: 'UTC',
                              })}
                            </span>
                          )}
                        </span>
                      </Disclosure.Button>
                      <div className="flex items-center justify-center w-full laptop:max-w-[8rem] p-2 laptop:border-l-2 laptop:border-primary laptop:pl-2 text">
                        {transportItem.attributes?.files ? (
                          <Link
                            href={urlBuilder(
                              transportItem.attributes.files[0]?.file.data
                                ?.attributes?.url,
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
                      {transportItem.attributes?.files && (
                        <Disclosure.Panel
                          as="div"
                          className="text-gray-500 text-sm text-left mt-[-1rem] bg-gray-200 rounded-b-lg"
                        >
                          <h1 className="text-md font-bold text-gray-900 pb-4">
                            Todas as tabelas publicadas:
                          </h1>

                          <ul
                            role="list"
                            className="flex flex-col gap-2 rounded-lg"
                          >
                            {transportItem.attributes.files.map((document) => (
                              <li
                                key={document?.file.data?.attributes?.url}
                                className="flex items-center justify-between laptop:flex-row gap-2 bg-gray-200 py-2 rounded-lg transition-colors duration-100 ease-in-out border border-transparent box-border hover:bg-gray-300"
                              >
                                <div className="flex items-center gap-2">
                                  <File
                                    size={16}
                                    weight="light"
                                    className="text-gray-500"
                                  />
                                  <span className="font-bold text-md text-gray-900">
                                    <span>Vigente desde: </span>
                                    {new Date(
                                      document?.starts_in,
                                    ).toLocaleDateString('pt-BR', {
                                      timeZone: 'UTC',
                                    })}
                                  </span>
                                </div>
                                <Link
                                  href={urlBuilder(
                                    document?.file.data?.attributes?.url,
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
                              </li>
                            ))}
                          </ul>
                        </Disclosure.Panel>
                      )}
                    </Transition>
                  </Disclosure>
                </li>
              )
            })}
            {data?.complementar?.meta?.pagination &&
              data?.complementar?.meta?.pagination.total > 0 && (
                <Pagination
                  totalCountRegisters={Number(
                    data?.complementar?.meta.pagination.total,
                  )}
                  currentPage={page}
                  totalPages={Number(
                    data?.complementar?.meta.pagination.pageCount,
                  )}
                  onPageChange={setPage}
                  registersPerPage={Number(
                    data?.complementar?.meta.pagination.pageSize,
                  )}
                />
              )}
          </ul>
        )}
      </motion.div>
    </article>
  )
}

TariffsPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default TariffsPage

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
