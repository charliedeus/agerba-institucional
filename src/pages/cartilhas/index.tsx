import { ReactElement } from 'react'

import type { NextPageWithLayout } from '../_app'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { useGetCartilhasQuery } from '../../graphql/generated'
import { CalendarBlank, FileArrowDown, FileDoc } from 'phosphor-react'
import Link from 'next/link'
import { urlBuilder } from '../../lib/urlBuilder'
import LoadingPage from '../../components/LoadingPage'

const HornBookPage: NextPageWithLayout = () => {
  const { data, loading } = useGetCartilhasQuery()

  if (loading) {
    return <LoadingPage />
  }

  return (
    <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
      <h1 className="font-bold text-[2rem]">Cartilhas</h1>

      <ul role="list" className="flex flex-col gap-2">
        {data?.titles?.data.map((cartilha) => (
          <li
            key={cartilha?.id}
            className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg"
          >
            <div className="flex flex-col laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center">
              <span className="font-bold laptop:flex-1 flex items-center gap-2">
                <FileDoc size={16} weight="light" className="text-gray-500" />{' '}
                {cartilha?.attributes?.title}
              </span>
              <span className="laptop:w-1/5 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
                <CalendarBlank
                  size={16}
                  weight="light"
                  className="text-gray-500"
                />{' '}
                {cartilha?.attributes?.year}
              </span>

              {cartilha.attributes?.file.data?.attributes && (
                <Link
                  legacyBehavior
                  href={urlBuilder(
                    cartilha.attributes?.file.data?.attributes.url,
                  )}
                >
                  <a
                    className="laptop:w-1/12 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center justify-center gap-2"
                    download
                    target="_blank"
                  >
                    <FileArrowDown
                      size={24}
                      weight="light"
                      className="text-gray-900"
                    />{' '}
                  </a>
                </Link>
              )}
            </div>
          </li>
        ))}
      </ul>
    </article>
  )
}

HornBookPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default HornBookPage
