import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'
import { motion } from 'framer-motion'

import 'keen-slider/keen-slider.min.css'
import { urlBuilder } from '../../lib/urlBuilder'

// import { Loader } from '../Loader'

import genericImg from '../../assets/images/generic-image.png'

interface highlightNewsProps {
  highlightNews: {
    id: string
    slug: string
    cover: {
      name: string
      alternativeText: string
      url: string
    }
    colorTitle: string
    title: string
    subtitle: string
  }[]
}

export function NewsCols({ highlightNews }: highlightNewsProps) {
  return (
    <>
      {highlightNews && highlightNews.length > 0 && (
        <section className="w-full desktop:max-w-[1280px] h-[calc(80vh-7.475rem)] m-auto tablet:h-[calc(80vh-170px)] p-[14px] laptop:pt-[14px] laptop:pb-[14px] transition-transform duration-75 ease-in-out relative">
          <div className="w-full h-full">
            <div
              className={classNames(
                'w-full h-full grid gap-4 rounded-lg overflow-hidden',
                {
                  'grid-cols-2': highlightNews.length === 2,
                  'grid-areas-news': highlightNews.length > 2,
                },
              )}
            >
              {highlightNews.map((highlightNew) => (
                <Link
                  legacyBehavior
                  key={highlightNew.id}
                  href={`/noticias/${highlightNew.slug}`}
                >
                  <a
                    className={classNames(
                      'w-full h-full flex items-end justify-center laptop:justify-start relative rounded-lg overflow-hidden',
                      {
                        'first:grid-in-itemA grid-in-itemB last:grid-in-itemC':
                          highlightNews && highlightNews.length > 2,
                      },
                    )}
                  >
                    <motion.div
                      animate="visible"
                      variants={{
                        visible: {
                          scale: [1, 1.1, 1],
                          opacity: 1,
                          transition: {
                            duration: 30,
                          },
                        },
                      }}
                      className="w-full h-full flex"
                    >
                      {highlightNew?.cover.url !== null ? (
                        <picture className="w-full">
                          <Image
                            src={urlBuilder(highlightNew.cover.url)}
                            alt={
                              highlightNew.cover.name ||
                              highlightNew.cover.alternativeText ||
                              ''
                            }
                            className="w-full h-full object-cover object-center"
                          />
                        </picture>
                      ) : (
                        <picture className="w-full">
                          <Image
                            src={genericImg.src}
                            alt={''}
                            className="w-full h-full object-cover object-center"
                          />
                        </picture>
                      )}
                    </motion.div>

                    <header
                      className={classNames(
                        `absolute w-full laptop:w-2/3 mb-4 flex flex-col gap-4 laptop:gap-8 p-2 px-4 laptop:px-10 font-bold leading-relaxed `,
                        {
                          'mb-24': highlightNews.length === 1,
                        },
                      )}
                    >
                      <h1
                        className={classNames(
                          `text-4xl laptop:text-2xl text-${highlightNew.colorTitle}`,
                          {},
                        )}
                        style={{ textShadow: '0 1px 3px rgb(0, 0, 0, 0.8)' }}
                      >
                        {highlightNew.title}
                      </h1>

                      {highlightNew.subtitle && (
                        <h3
                          className={classNames(
                            'hidden text-md font-semibold overflow-hidden line-clamp-2',
                            {
                              'text-black/75':
                                highlightNew.colorTitle === 'black',
                              'text-white/75':
                                highlightNew.colorTitle === 'white',
                            },
                          )}
                          style={{
                            textShadow: '0 1px 3px rgb(0, 0, 0, 0.8)',
                            maxLines: 2,
                          }}
                        >
                          {highlightNew.subtitle}
                        </h3>
                      )}
                    </header>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
