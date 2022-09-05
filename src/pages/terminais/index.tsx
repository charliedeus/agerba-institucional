import { ReactElement, useState } from 'react'

import type { NextPageWithLayout } from '../_app'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { Bookmark, EnvelopeSimple, FileArrowDown, Phone } from 'phosphor-react'

import { urlBuilder } from '../../lib/urlBuilder'
import { Disclosure } from '@headlessui/react'
import { useGetTerminaisQuery } from '../../graphql/generated'
import { motion } from 'framer-motion'
import Link from 'next/link'

const tabItems = ['Rodoviários', 'Hidroviários', 'Aeroviários']

const TerminalsPage: NextPageWithLayout = () => {
  const [isSelectedTab, setIsSelectedTab] = useState(0)

  const { data } = useGetTerminaisQuery()

  const busTerminals = data?.terminais?.data.filter(
    (terminal) => terminal.attributes?.type === 'Rodoviario',
  )
  const waterwayTerminals = data?.terminais?.data.filter(
    (terminal) => terminal.attributes?.type === 'Hidroviario',
  )
  const airTerminals = data?.terminais?.data.filter(
    (terminal) => terminal.attributes?.type === 'Aeroviario',
  )

  return (
    <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
      <h1 className="font-bold text-[2rem]">Terminais</h1>
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

      <ul className="w-full h-full flex flex-wrap justify-between gap-2 text-gray-900 text-[1.25rem] font-bold">
        {tabItems.map((tabItem, index) => (
          <li
            key={index}
            onClick={() => setIsSelectedTab(index)}
            className="bg-gray-200 w-full laptop:w-1/4 px-4 py-2 rounded-lg hover:bg-primary hover:text-white cursor-pointer transition-colors duration-75 ease-in-out"
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
            {busTerminals?.map((terminal) => {
              if (terminal.attributes?.type === 'Rodoviario') {
                return (
                  <li
                    key={terminal.id}
                    className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg transition-colors duration-100 ease-in-out border hover:border-secondary box-border"
                  >
                    <Disclosure as="div" className="flex flex-col gap-8 w-full">
                      <div className="flex flex-col laptop:flex-row laptop:w-full gap-2">
                        <Disclosure.Button className="flex flex-col gap-4 flex-1 laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center text-left">
                          <picture>
                            <img
                              className="shrink-0 h-12 w-12 object-cover object-center rounded-full"
                              src="https://images.unsplash.com/photo-1596598756374-d46541826aff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=40"
                              alt=""
                            />
                          </picture>
                          <div className="flex flex-col flex-1 laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center">
                            <span className="font-bold laptop:flex-1 laptop:pl-2">
                              {terminal?.attributes.name}
                            </span>
                            <span className="flex laptop:border-l-2 laptop:border-primary laptop:pl-2 items-center gap-2">
                              <Bookmark
                                size={16}
                                weight="light"
                                className="text-gray-500"
                              />
                              <span className="font-normal text-xs text-gray-500">
                                Rodoviário
                              </span>
                            </span>
                            <span className="laptop:w-1/5 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
                              <Phone
                                size={16}
                                weight="light"
                                className="text-gray-500"
                              />{' '}
                              {terminal?.attributes.phone}
                            </span>
                            <span className="laptop:w-1/3 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
                              <div className="flex items-center gap-2">
                                <EnvelopeSimple
                                  size={16}
                                  weight="light"
                                  className="text-gray-500"
                                />{' '}
                                {terminal?.attributes.email}
                              </div>
                            </span>
                          </div>
                        </Disclosure.Button>
                        <div className="flex items-center justify-center w-full laptop:max-w-[8rem] p-2 laptop:border-l-2 laptop:border-primary laptop:pl-2 text">
                          {terminal.attributes.document?.data?.attributes
                            ?.url ? (
                            <Link
                              href={urlBuilder(
                                terminal.attributes.document?.data?.attributes
                                  ?.url,
                              )}
                            >
                              <a
                                download
                                target="_blank"
                                className="flex gap-2 items-center justify-center bg-primary hover:bg-white text-white hover:text-primary px-4 py-2 rounded-[4px] hover:border hover:border-primary group"
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
                        {/* <div className="flex items-center justify-center w-full laptop:max-w-[8rem] p-2 laptop:border-l-2 laptop:border-primary laptop:pl-2 text">
                          {legislation.attributes.file ? (
                            <Link
                              href={urlBuilder(
                                legislation.attributes.file.data?.attributes
                                  ?.url,
                              )}
                            >
                              <a
                                download
                                target="_blank"
                                className="flex gap-2 items-center justify-center bg-primary hover:bg-white text-white hover:text-primary px-4 py-2 rounded-[4px] hover:border hover:border-primary group"
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
                        </div> */}
                      </div>
                      {/* <Transition
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
                      </Transition> */}
                    </Disclosure>
                  </li>
                )
              }
              return null
            })}
          </ul>
        )}

        {isSelectedTab === 1 && (
          <ul role="list" className="flex flex-col gap-2">
            {waterwayTerminals?.map((terminal) => {
              if (terminal.attributes?.type === 'Hidroviario') {
                return (
                  <li
                    key={terminal.id}
                    className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg transition-colors duration-100 ease-in-out border hover:border-secondary box-border"
                  >
                    <Disclosure as="div" className="flex flex-col gap-8 w-full">
                      <div className="flex flex-col laptop:flex-row laptop:w-full gap-2">
                        <Disclosure.Button className="flex flex-col gap-4 flex-1 laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center text-left">
                          <picture>
                            <img
                              className="shrink-0 h-12 w-12 object-cover object-center rounded-full"
                              src="https://images.unsplash.com/photo-1596598756374-d46541826aff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=40"
                              alt=""
                            />
                          </picture>
                          <div className="flex flex-col flex-1 laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center">
                            <span className="font-bold laptop:flex-1 laptop:pl-2">
                              {terminal?.attributes.name}
                            </span>
                            <span className="flex laptop:border-l-2 laptop:border-primary laptop:pl-2 items-center gap-2">
                              <Bookmark
                                size={16}
                                weight="light"
                                className="text-gray-500"
                              />
                              <span className="font-normal text-xs text-gray-500">
                                Hidroviário
                              </span>
                            </span>
                            <span className="laptop:w-1/5 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
                              <Phone
                                size={16}
                                weight="light"
                                className="text-gray-500"
                              />{' '}
                              {terminal?.attributes.phone}
                            </span>
                            <span className="laptop:w-1/3 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
                              <div className="flex items-center gap-2">
                                <EnvelopeSimple
                                  size={16}
                                  weight="light"
                                  className="text-gray-500"
                                />{' '}
                                {terminal?.attributes.email}
                              </div>
                            </span>
                          </div>
                        </Disclosure.Button>
                        <div className="flex items-center justify-center w-full laptop:max-w-[8rem] p-2 laptop:border-l-2 laptop:border-primary laptop:pl-2 text">
                          {terminal.attributes.document?.data?.attributes
                            ?.url ? (
                            <Link
                              href={urlBuilder(
                                terminal.attributes.document?.data?.attributes
                                  ?.url,
                              )}
                            >
                              <a
                                download
                                target="_blank"
                                className="flex gap-2 items-center justify-center bg-primary hover:bg-white text-white hover:text-primary px-4 py-2 rounded-[4px] hover:border hover:border-primary group"
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
                        {/* <div className="flex items-center justify-center w-full laptop:max-w-[8rem] p-2 laptop:border-l-2 laptop:border-primary laptop:pl-2 text">
                          {legislation.attributes.file ? (
                            <Link
                              href={urlBuilder(
                                legislation.attributes.file.data?.attributes
                                  ?.url,
                              )}
                            >
                              <a
                                download
                                target="_blank"
                                className="flex gap-2 items-center justify-center bg-primary hover:bg-white text-white hover:text-primary px-4 py-2 rounded-[4px] hover:border hover:border-primary group"
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
                        </div> */}
                      </div>
                      {/* <Transition
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
                      </Transition> */}
                    </Disclosure>
                  </li>
                )
              }
              return null
            })}
          </ul>
        )}

        {isSelectedTab === 2 && (
          <ul role="list" className="flex flex-col gap-2">
            {airTerminals?.map((terminal) => {
              if (terminal.attributes?.type === 'Aeroviario') {
                return (
                  <li
                    key={terminal.id}
                    className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg transition-colors duration-100 ease-in-out border hover:border-secondary box-border"
                  >
                    <Disclosure as="div" className="flex flex-col gap-8 w-full">
                      <div className="flex flex-col laptop:flex-row laptop:w-full gap-2">
                        <Disclosure.Button className="flex flex-col gap-4 flex-1 laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center text-left">
                          <picture>
                            <img
                              className="shrink-0 h-12 w-12 object-cover object-center rounded-full"
                              src="https://images.unsplash.com/photo-1596598756374-d46541826aff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=40"
                              alt=""
                            />
                          </picture>
                          <div className="flex flex-col flex-1 laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center">
                            <span className="font-bold laptop:flex-1 laptop:pl-2">
                              {terminal?.attributes.name}
                            </span>
                            <span className="flex laptop:border-l-2 laptop:border-primary laptop:pl-2 items-center gap-2">
                              <Bookmark
                                size={16}
                                weight="light"
                                className="text-gray-500"
                              />
                              <span className="font-normal text-xs text-gray-500">
                                Aeroviário
                              </span>
                            </span>
                            <span className="laptop:w-1/5 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
                              <Phone
                                size={16}
                                weight="light"
                                className="text-gray-500"
                              />{' '}
                              {terminal?.attributes.phone}
                            </span>
                            <span className="laptop:w-1/3 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
                              <div className="flex items-center gap-2">
                                <EnvelopeSimple
                                  size={16}
                                  weight="light"
                                  className="text-gray-500"
                                />{' '}
                                {terminal?.attributes.email}
                              </div>
                            </span>
                          </div>
                        </Disclosure.Button>
                        <div className="flex items-center justify-center w-full laptop:max-w-[8rem] p-2 laptop:border-l-2 laptop:border-primary laptop:pl-2 text">
                          {terminal.attributes.document?.data?.attributes
                            ?.url ? (
                            <Link
                              href={urlBuilder(
                                terminal.attributes.document?.data?.attributes
                                  ?.url,
                              )}
                            >
                              <a
                                download
                                target="_blank"
                                className="flex gap-2 items-center justify-center bg-primary hover:bg-white text-white hover:text-primary px-4 py-2 rounded-[4px] hover:border hover:border-primary group"
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
                        {/* <div className="flex items-center justify-center w-full laptop:max-w-[8rem] p-2 laptop:border-l-2 laptop:border-primary laptop:pl-2 text">
                          {legislation.attributes.file ? (
                            <Link
                              href={urlBuilder(
                                legislation.attributes.file.data?.attributes
                                  ?.url,
                              )}
                            >
                              <a
                                download
                                target="_blank"
                                className="flex gap-2 items-center justify-center bg-primary hover:bg-white text-white hover:text-primary px-4 py-2 rounded-[4px] hover:border hover:border-primary group"
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
                        </div> */}
                      </div>
                      {/* <Transition
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
                      </Transition> */}
                    </Disclosure>
                  </li>
                )
              }
              return null
            })}
          </ul>
        )}

        {/* {isSelectedTab === 1 && (
          <ul role="list" className="flex flex-col gap-2">
            {data?.legislations?.data.map((legislation) => {
              if (legislation.attributes?.type === 'Leis') {
                return (
                  <li
                    key={legislation.id}
                    className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg transition-colors duration-100 ease-in-out border hover:border-secondary box-border"
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
                              href={urlBuilder(
                                legislation.attributes.file.data?.attributes
                                  ?.url,
                              )}
                            >
                              <a
                                download
                                target="_blank"
                                className="flex gap-2 items-center justify-center bg-primary hover:bg-white text-white hover:text-primary px-4 py-2 rounded-[4px] hover:border hover:border-primary group"
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
          </ul>
        )} */}

        {/* {isSelectedTab === 2 && (
          <ul role="list" className="flex flex-col gap-2">
            {data?.legislations?.data.map((legislation) => {
              if (legislation.attributes?.type === 'Decretos') {
                return (
                  <li
                    key={legislation.id}
                    className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg transition-colors duration-100 ease-in-out border hover:border-secondary box-border"
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
                              href={urlBuilder(
                                legislation.attributes.file.data?.attributes
                                  ?.url,
                              )}
                            >
                              <a
                                download
                                target="_blank"
                                className="flex gap-2 items-center justify-center bg-primary hover:bg-white text-white hover:text-primary px-4 py-2 rounded-[4px] hover:border hover:border-primary group"
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
                            }}k
                          ></Disclosure.Panel>
                        )}
                      </Transition>
                    </Disclosure>
                  </li>
                )
              }
              return null
            })}
          </ul>
        )} */}
      </motion.div>
    </article>
  )
}

TerminalsPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default TerminalsPage
