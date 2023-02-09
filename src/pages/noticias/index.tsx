import { ReactElement, useState } from 'react'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import 'keen-slider/keen-slider.min.css'

import { NextPageWithLayout } from '../_app'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { getNews, useNews } from '../../hooks/useNews'

import Link from 'next/link'
import { queryClient } from '../../services/queryClient'
import api from '../../services/api'

import genericImg from '../../assets/images/generic-image.png'

import { Pagination } from '../../components/Pagination'
import { Loader } from '../../components/Loader'

const NewsPage: NextPageWithLayout = () => {
  const [page, setPage] = useState(1)

  const { data, isLoading, error } = useNews(page, 9, {})

  async function handlePrefetchNews(slug: string) {
    await queryClient.prefetchQuery({
      queryKey: ['noticias', slug],
      queryFn: async () => {
        const response = await api.get(`/api/noticias/${slug}`)

        return response.data
      },
      staleTime: 1000 * 30,
    })
  }

  return (
    <>
      <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <p>Erro ao carregar dados...</p>
        ) : (
          <>
            <h1 className="font-bold text-[2rem] flex-1">
              Notícias da AGERBA:
            </h1>

            <ul className="flex flex-wrap flex-col tablet:flex-row gap-4">
              {data?.noticias?.map((item) => (
                <Link
                  key={item.id}
                  href={`/noticias/${item.slug}`}
                  onMouseEnter={() => handlePrefetchNews(item.slug)}
                  className="w-full tablet:max-w-[24rem] h-96 border rounded-lg overflow-hidden shadow-md m-auto"
                >
                  <li className="w-full">
                    <div className="w-full h-56 max-h-56 bg-primary/60 overflow-hidden">
                      <picture>
                        <Image
                          src={item.coverUrl || genericImg.src}
                          alt=""
                          width={1000}
                          height={600}
                          className="w-full h-full object-cover object-center"
                        />
                      </picture>
                    </div>
                    <h1 className="text-xl font-bold leading-relaxed text-primary hover:text-secondary transition-all duration-150 ease-in-out p-2">
                      {item.title}
                    </h1>
                  </li>
                </Link>
              ))}
            </ul>

            {data?.noticias && (
              <Pagination
                totalCountRegisters={Number(data.totalCountRegisters)}
                currentPage={page}
                totalPages={Number(data.totalPages)}
                onPageChange={setPage}
                registersPerPage={Number(data.totalRegistersPerPage)}
              />
            )}
          </>
        )}
      </article>
    </>
  )
}

NewsPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default NewsPage

export const getServerSideProps: GetServerSideProps = async () => {
  const { noticias, totalCountRegisters, totalRegistersPerPage, totalPages } =
    await getNews(1, 9)

  // const apolloClient = initializeApollo()

  // const { data } = await apolloClient.query<GetListaNoticiasQuery>({
  //   query: GetListaNoticiasDocument,
  //   variables: {
  //     limit: 10,
  //     start: 0,
  //   },
  // })

  // const noticias = data.noticias?.data.map((item) => {
  //   return {
  //     id: item.id,
  //     coverUrl: item.attributes?.cover?.data?.attributes?.url || null,
  //     slug: item.attributes?.slug,
  //     title: item.attributes?.title,
  //     shortTitle: item.attributes?.shortTitle,
  //     subtitle: item.attributes?.subtitle,
  //   }
  // })

  return {
    props: {
      noticias,
      totalCountRegisters,
      totalRegistersPerPage,
      totalPages,
    },
  }
}
