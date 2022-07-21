import type { ReactElement } from 'react'

import type { NextPageWithLayout } from './_app'

import { DefaultLayout } from '../layouts/DefaultLayout'

import { HeroSection } from '../components/HeroSection'
import { Transparency } from '../components/Banners/Transparency'
import { ServicesPanel } from '../components/ServicesPanel'
import { SchoolCard } from '../components/Banners/SchoolCard'
import { Footer } from '../components/Footer'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <HeroSection />
      <Transparency />
      <ServicesPanel />
      <SchoolCard />
      <Footer />
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
