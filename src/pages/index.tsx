import { ReactElement } from 'react'

import type { NextPageWithLayout } from './_app'

import { DefaultLayout } from '../layouts/DefaultLayout'

import { Transparency } from '../components/Banners/Transparency'
import { ServicesPanel } from '../components/ServicesPanel'
import { News } from '../components/Banners/News'
import { NewsCols } from '../components/Banners/NewsCols'
import { GetServerSideProps } from 'next'

import { initializeApollo } from '../lib/apollo'

import Head from 'next/head'
import {
  GetNoticiasDestaqueDocument,
  GetNoticiasDestaqueQuery,
} from '../graphql/generated'

const Home: NextPageWithLayout = (props: any) => {
  return (
    <>
      <Head>
        <title>Início | AGERBA</title>
      </Head>

      <div className="hidden laptop:block">
        <NewsCols highlightNews={props.highlightNews} />
      </div>

      <div className="laptop:hidden">
        <News />
      </div>

      <Transparency />
      <ServicesPanel />
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo()

  const today = Intl.DateTimeFormat('fr-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(Date.now())

  const { data: highlightNewsData } =
    await apolloClient.query<GetNoticiasDestaqueQuery>({
      query: GetNoticiasDestaqueDocument,
      variables: {
        limit: 3,
        start: 0,
        data_atual: today,
      },
    })

  const highlightNews = highlightNewsData.noticias?.data

  return {
    props: {
      highlightNews,
    },
  }
}
