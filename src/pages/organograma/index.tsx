import { ReactElement } from 'react'
import Image from 'next/image'
import type { NextPageWithLayout } from '../_app'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { motion } from 'framer-motion'

import organogramaImg from './../../assets/images/organograma.jpg'

const OrganogramaPage: NextPageWithLayout = () => {
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
        Organograma
      </motion.h1>
      <div className=" flex items-center justify-center flex-1 ">
        <Image
          src={organogramaImg}
          alt="Organograma AGERBA"
          className="object-cover object-center"
        />
      </div>
    </article>
  )
}

OrganogramaPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default OrganogramaPage
