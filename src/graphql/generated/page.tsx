import * as Types from './graphql';

import * as Operations from '../generated';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router'
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import { getApolloClient , ApolloClientContext} from '../../lib/withApollo';
export async function getServerPageGetAtasDeJulgamento
    (options: Omit<Apollo.QueryOptions<Types.GetAtasDeJulgamentoQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetAtasDeJulgamentoQuery>({ ...options, query: Operations.GetAtasDeJulgamentoDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetAtasDeJulgamento = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetAtasDeJulgamentoQuery, Types.GetAtasDeJulgamentoQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetAtasDeJulgamentoDocument, options);
};
export type PageGetAtasDeJulgamentoComp = React.FC<{data?: Types.GetAtasDeJulgamentoQuery, error?: Apollo.ApolloError}>;
export const withPageGetAtasDeJulgamento = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetAtasDeJulgamentoQuery, Types.GetAtasDeJulgamentoQueryVariables>) => (WrappedComponent:PageGetAtasDeJulgamentoComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetAtasDeJulgamentoDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetAtasDeJulgamento = {
      getServerPage: getServerPageGetAtasDeJulgamento,
      withPage: withPageGetAtasDeJulgamento,
      usePage: useGetAtasDeJulgamento,
    }
export async function getServerPageGetAtasDeReuniao
    (options: Omit<Apollo.QueryOptions<Types.GetAtasDeReuniaoQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetAtasDeReuniaoQuery>({ ...options, query: Operations.GetAtasDeReuniaoDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetAtasDeReuniao = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetAtasDeReuniaoQuery, Types.GetAtasDeReuniaoQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetAtasDeReuniaoDocument, options);
};
export type PageGetAtasDeReuniaoComp = React.FC<{data?: Types.GetAtasDeReuniaoQuery, error?: Apollo.ApolloError}>;
export const withPageGetAtasDeReuniao = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetAtasDeReuniaoQuery, Types.GetAtasDeReuniaoQueryVariables>) => (WrappedComponent:PageGetAtasDeReuniaoComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetAtasDeReuniaoDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetAtasDeReuniao = {
      getServerPage: getServerPageGetAtasDeReuniao,
      withPage: withPageGetAtasDeReuniao,
      usePage: useGetAtasDeReuniao,
    }
export async function getServerPageGetAudienciaPublicaById
    (options: Omit<Apollo.QueryOptions<Types.GetAudienciaPublicaByIdQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetAudienciaPublicaByIdQuery>({ ...options, query: Operations.GetAudienciaPublicaByIdDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetAudienciaPublicaById = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetAudienciaPublicaByIdQuery, Types.GetAudienciaPublicaByIdQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetAudienciaPublicaByIdDocument, options);
};
export type PageGetAudienciaPublicaByIdComp = React.FC<{data?: Types.GetAudienciaPublicaByIdQuery, error?: Apollo.ApolloError}>;
export const withPageGetAudienciaPublicaById = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetAudienciaPublicaByIdQuery, Types.GetAudienciaPublicaByIdQueryVariables>) => (WrappedComponent:PageGetAudienciaPublicaByIdComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetAudienciaPublicaByIdDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetAudienciaPublicaById = {
      getServerPage: getServerPageGetAudienciaPublicaById,
      withPage: withPageGetAudienciaPublicaById,
      usePage: useGetAudienciaPublicaById,
    }
export async function getServerPageGetAudienciasPublicas
    (options: Omit<Apollo.QueryOptions<Types.GetAudienciasPublicasQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetAudienciasPublicasQuery>({ ...options, query: Operations.GetAudienciasPublicasDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetAudienciasPublicas = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetAudienciasPublicasQuery, Types.GetAudienciasPublicasQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetAudienciasPublicasDocument, options);
};
export type PageGetAudienciasPublicasComp = React.FC<{data?: Types.GetAudienciasPublicasQuery, error?: Apollo.ApolloError}>;
export const withPageGetAudienciasPublicas = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetAudienciasPublicasQuery, Types.GetAudienciasPublicasQueryVariables>) => (WrappedComponent:PageGetAudienciasPublicasComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetAudienciasPublicasDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetAudienciasPublicas = {
      getServerPage: getServerPageGetAudienciasPublicas,
      withPage: withPageGetAudienciasPublicas,
      usePage: useGetAudienciasPublicas,
    }
export async function getServerPageGetCartilhas
    (options: Omit<Apollo.QueryOptions<Types.GetCartilhasQueryVariables>, 'query'>, ctx: ApolloClientContext ){
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
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetCartilhasQuery, Types.GetCartilhasQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetCartilhasDocument, options);
};
export type PageGetCartilhasComp = React.FC<{data?: Types.GetCartilhasQuery, error?: Apollo.ApolloError}>;
export const withPageGetCartilhas = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetCartilhasQuery, Types.GetCartilhasQueryVariables>) => (WrappedComponent:PageGetCartilhasComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetCartilhasDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetCartilhas = {
      getServerPage: getServerPageGetCartilhas,
      withPage: withPageGetCartilhas,
      usePage: useGetCartilhas,
    }
export async function getServerPageGetConsultasPublicas
    (options: Omit<Apollo.QueryOptions<Types.GetConsultasPublicasQueryVariables>, 'query'>, ctx: ApolloClientContext ){
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
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetConsultasPublicasQuery, Types.GetConsultasPublicasQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetConsultasPublicasDocument, options);
};
export type PageGetConsultasPublicasComp = React.FC<{data?: Types.GetConsultasPublicasQuery, error?: Apollo.ApolloError}>;
export const withPageGetConsultasPublicas = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetConsultasPublicasQuery, Types.GetConsultasPublicasQueryVariables>) => (WrappedComponent:PageGetConsultasPublicasComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetConsultasPublicasDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetConsultasPublicas = {
      getServerPage: getServerPageGetConsultasPublicas,
      withPage: withPageGetConsultasPublicas,
      usePage: useGetConsultasPublicas,
    }
export async function getServerPageGetFaQs
    (options: Omit<Apollo.QueryOptions<Types.GetFaQsQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetFaQsQuery>({ ...options, query: Operations.GetFaQsDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetFaQs = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetFaQsQuery, Types.GetFaQsQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetFaQsDocument, options);
};
export type PageGetFaQsComp = React.FC<{data?: Types.GetFaQsQuery, error?: Apollo.ApolloError}>;
export const withPageGetFaQs = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetFaQsQuery, Types.GetFaQsQueryVariables>) => (WrappedComponent:PageGetFaQsComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetFaQsDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetFaQs = {
      getServerPage: getServerPageGetFaQs,
      withPage: withPageGetFaQs,
      usePage: useGetFaQs,
    }
export async function getServerPageGetGruposEServicos
    (options: Omit<Apollo.QueryOptions<Types.GetGruposEServicosQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetGruposEServicosQuery>({ ...options, query: Operations.GetGruposEServicosDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetGruposEServicos = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetGruposEServicosQuery, Types.GetGruposEServicosQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetGruposEServicosDocument, options);
};
export type PageGetGruposEServicosComp = React.FC<{data?: Types.GetGruposEServicosQuery, error?: Apollo.ApolloError}>;
export const withPageGetGruposEServicos = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetGruposEServicosQuery, Types.GetGruposEServicosQueryVariables>) => (WrappedComponent:PageGetGruposEServicosComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetGruposEServicosDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetGruposEServicos = {
      getServerPage: getServerPageGetGruposEServicos,
      withPage: withPageGetGruposEServicos,
      usePage: useGetGruposEServicos,
    }
export async function getServerPageGetLegislacoes
    (options: Omit<Apollo.QueryOptions<Types.GetLegislacoesQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetLegislacoesQuery>({ ...options, query: Operations.GetLegislacoesDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetLegislacoes = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetLegislacoesQuery, Types.GetLegislacoesQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetLegislacoesDocument, options);
};
export type PageGetLegislacoesComp = React.FC<{data?: Types.GetLegislacoesQuery, error?: Apollo.ApolloError}>;
export const withPageGetLegislacoes = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetLegislacoesQuery, Types.GetLegislacoesQueryVariables>) => (WrappedComponent:PageGetLegislacoesComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetLegislacoesDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetLegislacoes = {
      getServerPage: getServerPageGetLegislacoes,
      withPage: withPageGetLegislacoes,
      usePage: useGetLegislacoes,
    }
export async function getServerPageGetLicitacoesFuturas
    (options: Omit<Apollo.QueryOptions<Types.GetLicitacoesFuturasQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetLicitacoesFuturasQuery>({ ...options, query: Operations.GetLicitacoesFuturasDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetLicitacoesFuturas = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetLicitacoesFuturasQuery, Types.GetLicitacoesFuturasQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetLicitacoesFuturasDocument, options);
};
export type PageGetLicitacoesFuturasComp = React.FC<{data?: Types.GetLicitacoesFuturasQuery, error?: Apollo.ApolloError}>;
export const withPageGetLicitacoesFuturas = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetLicitacoesFuturasQuery, Types.GetLicitacoesFuturasQueryVariables>) => (WrappedComponent:PageGetLicitacoesFuturasComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetLicitacoesFuturasDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetLicitacoesFuturas = {
      getServerPage: getServerPageGetLicitacoesFuturas,
      withPage: withPageGetLicitacoesFuturas,
      usePage: useGetLicitacoesFuturas,
    }
export async function getServerPageGetNoticiasDestaque
    (options: Omit<Apollo.QueryOptions<Types.GetNoticiasDestaqueQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetNoticiasDestaqueQuery>({ ...options, query: Operations.GetNoticiasDestaqueDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetNoticiasDestaque = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetNoticiasDestaqueQuery, Types.GetNoticiasDestaqueQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetNoticiasDestaqueDocument, options);
};
export type PageGetNoticiasDestaqueComp = React.FC<{data?: Types.GetNoticiasDestaqueQuery, error?: Apollo.ApolloError}>;
export const withPageGetNoticiasDestaque = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetNoticiasDestaqueQuery, Types.GetNoticiasDestaqueQueryVariables>) => (WrappedComponent:PageGetNoticiasDestaqueComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetNoticiasDestaqueDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetNoticiasDestaque = {
      getServerPage: getServerPageGetNoticiasDestaque,
      withPage: withPageGetNoticiasDestaque,
      usePage: useGetNoticiasDestaque,
    }
export async function getServerPageGetStudentBySlug
    (options: Omit<Apollo.QueryOptions<Types.GetStudentBySlugQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetStudentBySlugQuery>({ ...options, query: Operations.GetStudentBySlugDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetStudentBySlug = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetStudentBySlugQuery, Types.GetStudentBySlugQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetStudentBySlugDocument, options);
};
export type PageGetStudentBySlugComp = React.FC<{data?: Types.GetStudentBySlugQuery, error?: Apollo.ApolloError}>;
export const withPageGetStudentBySlug = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetStudentBySlugQuery, Types.GetStudentBySlugQueryVariables>) => (WrappedComponent:PageGetStudentBySlugComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetStudentBySlugDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetStudentBySlug = {
      getServerPage: getServerPageGetStudentBySlug,
      withPage: withPageGetStudentBySlug,
      usePage: useGetStudentBySlug,
    }
export async function getServerPageGetTarifasDeTransportesHidroviarios
    (options: Omit<Apollo.QueryOptions<Types.GetTarifasDeTransportesHidroviariosQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetTarifasDeTransportesHidroviariosQuery>({ ...options, query: Operations.GetTarifasDeTransportesHidroviariosDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetTarifasDeTransportesHidroviarios = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetTarifasDeTransportesHidroviariosQuery, Types.GetTarifasDeTransportesHidroviariosQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetTarifasDeTransportesHidroviariosDocument, options);
};
export type PageGetTarifasDeTransportesHidroviariosComp = React.FC<{data?: Types.GetTarifasDeTransportesHidroviariosQuery, error?: Apollo.ApolloError}>;
export const withPageGetTarifasDeTransportesHidroviarios = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetTarifasDeTransportesHidroviariosQuery, Types.GetTarifasDeTransportesHidroviariosQueryVariables>) => (WrappedComponent:PageGetTarifasDeTransportesHidroviariosComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetTarifasDeTransportesHidroviariosDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetTarifasDeTransportesHidroviarios = {
      getServerPage: getServerPageGetTarifasDeTransportesHidroviarios,
      withPage: withPageGetTarifasDeTransportesHidroviarios,
      usePage: useGetTarifasDeTransportesHidroviarios,
    }
export async function getServerPageGetTarifasDeTransportesRodoviarios
    (options: Omit<Apollo.QueryOptions<Types.GetTarifasDeTransportesRodoviariosQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetTarifasDeTransportesRodoviariosQuery>({ ...options, query: Operations.GetTarifasDeTransportesRodoviariosDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetTarifasDeTransportesRodoviarios = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetTarifasDeTransportesRodoviariosQuery, Types.GetTarifasDeTransportesRodoviariosQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetTarifasDeTransportesRodoviariosDocument, options);
};
export type PageGetTarifasDeTransportesRodoviariosComp = React.FC<{data?: Types.GetTarifasDeTransportesRodoviariosQuery, error?: Apollo.ApolloError}>;
export const withPageGetTarifasDeTransportesRodoviarios = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetTarifasDeTransportesRodoviariosQuery, Types.GetTarifasDeTransportesRodoviariosQueryVariables>) => (WrappedComponent:PageGetTarifasDeTransportesRodoviariosComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetTarifasDeTransportesRodoviariosDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetTarifasDeTransportesRodoviarios = {
      getServerPage: getServerPageGetTarifasDeTransportesRodoviarios,
      withPage: withPageGetTarifasDeTransportesRodoviarios,
      usePage: useGetTarifasDeTransportesRodoviarios,
    }
export async function getServerPageGetTutEs
    (options: Omit<Apollo.QueryOptions<Types.GetTutEsQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetTutEsQuery>({ ...options, query: Operations.GetTutEsDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetTutEs = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetTutEsQuery, Types.GetTutEsQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetTutEsDocument, options);
};
export type PageGetTutEsComp = React.FC<{data?: Types.GetTutEsQuery, error?: Apollo.ApolloError}>;
export const withPageGetTutEs = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetTutEsQuery, Types.GetTutEsQueryVariables>) => (WrappedComponent:PageGetTutEsComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetTutEsDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetTutEs = {
      getServerPage: getServerPageGetTutEs,
      withPage: withPageGetTutEs,
      usePage: useGetTutEs,
    }
export async function getServerPageGetTarifasGas
    (options: Omit<Apollo.QueryOptions<Types.GetTarifasGasQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetTarifasGasQuery>({ ...options, query: Operations.GetTarifasGasDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetTarifasGas = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetTarifasGasQuery, Types.GetTarifasGasQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetTarifasGasDocument, options);
};
export type PageGetTarifasGasComp = React.FC<{data?: Types.GetTarifasGasQuery, error?: Apollo.ApolloError}>;
export const withPageGetTarifasGas = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetTarifasGasQuery, Types.GetTarifasGasQueryVariables>) => (WrappedComponent:PageGetTarifasGasComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetTarifasGasDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetTarifasGas = {
      getServerPage: getServerPageGetTarifasGas,
      withPage: withPageGetTarifasGas,
      usePage: useGetTarifasGas,
    }
export async function getServerPageGetRodoviasPedagiadas
    (options: Omit<Apollo.QueryOptions<Types.GetRodoviasPedagiadasQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetRodoviasPedagiadasQuery>({ ...options, query: Operations.GetRodoviasPedagiadasDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetRodoviasPedagiadas = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetRodoviasPedagiadasQuery, Types.GetRodoviasPedagiadasQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetRodoviasPedagiadasDocument, options);
};
export type PageGetRodoviasPedagiadasComp = React.FC<{data?: Types.GetRodoviasPedagiadasQuery, error?: Apollo.ApolloError}>;
export const withPageGetRodoviasPedagiadas = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetRodoviasPedagiadasQuery, Types.GetRodoviasPedagiadasQueryVariables>) => (WrappedComponent:PageGetRodoviasPedagiadasComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetRodoviasPedagiadasDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetRodoviasPedagiadas = {
      getServerPage: getServerPageGetRodoviasPedagiadas,
      withPage: withPageGetRodoviasPedagiadas,
      usePage: useGetRodoviasPedagiadas,
    }
export async function getServerPageGetTerminais
    (options: Omit<Apollo.QueryOptions<Types.GetTerminaisQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetTerminaisQuery>({ ...options, query: Operations.GetTerminaisDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetTerminais = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetTerminaisQuery, Types.GetTerminaisQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetTerminaisDocument, options);
};
export type PageGetTerminaisComp = React.FC<{data?: Types.GetTerminaisQuery, error?: Apollo.ApolloError}>;
export const withPageGetTerminais = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetTerminaisQuery, Types.GetTerminaisQueryVariables>) => (WrappedComponent:PageGetTerminaisComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetTerminaisDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetTerminais = {
      getServerPage: getServerPageGetTerminais,
      withPage: withPageGetTerminais,
      usePage: useGetTerminais,
    }
export async function getServerPageGetTransportesHidroviarios
    (options: Omit<Apollo.QueryOptions<Types.GetTransportesHidroviariosQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetTransportesHidroviariosQuery>({ ...options, query: Operations.GetTransportesHidroviariosDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetTransportesHidroviarios = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetTransportesHidroviariosQuery, Types.GetTransportesHidroviariosQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetTransportesHidroviariosDocument, options);
};
export type PageGetTransportesHidroviariosComp = React.FC<{data?: Types.GetTransportesHidroviariosQuery, error?: Apollo.ApolloError}>;
export const withPageGetTransportesHidroviarios = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetTransportesHidroviariosQuery, Types.GetTransportesHidroviariosQueryVariables>) => (WrappedComponent:PageGetTransportesHidroviariosComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetTransportesHidroviariosDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetTransportesHidroviarios = {
      getServerPage: getServerPageGetTransportesHidroviarios,
      withPage: withPageGetTransportesHidroviarios,
      usePage: useGetTransportesHidroviarios,
    }