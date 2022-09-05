import { ReactElement, useEffect } from 'react'

import type { NextPageWithLayout } from './_app'

import { DefaultLayout } from '../layouts/DefaultLayout'

import { SuspendedNewes } from '../components/Banners/SuspendedNewes'
import { Transparency } from '../components/Banners/Transparency'
import { ServicesPanel } from '../components/ServicesPanel'
// import { Modal } from '../components/Modal'
import { useGetNoticiasDestaqueQuery } from '../graphql/generated'

const Home: NextPageWithLayout = () => {
  const { data } = useGetNoticiasDestaqueQuery()

  const noticias = data?.noticias?.data.filter(
    (noticia) =>
      new Date(noticia.attributes?.deadline).toLocaleDateString('pt-BR', {
        timeZone: 'UTC',
      }) >=
      new Date().toLocaleDateString('pt-BR', {
        timeZone: 'UTC',
      }),
  )

  // const formattedNoticias = noticias?.map((noticia) => {
  //   return {
  //     id: noticia.id,
  //     title: noticia.attributes?.title,
  //     imageUrl: noticia.attributes?.cover.data?.attributes?.url,
  //   }
  // })

  useEffect(() => {
    if (noticias?.length! > 0) {
      return document.body.classList.add('fixed')
    }

    document.body.classList.remove('fixed')
  }, [noticias])

  return (
    <>
      <SuspendedNewes />
      <Transparency />
      <ServicesPanel />

      {/* {formattedNoticias?.length! > 0 && <Modal noticias={formattedNoticias} />} */}
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
