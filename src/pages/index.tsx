import { ReactElement } from 'react'

import type { NextPageWithLayout } from './_app'

import { DefaultLayout } from '../layouts/DefaultLayout'

import { Transparency } from '../components/Banners/Transparency'
import { ServicesPanel } from '../components/ServicesPanel'
import { SuspendedNewsWithImage } from '../components/Banners/SuspendedNewsWithImage'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <SuspendedNewsWithImage />
      <Transparency />
      <ServicesPanel />
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
