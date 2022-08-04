import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'

const citizenServicesGroup = [
  {
    id: uuidv4(),
    title: 'Protocolo Online',
    url: 'http://sider.agerba.ba.gov.br',
    imageUrl:
      'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=60',
    services: [],
  },
  {
    id: uuidv4(),
    title: 'Audiências Públicas',
    url: '/#',
    imageUrl:
      'https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    services: [],
  },
  {
    id: uuidv4(),
    title: 'Consultas Públicas',
    url: '/consultas-publicas',
    imageUrl:
      'https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    services: [],
  },
  {
    id: uuidv4(),
    title: 'Contratos e Aquisições - COVID 19',
    url: '/#',
    imageUrl:
      'https://images.unsplash.com/photo-1603796846097-bee99e4a601f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    services: [],
  },
]

const companiesServicesGroup = [
  {
    id: uuidv4(),
    title: 'Portal de Serviços - STIP',
    url: 'http://agerba.stipweb.com.br',
    imageUrl:
      'https://images.unsplash.com/photo-1498644213631-031eabff31e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2VydmljZXMlMjB0cmFuc3BvcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    services: [],
  },
  {
    id: uuidv4(),
    title: 'Licitações',
    url: '/#',
    imageUrl:
      'https://images.unsplash.com/photo-1626287935075-3275d2d9025e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    services: [],
  },
]

export function ServicesPanel() {
  return (
    <section className="w-full max-w-[1280px] h-full p-[14px] laptop:py-16 m-auto">
      <h3 className="font-bold text-base laptop:text-2xl laptop:pb-8 uppercase">
        SERVIÇOS AO CIDADÃO
      </h3>

      <div
        className="w-full h-[350px] flex overflow-x-scroll snap-mandatory scroll-p-6 scroll-smooth rounded-lg gap-3 p-6 snap-x no-scrollbar"
        style={{}}
      >
        {citizenServicesGroup.map((service) => (
          <Link key={service.id} href={service.url}>
            <a className="">
              <div
                className="w-[225px] min-w-[225px] h-full flex flex-col justify-end p-6 rounded-lg snap-always snap-center overflow-hidden bg-cover bg-no-repeat shadow-md group"
                style={{
                  background: `url(${service.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <span className="text-sm text-white font-bold leading-tight bg-primary p-4 rounded-lg">
                  {service.title}
                </span>
              </div>
            </a>
          </Link>
        ))}
      </div>

      <h3 className="font-bold text-base laptop:text-2xl laptop:py-8 uppercase">
        SERVIÇOS / TRANSPORTE
      </h3>

      <div
        className="w-full h-[350px] flex overflow-x-scroll snap-mandatory scroll-p-6 scroll-smooth rounded-lg gap-3 p-6 snap-x no-scrollbar"
        style={{}}
      >
        {companiesServicesGroup.map((service) => (
          <Link key={service.id} href={service.url}>
            <a className="">
              <div
                className="w-[225px] min-w-[225px] h-full flex flex-col justify-end p-6 rounded-lg snap-always snap-center overflow-hidden bg-cover bg-no-repeat shadow-md group"
                style={{
                  background: `url(${service.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                {/* px-4 py-4 text-white bg-primary laptop:group-hover:bg-white laptop:group-hover:text-primary rounded-lg */}
                <span className="text-sm text-white font-bold leading-tight bg-primary p-4 rounded-lg">
                  {service.title}
                </span>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  )
}
