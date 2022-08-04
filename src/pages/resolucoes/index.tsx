import { ReactElement } from 'react'

import type { NextPageWithLayout } from '../_app'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { CalendarBlank, File, FilePdf, Info } from 'phosphor-react'

import { useGetResolucoesQuery } from '../../graphql/generated'

const ResolutionsPage: NextPageWithLayout = () => {
  const { data } = useGetResolucoesQuery()

  // const orderedList = data?.atasDeColegiados?.slice().sort(function (a, b) {
  //   if (a?.Data < b?.Data) {
  //     return 1
  //   }
  //   if (a?.Data > b?.Data) {
  //     return -1
  //   }

  //   return 0
  // })

  return (
    <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
      <h1 className="font-bold text-[2rem]">Resoluções</h1>
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
        {data?.resolucoes?.map((item) => (
          <li
            key={item?.id}
            className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg hover:bg-primary hover:text-white group transition-colors duration-100 ease-in-out"
          >
            <div className="flex flex-col gap-8 w-full">
              <div className="flex flex-col laptop:flex-row laptop:w-full gap-2">
                <div className="flex-1 text-left flex flex-col">
                  <span className="flex items-center gap-2">
                    <File size={16} weight="light" className="text-gray-500" />
                    <span className="font-bold uppercase">{item?.Titulo}</span>
                  </span>
                  <span className="text-xs leading-relaxed text-gray-400">
                    {item?.tipos_de_resolucoe?.tipo}
                  </span>
                </div>
                <div className="flex items-center w-full laptop:w-2/12 gap-2 laptop:border-l-2 laptop:border-primary laptop:pl-2 group-hover:border-white">
                  <CalendarBlank
                    size={16}
                    weight="light"
                    className="text-gray-500"
                  />
                  <span className="font-bold">
                    {new Date(item?.data).toLocaleDateString('pt-BR', {
                      timeZone: 'UTC',
                    })}
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </article>
  )
}

ResolutionsPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default ResolutionsPage
