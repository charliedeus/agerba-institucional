import Link from 'next/link'

const groupServices = [
  {
    id: 1,
    title: 'Transportes',
    url: '/#',
    services: [
      { id: 1, title: 'Rodoviário' },
      { id: 2, title: 'Hidroviário' },
    ],
  },
  {
    id: 2,
    title: 'Terminais',
    url: '/#',
    services: [
      { id: 1, title: 'Rodoviários' },
      { id: 2, title: 'Aeroviários' },
      { id: 3, title: 'Hidroviários' },
    ],
  },
  {
    id: 3,
    title: 'Rodovias',
    url: '/rodovias',
    services: [
      { id: 1, title: 'Rodovia BA-099' },
      { id: 2, title: 'Rodovia BA-093' },
      { id: 3, title: 'Rodovia BA-052' },
    ],
  },
  {
    id: 4,
    title: 'Gás',
    url: '/gas',
    services: [],
  },
]

export function ServicesPanel() {
  return (
    <section className="w-full max-w-[1280px] h-full p-[14px] laptop:py-16 m-auto">
      <h3 className="font-bold text-base laptop:text-2xl laptop:pb-8 uppercase">
        Painel de Serviços
      </h3>

      <div className="flex flex-wrap items-center justify-center gap-4 min-h-[250px] mt-[0.875rem]">
        {groupServices.map((service) => (
          <div
            key={service.id}
            className="flex flex-col justify-between w-[200px] h-full min-h-[250px] p-4 shadow-[2px_2px_8px_rgba(0,0,0,0.25)] shadow-gray-400 laptop:hover:bg-[#3F3F95] laptop:hover:text-[#3F3F95] group"
          >
            <h3 className="text-base font-bold laptop:group-hover:text-white">
              {service.title}
            </h3>
            <Link href={service.url}>
              <a className="px-4 py-2 bg-[#3F3F95] laptop:group-hover:bg-white bg-opacity-50 rounded-lg">
                <span className="text-sm font-bold leading-tight">
                  Clique aqui
                </span>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
