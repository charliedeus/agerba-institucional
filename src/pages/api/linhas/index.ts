import { NextApiRequest, NextApiResponse } from 'next'
import { GetLinhasDocument, GetLinhasQuery } from '../../../graphql/generated'
import { initializeApollo } from '../../../lib/apollo'

export default async function useHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<GetLinhasQuery>({
    query: GetLinhasDocument,
  })

  return res.json(data.linhas?.data)
}
