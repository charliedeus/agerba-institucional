import { useKeenSlider } from 'keen-slider/react'
import { ReactElement, useState } from 'react'

import type { NextPageWithLayout } from './_app'

import { DefaultLayout } from '../layouts/DefaultLayout'

import { GetServerSideProps } from 'next'
import { News } from '../components/Banners/News'
import { NewsCols } from '../components/Banners/NewsCols'
import { Transparency } from '../components/Banners/Transparency'
import { ServicesPanel } from '../components/ServicesPanel'

import 'keen-slider/keen-slider.min.css'

import { initializeApollo } from '../lib/apollo'

import classNames from 'classnames'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
// import { Modal } from '../components/Modal'
import {
  GetNoticiasDestaqueDocument,
  GetNoticiasDestaqueQuery,
  useGetDestaquesQuery,
} from '../graphql/generated'

const Home: NextPageWithLayout = (props: any) => {
  // const [modalIsOpen, setModalIsOpen] = useState(true)

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      slides: {
        spacing: 2,
      },
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 5000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      },
    ],
  )

  const { data } = useGetDestaquesQuery()

  return (
    <>
      <Head>
        <title>Início | AGERBA</title>
      </Head>

      {data?.advertisements && data.advertisements.data.length > 0 && (
        <motion.div
          ref={sliderRef}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="border keen-slider w-full max-w-[1200px] h-56 mt-4 mx-auto border-zinc-500 rounded-md overflow-hidden"
        >
          {data.advertisements.data.map((item) => (
            <Link
              key={item.id}
              href={item.attributes?.url || '#'}
              target="_blank"
              className={classNames(
                `flex flex-col items-center justify-center h-32 max-h-fit gap-2 rounded-md keen-slider__slide`,
                {
                  'bg-primary': item.attributes?.backgroundColor === 'Azul',
                  'bg-secondary':
                    item.attributes?.backgroundColor === 'Vermelho',
                },
              )}
            >
              <h1 className="w-full text-lg text-center text-white text-bold laptop:text-2xl">
                {item.attributes?.title}
              </h1>

              <div
                className="text-white text-left mt-[-1rem] py-4 px-8 laptop:mt-2 tablet:px-16 laptop:px-32 text-lg laptop:text-xl leading-[1.75]"
                dangerouslySetInnerHTML={{
                  __html: item.attributes?.description!,
                }}
              />

              {item.attributes?.url && (
                <span className="text-base text-center text-white laptop:text-lg">
                  (Clique aqui)
                </span>
              )}
            </Link>
          ))}
        </motion.div>
      )}

      <div className="hidden laptop:block">
        <NewsCols highlightNews={props.highlightNews} />
      </div>

      <div className="laptop:hidden">
        <News />
      </div>

      <Transparency />
      <ServicesPanel />

      {/* <Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen} /> */}
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
