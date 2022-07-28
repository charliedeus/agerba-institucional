import { ReactElement } from 'react'

import type { NextPageWithLayout } from './_app'

import { DefaultLayout } from '../layouts/DefaultLayout'

import { SuspendedNews } from '../components/Banners/SuspendedNews'
import { Transparency } from '../components/Banners/Transparency'
import { SchoolCard } from '../components/Banners/SchoolCard'
import { ServicesPanel } from '../components/ServicesPanel'

const Home: NextPageWithLayout = () => {
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
