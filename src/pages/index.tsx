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
import Link from 'next/link'
import { motion } from 'framer-motion'

const Home: NextPageWithLayout = (props: any) => {
  return (
    <>
      <Head>
        <title>Início | AGERBA</title>
      </Head>

      <Link
        href="http://sider.agerba.ba.gov.br/cnd"
        target="_blank"
        className="
          w-full desktop:max-w-[1280px]
          h-32
          flex items-center justify-center
          mt-4
          m-auto 
          transition-transform duration-75 ease-in-out relative"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="
            w-full 
            h-full 
            mx-8
            flex flex-col items-center justify-center 
            rounded-lg
            bg-primary
            object-cover object-center
            overflow-hidden
            relative
          "
        >
          <h1
            className="
            text-white
              text-center
              text-bold
              text-lg
              laptop:text-2xl
            "
          >
            Atenção! Estamos com novo portal para emissão de Certidões de
            Regularidade Financeira!
          </h1>
          <span
            className="
            text-white
              text-center
              text-base
              laptop:text-lg
            "
          >
            (Clique aqui)
          </span>
        </motion.div>
      </Link>

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
