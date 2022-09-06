import { ReactElement, useState } from 'react'

import type { NextPageWithLayout } from '../_app'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { File, Money } from 'phosphor-react'

import { Disclosure, Transition } from '@headlessui/react'
import { useGetGruposEServicosQuery } from '../../graphql/generated'
import { motion } from 'framer-motion'

const RevenuePage: NextPageWithLayout = () => {
  const [page] = useState(1)

  const { data } = useGetGruposEServicosQuery({
    variables: {
      limit: 5,
      start: (page - 1) * 5,
    },
  })

  return (
    <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
      <h1 className="font-bold text-[2rem]">Taxas e Serviços</h1>
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

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="transition-all duration-100 ease-in-out"
      >
        {data?.revenueGroups?.data.map((group) => (
          <>
            {group.attributes?.revenue_services?.data &&
              group.attributes?.revenue_services?.data.length > 0 && (
                <h1
                  key={group.id}
                  className="font-bold text-lg border-gray-700 border-l-4 pl-4 py-4 my-4"
                >
                  {group.attributes?.title}
                </h1>
              )}

            <ul role="list" className="flex flex-col gap-2">
              {group.attributes?.revenue_services?.data.map((service) => (
                <li
                  key={service.id}
                  className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg my-2 transition-colors duration-100 ease-in-out border border-transparent hover:border-secondary box-border"
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
                          {service.attributes?.title}
                        </span>
                        <span className="flex laptop:w-1/6 laptop:border-l-2 laptop:border-primary laptop:pl-2 items-center gap-2">
                          <Money
                            size={16}
                            weight="light"
                            className="text-gray-500"
                          />
                          <span className="font-bold text-gray-900 w-full text-end">
                            {service.attributes?.cost}
                          </span>
                        </span>
                      </Disclosure.Button>
                    </div>
                    {service.attributes?.description && (
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
                            __html: service.attributes.description,
                          }}
                        ></Disclosure.Panel>
                      </Transition>
                    )}
                  </Disclosure>
                </li>
              ))}
            </ul>
          </>
        ))}
      </motion.div>
    </article>
  )
}

RevenuePage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default RevenuePage
