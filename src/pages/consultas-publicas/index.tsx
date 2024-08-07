/* eslint-disable prettier/prettier */
import Link from 'next/link'
import { Bookmark, CalendarBlank, File } from 'phosphor-react'
import { ReactElement } from 'react'

import { DefaultLayout } from '../../layouts/DefaultLayout'
import type { NextPageWithLayout } from '../_app'

import { Disclosure, Transition } from '@headlessui/react'
import { motion } from 'framer-motion'
import { GetServerSideProps } from 'next'
import { GetConsultasPublicasDocument, GetConsultasPublicasQuery } from '../../graphql/generated'
import { initializeApollo } from '../../lib/apollo'

interface ConsultaPublicaProps {
  id: string
  title: string
  notify: string
  eventType: string
  date: string
}

interface ConsultasPublicasPageProps {
  consultasPublicas: ConsultaPublicaProps[]
}

const PublicConsultationsPage: NextPageWithLayout<ConsultasPublicasPageProps> = ({ consultasPublicas }) => {

  const publicConsultations = consultasPublicas.map((item) => {
    return {
      ...item,
      formattedTitle: `Consulta Pública ${item.title
        }/${new Date(item.date).toLocaleDateString(
          'pt-BR',
          {
            year: 'numeric',
            timeZone: 'UTC',
          },
        )}`,
    }
  })

  return (
    <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
      <h1 className="font-bold text-[2rem]">Consultas Públicas</h1>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="transition-all duration-100 ease-in-out"
      >
        <ul role="list" className="flex flex-col gap-2">
          {publicConsultations?.map((item) => (
            <li
              key={item.id}
              className="flex flex-col gap-2 px-4 py-6 transition-colors duration-100 ease-in-out bg-gray-200 border rounded-lg laptop:flex-row hover:border-secondary"
            >
              <Disclosure as="div" className="flex flex-col w-full gap-8">
                <div className="flex flex-col gap-2 laptop:flex-row laptop:w-full">
                  <Disclosure.Button className="flex flex-col flex-1 gap-4 text-left laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center">
                    <span className="flex items-center flex-1 gap-2 font-bold">
                      <File
                        size={16}
                        weight="light"
                        className="text-gray-500"
                      />{' '}
                      {item.formattedTitle}
                    </span>
                    <span className="flex items-center gap-2 laptop:border-l-2 laptop:border-primary laptop:pl-2">
                      <Bookmark
                        size={16}
                        weight="light"
                        className="text-gray-500"
                      />
                      <span className="text-xs font-normal text-gray-500">
                        Consulta Pública
                      </span>
                    </span>
                    <span className="flex items-center gap-2 laptop:border-l-2 laptop:border-primary laptop:pl-2">
                      <CalendarBlank
                        size={16}
                        weight="light"
                        className="text-gray-500"
                      />
                      <span className="font-bold">
                        {new Date(
                          item.date,
                        ).toLocaleDateString('pt-BR', {
                          timeZone: 'UTC',
                        })}
                      </span>
                    </span>
                  </Disclosure.Button>
                  <div className="flex items-center justify-center w-full laptop:max-w-[8rem] p-2 laptop:border-l-2 laptop:border-primary laptop:pl-2">
                    <Link
                      legacyBehavior
                      href={`/consultas-publicas/${item.id}`}
                    >
                      <a
                        className="flex gap-2 items-center justify-center bg-primary hover:bg-white text-white hover:text-primary px-4 py-2 rounded-[4px] hover:border hover:border-primary group border border-transparent"
                      >
                        <span className="text-sm font-normal group-hover:text-primary">
                          Leia mais...
                        </span>
                      </a>
                    </Link>
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
                  {item.notify && (
                    <Disclosure.Panel
                      as="div"
                      className="text-gray-500 text-sm text-left mt-[-1rem] bg-gray-200 p-4 rounded-b-lg line-clamp-4"
                    >
                      <p>{`[...] ${item.notify.replace(/(<([^>]+)>)/gi, "")} [...]`}</p>
                    </Disclosure.Panel>
                  )}
                </Transition>
              </Disclosure>

            </li>
          ))}
        </ul>

      </motion.div>
    </article >
  )
}

PublicConsultationsPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default PublicConsultationsPage

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<GetConsultasPublicasQuery>({
    query: GetConsultasPublicasDocument,
    variables: {
      limit: 100,
      start: 0,
    }
  })

  const consultasPublicas = data.publicConsultations?.data.map(item => {
    return {
      id: item.id!,
      title: item.attributes?.title!,
      notify: item.attributes?.notify!,
      eventType: item.attributes?.eventType!,
      date: item.attributes?.date!
    }
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      consultasPublicas
    }
  }
}
