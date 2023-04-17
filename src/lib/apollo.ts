import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { useMemo } from 'react'
// import crossFetch from 'cross-fetch'

let apolloClient: ApolloClient<NormalizedCacheObject>

const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_STRAPI_API_BASEURL}/graphql`,
  // credentials: 'same-origin',
  // fetch: crossFetch,
})

const authLink = setContext(async (_, { headers }) => {
  const token = process.env.NEXT_PUBLIC_API_TOKEN

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  }
})

function createApolloClient() {
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    credentials: 'include',
    ssrMode: typeof window === 'undefined',
  })
}

export function initializeApollo(initialState = {}) {
  // Para verificar se já existe uma instância do Apollo e aproveitá-la, em vez de criar outra
  const apolloClientGlobal = apolloClient ?? createApolloClient()

  // Recuperando os dados de cache
  if (initialState) {
    apolloClientGlobal.cache.restore(initialState)
  }

  // Sempre inicializando no SSR com cache limpo
  if (typeof window === 'undefined') return apolloClientGlobal
  apolloClient = apolloClient ?? apolloClientGlobal

  return apolloClient
}

export function useApollo(initialState = {}) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])

  return store
}
