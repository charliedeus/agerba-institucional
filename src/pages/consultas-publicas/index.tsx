import { ReactElement } from 'react'
import Link from 'next/link'
import { BellRinging } from 'phosphor-react'

import type { NextPageWithLayout } from '../_app'
import { DefaultLayout } from '../../layouts/DefaultLayout'

import { useGetConsultasPublicasQuery } from '../../graphql/generated'

const PublicConsultationsPage: NextPageWithLayout = () => {
  const { data } = useGetConsultasPublicasQuery()

  const orderedList = data?.consultasPublicas?.slice().sort(function (a, b) {
    if (a?.Data < b?.Data) {
      return 1
    }
    if (a?.Data > b?.Data) {
      return -1
    }

    return 0
  })

  return (
    <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
      <h1 className="font-bold text-[2rem]">Consultas Públicas</h1>
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
        {orderedList?.map((consulta) => (
          <li
            key={consulta?.id}
            className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg hover:bg-primary hover:cursor-pointer hover:text-white border-2 border-transparent hover:border-secondary transition-colors duration-100 ease-in-out"
          >
            <div className="flex flex-col gap-8 w-full">
              <div className="flex flex-col laptop:flex-row laptop:w-full gap-2">
                <Link href={`/consultas-publicas/${consulta?.id}`}>
                  <a className="flex flex-col flex-1 laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center text-left">
                    <span className="font-bold laptop:flex-1 flex items-center gap-2">
                      <BellRinging
                        size={16}
                        weight="light"
                        className="text-gray-500 hover:text-gray-50"
                      />{' '}
                      {consulta?.Titulo}
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* <ul role="list" className="flex flex-col gap-2">
        {orderedList?.map((consulta) => (
          <li
            key={consulta?.id}
            className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg"
          >
            <Disclosure as="div" className="flex flex-col gap-8 w-full">
              <div className="flex flex-col laptop:flex-row laptop:w-full gap-2">
                <Disclosure.Button className="flex flex-col flex-1 laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center  text-left">
                  <span className="font-bold laptop:flex-1 flex items-center gap-2">
                    <BellRinging
                      size={16}
                      weight="light"
                      className="text-gray-500"
                    />{' '}
                    {consulta?.Titulo}
                  </span>
                </Disclosure.Button>
                <Link href={`/consultas-publicas/${consulta?.id}`}>
                  <a className="font-bold bg-primary w-1/2 laptop:w-auto m-auto rounded-lg p-2 flex items-center justify-center">
                    <Info size={16} weight="bold" className="text-white" />{' '}
                  </a>
                </Link>
              </div>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                {consulta?.comunica && (
                  <Disclosure.Panel
                    as="div"
                    className="text-gray-500 text-sm text-left mt-[-1rem] bg-gray-200 p-4 rounded-b-lg"
                    dangerouslySetInnerHTML={{
                      __html: consulta?.comunica,
                    }}
                  ></Disclosure.Panel>
                )}
              </Transition>
            </Disclosure>
          </li>
        ))}
      </ul> */}
    </article>
  )
}

PublicConsultationsPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default PublicConsultationsPage
