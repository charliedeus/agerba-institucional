import { useState } from 'react'
import Link from 'next/link'
// import Image from 'next/future/image'
import classNames from 'classnames'
import { ArrowRight } from 'phosphor-react'
import { motion } from 'framer-motion'
import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'
import { useGetNoticiasDestaqueQuery } from '../../graphql/generated'
import { urlBuilder } from '../../lib/urlBuilder'

export function News() {
  const [today] = useState(
    Intl.DateTimeFormat('fr-CA', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(Date.now()),
  )

  const [page] = useState(1)

  const { data } = useGetNoticiasDestaqueQuery({
    variables: {
      limit: 5,
      start: (page - 1) * 5,
      data_atual: today,
    },
  })

  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
  }) {
    const disabeld = props.disabled ? ' text-gray-300' : ''
    return (
      <svg
        onClick={props.onClick}
        className={`w-[30px] h-[30px] absolute top-1/2 -translate-y-1/2 fill-white cursor-pointer ${
          props.left ? 'left-8' : 'left-auto right-8'
        } ${disabeld}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    )
  }

  return (
    <>
      {data?.noticias?.data && data?.noticias?.data?.length > 0 && (
        <section className="w-full desktop:max-w-[1280px] h-[calc(100vh-70px)] m-auto tablet:h-[calc(100vh-170px)] p-[14px] laptop:pt-[14px] laptop:pb-[14px] transition-transform duration-75 ease-in-out relative">
          <div
            ref={sliderRef}
            className="w-full h-full flex rounded-lg overflow-hidden shadow-xl"
          >
            {data.noticias.data.map((highlightNew) => (
              <div
                key={highlightNew.id}
                className="keen-slider__slide w-full h-full flex items-end laptop:items-center justify-center laptop:justify-start relative overflow-hidden"
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
                  {/* <Image
                    src={urlBuilder(
                      highlightNew.attributes?.cover.data?.attributes?.url,
                    )}
                    alt={
                      highlightNew.attributes?.cover.data?.attributes?.name ||
                      ''
                    }
                    width={1000}
                    height={600}
                    className="w-full h-full object-cover object-center"
                  /> */}
                  <picture className="w-full">
                    <img
                      src={urlBuilder(
                        highlightNew.attributes?.cover.data?.attributes?.url,
                      )}
                      alt={
                        highlightNew.attributes?.cover.data?.attributes?.name ||
                        ''
                      }
                      className="w-full h-full object-cover object-center"
                    />
                  </picture>
                </motion.div>

                <header
                  className={classNames(
                    `absolute w-full laptop:w-2/3 mb-2 flex flex-col gap-4 laptop:gap-8 p-2 px-4 laptop:px-20 font-bold text-2xl laptop:text-4xl leading-relaxed text-${highlightNew.attributes?.colorTitle}`,
                    {},
                  )}
                >
                  <h1
                    className=""
                    style={{ textShadow: '0 1px 3px rgb(0, 0, 0, 0.8)' }}
                  >
                    {highlightNew.attributes?.title}
                  </h1>

                  {highlightNew.attributes?.subtitle && (
                    <h3
                      className={`hidden laptop:inline-flex text-2xl text-${highlightNew.attributes?.colorTitle}/75 font-semibold`}
                      style={{ textShadow: '0 1px 3px rgb(0, 0, 0, 0.8)' }}
                    >
                      {highlightNew.attributes?.subtitle}
                    </h3>
                  )}

                  <Link href={`/noticias/${highlightNew.attributes?.slug}`}>
                    <a
                      className={classNames(
                        `w-full laptop:w-[300px] flex items-center justify-center gap-2 border-2 py-2 laptop:py-4 rounded-lg transition duration-100 ease-out cursor-pointer`,
                        {
                          'border-black hover:bg-black hover:text-white':
                            highlightNew.attributes?.colorTitle === 'black',
                          'border-white hover:bg-white hover:text-black':
                            highlightNew.attributes?.colorTitle === 'white',
                        },
                      )}
                    >
                      <span
                        className="text-base uppercase"
                        style={{ textShadow: '0 1px 3px rgb(0, 0, 0, 0.8)' }}
                      >
                        Leia mais
                      </span>
                      <div className="w-fit bottom-0">
                        <ArrowRight size={16} weight="light" />
                      </div>
                    </a>
                  </Link>
                </header>
              </div>
            ))}
          </div>
          {data.noticias.data.length > 1 && loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
        </section>
      )}
    </>
  )
}
