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
    title: 'Contratos e Aquisições - COVID 19',
    url: '/#',
    imageUrl:
      'https://images.unsplash.com/photo-1603796846097-bee99e4a601f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=60',
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
]

export function ServicesPanel() {
  return (
    <section className="w-full max-w-[1280px] h-full p-[14px] laptop:py-16 m-auto">
      <h3 className="font-bold text-base laptop:text-2xl laptop:pb-8 uppercase">
        SERVIÇOS / CIDADÃO
      </h3>

      <div
        className="w-full h-[350px] flex overflow-x-scroll snap-mandatory scroll-p-6 scroll-smooth rounded-lg gap-3 p-6 snap-x no-scrollbar"
        style={{}}
      >
        {citizenServicesGroup.map((service) => (
          <Link key={service.id} href={service.url}>
            <a className="shadow-xl">
              <div className="w-[225px] min-w-[225px] h-full flex flex-col justify-end rounded-lg snap-always snap-center overflow-hidden shadow-md group relative">
                <picture className="w-full h-full flex">
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

                <div className="w-full h-full p-6 absolute flex items-end z-10">
                  <span className="w-full text-sm text-white font-bold leading-tight bg-primary p-4 rounded-lg">
                    {service.title}
                  </span>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>

      <h3 className="font-bold text-base laptop:text-2xl laptop:py-8 uppercase">
        SERVIÇOS / TRANSPORTE
      </h3>

      <div className="w-full h-[350px] flex overflow-x-scroll snap-mandatory scroll-p-6 scroll-smooth rounded-lg gap-3 p-6 snap-x no-scrollbar">
        {companiesServicesGroup.map((service) => (
          <Link key={service.id} href={service.url}>
            <a className="shadow-xl">
              <div className="w-[225px] min-w-[225px] h-full flex flex-col justify-end rounded-lg snap-always snap-center overflow-hidden shadow-md group relative">
                <picture className="w-full h-full flex">
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

                <div className="w-full h-full p-6 absolute flex items-end">
                  <span className="w-full text-sm text-white font-bold leading-tight bg-primary p-4 rounded-lg">
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
