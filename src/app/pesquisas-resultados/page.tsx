import { Bookmark, File } from 'lucide-react'
import Link from 'next/link'
import {
  GetPesquisasDeSatisfacaoDocument,
  GetPesquisasDeSatisfacaoQuery,
} from '../../graphql/generated'
import { initializeApollo } from '../../lib/apollo'
import { urlBuilder } from '../../lib/urlBuilder'

export const dynamic = 'force-dynamic'

export default async function SearchResult() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<GetPesquisasDeSatisfacaoQuery>({
    query: GetPesquisasDeSatisfacaoDocument,
    variables: {
      limit: 50,
      start: 0,
    },
  })

  const pesquisasPublicas = data.searchResults?.data.map((item) => {
    return {
      id: item.id,
      title: item.attributes?.title,
      date: item.attributes?.date,
      documentUrl: item.attributes?.document?.[0]?.file.data?.attributes?.url,
    }
  })

  return (
    <div className="flex flex-col w-full flex-1 gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
      <h1 className="font-bold text-[2rem]">Pesquisas Públicas</h1>

      <ul role="list" className="flex flex-col flex-1 gap-2 cursor-default">
        {pesquisasPublicas?.map((item) => (
          <li
            key={item.id}
            className="flex flex-col gap-2 px-4 py-6 transition-colors duration-100 ease-in-out bg-gray-200 border rounded-lg laptop:flex-row hover:border-secondary"
          >
            <div className="flex flex-col w-full gap-8">
              <div className="flex flex-col gap-2 laptop:flex-row laptop:w-full">
                <button className="flex flex-col flex-1 gap-4 text-left laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center">
                  <span className="flex flex-1 gap-2 font-bold">
                    <File className="w-4 h-4 text-gray-400" />
                    {item.title}
                  </span>
                  <span className="flex items-center gap-2 laptop:border-l-2 laptop:border-primary laptop:pl-2">
                    <Bookmark className="w-4 h-4 text-gray-400" />
                    <span className="text-xs font-normal text-gray-500">
                      Resultados de Pesquisa Pública
                    </span>
                  </span>
                  <span className="flex items-center gap-2 laptop:border-l-2 laptop:border-primary laptop:pl-2">
                    <span className="font-bold">
                      {new Date(item.date).toLocaleDateString('pt-BR', {
                        timeZone: 'UTC',
                      })}
                    </span>
                  </span>
                </button>
                <div className="flex items-center justify-center w-full laptop:max-w-[8rem] p-2 laptop:border-l-2 laptop:border-primary laptop:pl-2">
                  <Link
                    target="_blank"
                    download
                    href={urlBuilder(item.documentUrl)}
                    className="flex gap-2 items-center justify-center bg-primary hover:bg-white text-white hover:text-primary px-4 py-2 rounded-[4px] hover:border hover:border-primary group border border-transparent"
                  >
                    <span className="text-sm font-normal group-hover:text-primary">
                      Baixar...
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
