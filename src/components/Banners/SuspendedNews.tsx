export function SuspendedNews() {
  return (
    <section className="w-full desktop:w-[1280px] desktop:max-w-[1280px] h-[calc(80vh-50px)] max-h-[calc(100vh-50px)] flex flex-col items-end justify-center p-[14px] laptop:m-auto">
      <div className="laptop:w-[40%] text-right flex flex-col gap-8">
        <h1 className="text-base laptop:text-2xl">COMUNICADO</h1>
        <p className="font-bold text-2xl laptop:text-3xl leading-relaxed">
          Em respeito à legislação eleitoral, a seção de notícias deste site
          estará suspensa a partir do dia 01 de julho até o fim das eleições
          2022.
        </p>
      </div>
    </section>
  )
}
