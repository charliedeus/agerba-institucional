import { ReactElement } from 'react'
import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Disclosure, Transition } from '@headlessui/react'

import type { NextPageWithLayout } from '../_app'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { useGetFaqsQuery } from '../../graphql/generated'

const FaqPage: NextPageWithLayout = () => {
  const { data } = useGetFaqsQuery()

  const formattedFaqs = data?.ascomFaqs?.map((faq) => {
    return {
      ...faq,
      publishedAtFormatted: format(
        new Date(faq?.published_at),
        "EEEE' • 'dd' de 'MMMM' de 'yyyy'",
        {
          locale: ptBR,
        },
      ),
    }
  })

  return (
    <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
      <h1 className="font-bold text-[2rem]">FAQ</h1>
      <h3 className="text-2xl text-gray-600">Dúvidas Frequentes</h3>

      {formattedFaqs?.map((faq) => (
        <Disclosure key={faq?.id}>
          <Disclosure.Button className="p-2 flex flex-col text-left">
            <span className="text-primary font-bold text-lg leading-relaxed">
              {faq?.pergunta}
            </span>
            <span className="text-xs">
              Adicionado por <strong>Lorena Jesus</strong> em{' '}
              {faq.publishedAtFormatted}
            </span>
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="text-gray-500 text-sm bg-gray-200 p-4">
              {faq?.resposta}
            </Disclosure.Panel>
          </Transition>
        </Disclosure>
      ))}
    </article>
  )
}

FaqPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default FaqPage
