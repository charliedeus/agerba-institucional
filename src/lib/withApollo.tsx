import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { GetServerSidePropsContext, NextPage } from 'next'
import api from '../services/api'

export type ApolloClientContext = GetServerSidePropsContext

export const withApollo = (Component: NextPage) => {
  return function Provider(props: any) {
    return (
      <ApolloProvider client={getApolloClient(undefined, props.apolloState)}>
        <Component {...props} />
      </ApolloProvider>
    )
  }
}

export function getApolloClient(
  ctx?: ApolloClientContext,
  ssrCache?: NormalizedCacheObject,
) {
  const httpLink = createHttpLink({
    uri: `${process.env.NEXT_PUBLIC_STRAPI_API_BASEURL}/graphql`,
  })

  const authLink = setContext(async (_, { headers }) => {
    const { data } = await api.post('/auth/local', {
      identifier: process.env.NEXT_PUBLIC_STRAPI_API_USER,
      password: process.env.NEXT_PUBLIC_STRAPI_API_PASSWORD,
    })

    return {
      headers: {
        ...headers,
        authorization: data ? `Bearer ${data.jwt}` : '',
      },
    }
  })

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(ssrCache ?? {}),
    credentials: 'include',
  })
}
