import genericImg from '../assets/images/generic-image.png'
import { urlBuilder } from './../lib/urlBuilder'
import {
  GetListaNoticiasDocument,
  GetListaNoticiasQuery,
} from './../graphql/generated'
import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'
import { initializeApollo } from '../lib/apollo'

interface noticiaProps {
  id: string
  slug: string
  coverUrl?: string
  title: string
  shortTitle?: string | null
  subtitle?: string | null
  publishedAt: any
}

interface GetNewsListProps {
  noticias?: noticiaProps[]
  totalCountRegisters: number | undefined
  totalRegistersPerPage: number | undefined
  totalPages: number | undefined
}

export async function getNews(
  page: number,
  pageSize: number,
): Promise<GetNewsListProps> {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<GetListaNoticiasQuery>({
    query: GetListaNoticiasDocument,
    variables: {
      limit: pageSize,
      start: (page - 1) * pageSize,
    },
  })

  const noticias: noticiaProps[] | undefined = data.noticias?.data.map(
    (item) => {
      return {
        id: item.id!,
        slug: item.attributes?.slug!,
        coverUrl:
          item.attributes?.cover &&
            item.attributes.cover.data?.attributes?.url !== undefined
            ? urlBuilder(item.attributes?.cover?.data?.attributes?.url)
            : genericImg.src,
        title: item.attributes?.title!,
        shortTitle: item.attributes?.shortTitle,
        subtitle: item.attributes?.subtitle,
        publishedAt: item.attributes?.publishedAt!,
      }
    },
  )

  const totalCountRegisters = data.noticias?.meta.pagination.total
  const totalRegistersPerPage = data.noticias?.meta.pagination.pageSize
  const totalPages = data.noticias?.meta.pagination.pageCount

  return {
    noticias,
    totalCountRegisters,
    totalRegistersPerPage,
    totalPages,
  }
}

export function useNews(
  page: number,
  pageSize: number,
  options?: UseQueryOptions,
) {
  return useQuery({
    queryKey: ['noticias', page],
    queryFn: () => getNews(page, pageSize),
    staleTime: 1000 * 5,
    ...options,
  }) as UseQueryResult<GetNewsListProps, unknown>
}
