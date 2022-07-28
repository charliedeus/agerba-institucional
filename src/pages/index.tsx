import { ReactElement } from 'react'

import type { NextPageWithLayout } from './_app'

import { DefaultLayout } from '../layouts/DefaultLayout'

import { SuspendedNews } from '../components/Banners/SuspendedNews'
import { Transparency } from '../components/Banners/Transparency'
import { SchoolCard } from '../components/Banners/SchoolCard'
import { ServicesPanel } from '../components/ServicesPanel'
import { gql, useQuery } from '@apollo/client'

const GET_NOTICIAS_QUERY = gql`
  query {
    noticias {
      Titulo
    }
  }
`

const Home: NextPageWithLayout = () => {
  const { data } = useQuery(GET_NOTICIAS_QUERY)

  console.log(data)

  return (
    <>
      <SuspendedNews />
      <Transparency />
      <ServicesPanel />
      <SchoolCard />
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
