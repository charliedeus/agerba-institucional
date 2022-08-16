export function UrgentNews() {
  return (
    <section className="w-full max-w-[1280px] pt-[14px] laptop:pb-[14px] px-[14px] laptop:px-0 m-auto flex items-center justify-center">
      <div className="w-full flex flex-col laptop:flex-row rounded-lg border-2 border-primary">
        <div className="text-white leading-relaxed bg-primary p-4">
          <span className="uppercase">Notícias Urgentes!!!</span>
        </div>
        <div className="text-white bg-secondary p-4 leading-relaxed">
          <span className="uppercase">
            Emissão de DAEs para serviços de Cadastro, Vistoria, Licenças,
            Exclusão e Inclusão de veículos devem ser feitos EXCLUSIVAMENTE pelo
            STIP
          </span>
        </div>
      </div>
    </section>
  )
}
