import { ReactElement, useState } from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import { Bookmark, CalendarBlank, File, FileArrowDown } from 'phosphor-react'
import { motion } from 'framer-motion'
import { Disclosure, Transition } from '@headlessui/react'

import type { NextPageWithLayout } from '../_app'
import { DefaultLayout } from '../../layouts/DefaultLayout'

import { Pagination } from '../../components/Pagination'
import { urlBuilder } from '../../lib/urlBuilder'
import {
  useGetRodoviasPedagiadasQuery,
  useGetTarifasDeTransportesHidroviariosQuery,
  useGetTarifasDeTransportesRodoviariosQuery,
  useGetTarifasGasQuery,
  useGetTutEsQuery,
} from '../../graphql/generated'

const TariffsPage: NextPageWithLayout = () => {
  const [page, setPage] = useState(1)
  const [isTariffType, setIsTariffType] = useState(0)
  const [isSelectedTab, setIsSelectedTab] = useState(0)

  const { data: tarifasTransporteRodoviarioData } =
    useGetTarifasDeTransportesRodoviariosQuery({
      variables: {
        limit: 5,
        start: (page - 1) * 5,
      },
    })

  const { data: tarifasTransporteHidroviarioData } =
    useGetTarifasDeTransportesHidroviariosQuery({
      variables: {
        limit: 5,
        start: (page - 1) * 5,
      },
    })

  const { data: tarifasUsoTerminais } = useGetTutEsQuery({
    variables: {
      limit: 5,
      start: (page - 1) * 5,
    },
  })

  const { data: tarifasRodoviasPedagiadas } = useGetRodoviasPedagiadasQuery({
    variables: {
      limit: 5,
      start: (page - 1) * 5,
    },
  })

  const { data: tarifasGas } = useGetTarifasGasQuery({
    variables: {
      limit: 5,
      start: (page - 1) * 5,
    },
  })

  const tabTarifas = [
    {
      id: 1,
      title: 'Transporte Rodoviário',
      categories: [
        {
          id: 1,
          title: 'Intermunicipal',
          companies: {
            meta: {
              ...tarifasTransporteRodoviarioData
                ?.tarifasRodoviarioIntermunicipal?.meta,
            },
            data: {
              ...tarifasTransporteRodoviarioData
                ?.tarifasRodoviarioIntermunicipal?.data,
            },
          },
        },
        {
          id: 2,
          title: 'Metropolitano',
        },
        {
          id: 3,
          title: 'Semiurbano',
        },
        {
          id: 4,
          title: 'Complementar',
          companies: {
            meta: {
              ...tarifasTransporteRodoviarioData
                ?.tarifasRodoviarioMetropolitanoComplementar?.meta,
            },
            data: {
              ...tarifasTransporteRodoviarioData
                ?.tarifasRodoviarioMetropolitanoComplementar?.data,
            },
          },
        },
      ],
    },
    {
      id: 2,
      title: 'Transporte Hidroviário',
      categories: [
        {
          id: 1,
          title: 'FerryBoat',
          ...tarifasTransporteHidroviarioData?.tarifasHidroviarioFerryBoat,
        },
        {
          id: 2,
          title: 'Catamarã',
          ...tarifasTransporteHidroviarioData?.tarifasHidroviarioCatamara,
        },
        {
          id: 3,
          title: 'Lanchas',
          ...tarifasTransporteHidroviarioData?.tarifasHidroviarioLanchas,
        },
      ],
    },
    {
      id: 3,
      title: 'Tarifa de Utilização de Terminal',
      categories: [
        {
          id: 1,
          title: 'Rodoviário',
        },
        {
          id: 2,
          title: 'Hidroviário',
        },
      ],
    },
    { id: 4, title: 'Rodovias Pedagiadas' },
    { id: 5, title: 'Gás' },
  ]

  function handleSelectedTariffType(tariffyType: any) {
    setIsTariffType(tariffyType)
    setIsSelectedTab(0)
  }

  function handleSelectTariffCategory(tariffyType: any, categoryType: number) {
    setIsTariffType(tariffyType)
    setIsSelectedTab(categoryType)
  }

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

      <ul className="w-full h-full flex flex-col laptop:grid laptop:grid-cols-5 gap-4 text-gray-900 text-[1.25rem] font-bold">
        {tabTarifas.map((tabItem, index) => (
          <li
            key={index}
            onClick={() => handleSelectedTariffType(index)}
            className={classNames(
              'bg-gray-200 px-4 py-2 rounded-lg hover:bg-primary hover:text-white cursor-pointer transition-colors duration-75 ease-in-out',
              {
                'bg-primary text-white': isTariffType === index,
              },
            )}
          >
            {tabItem.title}
          </li>
        ))}
      </ul>

      {isTariffType === 0 && (
        <>
          <ul className="w-full h-full flex flex-col laptop:grid laptop:grid-cols-4 gap-4 text-gray-900 text-[1.25rem] font-bold">
            {tabTarifas[isTariffType]?.categories?.map((tabItem, index) => (
              <li
                key={tabItem.id}
                onClick={() => handleSelectTariffCategory(isTariffType, index)}
                className={classNames(
                  'bg-gray-200 px-4 py-2 rounded-lg hover:bg-primary hover:text-white cursor-pointer transition-colors duration-75 ease-in-out',
                  {
                    'bg-primary text-white': isSelectedTab === index,
                  },
                )}
              >
                {tabItem.title}
              </li>
            ))}
          </ul>

          {isSelectedTab === 0 && (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="transition-all duration-100 ease-in-out"
            >
              <ul role="list" className="flex flex-col gap-2">
                {tarifasTransporteRodoviarioData?.tarifasRodoviarioIntermunicipal?.data.map(
                  (transportItem) => {
                    return (
                      <li
                        key={transportItem.id}
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
                                  {transportItem.attributes.files.map(
                                    (document) => (
                                      <li
                                        key={
                                          document?.file.data?.attributes?.url
                                        }
                                        className="flex items-center justify-between laptop:flex-row gap-2 bg-gray-200 p-2 rounded-lg transition-colors duration-100 ease-in-out border border-transparent box-border hover:bg-gray-300"
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
                                            document?.file.data?.attributes
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
                                      </li>
                                    ),
                                  )}
                                </ul>
                              </Disclosure.Panel>
                            )}
                          </Transition>
                        </Disclosure>
                      </li>
                    )
                  },
                )}
                {tarifasTransporteRodoviarioData
                  ?.tarifasRodoviarioIntermunicipal?.meta?.pagination &&
                  tarifasTransporteRodoviarioData
                    ?.tarifasRodoviarioIntermunicipal?.meta?.pagination.total >
                    0 && (
                    <Pagination
                      totalCountRegisters={Number(
                        tarifasTransporteRodoviarioData
                          ?.tarifasRodoviarioIntermunicipal?.meta.pagination
                          .total,
                      )}
                      currentPage={page}
                      totalPages={Number(
                        tarifasTransporteRodoviarioData
                          ?.tarifasRodoviarioIntermunicipal?.meta.pagination
                          .pageCount,
                      )}
                      onPageChange={setPage}
                      registersPerPage={Number(
                        tarifasTransporteRodoviarioData
                          ?.tarifasRodoviarioIntermunicipal?.meta.pagination
                          .pageSize,
                      )}
                    />
                  )}
              </ul>
            </motion.div>
          )}

          {isSelectedTab === 1 && (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="transition-all duration-100 ease-in-out"
            >
              <ul role="list" className="flex flex-col gap-2">
                {tarifasTransporteRodoviarioData?.tarifasRodoviarioMetropolitano?.data.map(
                  (transportItem) => {
                    return (
                      <li
                        key={transportItem.id}
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
                                  {transportItem.attributes.files.map(
                                    (document) => (
                                      <li
                                        key={
                                          document?.file.data?.attributes?.url
                                        }
                                        className="flex items-center justify-between laptop:flex-row gap-2 bg-gray-200 p-2 rounded-lg transition-colors duration-100 ease-in-out border border-transparent box-border hover:bg-gray-300"
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
                                            document?.file.data?.attributes
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
                                      </li>
                                    ),
                                  )}
                                </ul>
                              </Disclosure.Panel>
                            )}
                          </Transition>
                        </Disclosure>
                      </li>
                    )
                  },
                )}
                {tarifasTransporteRodoviarioData?.tarifasRodoviarioMetropolitano
                  ?.meta?.pagination &&
                  tarifasTransporteRodoviarioData
                    ?.tarifasRodoviarioMetropolitano?.meta?.pagination.total >
                    0 && (
                    <Pagination
                      totalCountRegisters={Number(
                        tarifasTransporteRodoviarioData
                          ?.tarifasRodoviarioMetropolitano?.meta.pagination
                          .total,
                      )}
                      currentPage={page}
                      totalPages={Number(
                        tarifasTransporteRodoviarioData
                          ?.tarifasRodoviarioMetropolitano?.meta.pagination
                          .pageCount,
                      )}
                      onPageChange={setPage}
                      registersPerPage={Number(
                        tarifasTransporteRodoviarioData
                          ?.tarifasRodoviarioMetropolitano?.meta.pagination
                          .pageSize,
                      )}
                    />
                  )}
              </ul>
            </motion.div>
          )}

          {isSelectedTab === 2 && (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="transition-all duration-100 ease-in-out"
            >
              <ul role="list" className="flex flex-col gap-2">
                {tarifasTransporteRodoviarioData?.tarifasRodoviarioSemiurbano?.data.map(
                  (transportItem) => {
                    return (
                      <li
                        key={transportItem.id}
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
                                  {transportItem.attributes.files.map(
                                    (document) => (
                                      <li
                                        key={
                                          document?.file.data?.attributes?.url
                                        }
                                        className="flex items-center justify-between laptop:flex-row gap-2 bg-gray-200 p-2 rounded-lg transition-colors duration-100 ease-in-out border border-transparent box-border hover:bg-gray-300"
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
                                            document?.file.data?.attributes
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
                                      </li>
                                    ),
                                  )}
                                </ul>
                              </Disclosure.Panel>
                            )}
                          </Transition>
                        </Disclosure>
                      </li>
                    )
                  },
                )}
                {tarifasTransporteRodoviarioData?.tarifasRodoviarioSemiurbano
                  ?.meta?.pagination &&
                  tarifasTransporteRodoviarioData?.tarifasRodoviarioSemiurbano
                    ?.meta?.pagination.total > 0 && (
                    <Pagination
                      totalCountRegisters={Number(
                        tarifasTransporteRodoviarioData
                          ?.tarifasRodoviarioSemiurbano?.meta.pagination.total,
                      )}
                      currentPage={page}
                      totalPages={Number(
                        tarifasTransporteRodoviarioData
                          ?.tarifasRodoviarioSemiurbano?.meta.pagination
                          .pageCount,
                      )}
                      onPageChange={setPage}
                      registersPerPage={Number(
                        tarifasTransporteRodoviarioData
                          ?.tarifasRodoviarioSemiurbano?.meta.pagination
                          .pageSize,
                      )}
                    />
                  )}
              </ul>
            </motion.div>
          )}

          {isSelectedTab === 3 && (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="transition-all duration-100 ease-in-out"
            >
              <ul role="list" className="flex flex-col gap-2">
                {tarifasTransporteRodoviarioData?.tarifasRodoviarioMetropolitanoComplementar?.data.map(
                  (transportItem) => {
                    return (
                      <li
                        key={transportItem.id}
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
                                  {transportItem.attributes.files.map(
                                    (document) => (
                                      <li
                                        key={
                                          document?.file.data?.attributes?.url
                                        }
                                        className="flex items-center justify-between laptop:flex-row gap-2 bg-gray-200 p-2 rounded-lg transition-colors duration-100 ease-in-out border border-transparent box-border hover:bg-gray-300"
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
                                            document?.file.data?.attributes
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
                                      </li>
                                    ),
                                  )}
                                </ul>
                              </Disclosure.Panel>
                            )}
                          </Transition>
                        </Disclosure>
                      </li>
                    )
                  },
                )}
                {tarifasTransporteRodoviarioData
                  ?.tarifasRodoviarioMetropolitanoComplementar?.meta
                  ?.pagination &&
                  tarifasTransporteRodoviarioData
                    ?.tarifasRodoviarioMetropolitanoComplementar?.meta
                    ?.pagination.total > 0 && (
                    <Pagination
                      totalCountRegisters={Number(
                        tarifasTransporteRodoviarioData
                          ?.tarifasRodoviarioMetropolitanoComplementar?.meta
                          .pagination.total,
                      )}
                      currentPage={page}
                      totalPages={Number(
                        tarifasTransporteRodoviarioData
                          ?.tarifasRodoviarioMetropolitanoComplementar?.meta
                          .pagination.pageCount,
                      )}
                      onPageChange={setPage}
                      registersPerPage={Number(
                        tarifasTransporteRodoviarioData
                          ?.tarifasRodoviarioMetropolitanoComplementar?.meta
                          .pagination.pageSize,
                      )}
                    />
                  )}
              </ul>
            </motion.div>
          )}
        </>
      )}

      {isTariffType === 1 && (
        <>
          <ul className="w-full h-full flex flex-col laptop:grid laptop:grid-cols-3 gap-4 text-gray-900 text-[1.25rem] font-bold">
            {tabTarifas[isTariffType]?.categories?.map((tabItem, index) => (
              <li
                key={tabItem.id}
                onClick={() => handleSelectTariffCategory(isTariffType, index)}
                className={classNames(
                  'bg-gray-200 px-4 py-2 rounded-lg hover:bg-primary hover:text-white cursor-pointer transition-colors duration-75 ease-in-out',
                  {
                    'bg-primary text-white': isSelectedTab === index,
                  },
                )}
              >
                {tabItem.title}
              </li>
            ))}
          </ul>

          {isSelectedTab === 0 && (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="transition-all duration-100 ease-in-out"
            >
              <ul role="list" className="flex flex-col gap-2">
                {tarifasTransporteHidroviarioData?.tarifasHidroviarioFerryBoat?.data.map(
                  (transportItem) => {
                    return (
                      <li
                        key={transportItem.id}
                        className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg transition-colors duration-100 ease-in-out border border-transparent hover:border-secondary box-border"
                      >
                        <Disclosure
                          as="div"
                          className="flex flex-col gap-8 w-full"
                        >
                          <div className="flex flex-col laptop:flex-row laptop:w-full gap-2">
                            <Disclosure.Button className="flex flex-col gap-4 flex-1 laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center text-left">
                              <span className="flex items-center gap-2">
                                <CalendarBlank
                                  size={16}
                                  weight="light"
                                  className="text-gray-500"
                                />
                                {transportItem.attributes?.files && (
                                  <span className="font-bold">
                                    <span>Vigente desde: </span>
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
                                  {transportItem.attributes.files.map(
                                    (document) => (
                                      <li
                                        key={
                                          document?.file.data?.attributes?.url
                                        }
                                        className="flex items-center justify-between laptop:flex-row gap-2 bg-gray-200 p-2 rounded-lg transition-colors duration-100 ease-in-out border border-transparent box-border hover:bg-gray-300"
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
                                            document?.file.data?.attributes
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
                                      </li>
                                    ),
                                  )}
                                </ul>
                              </Disclosure.Panel>
                            )}
                          </Transition>
                        </Disclosure>
                      </li>
                    )
                  },
                )}
                {tarifasTransporteHidroviarioData?.tarifasHidroviarioFerryBoat
                  ?.meta?.pagination &&
                  tarifasTransporteHidroviarioData?.tarifasHidroviarioFerryBoat
                    ?.meta?.pagination.total > 0 && (
                    <Pagination
                      totalCountRegisters={Number(
                        tarifasTransporteHidroviarioData
                          ?.tarifasHidroviarioFerryBoat?.meta.pagination.total,
                      )}
                      currentPage={page}
                      totalPages={Number(
                        tarifasTransporteHidroviarioData
                          ?.tarifasHidroviarioFerryBoat?.meta.pagination
                          .pageCount,
                      )}
                      onPageChange={setPage}
                      registersPerPage={Number(
                        tarifasTransporteHidroviarioData
                          ?.tarifasHidroviarioFerryBoat?.meta.pagination
                          .pageSize,
                      )}
                    />
                  )}
              </ul>
            </motion.div>
          )}

          {isSelectedTab === 1 && (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="transition-all duration-100 ease-in-out"
            >
              <ul role="list" className="flex flex-col gap-2">
                {tarifasTransporteHidroviarioData?.tarifasHidroviarioCatamara?.data.map(
                  (transportItem) => {
                    return (
                      <li
                        key={transportItem.id}
                        className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg transition-colors duration-100 ease-in-out border border-transparent hover:border-secondary box-border"
                      >
                        <Disclosure
                          as="div"
                          className="flex flex-col gap-8 w-full"
                        >
                          <div className="flex flex-col laptop:flex-row laptop:w-full gap-2">
                            <Disclosure.Button className="flex flex-col gap-4 flex-1 laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center text-left">
                              <span className="flex items-center gap-2">
                                <CalendarBlank
                                  size={16}
                                  weight="light"
                                  className="text-gray-500"
                                />
                                {transportItem.attributes?.files && (
                                  <span className="font-bold">
                                    <span>Vigente desde: </span>
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
                                  {transportItem.attributes.files.map(
                                    (document) => (
                                      <li
                                        key={
                                          document?.file.data?.attributes?.url
                                        }
                                        className="flex items-center justify-between laptop:flex-row gap-2 bg-gray-200 p-2 rounded-lg transition-colors duration-100 ease-in-out border border-transparent box-border hover:bg-gray-300"
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
                                            document?.file.data?.attributes
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
                                      </li>
                                    ),
                                  )}
                                </ul>
                              </Disclosure.Panel>
                            )}
                          </Transition>
                        </Disclosure>
                      </li>
                    )
                  },
                )}
                {tarifasTransporteHidroviarioData?.tarifasHidroviarioCatamara
                  ?.meta?.pagination &&
                  tarifasTransporteHidroviarioData?.tarifasHidroviarioCatamara
                    ?.meta?.pagination.total > 0 && (
                    <Pagination
                      totalCountRegisters={Number(
                        tarifasTransporteHidroviarioData
                          ?.tarifasHidroviarioCatamara?.meta.pagination.total,
                      )}
                      currentPage={page}
                      totalPages={Number(
                        tarifasTransporteHidroviarioData
                          ?.tarifasHidroviarioCatamara?.meta.pagination
                          .pageCount,
                      )}
                      onPageChange={setPage}
                      registersPerPage={Number(
                        tarifasTransporteHidroviarioData
                          ?.tarifasHidroviarioCatamara?.meta.pagination
                          .pageSize,
                      )}
                    />
                  )}
              </ul>
            </motion.div>
          )}

          {isSelectedTab === 2 && (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="transition-all duration-100 ease-in-out"
            >
              <ul role="list" className="flex flex-col gap-2">
                {tarifasTransporteHidroviarioData?.tarifasHidroviarioLanchas?.data.map(
                  (transportItem) => {
                    return (
                      <li
                        key={transportItem.id}
                        className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg transition-colors duration-100 ease-in-out border border-transparent hover:border-secondary box-border"
                      >
                        <Disclosure
                          as="div"
                          className="flex flex-col gap-8 w-full"
                        >
                          <div className="flex flex-col laptop:flex-row laptop:w-full gap-2">
                            <Disclosure.Button className="flex flex-col gap-4 flex-1 laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center text-left">
                              <span className="flex items-center gap-2">
                                <CalendarBlank
                                  size={16}
                                  weight="light"
                                  className="text-gray-500"
                                />
                                {transportItem.attributes?.files && (
                                  <span className="font-bold">
                                    <span>Vigente desde: </span>
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
                                  {transportItem.attributes.files.map(
                                    (document) => (
                                      <li
                                        key={
                                          document?.file.data?.attributes?.url
                                        }
                                        className="flex items-center justify-between laptop:flex-row gap-2 bg-gray-200 p-2 rounded-lg transition-colors duration-100 ease-in-out border border-transparent box-border hover:bg-gray-300"
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
                                            document?.file.data?.attributes
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
                                      </li>
                                    ),
                                  )}
                                </ul>
                              </Disclosure.Panel>
                            )}
                          </Transition>
                        </Disclosure>
                      </li>
                    )
                  },
                )}
                {tarifasTransporteHidroviarioData?.tarifasHidroviarioLanchas
                  ?.meta?.pagination &&
                  tarifasTransporteHidroviarioData?.tarifasHidroviarioLanchas
                    ?.meta?.pagination.total > 0 && (
                    <Pagination
                      totalCountRegisters={Number(
                        tarifasTransporteHidroviarioData
                          ?.tarifasHidroviarioLanchas?.meta.pagination.total,
                      )}
                      currentPage={page}
                      totalPages={Number(
                        tarifasTransporteHidroviarioData
                          ?.tarifasHidroviarioLanchas?.meta.pagination
                          .pageCount,
                      )}
                      onPageChange={setPage}
                      registersPerPage={Number(
                        tarifasTransporteHidroviarioData
                          ?.tarifasHidroviarioLanchas?.meta.pagination.pageSize,
                      )}
                    />
                  )}
              </ul>
            </motion.div>
          )}
        </>
      )}

      {isTariffType === 2 && (
        <>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="transition-all duration-100 ease-in-out"
          >
            <ul role="list" className="flex flex-col gap-2">
              {tarifasUsoTerminais?.tarifasTerminaisTUTE?.data.map(
                (transportItem) => {
                  return (
                    <li
                      key={transportItem.id}
                      className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 cursor-pointer rounded-lg transition-colors duration-100 ease-in-out border border-transparent hover:border-secondary box-border"
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
                              {transportItem.attributes?.type}
                            </span>
                            <span className="flex items-center gap-2">
                              <CalendarBlank
                                size={16}
                                weight="light"
                                className="text-gray-500"
                              />
                              {transportItem.attributes?.document && (
                                <span className="font-bold">
                                  <span>Vigente desde: </span>
                                  {new Date(
                                    transportItem.attributes?.document[0]?.starts_in,
                                  ).toLocaleDateString('pt-BR', {
                                    timeZone: 'UTC',
                                  })}
                                </span>
                              )}
                            </span>
                          </Disclosure.Button>
                          <div className="flex items-center justify-center w-full laptop:max-w-[8rem] p-2 laptop:border-l-2 laptop:border-primary laptop:pl-2 text">
                            {transportItem.attributes?.document ? (
                              <Link
                                href={urlBuilder(
                                  transportItem.attributes.document[0]?.file
                                    .data?.attributes?.url,
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
                          {transportItem.attributes?.document && (
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
                                {transportItem.attributes.document.map(
                                  (document) => (
                                    <li
                                      key={document?.id}
                                      className="flex items-center justify-between laptop:flex-row gap-2 bg-gray-200 p-2 rounded-lg transition-colors duration-100 ease-in-out border border-transparent box-border hover:bg-gray-300"
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
                                  ),
                                )}
                              </ul>
                            </Disclosure.Panel>
                          )}
                        </Transition>
                      </Disclosure>
                    </li>
                  )
                },
              )}
            </ul>
          </motion.div>
        </>
      )}

      {isTariffType === 3 && (
        <>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="transition-all duration-100 ease-in-out"
          >
            <ul role="list" className="flex flex-col gap-2">
              {tarifasRodoviasPedagiadas?.tarifasRodoviasPedagiadas?.data.map(
                (transportItem) => {
                  return (
                    <li
                      key={transportItem.id}
                      className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 cursor-pointer rounded-lg transition-colors duration-100 ease-in-out border border-transparent hover:border-secondary box-border"
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
                              {transportItem.attributes?.name}
                            </span>
                            <span className="flex items-center gap-2">
                              <CalendarBlank
                                size={16}
                                weight="light"
                                className="text-gray-500"
                              />
                              {transportItem.attributes?.document && (
                                <span className="font-bold">
                                  <span>Vigente desde: </span>
                                  {new Date(
                                    transportItem.attributes?.document[0]?.starts_in,
                                  ).toLocaleDateString('pt-BR', {
                                    timeZone: 'UTC',
                                  })}
                                </span>
                              )}
                            </span>
                          </Disclosure.Button>
                          <div className="flex items-center justify-center w-full laptop:max-w-[8rem] p-2 laptop:border-l-2 laptop:border-primary laptop:pl-2 text">
                            {transportItem.attributes?.document ? (
                              <Link
                                href={urlBuilder(
                                  transportItem.attributes.document[0]?.file
                                    .data?.attributes?.url,
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
                          {transportItem.attributes?.document && (
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
                                {transportItem.attributes.document.map(
                                  (document) => (
                                    <li
                                      key={document?.id}
                                      className="flex items-center justify-between laptop:flex-row gap-2 bg-gray-200 p-2 rounded-lg transition-colors duration-100 ease-in-out border border-transparent box-border hover:bg-gray-300"
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
                                  ),
                                )}
                              </ul>
                            </Disclosure.Panel>
                          )}
                        </Transition>
                      </Disclosure>
                    </li>
                  )
                },
              )}
            </ul>
          </motion.div>
        </>
      )}

      {isTariffType === 4 && (
        <>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="transition-all duration-100 ease-in-out"
          >
            <ul role="list" className="flex flex-col gap-2">
              {tarifasGas?.tarifasGas?.data.map((transportItem) => {
                return (
                  <li
                    key={transportItem.id}
                    className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 cursor-pointer rounded-lg transition-colors duration-100 ease-in-out border border-transparent hover:border-secondary box-border"
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
                          <span className="flex items-center gap-2">
                            <CalendarBlank
                              size={16}
                              weight="light"
                              className="text-gray-500"
                            />
                            {transportItem.attributes?.document && (
                              <span className="font-bold">
                                <span>Vigente desde: </span>
                                {new Date(
                                  transportItem.attributes?.document[0]?.starts_in,
                                ).toLocaleDateString('pt-BR', {
                                  timeZone: 'UTC',
                                })}
                              </span>
                            )}
                          </span>
                        </Disclosure.Button>
                        <div className="flex items-center justify-center w-full laptop:max-w-[8rem] p-2 laptop:border-l-2 laptop:border-primary laptop:pl-2 text">
                          {transportItem.attributes?.document ? (
                            <Link
                              href={urlBuilder(
                                transportItem.attributes.document[0]?.file.data
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
                        {transportItem.attributes?.document && (
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
                              {transportItem.attributes.document.map(
                                (document) => (
                                  <li
                                    key={document?.id}
                                    className="flex items-center justify-between laptop:flex-row gap-2 bg-gray-200 p-2 rounded-lg transition-colors duration-100 ease-in-out border border-transparent box-border hover:bg-gray-300"
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
                                ),
                              )}
                            </ul>
                          </Disclosure.Panel>
                        )}
                      </Transition>
                    </Disclosure>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        </>
      )}
    </article>
  )
}

TariffsPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default TariffsPage
