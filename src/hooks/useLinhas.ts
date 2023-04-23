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

export async function getLinhas(page: number, pageSize: number, query: string) {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<GetLinhasQuery>({
    query: GetLinhasDocument,
    variables: {
      limit: pageSize,
      start: (page - 1) * pageSize,
      query,
    },
  })

  const linhas = data.linhas?.data
  const totalCountRegisters = data.linhas?.meta.pagination.total
  const totalRegistersPerPage = data.linhas?.meta.pagination.pageSize
  const totalPages = data.linhas?.meta.pagination.pageCount

  return {
    linhas,
    totalCountRegisters,
    totalRegistersPerPage,
    totalPages,
  }
}

export function useLinhas(
  page: number,
  pageSize: number,
  query: string,
  options?: UseQueryOptions,
) {
  return useQuery({
    queryKey: ['linhas', page],
    queryFn: () => getLinhas(page, pageSize, query),
    staleTime: 1000 * 5,
    ...options,
  }) as UseQueryResult<GetLinhasProps, unknown>
}
