import * as Types from './graphql';

import * as Operations from './graphql';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router'
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import { getApolloClient , ApolloClientContext} from '../lib/withApollo';
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
export async function getServerPageGetFaqs
    (options: Omit<Apollo.QueryOptions<Types.GetFaqsQueryVariables>, 'query'>, ctx: ApolloClientContext ){
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
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetFaqsQuery, Types.GetFaqsQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetFaqsDocument, options);
};
export type PageGetFaqsComp = React.FC<{data?: Types.GetFaqsQuery, error?: Apollo.ApolloError}>;
export const withPageGetFaqs = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetFaqsQuery, Types.GetFaqsQueryVariables>) => (WrappedComponent:PageGetFaqsComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetFaqsDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetFaqs = {
      getServerPage: getServerPageGetFaqs,
      withPage: withPageGetFaqs,
      usePage: useGetFaqs,
    }
export async function getServerPageGetRodoviasConcessionadas
    (options: Omit<Apollo.QueryOptions<Types.GetRodoviasConcessionadasQueryVariables>, 'query'>, ctx: ApolloClientContext ){
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
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetRodoviasConcessionadasQuery, Types.GetRodoviasConcessionadasQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetRodoviasConcessionadasDocument, options);
};
export type PageGetRodoviasConcessionadasComp = React.FC<{data?: Types.GetRodoviasConcessionadasQuery, error?: Apollo.ApolloError}>;
export const withPageGetRodoviasConcessionadas = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetRodoviasConcessionadasQuery, Types.GetRodoviasConcessionadasQueryVariables>) => (WrappedComponent:PageGetRodoviasConcessionadasComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetRodoviasConcessionadasDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetRodoviasConcessionadas = {
      getServerPage: getServerPageGetRodoviasConcessionadas,
      withPage: withPageGetRodoviasConcessionadas,
      usePage: useGetRodoviasConcessionadas,
    }
export async function getServerPageGetTerminaisAeroviarios
    (options: Omit<Apollo.QueryOptions<Types.GetTerminaisAeroviariosQueryVariables>, 'query'>, ctx: ApolloClientContext ){
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
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetTerminaisAeroviariosQuery, Types.GetTerminaisAeroviariosQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetTerminaisAeroviariosDocument, options);
};
export type PageGetTerminaisAeroviariosComp = React.FC<{data?: Types.GetTerminaisAeroviariosQuery, error?: Apollo.ApolloError}>;
export const withPageGetTerminaisAeroviarios = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetTerminaisAeroviariosQuery, Types.GetTerminaisAeroviariosQueryVariables>) => (WrappedComponent:PageGetTerminaisAeroviariosComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetTerminaisAeroviariosDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetTerminaisAeroviarios = {
      getServerPage: getServerPageGetTerminaisAeroviarios,
      withPage: withPageGetTerminaisAeroviarios,
      usePage: useGetTerminaisAeroviarios,
    }
export async function getServerPageGetTerminaisHidroviarios
    (options: Omit<Apollo.QueryOptions<Types.GetTerminaisHidroviariosQueryVariables>, 'query'>, ctx: ApolloClientContext ){
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
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetTerminaisHidroviariosQuery, Types.GetTerminaisHidroviariosQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetTerminaisHidroviariosDocument, options);
};
export type PageGetTerminaisHidroviariosComp = React.FC<{data?: Types.GetTerminaisHidroviariosQuery, error?: Apollo.ApolloError}>;
export const withPageGetTerminaisHidroviarios = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetTerminaisHidroviariosQuery, Types.GetTerminaisHidroviariosQueryVariables>) => (WrappedComponent:PageGetTerminaisHidroviariosComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetTerminaisHidroviariosDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetTerminaisHidroviarios = {
      getServerPage: getServerPageGetTerminaisHidroviarios,
      withPage: withPageGetTerminaisHidroviarios,
      usePage: useGetTerminaisHidroviarios,
    }
export async function getServerPageGetTerminaisRodoviarios
    (options: Omit<Apollo.QueryOptions<Types.GetTerminaisRodoviariosQueryVariables>, 'query'>, ctx: ApolloClientContext ){
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
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetTerminaisRodoviariosQuery, Types.GetTerminaisRodoviariosQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetTerminaisRodoviariosDocument, options);
};
export type PageGetTerminaisRodoviariosComp = React.FC<{data?: Types.GetTerminaisRodoviariosQuery, error?: Apollo.ApolloError}>;
export const withPageGetTerminaisRodoviarios = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetTerminaisRodoviariosQuery, Types.GetTerminaisRodoviariosQueryVariables>) => (WrappedComponent:PageGetTerminaisRodoviariosComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetTerminaisRodoviariosDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetTerminaisRodoviarios = {
      getServerPage: getServerPageGetTerminaisRodoviarios,
      withPage: withPageGetTerminaisRodoviarios,
      usePage: useGetTerminaisRodoviarios,
    }