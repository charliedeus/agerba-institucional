import { EnvelopeSimple, Phone } from 'phosphor-react'
import { ReactElement } from 'react'
import { useGetTerminaisRodoviariosQuery } from '../../graphql/generated'

import { DefaultLayout } from '../../layouts/DefaultLayout'
import { NextPageWithLayout } from '../_app'

const BusTerminalsPage: NextPageWithLayout = () => {
  const { data } = useGetTerminaisRodoviariosQuery()

  return (
    <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
      <h1 className="font-bold text-[2rem]">Terminais Rodoviários</h1>

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

      <p>
        São Terminais <span className="font-bold">Rodoviários</span>:
      </p>

      <ul role="list" className="flex flex-col gap-2">
        {data?.terminaisRodoviarios?.map((terminal) => (
          <li
            key={terminal?.id}
            className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg"
          >
            <picture>
              <img
                className="shrink-0 h-12 w-12 object-cover object-center rounded-full"
                src="https://images.unsplash.com/photo-1596598756374-d46541826aff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=40"
                alt=""
              />
            </picture>
            <div className="flex flex-col laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center">
              <span className="font-bold laptop:flex-1 laptop:pl-2">
                {terminal?.terminal}
              </span>
              <span className="laptop:w-1/5 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
                <Phone size={16} weight="light" className="text-gray-500" />{' '}
                {terminal?.telefone}
              </span>
              <span className="laptop:w-1/3 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
                <EnvelopeSimple
                  size={16}
                  weight="light"
                  className="text-gray-500"
                />{' '}
                {terminal?.email}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </article>
  )
}

BusTerminalsPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default BusTerminalsPage
