import { ReactElement, useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import 'keen-slider/keen-slider.min.css'

import { NextPageWithLayout } from '../_app'
import { DefaultLayout } from '../../layouts/DefaultLayout'

import { useGetNoticiasDestaqueQuery } from '../../graphql/generated'

import { urlBuilder } from '../../lib/urlBuilder'
import { Loader } from '../../components/Loader'
import { ListNews } from '../../components/listNews'
import genericImg from '../../assets/images/generic-image.png'

const NewsPage: NextPageWithLayout = () => {
  const [today] = useState(
    Intl.DateTimeFormat('fr-CA', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(Date.now()),
  )

  const { data, loading } = useGetNoticiasDestaqueQuery({
    variables: {
      limit: 3,
      start: 0,
      data_atual: today,
    },
  })

  return (
    <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
      {loading ? (
        <div className="w-full h-full flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <>
          <ListNews limit={10} start={0} />
        </>
      )}
    </article>
  )
}

NewsPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default NewsPage
