import Image from 'next/image'

import backgroundImage from '../../assets/images/background-img.jpg'

export function SuspendedNewes() {
  return (
    <>
      <section className="w-full desktop:max-w-[1280px] h-[calc(100vh-70px)] m-auto tablet:h-[calc(100vh-170px)] p-[14px] transition-transform duration-75 ease-in-out">
        <div className="w-full h-full p-[.875rem] rounded-lg bg-gray-900 overflow-hidden bg-banner-section bg-cover bg-no-repeat">
          <div className="w-full h-full flex flex-col border border-white laptop:border-none laptop:w-1/2 justify-end laptop:justify-center gap-4 p-[.875rem] rounded-lg text-white">
            <h1 className="text-base blur-0 laptop:text-2xl">COMUNICADO</h1>
            <p className="font-bold text-2xl laptop:text-4xl leading-relaxed">
              Em respeito à legislação eleitoral, a seção de notícias deste site
              estará suspensa a partir do dia 01 de julho até o fim das eleições
              2022.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
