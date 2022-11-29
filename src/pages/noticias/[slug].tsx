import { ReactElement } from 'react'
import { useRouter } from 'next/router'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import 'keen-slider/keen-slider.min.css'

import { NextPageWithLayout } from '../_app'
import { DefaultLayout } from '../../layouts/DefaultLayout'

import { useGetNoticiasBySlugQuery } from '../../graphql/generated'

import { urlBuilder } from '../../lib/urlBuilder'
import { Loader } from '../../components/Loader'
import { ListNews } from '../../components/listNews'
import genericImg from '../../assets/images/generic-image.png'

const NewsPage: NextPageWithLayout = () => {
  const router = useRouter()
  const { slug } = router.query

  const { data, loading } = useGetNoticiasBySlugQuery({
    variables: {
      slug: String(slug),
    },
  })

  const tags = data?.noticias?.data[0].attributes?.Tags?.map((tag) =>
    tag?.Tag.toLowerCase(),
  )

  const news = Object.assign({ ...data?.noticias?.data[0], tags })

  console.log(news)

  return (
    <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
      {loading ? (
        <div className="w-full h-full flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="flex flex-col gap-8">
          <header className="flex flex-col gap-4">
            <h1 className="font-bold text-[2rem] leading-[1.5] laptop:text-[3rem] laptop:leading-relaxed">
              {news.attributes?.title}
            </h1>
            {news.attributes?.subtitle && (
              <h3 className="text-[1.5rem] text-gray-400">
                {news.attributes?.subtitle}
              </h3>
            )}

            <div className="flex flex-col gap-2 text-gray-700 leading-[1.5] mt-8">
              <strong>
                Por ASCOM <span className="font-normal">-- Salvador</span>
              </strong>
              <span>
                {format(new Date(news.attributes?.publishedAt), 'dd/MM/yyyy', {
                  locale: ptBR,
                })}
                {' • '}
                Atualizado{' '}
                {formatDistanceToNow(new Date(news.attributes?.updatedAt), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            </div>
          </header>
          <div className="w-full h-[2px] rounded-full bg-gray-100" />
          <main className="w-full flex flex-col gap-4">
            <>
              {news.attributes?.cover && (
                <div className="w-full h-full relative flex flex-col gap-2 overflow-hidden">
                  {news.attributes.cover.data ? (
                    <picture className="w-full h-full flex">
                      <img
                        src={urlBuilder(
                          news.attributes?.cover.data?.attributes?.url,
                        )}
                        alt={
                          news.attributes?.cover.data?.attributes?.name ||
                          news.attributes?.cover.data?.attributes
                            ?.alternativeText ||
                          ''
                        }
                        width={1000}
                        height={600}
                        className="w-full h-full max-h-[400px] object-cover object-center"
                      />
                    </picture>
                  ) : (
                    <picture className="w-full h-full flex">
                      <img
                        src={genericImg.src}
                        alt=""
                        width={1000}
                        height={600}
                        className="w-full h-full max-h-[400px] object-cover object-center"
                      />
                    </picture>
                  )}
                  <small className="text-sm mx-auto">
                    {news.attributes.cover.data?.attributes?.alternativeText}
                  </small>
                </div>
              )}

              <div
                className="text-gray-900 text-left mt-[-1rem] py-4 px-8 tablet:px-16 laptop:px-32 text-lg laptop:text-2xl leading-[1.75]"
                dangerouslySetInnerHTML={{
                  __html: news.attributes?.content!,
                }}
              />

              {news.attributes?.Sections && (
                <div className="w-full">
                  {news.attributes.Sections.map((section: any) => (
                    <div
                      key={section?.id}
                      className="w-full flex flex-col gap-4 px-8 tablet:px-16 laptop:px-32 mt-8"
                    >
                      {section?.cover?.data?.attributes?.url && (
                        <div className="w-full h-full relative mb-4 flex flex-col gap-2 overflow-hidden">
                          {/* <Image
                          src={urlBuilder(section.cover.data?.attributes?.url)}
                          alt={
                            section.cover.data?.attributes?.alternativeText ||
                            ''
                          }
                          width={1000}
                          height={600}
                          className="w-full h-full max-h-[400px] object-cover object-center"
                        /> */}
                          <picture className="w-full">
                            <img
                              src={urlBuilder(
                                section.cover.data?.attributes?.url,
                              )}
                              alt={
                                section.cover.data?.attributes
                                  ?.alternativeText || ''
                              }
                              className="w-full h-full max-h-[400px] object-cover object-center"
                            />
                          </picture>
                          <small className="text-sm mx-auto">
                            {section.cover.data?.attributes?.alternativeText ||
                              ''}
                          </small>
                        </div>
                      )}

                      <h1 className="text-3xl font-semibold">
                        {section?.title}
                      </h1>

                      <div
                        className="text-gray-900 text-left mt-[-1rem] py-4 text-2xl leading-[2]"
                        dangerouslySetInnerHTML={{
                          __html: news.attributes?.content || '',
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}

              {news.attributes?.Tags && (
                <ul className="flex flex-wrap items-center gap-4">
                  {news.tags?.map((tag: string) => (
                    <li
                      key={tag}
                      className="py-2 px-4 bg-gray-200 rounded-full"
                    >
                      #{tag}
                    </li>
                  ))}
                </ul>
              )}
            </>
          </main>
        </div>
      )}

      <div className="w-full h-1 bg-primary rounded-full" />

      <ListNews limit={5} start={0} />
    </article>
  )
}

NewsPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default NewsPage
