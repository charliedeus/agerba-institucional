import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import 'keen-slider/keen-slider.min.css'
import { GetServerSideProps } from 'next'
import { ReactElement } from 'react'

import { DefaultLayout } from '../../layouts/DefaultLayout'
import { NextPageWithLayout } from '../_app'

import {
  GetNoticiasBySlugDocument,
  GetNoticiasBySlugQuery,
} from '../../graphql/generated'

import Image from 'next/image'
import Link from 'next/link'
import { FileArrowDown, FileDoc } from 'phosphor-react'
import genericImg from '../../assets/images/generic-image.png'
import { Tag } from '../../components/Tag'
import { ListNews } from '../../components/listNews'
import { initializeApollo } from '../../lib/apollo'
import { urlBuilder } from '../../lib/urlBuilder'

interface NewsSectionsProps {
  id: string
  cover: {
    data: {
      attributes: {
        name: string
        alternativeText: string
        url: string
      }
    }
  }
  title: string
  subtitle: string
  content: string
}

interface NewsSoloProps {
  id: string
  cover: {
    data: {
      attributes: {
        id: string
        name: string
        alternativeText: string
        url: string
      }
    }
  }
  title: string
  subtitle: string
  content: string
  sections: NewsSectionsProps[]
  publishedAt: string
  updatedAt: string
  tags: string[]
  files: {
    name: string
    alternativeText: string
    url: string
  }[]
}

interface NewsPageProps {
  newsSolo: NewsSoloProps
  initialApolloState: any
}

const NewsPage: NextPageWithLayout<NewsPageProps> = (props) => {
  return (
    <>
      <article
        key={props.newsSolo.id}
        className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed overflow-hidden"
      >
        <div className="flex flex-col gap-8">
          <header className="flex flex-col gap-4">
            <h1 className="font-bold text-[2rem] leading-[1.5] laptop:text-[3rem] laptop:leading-relaxed">
              {props.newsSolo.title}
            </h1>

            {props.newsSolo.subtitle && (
              <h3 className="text-[1.5rem] text-gray-400">
                {props.newsSolo.subtitle}
              </h3>
            )}

            <div className="flex flex-col gap-2 text-gray-700 leading-[1.5] mt-8">
              <strong>
                Por ASCOM <span className="font-normal">-- Salvador</span>
              </strong>

              <span>
                {format(new Date(props.newsSolo.publishedAt), 'dd/MM/yyyy', {
                  locale: ptBR,
                })}
                {' • '}
                Atualizado{' '}
                {formatDistanceToNow(new Date(props.newsSolo.updatedAt), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            </div>
          </header>

          <div className="w-full h-[2px] rounded-full bg-gray-100" />

          <main className="flex flex-col w-full gap-4">
            <>
              <div className="relative flex flex-col w-full h-full gap-2 overflow-hidden">
                {props.newsSolo.cover.data !== null ? (
                  <picture className="flex w-full h-full overflow-hidden rounded-lg shadow-md">
                    <Image
                      src={
                        urlBuilder(props.newsSolo.cover.data.attributes.url) ||
                        genericImg.src
                      }
                      width={1000}
                      height={600}
                      alt={
                        props.newsSolo.cover.data.attributes.name ||
                        props.newsSolo.cover.data.attributes.alternativeText ||
                        ''
                      }
                      className="w-full h-full max-h-[400px] object-cover object-center"
                    />
                  </picture>
                ) : (
                  <picture className="flex w-full h-full overflow-hidden rounded-lg shadow-md">
                    <Image
                      src={genericImg.src}
                      alt=""
                      width={1000}
                      height={600}
                      className="w-full h-full max-h-[400px] object-cover object-center"
                    />
                  </picture>
                )}
                <small className="mx-auto text-sm">
                  {props.newsSolo.cover.data?.attributes.alternativeText}
                </small>
              </div>
            </>
            <div
              className="text-gray-900 text-left py-4 px-8  laptop:bg-white z-10 tablet:p-16 rounded-lg laptop:mx-32 text-lg laptop:text-xl laptop:leading-relaxed leading-[1.75]"
              dangerouslySetInnerHTML={{
                __html: props.newsSolo.content!,
              }}
            />
            {props.newsSolo.sections && (
              <div className="w-full">
                {props.newsSolo.sections.map((section: NewsSectionsProps) => (
                  <div
                    key={section.id}
                    className="flex flex-col w-full gap-4 px-8 mt-8 tablet:px-16 laptop:px-32"
                  >
                    <h1 className="text-3xl font-semibold">{section.title}</h1>

                    <div
                      className="text-gray-900 text-left mt-[-1rem] py-4 px-8 laptop:mt-2 tablet:px-16 laptop:px-32 text-lg laptop:text-2xl leading-[1.75]"
                      dangerouslySetInnerHTML={{
                        __html: section.content || '',
                      }}
                    />
                  </div>
                ))}
              </div>
            )}

            {props.newsSolo.files && props.newsSolo.files.length > 0 && (
              <>
                <h1 className="pl-4 text-lg font-bold border-l-4 border-primary">
                  Documentos Anexos
                </h1>

                <ul role="list" className="flex flex-col gap-2 mb-10">
                  {props.newsSolo.files.map((item) => (
                    <li
                      key={item.url}
                      className="flex flex-col gap-2 px-4 py-6 bg-gray-200 rounded-lg laptop:flex-row"
                    >
                      <div className="flex flex-col laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center">
                        <span className="flex items-center gap-2 font-bold laptop:flex-1">
                          <FileDoc
                            size={16}
                            weight="light"
                            className="text-gray-500"
                          />{' '}
                          {item.name}
                        </span>

                        <Link legacyBehavior href={urlBuilder(item.url)}>
                          <a
                            className="flex items-center justify-center gap-2 laptop:w-1/12 laptop:border-l-2 laptop:border-primary laptop:pl-2"
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
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {props.newsSolo.tags && (
              <ul className="flex flex-wrap items-center gap-4">
                {props.newsSolo.tags?.map((tag: string, index) => (
                  <Tag key={index} tag={tag} />
                ))}
              </ul>
            )}
          </main>
        </div>

        <div className="w-full h-1 rounded-full bg-primary" />

        <ListNews limit={5} start={0} />
      </article>
    </>
  )
}

NewsPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default NewsPage

export const getServerSideProps: GetServerSideProps<
  any,
  { slug: string }
> = async ({ params }) => {
  const slug = params!.slug

  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<GetNoticiasBySlugQuery>({
    query: GetNoticiasBySlugDocument,
    variables: {
      slug,
    },
  })

  const tags = data?.noticias?.data[0].attributes?.Tags?.map((tag) =>
    tag?.Tag.toLowerCase(),
  )

  const sections = data.noticias?.data[0].attributes?.Sections?.map(
    (section) => {
      return {
        id: section?.id,
        cover: {
          data: {
            attributes: {
              id: section?.cover?.data?.id,
              name: section?.cover?.data?.attributes?.name,
              alternativeText:
                section?.cover?.data?.attributes?.alternativeText,
              url: section?.cover?.data?.attributes?.url,
            },
          },
        },
        content: section?.content,
        title: section?.title,
        subtitle: section?.subtitle,
      }
    },
  )

  const files = data.noticias?.data[0].attributes?.Files?.map((item) => {
    return {
      id: item?.id,
      name: item?.name,
      alternativeText: item?.file.data?.attributes?.alternativeText,
      url: item?.file.data?.attributes?.url,
    }
  })

  const newsSolo: NewsSoloProps = Object.assign({
    id: data?.noticias?.data[0].id,
    cover: data?.noticias?.data[0].attributes?.cover,
    title: data?.noticias?.data[0].attributes?.title,
    subtitle: data?.noticias?.data[0].attributes?.subtitle,
    content: data?.noticias?.data[0].attributes?.content,
    sections,
    publishedAt: data?.noticias?.data[0].attributes?.publishedAt,
    updatedAt: data?.noticias?.data[0].attributes?.updatedAt,
    tags,
    files,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      newsSolo,
    },
  }
}
