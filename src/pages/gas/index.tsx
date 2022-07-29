import { ReactElement } from 'react'

import { DefaultLayout } from '../../layouts/DefaultLayout'
import { NextPageWithLayout } from '../_app'

const GasPage: NextPageWithLayout = () => {
  return (
    <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
      <h1 className="font-bold text-[2rem]">Energia Elétrica e Gás Natural</h1>

      <p>
        O gás natural é um combustível utilizado para fins residenciais,
        comerciais, automotivos e industriais, substituindo o GLP, o óleo
        diesel, a gasolina, o álcool e o carvão. A utilização de gás natural
        representa excelente oportunidade de desenvolvimento em função da sua
        alta competitividade, promove um aumento da eficiência e da segurança
        nos processos industriais, nas residências e unidades comerciais, e
        colabora com a melhoria ambiental, por ser um combustível limpo. Devido
        à sua distribuição na forma canalizada, se obtém uma maior
        confiabilidade, eficácia e presteza no fornecimento, para todos os
        segmentos usuários.
      </p>

      <p>
        A exploração, produção, comercialização e o transporte do gás natural
        são atividades reguladas pela ANP (Agência Nacional do Petróleo) por
        força da Constituição Federal / 1988 e da Lei 9478 / 97, que estabelece
        as diretrizes da Política Energética Nacional. De acordo com o art. 11
        .§ 2.º da Constituição do Estado da Bahia, cabe ao Poder Público
        Estadual, explorar diretamente ou mediante concessão os serviços locais
        de gás canalizado. A regulação dos serviços de distribuição de gás
        natural é de competência dos Estados, que a delegam à s Agências
        Reguladoras Estaduais.
      </p>

      <p>
        No caso da Bahia, esta atribuição é da AGERBA, por força da Lei Estadual
        7.314 /98 que criou a Agência, que estabelece esta competência no seu
        artigo 1.º. De acordo com esta lei, a AGERBA é responsável, dentre
        outras coisas, por promover e zelar pela eficiência econômica e técnica
        do serviço público delegado; promover a revisão, ajuste e aprovação de
        tarifas módicas que permitam a manutenção do equilíbrio
        econômico-financeiro do contrato de concessão; zelar pela estabilidade
        nas relações entre o poder concedente, a entidade regulada e usuários;
        estimular a expansão e a modernização do serviço delegado de modo a
        buscar a sua universalização e a melhoria dos padrões de qualidade e,
        por fim, fiscalizar os aspectos técnico, econômico, contábil,
        financeiro, operacional e jurídico do contrato de concessão na área de
        gás natural.
      </p>

      <picture>
        <img className="w-[30rem] m-auto" src="/fluxoGasNatural.png" alt="" />
      </picture>

      <p>
        O início da estruturação do setor de gás canalizado no Estado da Bahia
        deu-se com a autorização da criação da Bahiagás (Companhia de Gás da
        Bahia) pela Lei Estadual n.º. 5555 / 89. O Decreto Estadual n.º. 4.401 /
        91 e o Contrato de Concessão posteriormente firmados concederam à
        Bahiagás o direito da exploração dos serviços de distribuição de gás,
        por meio de canalizações, a todo e qualquer consumidor ou segmento
        industrial, comercial, institucional e residencial, para toda e qualquer
        utilização ou finalidade, por um prazo de 50 anos, dentro do território
        baiano.
      </p>

      <p>
        Com o objetivo de estabelecer e consolidar o fornecimento de gás
        canalizado, e visando aprimorar o relacionamento entre a Bahiagás e os
        usuários dos serviços com ênfase inicial no segmento residencial, a
        AGERBA deverá publicar em breve futuro uma Resolução, onde estabelecerá
        as condições gerais de fornecimento de gás natural para este segmento,
        contemplando dentre outros itens a avaliação da qualidade do produto e
        do serviço, a segurança do fornecimento e a qualidade do atendimento
        comercial por parte da concessionária. Passará também a disponibilizar
        aos consumidores toda sua estrutura de fiscalização e ouvidoria.
      </p>

      <h1 className="font-bold text-lg border-gray-700 border-l-4 pl-4">
        Direitos e Deveres
      </h1>

      <p>
        O consumidor tem o direito de receber energia elétrica com segurança e
        qualidade, e se isso não acontecer, deve dirigir-se à Coelba para
        solucionar o problema. Caso não consiga resolvê-lo diretamente com a
        Coelba, ele deve recorrer à AGERBA - Agência Estadual de Regulação de
        Serviços Públicos de Energia, Transportes e Comunicações da Bahia. A
        AGERBA, autarquia criada em 1998, vinculada à Secretaria de
        Infra-estrutura - SEINFRA, tem por finalidade exercer a regulação, o
        controle e a fiscalização dos serviços públicos, explorados por empresas
        privadas, nas áreas de energia, transportes intermunicipais e
        comunicações.
      </p>

      <p>
        Os DIREITOS e DEVERES do consumidor de energia elétrica estão previstos
        na Resolução da ANEEL n.º 456, que estabelece as disposições atualizadas
        e consolidadas, relativas às condições gerais de fornecimento a serem
        observadas na prestação e utilização do serviço público de energia
        elétrica, tanto pelas concessionárias e permissionárias, quanto pelos
        consumidores.
      </p>

      <p>
        Quanto aos <strong className="font-bold">Direitos</strong>:
      </p>

      <ul
        role="list"
        className="marker:text-primary list-disc pl-5 text-base flex flex-col gap-4"
      >
        <li>
          Receber da concessionária a energia elétrica com qualidade, dentro dos
          limites de tensão e de interrupção estabelecidos pela Agência Nacional
          de Energia Elétrica - ANEEL;
        </li>

        <li>
          Ser atendido com eficiência pela concessionária, no próprio município
          onde se encontra sua unidade consumidora;
        </li>

        <li>
          Receber informações e orientações da concessionária sobre formas de
          redução do desperdício de energia e sobre os aspéctos de segurança na
          sua utilização, assim como seus direitos e deveres;
        </li>

        <li>
          Ser informado na própria fatura sobre a qualidade do fornecimento
          recebido;
        </li>

        <li>
          Receber a conta de energia com antecedência mínima de 5 (cinco) dias
          úteis em relação à data do seu vencimento, no endereço da unidade
          consumidora ou em outro local indicado pelo cliente;
        </li>

        <li>
          Ser atendido em suas solicitações pela concessionária dentro dos
          prazos regulamentados;
        </li>

        <li>
          Ser informado pela concessionária, dentro do prazo máximo de 30
          (trinta) dias as providências adotadas quanto às solicitações ou
          reclamações cujos prazos de execução não estejam regulamentados;
        </li>

        <li>
          Receber informações da concessionária, por escrito, nos casos em que
          houver diferenças a cobrar ou devolver;
        </li>

        <li>
          Ser informado na própria conta sobre a existência de débitos
          anteriores;
        </li>

        <li>
          Ser comunicado pela concessionária, por correspondência especifica, da
          substituição de equipamentos de medição, devendo esta indicar a
          leitura do medidor retirado e a do instalado;
        </li>

        <li>
          Solicitar a aferição do medidor à concessionária, sem ônus, quando a
          variação exceder os limites regulamentares;
        </li>

        <li>
          Ter limitado no máximo a 3 (três) o número de faturas consecutivas
          emitidas, com base na media aritmética do trimestre anterior, em caso
          de impedimento do acesso para leitura do medidor pela concessionária;
        </li>

        <li>
          Ser ressarcido pela concessionária pelos danos causados em função da
          prestação do serviço;
        </li>

        <li>
          Ter o direito de optar por pelo menos 6 (seis) datas de vencimento da
          fatura, as quais devem ser distribuídas uniformemente, em intervalos
          regulares ao longo do mês, pela concessionária;
        </li>

        <li>
          Ser analisado pela concessionária em todos os elementos de
          caracterização da sua unidade consumidora, a fim de que lhe seja
          aplicada a tarifa mais vantajosa a que tiver direito;
        </li>

        <li>
          Ser informado, com antecedência de 5 (cinco) dias úteis e por escrito,
          sobre interrupções programadas em unidades consumidoras onde exista
          pessoa que faça uso de equipamentos elétricos indispensáveis à
          preservação da vida, desde que o fato tenha sido previamente
          comunicado junto à concessionária;
        </li>

        <li>
          Ser informado, com antecedência mínima de 15 (quinze) dias e por
          escrito, quanto a possibilidade de suspensão do fornecimento por falta
          de pagamento;
        </li>

        <li>
          Ter o fornecimento restabelecido pela concessionária, sem ônus, no
          prazo máximo de até 4 (quatro) horas, caso constatada que a suspensão
          foi indevida;
        </li>

        <li>
          Ter o fornecimento restabelecido pela concessionária no prazo máximo
          de 48 (quarenta e oito) horas, desde que tenha cessado o motivo da
          suspensão e que ocorra a solicitação do consumidor ou a constatação do
          pagamento;
        </li>

        <li>
          Ter a sua disposição, nos locais de atendimento da concessionária,
          exemplares das Condições Gerais de Fornecimento de Energia Elétrica e
          das Normas e Padrões de Instalações de Entrada de Energia Elétrica;
        </li>

        <li>
          Receber, quando solicitado e gratuitamente, exemplar da Resolução
          ANEEL n.º 456, de 29 de novembro de 2000, que trata das condições
          gerais de fornecimento de energia;
        </li>

        <li>
          Ser informado sobre o valor da tarifa em vigor, o número e data da
          resolução que a houver homologado, bem como os valores dos serviços
          cobráveis.
        </li>
      </ul>

      <p>
        Quanto aos <strong className="font-bold">Deveres</strong>:
      </p>

      <ul
        role="list"
        className="marker:text-primary list-disc pl-5 text-base flex flex-col gap-4"
      >
        <li>
          Manter a adequação técnica e a segurança das instalações internas da
          unidade consumidora;
        </li>

        <li>
          Manter sob a guarda os medidores instalados no interior da unidade
          consumidora e zelar pela integridade dos seus lacres;
        </li>

        <li>
          Informar corretamente a atividade exercida na unidade consumidora, bem
          como as eventuais alterações;
        </li>

        <li>
          Garantir o livre acesso aos representantes da concessionária aos
          locais onde estiverem instalados os equipamentos de medição;
        </li>

        <li>
          Responsabilizar-se por danos decorrentes de qualquer procedimento
          irregular ou deficiência técnica das instalações elétricas internas da
          unidade consumidora;
        </li>

        <li>
          Informar seus dados cadastrais, as alterações e responsabilizar-se
          pela sua veracidade;
        </li>

        <li>
          Pagar o custo administrativo adicional decorrente de auto-religação a
          revelia da concessionária;
        </li>

        <li>
          Efetuar o pagamento da respectiva fatura, respondendo pelos débitos
          assumidos durante a vigência do contrato;
        </li>

        <li>
          Solicitar a rescisão do Contrato de Adesão de Fornecimento de Energia
          Elétrica, mediante pedido de desligamento da unidade consumidora, a
          partir do que não mais estará sujeito a cobrança dos valores
          faturáveis;
        </li>

        <li>
          Informar a necessidade de aumento da carga instalada na unidade
          consumidora, para apreciação prévia da concessionária.
        </li>
      </ul>
    </article>
  )
}

GasPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default GasPage
