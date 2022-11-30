import { GetServerSidePropsContext, NextPage } from 'next'
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

export const withApollo = (Component: NextPage) => {
  return function Provider(props: any) {
    return (
      <ApolloProvider client={getApolloClient(undefined, props.apolloState)}>
        <Component />
      </ApolloProvider>
    )
  }
}

export type ApolloClientContext = GetServerSidePropsContext

export function getApolloClient(
  ctx?: ApolloClientContext,
  ssrCache?: NormalizedCacheObject,
) {
  const httpLink = createHttpLink({
    uri: `${process.env.NEXT_PUBLIC_STRAPI_API_BASEURL}/graphql`,
    fetch,
  })

  const authLink = setContext(async (_, { headers }) => {
    // const { data } = await api.post('/auth/local', {
    //   identifier: process.env.NEXT_PUBLIC_STRAPI_API_USER,
    //   password: process.env.NEXT_PUBLIC_STRAPI_API_PASSWORD,
    // })

    const token = process.env.NEXT_PUBLIC_API_TOKEN

    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      },
    }
  })

  const cache = new InMemoryCache().restore(ssrCache ?? {})

  return new ApolloClient({
    // link: from([httpLink]),
    link: authLink.concat(httpLink),
    cache,
  })
}
