import { useQuery } from '@tanstack/react-query'
import api from '../services/api'

export async function getNews(): Promise<any[]> {
  const { data } = await api.get('/api/noticias', {
    params: {
      'pagination[page]': 1,
      'pagination[pageSize]': 1,
      'populate[0]': 'cover',
    },
  })

  return data
}

export async function useNews() {
  return useQuery({
    queryKey: ['noticias'],
    queryFn: getNews,
    staleTime: 1000 * 5,
  })
}
