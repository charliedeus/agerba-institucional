import * as Types from '../generated';

import * as Operations from '../generated';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router'
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import { getApolloClient, ApolloClientContext } from '../../lib/withApollo';
export async function getServerPageGetAtasDoColegiado
  (options: Omit<Apollo.QueryOptions<Types.GetAtasDoColegiadoQueryVariables>, 'query'>, ctx: ApolloClientContext) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetAtasDoColegiadoQuery>({ ...options, query: Operations.GetAtasDoColegiadoDocument });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetAtasDoColegiado = (
  optionsFunc?: (router: NextRouter) => QueryHookOptions<Types.GetAtasDoColegiadoQuery, Types.GetAtasDoColegiadoQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetAtasDoColegiadoDocument, options);
};
export type PageGetAtasDoColegiadoComp = React.FC<{ data?: Types.GetAtasDoColegiadoQuery, error?: Apollo.ApolloError }>;
export const withPageGetAtasDoColegiado = (optionsFunc?: (router: NextRouter) => QueryHookOptions<Types.GetAtasDoColegiadoQuery, Types.GetAtasDoColegiadoQueryVariables>) => (WrappedComponent: PageGetAtasDoColegiadoComp): NextPage => (props) => {
  const router = useRouter()
  const options = optionsFunc ? optionsFunc(router) : {};
  const { data, error } = useQuery(Operations.GetAtasDoColegiadoDocument, options)
  return <WrappedComponent {...props} data={data} error={error} />;

};
export const ssrGetAtasDoColegiado = {
  getServerPage: getServerPageGetAtasDoColegiado,
  withPage: withPageGetAtasDoColegiado,
  usePage: useGetAtasDoColegiado,
}
export async function getServerPageGetCartilhas
  (options: Omit<Apollo.QueryOptions<Types.GetCartilhasQueryVariables>, 'query'>, ctx: ApolloClientContext) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetCartilhasQuery>({ ...options, query: Operations.GetCartilhasDocument });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetCartilhas = (
  optionsFunc?: (router: NextRouter) => QueryHookOptions<Types.GetCartilhasQuery, Types.GetCartilhasQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetCartilhasDocument, options);
};
export type PageGetCartilhasComp = React.FC<{ data?: Types.GetCartilhasQuery, error?: Apollo.ApolloError }>;
export const withPageGetCartilhas = (optionsFunc?: (router: NextRouter) => QueryHookOptions<Types.GetCartilhasQuery, Types.GetCartilhasQueryVariables>) => (WrappedComponent: PageGetCartilhasComp): NextPage => (props) => {
  const router = useRouter()
  const options = optionsFunc ? optionsFunc(router) : {};
  const { data, error } = useQuery(Operations.GetCartilhasDocument, options)
  return <WrappedComponent {...props} data={data} error={error} />;

};
export const ssrGetCartilhas = {
  getServerPage: getServerPageGetCartilhas,
  withPage: withPageGetCartilhas,
  usePage: useGetCartilhas,
}
export async function getServerPageGetConsultaPublicaById
  (options: Omit<Apollo.QueryOptions<Types.GetConsultaPublicaByIdQueryVariables>, 'query'>, ctx: ApolloClientContext) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetConsultaPublicaByIdQuery>({ ...options, query: Operations.GetConsultaPublicaByIdDocument });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetConsultaPublicaById = (
  optionsFunc?: (router: NextRouter) => QueryHookOptions<Types.GetConsultaPublicaByIdQuery, Types.GetConsultaPublicaByIdQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetConsultaPublicaByIdDocument, options);
};
export type PageGetConsultaPublicaByIdComp = React.FC<{ data?: Types.GetConsultaPublicaByIdQuery, error?: Apollo.ApolloError }>;
export const withPageGetConsultaPublicaById = (optionsFunc?: (router: NextRouter) => QueryHookOptions<Types.GetConsultaPublicaByIdQuery, Types.GetConsultaPublicaByIdQueryVariables>) => (WrappedComponent: PageGetConsultaPublicaByIdComp): NextPage => (props) => {
  const router = useRouter()
  const options = optionsFunc ? optionsFunc(router) : {};
  const { data, error } = useQuery(Operations.GetConsultaPublicaByIdDocument, options)
  return <WrappedComponent {...props} data={data} error={error} />;

};
export const ssrGetConsultaPublicaById = {
  getServerPage: getServerPageGetConsultaPublicaById,
  withPage: withPageGetConsultaPublicaById,
  usePage: useGetConsultaPublicaById,
}
export async function getServerPageGetConsultasPublicas
  (options: Omit<Apollo.QueryOptions<Types.GetConsultasPublicasQueryVariables>, 'query'>, ctx: ApolloClientContext) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetConsultasPublicasQuery>({ ...options, query: Operations.GetConsultasPublicasDocument });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetConsultasPublicas = (
  optionsFunc?: (router: NextRouter) => QueryHookOptions<Types.GetConsultasPublicasQuery, Types.GetConsultasPublicasQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetConsultasPublicasDocument, options);
};
export type PageGetConsultasPublicasComp = React.FC<{ data?: Types.GetConsultasPublicasQuery, error?: Apollo.ApolloError }>;
export const withPageGetConsultasPublicas = (optionsFunc?: (router: NextRouter) => QueryHookOptions<Types.GetConsultasPublicasQuery, Types.GetConsultasPublicasQueryVariables>) => (WrappedComponent: PageGetConsultasPublicasComp): NextPage => (props) => {
  const router = useRouter()
  const options = optionsFunc ? optionsFunc(router) : {};
  const { data, error } = useQuery(Operations.GetConsultasPublicasDocument, options)
  return <WrappedComponent {...props} data={data} error={error} />;

};
export const ssrGetConsultasPublicas = {
  getServerPage: getServerPageGetConsultasPublicas,
  withPage: withPageGetConsultasPublicas,
  usePage: useGetConsultasPublicas,
}
export async function getServerPageGetFaqs
  (options: Omit<Apollo.QueryOptions<Types.GetFaqsQueryVariables>, 'query'>, ctx: ApolloClientContext) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetFaqsQuery>({ ...options, query: Operations.GetFaqsDocument });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetFaqs = (
  optionsFunc?: (router: NextRouter) => QueryHookOptions<Types.GetFaqsQuery, Types.GetFaqsQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetFaqsDocument, options);
};
export type PageGetFaqsComp = React.FC<{ data?: Types.GetFaqsQuery, error?: Apollo.ApolloError }>;
export const withPageGetFaqs = (optionsFunc?: (router: NextRouter) => QueryHookOptions<Types.GetFaqsQuery, Types.GetFaqsQueryVariables>) => (WrappedComponent: PageGetFaqsComp): NextPage => (props) => {
  const router = useRouter()
  const options = optionsFunc ? optionsFunc(router) : {};
  const { data, error } = useQuery(Operations.GetFaqsDocument, options)
  return <WrappedComponent {...props} data={data} error={error} />;

};
export const ssrGetFaqs = {
  getServerPage: getServerPageGetFaqs,
  withPage: withPageGetFaqs,
  usePage: useGetFaqs,
}
export async function getServerPageGetResolucoes
  (options: Omit<Apollo.QueryOptions<Types.GetResolucoesQueryVariables>, 'query'>, ctx: ApolloClientContext) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetResolucoesQuery>({ ...options, query: Operations.GetResolucoesDocument });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetResolucoes = (
  optionsFunc?: (router: NextRouter) => QueryHookOptions<Types.GetResolucoesQuery, Types.GetResolucoesQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetResolucoesDocument, options);
};
export type PageGetResolucoesComp = React.FC<{ data?: Types.GetResolucoesQuery, error?: Apollo.ApolloError }>;
export const withPageGetResolucoes = (optionsFunc?: (router: NextRouter) => QueryHookOptions<Types.GetResolucoesQuery, Types.GetResolucoesQueryVariables>) => (WrappedComponent: PageGetResolucoesComp): NextPage => (props) => {
  const router = useRouter()
  const options = optionsFunc ? optionsFunc(router) : {};
  const { data, error } = useQuery(Operations.GetResolucoesDocument, options)
  return <WrappedComponent {...props} data={data} error={error} />;

};
export const ssrGetResolucoes = {
  getServerPage: getServerPageGetResolucoes,
  withPage: withPageGetResolucoes,
  usePage: useGetResolucoes,
}
export async function getServerPageGetRodoviasConcessionadas
  (options: Omit<Apollo.QueryOptions<Types.GetRodoviasConcessionadasQueryVariables>, 'query'>, ctx: ApolloClientContext) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetRodoviasConcessionadasQuery>({ ...options, query: Operations.GetRodoviasConcessionadasDocument });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetRodoviasConcessionadas = (
  optionsFunc?: (router: NextRouter) => QueryHookOptions<Types.GetRodoviasConcessionadasQuery, Types.GetRodoviasConcessionadasQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetRodoviasConcessionadasDocument, options);
};
export type PageGetRodoviasConcessionadasComp = React.FC<{ data?: Types.GetRodoviasConcessionadasQuery, error?: Apollo.ApolloError }>;
export const withPageGetRodoviasConcessionadas = (optionsFunc?: (router: NextRouter) => QueryHookOptions<Types.GetRodoviasConcessionadasQuery, Types.GetRodoviasConcessionadasQueryVariables>) => (WrappedComponent: PageGetRodoviasConcessionadasComp): NextPage => (props) => {
  const router = useRouter()
  const options = optionsFunc ? optionsFunc(router) : {};
  const { data, error } = useQuery(Operations.GetRodoviasConcessionadasDocument, options)
  return <WrappedComponent {...props} data={data} error={error} />;

};
export const ssrGetRodoviasConcessionadas = {
  getServerPage: getServerPageGetRodoviasConcessionadas,
  withPage: withPageGetRodoviasConcessionadas,
  usePage: useGetRodoviasConcessionadas,
}
export async function getServerPageGetTerminaisAeroviarios
  (options: Omit<Apollo.QueryOptions<Types.GetTerminaisAeroviariosQueryVariables>, 'query'>, ctx: ApolloClientContext) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetTerminaisAeroviariosQuery>({ ...options, query: Operations.GetTerminaisAeroviariosDocument });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetTerminaisAeroviarios = (
  optionsFunc?: (router: NextRouter) => QueryHookOptions<Types.GetTerminaisAeroviariosQuery, Types.GetTerminaisAeroviariosQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetTerminaisAeroviariosDocument, options);
};
export type PageGetTerminaisAeroviariosComp = React.FC<{ data?: Types.GetTerminaisAeroviariosQuery, error?: Apollo.ApolloError }>;
export const withPageGetTerminaisAeroviarios = (optionsFunc?: (router: NextRouter) => QueryHookOptions<Types.GetTerminaisAeroviariosQuery, Types.GetTerminaisAeroviariosQueryVariables>) => (WrappedComponent: PageGetTerminaisAeroviariosComp): NextPage => (props) => {
  const router = useRouter()
  const options = optionsFunc ? optionsFunc(router) : {};
  const { data, error } = useQuery(Operations.GetTerminaisAeroviariosDocument, options)
  return <WrappedComponent {...props} data={data} error={error} />;

};
export const ssrGetTerminaisAeroviarios = {
  getServerPage: getServerPageGetTerminaisAeroviarios,
  withPage: withPageGetTerminaisAeroviarios,
  usePage: useGetTerminaisAeroviarios,
}
export async function getServerPageGetTerminaisHidroviarios
  (options: Omit<Apollo.QueryOptions<Types.GetTerminaisHidroviariosQueryVariables>, 'query'>, ctx: ApolloClientContext) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetTerminaisHidroviariosQuery>({ ...options, query: Operations.GetTerminaisHidroviariosDocument });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetTerminaisHidroviarios = (
  optionsFunc?: (router: NextRouter) => QueryHookOptions<Types.GetTerminaisHidroviariosQuery, Types.GetTerminaisHidroviariosQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetTerminaisHidroviariosDocument, options);
};
export type PageGetTerminaisHidroviariosComp = React.FC<{ data?: Types.GetTerminaisHidroviariosQuery, error?: Apollo.ApolloError }>;
export const withPageGetTerminaisHidroviarios = (optionsFunc?: (router: NextRouter) => QueryHookOptions<Types.GetTerminaisHidroviariosQuery, Types.GetTerminaisHidroviariosQueryVariables>) => (WrappedComponent: PageGetTerminaisHidroviariosComp): NextPage => (props) => {
  const router = useRouter()
  const options = optionsFunc ? optionsFunc(router) : {};
  const { data, error } = useQuery(Operations.GetTerminaisHidroviariosDocument, options)
  return <WrappedComponent {...props} data={data} error={error} />;

};
export const ssrGetTerminaisHidroviarios = {
  getServerPage: getServerPageGetTerminaisHidroviarios,
  withPage: withPageGetTerminaisHidroviarios,
  usePage: useGetTerminaisHidroviarios,
}
export async function getServerPageGetTerminaisRodoviarios
  (options: Omit<Apollo.QueryOptions<Types.GetTerminaisRodoviariosQueryVariables>, 'query'>, ctx: ApolloClientContext) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetTerminaisRodoviariosQuery>({ ...options, query: Operations.GetTerminaisRodoviariosDocument });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetTerminaisRodoviarios = (
  optionsFunc?: (router: NextRouter) => QueryHookOptions<Types.GetTerminaisRodoviariosQuery, Types.GetTerminaisRodoviariosQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetTerminaisRodoviariosDocument, options);
};
export type PageGetTerminaisRodoviariosComp = React.FC<{ data?: Types.GetTerminaisRodoviariosQuery, error?: Apollo.ApolloError }>;
export const withPageGetTerminaisRodoviarios = (optionsFunc?: (router: NextRouter) => QueryHookOptions<Types.GetTerminaisRodoviariosQuery, Types.GetTerminaisRodoviariosQueryVariables>) => (WrappedComponent: PageGetTerminaisRodoviariosComp): NextPage => (props) => {
  const router = useRouter()
  const options = optionsFunc ? optionsFunc(router) : {};
  const { data, error } = useQuery(Operations.GetTerminaisRodoviariosDocument, options)
  return <WrappedComponent {...props} data={data} error={error} />;

};
export const ssrGetTerminaisRodoviarios = {
  getServerPage: getServerPageGetTerminaisRodoviarios,
  withPage: withPageGetTerminaisRodoviarios,
  usePage: useGetTerminaisRodoviarios,
}