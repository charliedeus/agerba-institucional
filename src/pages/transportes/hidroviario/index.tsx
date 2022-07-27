import { EnvelopeSimple, Phone } from 'phosphor-react'
import { ReactElement } from 'react'
import { DefaultLayout } from '../../../layouts/DefaultLayout'
import { NextPageWithLayout } from '../../_app'

const WaterwayTransportPage: NextPageWithLayout = () => {
  return (
    <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
      <h1 className="font-bold text-[2rem]">Transporte Hidroviário</h1>
      <p>
        O transporte hidroviário de passageiros e veículos é um serviço público
        de competência do Estado, conforme estabelecem a Lei nº. 12.044/2011
        (Dispõe sobre o Sistema de Transporte Hidroviário Intermunicipal de
        Passageiros e Veículos do Estado da Bahia) e o Decreto nº. 13.168/2011.
        Contudo, é outorgado à iniciativa privada por meio de uma concessão ou
        permissão, precedida de licitação.
      </p>

      <p>
        A mesma Lei estabelece que os serviços deverão ser planejados,
        coordenados, controlados, concedidos, permitidos, regulados e
        fiscalizados pela Agência Estadual de Regulação de Serviços Públicos de
        Energia, Transportes e Comunicações da Bahia - AGERBA, autarquia sob
        regime especial, vinculada à Secretaria de Infraestrutura - SEINFRA.
      </p>

      <h1 className="font-bold text-lg border-gray-700 border-l-4 pl-4">
        Ferry Boat
      </h1>
      <p>
        O sistema <span className="font-bold">Ferry Boat</span> nasceu de uma
        necessidade de integrar a Bahia de Todos os Santos. Em 1969 foi iniciada
        a construção do Terminal Marítimo de Bom Despacho, uma das prioridades
        era a construção de um quebra-mar para proteger os barcos de grandes
        temporais. Do outro lado da costa, simultaneamente, era construído, nas
        proximidades do bairro de Água de Meninos, o Terminal de São Joaquim. A
        obra dos dois terminais e um trecho da estrada foi encomendada pelo
        Governo do Estado durante a gestão do governador Luís Vianna Filho. No
        dia 08 de dezembro de 1970 foi inaugurado o sistema{' '}
        <span className="font-bold">Ferry Boat</span>.
      </p>

      <p>
        É operadora do sistema <span className="font-bold">Ferry Boat</span>:
      </p>

      <ul role="list" className="flex flex-col gap-2">
        <li className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg">
          <img
            className="shrink-0 h-12 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1520670255513-79161a36e39c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJvYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=40"
            alt=""
          />
          <div className="flex flex-col laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center">
            <span className="font-bold laptop:flex-1 laptop:pl-2">
              Internacional Travessias Ltda
            </span>
            <span className="laptop:w-1/5 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
              <Phone size={16} weight="light" className="text-gray-500" /> (71)
              3103 2050
            </span>
            <span className="laptop:w-1/3 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
              <EnvelopeSimple
                size={16}
                weight="light"
                className="text-gray-500"
              />{' '}
              demandas@internacionaltravessias.com.br
            </span>
          </div>
        </li>
      </ul>

      <h1 className="font-bold text-lg border-gray-700 border-l-4 pl-4">
        Lanchas
      </h1>
      <p>
        O sistema de <span className="font-bold">Lanchas</span> nasceu de uma
        necessidade de integrar a Bahia de Todos os Santos. Em 1969 foi iniciada
        a construção do Terminal Marítimo de Bom Despacho, uma das prioridades
        era a construção de um quebra-mar para proteger os barcos de grandes
        temporais. Do outro lado da costa, simultaneamente, era construído, nas
        proximidades do bairro de Água de Meninos, o Terminal de São Joaquim. A
        obra dos dois terminais e um trecho da estrada foi encomendada pelo
        Governo do Estado durante a gestão do governador Luís Vianna Filho. No
        dia 08 de dezembro de 1970 foi inaugurado o sistema de{' '}
        <span className="font-bold">Lanchas</span>.
      </p>

      <p>
        São operadoras do sistema de <span className="font-bold">Lanchas</span>:
      </p>

      <ul role="list" className="flex flex-col gap-2">
        <li className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg">
          <img
            className="shrink-0 h-12 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1520670255513-79161a36e39c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJvYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=40"
            alt=""
          />
          <div className="flex flex-col laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center">
            <span className="font-bold laptop:flex-1 laptop:pl-2">
              CL Empreendimentos Ltda
            </span>
            <span className="laptop:w-1/5 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
              <Phone size={16} weight="light" className="text-gray-500" /> (71)
              3014 4086
            </span>
            <span className="laptop:w-1/3 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
              <EnvelopeSimple
                size={16}
                weight="light"
                className="text-gray-500"
              />{' '}
              clempreendimentos@hotmail.com
            </span>
          </div>
        </li>
        <li className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg">
          <img
            className="shrink-0 h-12 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1520670255513-79161a36e39c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJvYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=40"
            alt=""
          />
          <div className="flex flex-col laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center">
            <span className="font-bold laptop:flex-1 laptop:pl-2">
              Vera Cruz Transportes e Serviços Marítimos Ltda ME
            </span>
            <span className="laptop:w-1/5 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
              <Phone size={16} weight="light" className="text-gray-500" /> (71)
              3633 1248
            </span>
            <span className="laptop:w-1/3 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
              <EnvelopeSimple
                size={16}
                weight="light"
                className="text-gray-500"
              />{' '}
              contatovctm@gmail.com
            </span>
          </div>
        </li>
      </ul>

      <h1 className="font-bold text-lg border-gray-700 border-l-4 pl-4">
        Catamarã
      </h1>

      <p>
        São operadoras do sistema <span className="font-bold">Catamarã</span>:
      </p>

      <ul role="list" className="flex flex-col gap-2">
        <li className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg">
          <img
            className="shrink-0 h-12 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1520670255513-79161a36e39c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJvYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=40"
            alt=""
          />
          <div className="flex flex-col laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center">
            <span className="font-bold laptop:flex-1 laptop:pl-2">
              Francisco das Chagas Jacinto ME
            </span>
            <span className="laptop:w-1/5 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
              <Phone size={16} weight="light" className="text-gray-500" /> (71)
              3326-7158
            </span>
            <span className="laptop:w-1/3 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
              <EnvelopeSimple
                size={16}
                weight="light"
                className="text-gray-500"
              />{' '}
              franciscocjacinto@gmail.com
            </span>
          </div>
        </li>
        <li className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg">
          <img
            className="shrink-0 h-12 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1520670255513-79161a36e39c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJvYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=40"
            alt=""
          />
          <div className="flex flex-col laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center">
            <span className="font-bold laptop:flex-1 laptop:pl-2">
              Biônica Transportes e Turismo Marítimo Regional Ltda.
            </span>
            <span className="laptop:w-1/5 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
              <Phone size={16} weight="light" className="text-gray-500" /> (75)
              3641-3327
            </span>
            <span className="laptop:w-1/3 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
              <EnvelopeSimple
                size={16}
                weight="light"
                className="text-gray-500"
              />{' '}
              contato@biotur.com.br
            </span>
          </div>
        </li>
        <li className="flex flex-col laptop:flex-row gap-2 bg-gray-200 px-4 py-6 rounded-lg">
          <img
            className="shrink-0 h-12 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1520670255513-79161a36e39c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJvYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=40"
            alt=""
          />
          <div className="flex flex-col laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center">
            <span className="font-bold laptop:flex-1 laptop:pl-2">
              Pousada Farol do Morro Ltda. ME
            </span>
            <span className="laptop:w-1/5 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
              <Phone size={16} weight="light" className="text-gray-500" /> (71)
              3014-6657
            </span>
            <span className="laptop:w-1/3 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
              <EnvelopeSimple
                size={16}
                weight="light"
                className="text-gray-500"
              />{' '}
              contato@faroldomorrocatamara.com
            </span>
          </div>
        </li>
      </ul>
    </article>
  )
}

WaterwayTransportPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default WaterwayTransportPage
