/* eslint-disable prettier/prettier */
import { ReactElement } from 'react'
import Link from 'next/link'
import { File, Bookmark, CalendarBlank } from 'phosphor-react'

import type { NextPageWithLayout } from '../_app'
import { DefaultLayout } from '../../layouts/DefaultLayout'

import { useGetConsultasPublicasQuery } from '../../graphql/generated'
import { motion } from 'framer-motion'
import { Disclosure, Transition } from '@headlessui/react'

const PublicConsultationsPage: NextPageWithLayout = () => {
  const { data } = useGetConsultasPublicasQuery()

  const publicConsultations = data?.eventosPublicos?.data.map((evento) => {
    return {
      ...evento,
      formattedTitle: `Consulta Pública ${evento.attributes?.title
        }/${new Date(evento.attributes?.date).toLocaleDateString(
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
          {publicConsultations?.map((consulta) => (
            <li
              key={consulta.id}
              className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg transition-colors duration-100 ease-in-out border hover:border-secondary"
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
                      {consulta.formattedTitle}
                    </span>
                    <span className="flex laptop:border-l-2 laptop:border-primary laptop:pl-2 items-center gap-2">
                      <Bookmark
                        size={16}
                        weight="light"
                        className="text-gray-500"
                      />
                      <span className="font-normal text-xs text-gray-500">
                        Consulta Pública
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
                          consulta.attributes?.date,
                        ).toLocaleDateString('pt-BR', {
                          timeZone: 'UTC',
                        })}
                      </span>
                    </span>
                  </Disclosure.Button>
                  <div className="flex items-center justify-center w-full laptop:max-w-[8rem] p-2 laptop:border-l-2 laptop:border-primary laptop:pl-2">
                    <Link
                      legacyBehavior
                      href={`/consultas-publicas/${consulta.id}`}
                    >
                      <a
                        className="flex gap-2 items-center justify-center bg-primary hover:bg-white text-white hover:text-primary px-4 py-2 rounded-[4px] hover:border hover:border-primary group border border-transparent"
                      >
                        <span className="font-normal text-sm group-hover:text-primary">
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
                  {consulta.attributes?.notify && (
                    <Disclosure.Panel
                      as="div"
                      className="text-gray-500 text-sm text-left mt-[-1rem] bg-gray-200 p-4 rounded-b-lg line-clamp-4"
                    >
                      <p>{`[...] ${consulta.attributes.notify.replace(/(<([^>]+)>)/gi, "")} [...]`}</p>
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
