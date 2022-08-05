import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { motion, AnimatePresence } from 'framer-motion'

import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import { client } from '../lib/apollo'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({
  Component,
  pageProps,
  router,
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  function onScroll() {
    showBackToTopButtonOnScroll()
  }

  function showBackToTopButtonOnScroll() {
    if (typeof window !== 'undefined') {
      window.scrollY > 100
        ? document.getElementById('backToTopButton')?.classList.add('show')
        : document.getElementById('backToTopButton')?.classList.remove('show')
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', onScroll)
  }

  return getLayout(
    <ApolloProvider client={client}>
      <AnimatePresence>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
        >
          <Component {...pageProps} />

          <a href="#" id="backToTopButton">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="20" fill="#EF3037" />
              <path
                d="M20 27V13"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 20L20 13L27 20"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </AnimatePresence>
    </ApolloProvider>,
  )
}
