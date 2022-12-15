import { ReactElement } from 'react'

import { NextPageWithLayout } from '../_app'

import { DefaultLayout } from '../../layouts/DefaultLayout'
import { EnvelopeSimple, Phone } from 'phosphor-react'
import Link from 'next/link'
import Head from 'next/head'

const OuvidoriaPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Ouvidoria | AGERBA</title>
      </Head>
      <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
        <h1 className="font-bold text-[2rem]">Ouvidoria</h1>

        <div className="flex flex-col gap-6 laptop:flex-row">
          <p>
            A Ouvidoria é um canal aberto entre os usuários e os prestadores dos
            serviços públicos regulados pela AGERBA. A sua finalidade é receber,
            encaminhar e acompanhar sugestões, reclamações, informações,
            denúncias e elogios dos cidadãos referentes aos serviços de
            transporte rodoviário intermunicipal de passageiros de do Estado da
            Bahia; transporte hidroviário intermunicipal de passageiros e de
            passageiros e veículos, através do Sistema Ferry-Boat, dentro e fora
            da Baía de Todos os Santos; distribuição e comercialização de gás
            canalizado; administração de terminais rodoviários, hidroviários e
            aeroviários de passageiros; e a concessão de Rodovias pedagiadas,
            como a Rodovia BA - 099 (Sistema Estrada do Coco / Linha Verde) e
            Sistema Rodoviário BA - 093.
          </p>
          <picture className="rounded-lg overflow-hidden flex object-cover blur-[1px]">
            <img
              className="object-cover object-center"
              src="https://images.unsplash.com/photo-1560264418-c4445382edbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=60"
              alt=""
            />
          </picture>
        </div>

        <p>
          Os canais oficiais de acesso à Ouvidoria são o telefone 0800-071-0080
          e o site{' '}
          <Link
            href="http://www.agerbaouvidoria.ba.gov.br/novo/form_verificasolicitante_viapagina.asp"
            className="text-blue-800 hover:underline"
            passHref
          >
            http://www.agerbaouvidoria.ba.gov.br/novo/form_verificasolicitante_viapagina.asp
          </Link>
          . São através desses que os usuários do serviço podem expressar seus
          anseios e críticas, os quais serão encaminhados à sede desta Autarquia
          para que servidores competentes possam dar prosseguimento à demanda e
          garantir aos cidadãos, sempre, respostas efetivas aos seus registros.
        </p>

        <p>
          A participação da sociedade torna-se uma valorosa contribuição na
          busca da prestação do serviço público de forma adequada, priorizando a
          aproximação do cidadão com a Administração Pública.
        </p>

        <p>Para registro ou acompanhamento de solicitações:</p>

        <div className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg">
          <picture>
            <img
              className="shrink-0 h-12 w-12 rounded-full object-cover object-center"
              src="https://images.unsplash.com/photo-1560264418-c4445382edbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=60"
              alt=""
            />
          </picture>
          <div className="flex flex-col laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center">
            <span className="font-bold laptop:flex-1 laptop:pl-2">
              Ouvidoria
            </span>
            <span className="laptop:w-1/5 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
              <Phone size={16} weight="light" className="text-gray-500" /> 0800
              071 0080
            </span>
            <span className="laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
              <EnvelopeSimple
                size={16}
                weight="light"
                className="text-gray-500"
              />{' '}
              <Link
                legacyBehavior
                href="http://www.agerbaouvidoria.ba.gov.br/novo/form_verificasolicitante_viapagina.asp"
              >
                <a target="_blank" className="text-blue-800 hover:underline">
                  http://www.agerbaouvidoria.ba.gov.br/novo/form_verificasolicitante_viapagina.asp
                </a>
              </Link>
            </span>
          </div>
        </div>
      </article>
    </>
  )
}

OuvidoriaPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default OuvidoriaPage
