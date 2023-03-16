import { ReactElement } from 'react'

import type { NextPageWithLayout } from '../_app'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { motion } from 'framer-motion'

const DireitosedeveresPage: NextPageWithLayout = () => {
  return (
    <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { scale: 0.8, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.5,
            },
          },
        }}
        className="font-bold text-[2rem]"
      >
        Direitos e deveres
      </motion.h1>
      <div className="flex flex-col gap-4 text-justify ">
        <p>
          Os direitos e deveres dos usuários estão contidos no Art. 89 e 90 do
          Regulamento do Transporte Intermunicipal de Passageiros (Resolução
          AGERBA n.º 27/01 de 27 de novembro de 2001).{' '}
        </p>
        <ol className="list-inside list-[upper-roman] flex flex-col gap-2 text-justify">
          <p>
            Art. 89. É assegurado aos usuários dos serviços de transporte
            intermunicipal de passageiros, sem prejuízo do disposto na Lei
            Federal n.º 8.078, de 11 de setembro, de 1990:
          </p>
          <li>
            Transporte com pontualidade e em condições de segurança, higiene e
            conforto, do início ao término da viagem;
          </li>
          <li>
            Garantia dos seus lugares no ônibus, nas condições especificadas no
            bilhete de passagem;
          </li>
          <li>
            Atendimento com urbanidade pelos prepostos da transportadora, pelos
            funcionários dos pontos de parada e de apoio e pelos agentes da
            fiscalização;
          </li>
          <li>
            Auxílio no embarque pelos prepostos da transportadora, em se
            tratando de crianças, senhoras, pessoas idosas ou com dificuldades
            de locomoção;
          </li>
          <li>
            Recebimento das informações corretas sobre as condições dos
            serviços, tais como horários, tempo de viagem, localidades
            atendidas, preços de passagens e outras de seu interesse;
          </li>
          <li>
            Recorrerem aos agentes da fiscalização para obtenção de informações,
            apresentação de sugestões e reclamações quanto ao serviço;
          </li>
          <li>
            Transporte gratuito de volumes no bagageiro e no porta-embrulhos,
            observado o disposto no art. 77;
          </li>
          <li>
            Recebimento do comprovante dos volumes transportados no bagageiro;
          </li>
          <li>
            Indenização por extravio ou dano dos volumes transportados no
            bagageiro, na forma indicada no art. 83;
          </li>
          <li>
            Recebimento, por conta da transportadora e enquanto perdurar a
            situação, de alimentação e pousada, nos casos de interrupção ou
            retardamento da viagem, por culpa da empresa, ou de venda de mais de
            um bilhete de passagem para a mesma poltrona, além dos casos de
            retenção ou apreensão do veículo;
          </li>
          <li>
            Recebimento da diferença do preço da passagem quando a viagem se
            faça, total ou parcialmente, em veículo de características
            inferiores à&nbsp;quele inicialmente contratado;
          </li>
          <li>
            Recebimento, em caso de acidente, de imediata e adequada assistência
            por parte da transportadora;
          </li>
          <li>
            Transporte, sem pagamento de passagem, de crianças de até 5 (cinco)
            anos, desde que não ocupem assentos, obedecidas, ainda, as
            disposições regulamentares existentes sobre o transporte de menor;
          </li>
          <li>
            Compra de passagem com data de utilização em aberto, sujeita a
            reajuste de preço se não utilizada dentro de 01 (um) ano da data de
            emissão;
          </li>
          <li>
            Recebimento da importância paga ou revalidação da sua passagem, no
            caso de desistência da viagem, desde que se manifeste com
            antecedência mínima de 6 (seis) horas em relação ao horário de
            partida.
          </li>
        </ol>

        <ol className="list-inside list-[upper-roman] flex flex-col gap-2 text-justify">
          <p>
            Art. 90. Será recusado o embarque ou determinado o desembarque de
            qualquer usuário dos serviços objeto deste Regulamento, nos
            seguintes casos:
          </p>
          <li>Não se identificar, quando exigido;</li>
          <li>Estiver em estado de embriaguez aparente;</li>
          <li>
            Portar armas de qualquer espécie (salvo autoridades legalmente
            habilitadas, quando em serviço).
          </li>
          <li>
            Pretender transportar, como bagagem, produtos considerados perigosos
            ou que representem riscos nos termos da legislação específica;
          </li>
          <li>
            Pretender embarcar consigo animais domésticos ou silvestres, quando
            não devidamente acondicionados ou em desacordo com as disposições
            legais
          </li>
          <li>
            Pretender embarcar objeto de dimensões e acondicionamento
            incompatíveis com o porta-embrulhos;
          </li>
          <li>
            Comprometer a segurança, o conforto ou a tranqüilidade dos demais
            passageiros;
          </li>
          <li>
            Fizer uso de aparelho sonoro, mesmo depois de advertido pela
            tripulação do veículo;
          </li>
          <li>For portador de moléstia infectocontagiosa;</li>
          <li>Fizer uso de fumo;</li>
          <li>
            Usar trajes manifestamente impróprios ou ofensivos à&nbsp; moral
            pública;
          </li>
          <li>Incorrer em comportamento incivil;</li>
          <li>Recusar-se ao pagamento da tarifa.</li>
        </ol>

        <p>
          Art. 91. A transportadora afixará, em lugar visível e de fácil acesso
          aos usuários, próximo ao local de venda de passagens, bem como nos
          pontos de embarque e desembarque, transcrição das disposições deste
          Capítulo, e das constantes dos arts. 74 e 79 deste Regulamento.
        </p>
      </div>
    </article>
  )
}

DireitosedeveresPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default DireitosedeveresPage
