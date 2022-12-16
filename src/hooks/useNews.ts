import { useQuery } from '@tanstack/react-query'
import api from '../services/api'

interface newProps {
  id: number
  attributes: {
    slug: string
    title: string
    shortTitle: string
    subtitle: string
    newtype: string
    publishDate: string
  }
}

interface GetNewsListProps {
  newsList: newProps[]
  totalCountRegisters: number
  totalCountPages: number
  totalPageSize: number
}

export async function getNews(
  page: number,
  pageSize: number,
): Promise<GetNewsListProps> {
  const { data } = await api.get('/api/noticias', {
    params: {
      'pagination[page]': page,
      'pagination[pageSize]': pageSize,
    },
  })

  const newsList = data.data
  const totalCountRegisters = data.meta.pagination.total
  const totalCountPages = data.meta.pagination.pageCount
  const totalPageSize = data.meta.pagination.pageSize

  return { newsList, totalCountPages, totalCountRegisters, totalPageSize }
}

export function useNews(page: number, pageSize: number) {
  return useQuery({
    queryKey: ['noticias', page],
    queryFn: () => getNews(page, pageSize),
    staleTime: 1000 * 5,
  })
}
