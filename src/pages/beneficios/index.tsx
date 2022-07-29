import { ReactElement } from 'react'

import type { NextPageWithLayout } from '../_app'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { Disclosure, Transition } from '@headlessui/react'
import { EnvelopeSimple, Phone } from 'phosphor-react'

const BenefitsPage: NextPageWithLayout = () => {
  return (
    <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
      <h1 className="font-bold text-[2rem]">Benefícios</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      <h1 className="font-bold text-lg border-gray-700 border-l-4 pl-4">
        Transporte Rodoviário
      </h1>

      <Disclosure>
        <Disclosure.Button className="py-2 border-l-4 pl-4 border-transparent flex text-left bg-gray-300 rounded-t-lg">
          <div className="flex flex-col laptop:w-full laptop:flex-row laptop:gap-2 laptop:items-center">
            <span className="text-primary font-bold text-base leading-relaxed flex-1">
              Passe Livre Intermunicipal
            </span>
            <span className="laptop:w-1/5 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
              <Phone size={16} weight="light" className="text-gray-500" /> (71)
              3115-6194
            </span>
            <span className="laptop:w-1/3 laptop:border-l-2 laptop:border-primary laptop:pl-2 flex items-center gap-2">
              <EnvelopeSimple
                size={16}
                weight="light"
                className="text-gray-500"
              />{' '}
              passelivreba@sjdhds.ba.gov.br
            </span>
          </div>
        </Disclosure.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Disclosure.Panel className="text-gray-500 text-sm mt-[-1rem] bg-gray-200 p-4 rounded-b-lg flex flex-col gap-2">
            <p>
              A Secretaria de Justiça, Direitos Humanos e Desenvolvimento Social
              (SJDHDS), por meio da Superintendência dos Direitos das Pessoas
              com Deficiência (Sudef), é responsável pelo cumprimento da Lei nº
              12.575/2012, que assegura às pessoas com deficiência física;
              auditiva; visual; mental; transtorno global do desenvolvimento ou
              transtorno espectro autista; deficiência por causas genéticas;
              deficiências múltiplas ou associação de duas ou mais deficiências,
              comprovadamente carentes.
            </p>

            <p>
              Considera-se carente a pessoa com deficiência que possui renda
              familiar mensal per capita igual ou inferior 01 (um) salário
              mínimo nacional. Será necessária a declaração do, validada por um
              assistente social do Centro de Referência de Assistência Social -
              CRAS, na presente, pela Secretaria Municipal de Assistência
              Social.
            </p>

            <p>
              A gratuidade é liberada no sistema de transporte coletivo
              intermunicipal, nos modais rodoviário, ferroviário, hidroviário e
              metroviário do Estado da Bahia.
            </p>

            <p>
              Os documentos necessários para solicitar o Passe Livre
              Intermunicipal são:{' '}
            </p>

            <ul
              role="list"
              className="marker:text-primary list-disc pl-5 text-sm flex flex-col gap-2"
            >
              <li>
                Formulários próprios da SJDHDS, preenchidos pelo requerente ou
                seu procurador, representante, assistente, tutor ou curador;
              </li>
              <li>
                Cópia de um documento de identificação autenticado, como,
                Certidão de Nascimento; Carteira de Trabalho e Previdência
                Social;
              </li>

              <li>Carteira de Identidade;</li>

              <li>Cópia do Cadastro de Pessoa Física – CPF;</li>

              <li>Cópia do comprovante atualizado de residência;</li>

              <li>Cópia do comprovante de renda.</li>
            </ul>

            <span className="font-bold">
              OBS: Caso hajam acompanhantes e eles precisem de gratuidade, se
              faz necessária uma cópia de um documento de identificação e
              comprovação, através do formulário do Atestado Médico para o
              Acompanhante.
            </span>
          </Disclosure.Panel>
        </Transition>
      </Disclosure>

      <Disclosure>
        <Disclosure.Button className="py-2 border-l-4 pl-4 border-transparent flex flex-col text-left bg-gray-300 rounded-t-lg">
          <span className="text-primary font-bold text-base leading-relaxed">
            Crianças
          </span>
        </Disclosure.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Disclosure.Panel className="text-gray-500 text-sm mt-[-1rem] bg-gray-200 p-4 rounded-b-lg flex flex-col gap-2">
            <p>
              Os direitos e deveres dos usuários estão contidos no Art. 89 e 90
              do Regulamento do Transporte Intermunicipal de Passageiros
              (Resolução AGERBA n.º 27/01 de 27 de novembro de 2001).
            </p>

            <p>
              Há gratuidade nos transportes, para crianças de até 5 (cinco) anos
              de idade, desde que não ocupem assentos, obedecidas, ainda, as
              disposições regulamentares existentes sobre o transporte de menor;
            </p>

            <p>
              É válido ressaltar que, para viajar sozinhas ou acompanhadas por
              um adulto sem grau de parentesco, a criança ou adolescente menor
              de 16 anos deve apresentar uma autorização emitida por um juiz da
              Vara da Infância e da Juventude e documento de identificação.
            </p>
          </Disclosure.Panel>
        </Transition>
      </Disclosure>

      <Disclosure>
        <Disclosure.Button className="py-2 border-l-4 pl-4 border-transparent flex flex-col text-left bg-gray-300 rounded-t-lg">
          <span className="text-primary font-bold text-base leading-relaxed">
            Meia passagem metropolitano
          </span>
        </Disclosure.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Disclosure.Panel className="text-gray-500 text-sm mt-[-1rem] bg-gray-200 p-4 rounded-b-lg flex flex-col gap-2">
            <p>
              A Resolução n° 40 de 09 de outubro de 2017, regulamenta e permite
              a integração para estudantes que utilizam os sistemas de ônibus
              metropolitano. Garantindo o direito ao estudante, que utiliza o
              sistema de meia passagem. Para ter direito ao benefício é
              necessário ter os cartões eletrônicos identificaO benefício da
              meia- passagem estudantil é concedido para estudantes que residam
              em municípios integrantes da RMS e estejam comprovadamente
              matriculados em cursos do ensino fundamental, médio e superior, em
              outro município também da RMS.
            </p>

            <p>
              Os estudantes dos ensinos fundamental e médio têm a cota fixa de
              85 meias passagens por mês, tendo limite de quatro meias passagens
              por dia nos veículos de transporte coletivo intermunicipal.
            </p>

            <p>
              Para os estudantes do ensino superior, de cursos de suplência, os
              alunos do Instituto Federal da Bahia - IFBA e de cursos de
              pós-graduação, tem a cota fixa de 110 meias passagens, tendo o
              limite diário de seis meias passagens.
            </p>
          </Disclosure.Panel>
        </Transition>
      </Disclosure>

      <h1 className="font-bold text-lg border-gray-700 border-l-4 pl-4">
        Transporte Hidroviário
      </h1>

      <Disclosure>
        <Disclosure.Button className="py-2 border-l-4 pl-4 border-transparent flex flex-col text-left bg-gray-300 rounded-t-lg">
          <span className="text-primary font-bold text-base leading-relaxed">
            Meia passagem estudantil
          </span>
        </Disclosure.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Disclosure.Panel className="text-gray-500 text-sm mt-[-1rem] bg-gray-200 p-4 rounded-b-lg flex flex-col gap-2">
            <p>
              Estudantes de nível técnico e superior de entrada não
              cadastramento ou recadastramento do benefício de meia passagem
              estudantil no Sistema Ferry Boat e Sistema de Lanchas, carteira de
              meia passagem é concedido a estudantes moradores das Ilhas de
              Itaparica e Vera Cruz, matriculados de segunda a sexta- feira em
              cursos de graduação presencial ou em cursos técnicos e
              profissionalizantes em Salvador.
            </p>

            <p>
              As carteirinhas podem ser solicitadas no prazo estipulado pela
              Agerba, de forma presencial ou online, através do site da Agerba -
              www.agerba.ba.gov.br. No ambiente virtual é necessário realizar um
              cadastro, anexar a documentos exigidos e aguardar a aprovação do
              pedido. O processo pode ser acompanhado pelo sistema, que após a
              confirmação dos dados, emite o boleto do DAE e informação o prazo
              para a retirada da carteira.
            </p>

            <p>
              {' '}
              Para adquirir o benefício é necessário o pagamento da taxa,
              através da emissão de um DAE (Documento de Arrecadação Estadual),
              no ato do cadastramento. Após comprovação do pagamento, a carteira
              será entregue em <strong>até 15 dias úteis</strong>.
            </p>

            <p>Original e cópias de:</p>

            <ul
              role="list"
              className="marker:text-primary list-disc pl-5 text-sm flex flex-col gap-2"
            >
              <li>RG;</li>
              <li>CPF;</li>
              <li>01 foto 3x4;</li>
              <li>
                Comprovante de residência (somente água, energia, telefone e
                IPTU) que não tem nome do responsável ou dos pais, ou através da
                comprovação de parentesco;
              </li>
              <li>Comprovante de matrícula no semestre corrente.</li>
            </ul>
          </Disclosure.Panel>
        </Transition>
      </Disclosure>

      <Disclosure>
        <Disclosure.Button className="py-2 border-l-4 pl-4 border-transparent flex flex-col text-left bg-gray-300 rounded-t-lg">
          <span className="text-primary font-bold text-base leading-relaxed">
            Idosos
          </span>
        </Disclosure.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Disclosure.Panel className="text-gray-500 text-sm mt-[-1rem] bg-gray-200 p-4 rounded-b-lg flex flex-col gap-2">
            <p>
              {' '}
              Há <strong>gratuidade</strong> no transporte hidroviário, para
              idosos de <strong>60 (sessenta)</strong> anos de idade ou superior
              a esta idade. Devem apresentar os seguintes documentos:
              identidade, carteira do Idoso fornecido pelo SETPS e cartão de
              Transporte do Idoso – CARTI.
            </p>
          </Disclosure.Panel>
        </Transition>
      </Disclosure>

      <Disclosure>
        <Disclosure.Button className="py-2 border-l-4 pl-4 border-transparent flex flex-col text-left bg-gray-300 rounded-t-lg">
          <span className="text-primary font-bold text-base leading-relaxed">
            Crianças
          </span>
        </Disclosure.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Disclosure.Panel className="text-gray-500 text-sm mt-[-1rem] bg-gray-200 p-4 rounded-b-lg flex flex-col gap-2">
            <p>
              Há gratuidade no transporte hidroviário, para crianças 5 (cinco)
              anos de idade ou inferior a esta idade, acompanhadas dos pais ou
              responsável legal, mediante apresentação de documento de
              identificação.
            </p>
          </Disclosure.Panel>
        </Transition>
      </Disclosure>
    </article>
  )
}

BenefitsPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default BenefitsPage
