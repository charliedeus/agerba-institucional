import { useState } from 'react'
import Link from 'next/link'
// import Image from 'next/future/image'
import classNames from 'classnames'
import { motion } from 'framer-motion'

import 'keen-slider/keen-slider.min.css'
import { useGetNoticiasDestaqueQuery } from '../../graphql/generated'
import { urlBuilder } from '../../lib/urlBuilder'
// import { Loader } from '../Loader'

export function NewsCols() {
  const [today] = useState(
    Intl.DateTimeFormat('fr-CA', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(Date.now()),
  )

  const { data } = useGetNoticiasDestaqueQuery({
    variables: {
      limit: 3,
      start: 0,
      data_atual: today,
    },
  })

  return (
    <>
      {data?.noticias?.data && data?.noticias?.data?.length > 0 && (
        <section
          className={classNames(
            'w-full desktop:max-w-[1280px] h-[calc(80vh-70px)] m-auto tablet:h-[calc(80vh-170px)] p-[14px] laptop:pt-[14px] laptop:pb-[14px] transition-transform duration-75 ease-in-out relative',
            {},
          )}
        >
          <div className={classNames('w-full h-full', {})}>
            <div
              className={classNames(
                'w-full h-full grid gap-4 rounded-lg overflow-hidden',
                {
                  'grid-cols-2': data.noticias.data.length === 2,
                  'grid-areas-news': data.noticias.data.length > 2,
                },
              )}
            >
              {data.noticias.data.map((highlightNew) => (
                <Link
                  key={highlightNew.id}
                  href={`/noticias/${highlightNew.attributes?.slug}`}
                >
                  <a
                    className={classNames(
                      'w-full h-full flex items-end justify-center laptop:justify-start relative rounded-lg overflow-hidden',
                      {
                        'first:grid-in-itemA grid-in-itemB last:grid-in-itemC':
                          data.noticias?.data && data.noticias.data.length > 2,
                      },
                    )}
                  >
                    <motion.div
                      animate="visible"
                      variants={{
                        visible: {
                          scale: [1, 1.3, 1],
                          opacity: 1,
                          transition: {
                            duration: 30,
                          },
                        },
                      }}
                      className="w-full h-full flex"
                    >
                      {highlightNew?.attributes?.cover.data ? (
                        <picture className="w-full">
                          <img
                            src={urlBuilder(
                              highlightNew.attributes.cover.data.attributes
                                ?.url,
                            )}
                            alt={
                              highlightNew.attributes?.cover.data?.attributes
                                ?.name ||
                              highlightNew.attributes?.cover.data?.attributes
                                ?.alternativeText ||
                              ''
                            }
                            className="w-full h-full object-cover object-center"
                          />
                        </picture>
                      ) : (
                        <picture className="w-full">
                          <img
                            src="/generic-image.png"
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
                          'mb-24': data?.noticias?.data.length === 1,
                        },
                      )}
                    >
                      <h1
                        className={classNames(
                          `text-4xl laptop:text-2xl text-${highlightNew.attributes?.colorTitle}`,
                          {},
                        )}
                        style={{ textShadow: '0 1px 3px rgb(0, 0, 0, 0.8)' }}
                      >
                        {highlightNew.attributes?.title}
                      </h1>

                      {highlightNew.attributes?.subtitle && (
                        <h3
                          className={classNames(
                            `text-md font-semibold overflow-hidden line-clamp-2`,
                            {
                              'text-black/75':
                                highlightNew.attributes?.colorTitle === 'black',
                              'text-white/75':
                                highlightNew.attributes?.colorTitle === 'white',
                            },
                          )}
                          style={{
                            textShadow: '0 1px 3px rgb(0, 0, 0, 0.8)',
                            maxLines: 2,
                          }}
                        >
                          {highlightNew.attributes?.subtitle}
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
