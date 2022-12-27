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

  const { data: highlightNewsData } =
    await apolloClient.query<GetNoticiasDestaqueQuery>({
      query: GetNoticiasDestaqueDocument,
      variables: {
        limit: 3,
        start: 0,
      },
    })

  const highlightNews = highlightNewsData.noticias?.data.map(
    (highlightNew) => ({
      id: highlightNew.id,
      slug: highlightNew.attributes?.slug,
      cover: {
        name: highlightNew.attributes?.cover?.data?.attributes?.name || null,
        alternativeText:
          highlightNew.attributes?.cover?.data?.attributes?.alternativeText ||
          null,
        url: highlightNew.attributes?.cover?.data?.attributes?.url || null,
      },
      colorTitle: highlightNew.attributes?.colorTitle,
      title: highlightNew.attributes?.title,
      subtitle: highlightNew.attributes?.subtitle,
    }),
  )

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      highlightNews,
    },
  }
}
