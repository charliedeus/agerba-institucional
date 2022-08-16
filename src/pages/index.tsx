import { ReactElement, useEffect } from 'react'

import type { NextPageWithLayout } from './_app'

import { DefaultLayout } from '../layouts/DefaultLayout'

import { SuspendedNewes } from '../components/Banners/SuspendedNewes'
import { Transparency } from '../components/Banners/Transparency'
import { ServicesPanel } from '../components/ServicesPanel'
import { Modal } from '../components/Modal'

const Home: NextPageWithLayout = () => {
  useEffect(() => {
    document.body.classList.add('fixed')
  }, [])

  return (
    <>
      <SuspendedNewes />
      <Transparency />
      <ServicesPanel />

      <Modal />
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
