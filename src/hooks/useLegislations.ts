import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'
import {
  GetLegislacoesDocument,
  GetLegislacoesQuery,
} from '../graphql/generated'
import { initializeApollo } from '../lib/apollo'

export async function getLegislations(
  page: number,
  pageSize: number,
): Promise<void> {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<GetLegislacoesQuery>({
    query: GetLegislacoesDocument,
    variables: {
      limit: 5,
      start: 0,
    },
  })

  console.log(data)
}

export function useNews(
  page: number,
  pageSize: number,
  options?: UseQueryOptions,
) {
  return useQuery({
    queryKey: ['noticias', page],
    queryFn: () => getLegislations(page, pageSize),
    staleTime: 1000 * 5,
    ...options,
  }) as UseQueryResult<any, unknown>
}
