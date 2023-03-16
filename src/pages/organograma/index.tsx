import { ReactElement } from 'react'
import Image from 'next/image'
import type { NextPageWithLayout } from '../_app'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { motion } from 'framer-motion'

import organogramaImg from './../../assets/images/organograma.jpg'
import { Disclosure } from '@headlessui/react'
import { File, FileArrowDown } from 'phosphor-react'
import Link from 'next/link'

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

      <ul role="list" className="flex flex-col gap-2">
        <li className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg transition-colors duration-100 ease-in-out border border-transparent hover:border-secondary box-border">
          <Disclosure as="div" className="flex flex-col gap-8 w-full">
            <div className="flex flex-col laptop:flex-row laptop:w-full gap-2">
              <Disclosure.Button className="flex flex-col gap-4 flex-1 laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center text-left">
                <span className="font-bold flex-1  laptop:border-primary flex items-center gap-2">
                  <File size={16} weight="light" className="text-gray-500" />{' '}
                  Organograma
                </span>
              </Disclosure.Button>
              <div className="flex items-center justify-center w-full laptop:max-w-[8rem] p-2 laptop:border-l-2 laptop:border-primary laptop:pl-2 text">
                <Link legacyBehavior href={organogramaImg.src}>
                  <a
                    download
                    target="_blank"
                    className="flex gap-2 items-center justify-center bg-primary hover:bg-white text-white hover:text-primary px-4 py-2 rounded-[4px] border border-transparent hover:border-primary group"
                  >
                    <FileArrowDown
                      size={24}
                      weight="light"
                      className="text-white group-hover:text-primary"
                    />
                    <span className="font-normal text-sm group-hover:text-primary">
                      Baixar
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </Disclosure>
        </li>
      </ul>
    </article>
  )
}

OrganogramaPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default OrganogramaPage
