import { useState } from 'react'
// import Image from 'next/future/image'
import { useGetListaNoticiasQuery } from '../../graphql/generated'
import { urlBuilder } from '../../lib/urlBuilder'
import { Pagination } from '../Pagination'
import Link from 'next/link'

import genericImg from '../../assets/images/generic-image.png'

interface ListNewsProps {
  limit: number
  start: number
}

export function ListNews({ limit = 10, start = 0 }: ListNewsProps) {
  const [page, setPage] = useState(1)

  const { data } = useGetListaNoticiasQuery({
    variables: {
      limit,
      start,
    },
  })

  return (
    <>
      <section className="w-full flex flex-col gap-4 py-6">
        <h1 className="w-full text-2xl mb-6">
          Mais notícias da <span className="font-bold">AGERBA</span>:
        </h1>

        <ul className="w-full flex flex-col gap-8">
          {data?.noticias?.data.map((item) => (
            <Link key={item.id} href={`/noticias/${item.attributes?.slug}`}>
              <a>
                <li className="w-full h-full flex items-start gap-4">
                  {item.attributes?.cover?.data ? (
                    <div className="w-full max-w-xs h-full max-h-48 rounded-lg shadow-md overflow-hidden">
                      <picture className="w-full">
                        <img
                          src={urlBuilder(
                            item.attributes.cover.data?.attributes?.url,
                          )}
                          alt=""
                          width={500}
                          height={500}
                          className="w-full object-cover object-center"
                        />
                      </picture>
                    </div>
                  ) : (
                    <div className="w-full max-w-xs h-full max-h-48 rounded-lg shadow-md overflow-hidden">
                      <picture className="w-full h-full flex">
                        <img
                          src={genericImg.src}
                          alt=""
                          width={500}
                          height={500}
                          className="w-full object-cover object-center"
                        />
                      </picture>
                    </div>
                  )}
                  <div className="w-full h-full flex flex-col items-start gap-4">
                    <h1 className="text-3xl font-bold text-primary hover:text-secondary transition-colors duration-100 ease-in-out">
                      {item.attributes?.title}
                    </h1>
                    <h3 className="text-lg font-medium">
                      {item.attributes?.subtitle}
                    </h3>
                  </div>
                </li>
              </a>
            </Link>
          ))}
          {data?.noticias?.meta?.pagination &&
            data?.noticias?.meta?.pagination.total > 0 && (
              <Pagination
                totalCountRegisters={Number(
                  data?.noticias?.meta.pagination.total,
                )}
                currentPage={page}
                totalPages={Number(data?.noticias?.meta.pagination.pageCount)}
                onPageChange={setPage}
                registersPerPage={Number(
                  data?.noticias?.meta.pagination.pageSize,
                )}
              />
            )}
        </ul>
      </section>
    </>
  )
}
