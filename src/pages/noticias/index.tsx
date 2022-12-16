import { ReactElement } from 'react'
import 'keen-slider/keen-slider.min.css'

import { NextPageWithLayout } from '../_app'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { getNews } from '../../hooks/useNews'

import { GetServerSideProps } from 'next'
import { ListNews } from '../../components/listNews'

const NewsPage: NextPageWithLayout = () => {
  // const [page, setPage] = useState(1)
  // const { data, isLoading, error } = useNews(page, 9)

  // async function handlePrefetchNews(slug: string) {
  //   await queryClient.prefetchQuery({
  //     queryKey: ['noticias', slug],
  //     queryFn: async () => {
  //       const response = await api.get(`/api/noticias/${slug}`)

  //       return response.data
  //     },
  //     staleTime: 1000 * 30,
  //   })
  // }

  return (
    <>
      {/* {isLoading ? (
        <Loader />
      ) : error ? (
        <p>Erro ao carregar dados...</p>
      ) : ( */}
      <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
        <h1 className="font-bold text-[2rem]">Notícias da AGERBA:</h1>

        <ListNews limit={10} start={0} />

        {/* <ul className="flex flex-wrap flex-col tablet:flex-row gap-4">
            {data?.newsList.map((item) => (
              <Link
                key={item.id}
                href={`/noticias/${item.attributes.slug}`}
                onMouseEnter={() => handlePrefetchNews(item.attributes.slug)}
                className="w-full tablet:max-w-[24rem] h-96 border rounded-lg overflow-hidden shadow-md m-auto"
              >
                <li className="w-full">
                  <div className="w-full h-1/2 bg-primary/60 overflow-hidden">
                    <picture>
                      <img
                        src={genericImg.src}
                        alt=""
                        className="object-cover object-center"
                      />
                    </picture>
                  </div>
                  <h1 className="text-xl font-bold leading-relaxed text-primary hover:text-secondary transition-all duration-150 ease-in-out p-2">
                    {item.attributes.title}
                  </h1>
                </li>
              </Link>
            ))}
          </ul> */}

        {/* {data?.newsList && data.totalCountRegisters > 0 && (
            <Pagination
              totalCountRegisters={Number(data.totalCountRegisters)}
              currentPage={page}
              totalPages={Number(data.totalCountPages)}
              onPageChange={setPage}
              registersPerPage={Number(data.totalPageSize)}
            />
          )} */}
      </article>
      {/* )} */}
    </>
  )
}

NewsPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default NewsPage

export const getServerSideProps: GetServerSideProps = async () => {
  const { newsList, totalCountRegisters, totalCountPages, totalPageSize } =
    await getNews(1, 10)

  return {
    props: { newsList, totalCountRegisters, totalCountPages, totalPageSize },
  }
}
