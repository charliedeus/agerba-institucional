import { NextApiRequest, NextApiResponse } from 'next'
import {
  GetNoticiasBySlugDocument,
  GetNoticiasBySlugQuery,
} from '../../../graphql/generated'
import { initializeApollo } from '../../../lib/apollo'

export default async function useHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { slug } = req.query

  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<GetNoticiasBySlugQuery>({
    query: GetNoticiasBySlugDocument,
    variables: {
      slug,
    },
  })

  return res.json(data.noticias?.data[0])
}
