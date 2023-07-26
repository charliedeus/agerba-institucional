import { motion } from 'framer-motion'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'

const citizenServicesGroup = [
  {
    id: uuidv4(),
    title: 'Protocolo Online',
    url: 'http://sider.agerba.ba.gov.br/atendimento',
    imageUrl:
      'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=60',
    services: [],
  },
  {
    id: uuidv4(),
    title: 'Audiências Públicas',
    url: '/audiencias-publicas',
    imageUrl:
      'https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=60',
    services: [],
  },
  {
    id: uuidv4(),
    title: 'Consultas Públicas',
    url: '/consultas-publicas',
    imageUrl:
      'https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=60',
    services: [],
  },
  {
    id: uuidv4(),
    title: 'Ouvidoria',
    url: '/ouvidoria',
    imageUrl:
      'https://images.unsplash.com/photo-1560264418-c4445382edbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=60',
    services: [],
  },
  {
    id: uuidv4(),
    title: 'Seleção REDA 2023',
    url: '/noticias/edital-selecao-reda-2023/',
    imageUrl:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=60',
    services: [],
  },
]

const companiesServicesGroup = [
  {
    id: uuidv4(),
    title: 'Licitações',
    url: '/licitacoes',
    imageUrl:
      'https://images.unsplash.com/photo-1626287935075-3275d2d9025e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=60',
    services: [],
  },
  {
    id: uuidv4(),
    title: 'Legislações',
    url: '/legislacoes',
    imageUrl:
      'https://images.unsplash.com/photo-1423592707957-3b212afa6733?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=60',
    services: [],
  },
  {
    id: uuidv4(),
    title: 'Cadastro de Empresas',
    url: '/cadastros',
    imageUrl:
      'https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9jdW1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    services: [],
  },
  {
    id: uuidv4(),
    title: 'Taxas',
    url: '/taxas',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1661382019197-94d5edb38186?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=60',
    services: [],
  },
  {
    id: uuidv4(),
    title: 'Terminais',
    url: '/terminais',
    imageUrl:
      'https://images.unsplash.com/photo-1501503125584-bb1da5f56d48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=60',
    services: [],
  },
]

export function ServicesPanel() {
  return (
    <section className="w-full max-w-[1280px] h-full p-[14px] laptop:py-16 m-auto">
      <h3 className="text-base font-bold uppercase laptop:text-2xl laptop:pb-8">
        SERVIÇOS / CIDADÃO
      </h3>

      <div
        className="w-full h-[350px] flex overflow-x-scroll snap-mandatory scroll-p-6 scroll-smooth rounded-lg gap-3 p-6 snap-x no-scrollbar"
        style={{}}
      >
        {citizenServicesGroup.map((service) => (
          <Link legacyBehavior key={service.id} href={service.url}>
            <a className="shadow-xl">
              <div className="w-[225px] min-w-[225px] h-full flex flex-col justify-end rounded-lg snap-always snap-center overflow-hidden shadow-md group relative">
                <picture className="flex w-full h-full">
                  <motion.img
                    src={service.imageUrl}
                    alt={service.title}
                    className="object-cover object-center"
                    animate="visible"
                    variants={{
                      visible: {
                        scale: [1, 1.5],
                        opacity: 1,
                        transition: {
                          duration: 15,
                        },
                      },
                    }}
                  />
                </picture>

                <div className="absolute z-10 flex items-end w-full h-full p-6">
                  <span className="w-full p-4 text-sm font-bold leading-tight text-white rounded-lg bg-primary">
                    {service.title}
                  </span>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>

      <h3 className="text-base font-bold uppercase laptop:text-2xl laptop:py-8">
        SERVIÇOS / TRANSPORTE
      </h3>

      <div className="w-full h-[350px] flex overflow-x-scroll snap-mandatory scroll-p-6 scroll-smooth rounded-lg gap-3 p-6 snap-x no-scrollbar">
        {companiesServicesGroup.map((service) => (
          <Link legacyBehavior key={service.id} href={service.url}>
            <a className="shadow-xl">
              <div className="w-[225px] min-w-[225px] h-full flex flex-col justify-end rounded-lg snap-always snap-center overflow-hidden shadow-md group relative">
                <picture className="flex w-full h-full">
                  <motion.img
                    src={service.imageUrl}
                    alt={service.title}
                    className="object-cover object-center"
                    animate="visible"
                    variants={{
                      visible: {
                        scale: [1, 1.5],
                        opacity: 1,
                        transition: {
                          duration: 15,
                        },
                      },
                    }}
                  />
                </picture>

                <div className="absolute flex items-end w-full h-full p-6">
                  <span className="w-full p-4 text-sm font-bold leading-tight text-white rounded-lg bg-primary">
                    {service.title}
                  </span>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  )
}
