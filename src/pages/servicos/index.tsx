import { ReactElement } from 'react'
import Head from 'next/head'

import type { NextPageWithLayout } from '../_app'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { GetServerSideProps } from 'next'
import { getLinhas } from '../../hooks/useLinhas'

const ServicesPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Linhas | AGERBA</title>
      </Head>
      <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
        <h1 className="font-bold text-[2rem]">Linhas</h1>
      </article>
    </>
  )
}

ServicesPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default ServicesPage

export const getServerSideProps: GetServerSideProps = async () => {
  const { linhas } = await getLinhas(1, 9)

  return {
    props: {
      linhas,
    },
  }
}
