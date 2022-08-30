import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowCircleLeft, ArrowCircleRight, Circle, X } from 'phosphor-react'
import { wrap } from 'popmotion'
import { urlBuilder } from '../../lib/urlBuilder'
import classNames from 'classnames'

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

interface NoticiaProps {
  id?: string
  title?: string
  imageUrl?: string
}

interface ModalProps {
  noticias: NoticiaProps[]
}

export function Modal({ noticias }: ModalProps) {
  const [[page, direction], setPage] = useState([0, 0])

  const newIndex = wrap(0, noticias.length, page)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  const handleToggleModal = () => {
    document.querySelector('#mainModal')?.classList.add('hidden')
    document.body.classList.remove('fixed')
  }

  return (
    <section
      id="mainModal"
      className="absolute w-full min-w-full h-full min-h-full left-0 top-0 bg-black/70 backdrop-blur-[3px] flex items-center justify-center p-[14px]"
    >
      <AnimatePresence initial={false} custom={direction}>
        <div className="relative w-full h-full laptop:h-[70%] laptop:w-[70%] laptop:min-h-[70%] laptop:min-w-[70%] bg-white rounded-lg overflow-hidden p-6 shadow-black/[.04] flex">
          <div className="absolute top-0 left-0 w-full h-full flex justify-between z-10">
            <button
              type="button"
              className={classNames(
                'w-fit h-full z-10 flex items-center px-2',
                {
                  hidden: noticias.length <= 1,
                },
              )}
              onClick={() => paginate(-1)}
            >
              <ArrowCircleLeft size={32} weight="fill" color="white" />
            </button>
            <button
              type="button"
              className="absolute top-0 right-0 p-4 text-white z-20"
              onClick={handleToggleModal}
            >
              <X size={24} />
            </button>
            <button
              type="button"
              className={classNames(
                'w-fit h-full z-10 flex items-center px-2',
                {
                  hidden: noticias.length <= 1,
                },
              )}
              onClick={() => paginate(1)}
            >
              <ArrowCircleRight size={32} weight="fill" color="white" />
            </button>
          </div>
          <picture className="absolute top-0 left-0 w-full h-full">
            <motion.img
              className="flex w-full h-full object-cover object-center"
              key={page}
              src={urlBuilder(noticias[newIndex]?.imageUrl)}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1)
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1)
                }
              }}
            />
          </picture>
          <div className="absolute w-full h-full top-0 left-0 bg-black/50" />

          <header className="absolute top-0 left-0 w-full h-full flex flex-col p-6 laptop:p-20 laptop:pb-10 justify-end gap-6 text-white">
            <h1 className="laptop:text-lg">Notícias Urgentes!!!</h1>
            <p className="font-bold text-lg uppercase laptop:text-3xl laptop:leading-relaxed laptop:w-2/3">
              {noticias[newIndex]?.title}
            </p>

            <footer className="w-full flex items-center justify-center gap-2">
              {noticias.map((item, index) =>
                index === newIndex ? (
                  <Circle key={index} size={16} weight="fill" />
                ) : (
                  <Circle key={index} size={12} />
                ),
              )}
            </footer>
          </header>
        </div>
      </AnimatePresence>
    </section>
  )
}
