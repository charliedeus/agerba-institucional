import {
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from '@tanstack/react-query'
import { GetLinhasDocument, GetLinhasQuery } from '../graphql/generated'
import { initializeApollo } from '../lib/apollo'

interface GetLinhasProps {
  linhas: {
    id: string
    attributes: {
      cdlinha: number
      nulinha: string
      deorigem: string
      dedestino: string
      dedescricao: string
      nupermissionarios: number
      boativo: boolean
    }
  }[]
}

export async function getLinhas(page: number, pageSize: number) {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<GetLinhasQuery>({
    query: GetLinhasDocument,
    variables: {
      limit: pageSize,
      start: (page - 1) * pageSize,
    },
  })

  return {
    linhas: data,
  }
}

export function useLinhas(
  page: number,
  pageSize: number,
  options?: UseQueryOptions,
) {
  return useQuery({
    queryKey: ['linhas', page],
    queryFn: () => getLinhas(page, pageSize),
    staleTime: 1000 * 5,
    ...options,
  }) as UseQueryResult<GetLinhasProps, unknown>
}
