import { ReactElement } from 'react'

import type { NextPageWithLayout } from './_app'

import { DefaultLayout } from '../layouts/DefaultLayout'

import { Transparency } from '../components/Banners/Transparency'
import { ServicesPanel } from '../components/ServicesPanel'
import { SuspendedNewes } from '../components/Banners/SuspendedNewes'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <SuspendedNewes />
      <Transparency />
      <ServicesPanel />
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
