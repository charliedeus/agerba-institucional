import type { ReactElement } from 'react'
import HeroSection from '../components/HeroSection'
import { DefaultLayout } from '../layouts/DefaultLayout'
import type { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <HeroSection />
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
