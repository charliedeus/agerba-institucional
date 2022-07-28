import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import api from '../services/api'

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

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  credentials: 'include',
})
