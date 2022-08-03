export function SuspendedNewsWithImage() {
  return (
    <>
      <section className="w-full desktop:max-w-[1280px] h-[calc(100vh-70px)] m-auto tablet:h-[calc(100vh-170px)] p-[14px] transition-transform duration-75 ease-in-out">
        <div className="w-full h-full bg-gray-900 rounded-lg flex flex-col itesm-center laptop:items-end justify-center gap-4 text-white text-right p-[.875rem] overflow-hidden relative">
          <picture className="w-full h-full absolute top-0 left-0 object-cover object-center blur-md brightness-50">
            <img
              className="w-full h-full object-cover"
              src="/background-img.jpg"
              alt=""
            />
          </picture>
          <div className="w-full h-full flex flex-col border border-white laptop:border-none laptop:w-1/2 justify-center gap-4 z-10 p-[.875rem] rounded-lg">
            <h1 className="text-base blur-0 laptop:text-2xl">COMUNICADO</h1>
            <p className="font-bold text-2xl laptop:text-4xl leading-relaxed z-10">
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
