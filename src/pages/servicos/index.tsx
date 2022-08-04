import Link from 'next/link'

export function ServicosPage() {
  return (
    <>
      <h1>Services Page</h1>
      <div className="flex flex-wrap items-center justify-center gap-4 min-h-[250px] mt-[0.875rem]">
        <div className="flex flex-col justify-between w-[200px] h-full min-h-[250px] p-4 shadow-[2px_2px_8px_rgba(0,0,0,0.25)] shadow-gray-400 laptop:hover:bg-[#3F3F95] laptop:hover:text-[#3F3F95] group">
          <h3 className="text-base font-bold laptop:group-hover:text-white">
            Título do serviço
          </h3>
          <Link href="#">
            <a className="px-4 py-2 bg-[#3F3F95] laptop:group-hover:bg-white bg-opacity-50 rounded-lg">
              <span className="text-sm font-bold leading-tight">
                Clique aqui
              </span>
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}
