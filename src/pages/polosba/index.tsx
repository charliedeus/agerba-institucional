import { ReactElement } from 'react'

import type { NextPageWithLayout } from '../_app'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { motion } from 'framer-motion'

const PolosbaPage: NextPageWithLayout = () => {
  return (
    <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { scale: 0.8, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.5,
            },
          },
        }}
        className="font-bold text-[2rem]"
      >
        Polos Regionais
      </motion.h1>
      <div className="shadow-lg">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=141vC23EKd-CoL6p2VbW89izSc8XHWITM&z=6"
          className="w-full h-[550px] "
        ></iframe>
      </div>
    </article>
  )
}

PolosbaPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default PolosbaPage
