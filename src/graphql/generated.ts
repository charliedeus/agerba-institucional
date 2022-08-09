import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  JSON: any;
  Long: any;
  NoticiasTagsDynamicZoneInput: any;
  Time: any;
  Upload: any;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type AscomCartilhaInput = {
  Ano?: InputMaybe<Scalars['String']>;
  cartilha?: InputMaybe<Scalars['ID']>;
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  titulo: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type AscomCartilhas = {
  __typename?: 'AscomCartilhas';
  Ano?: Maybe<Scalars['String']>;
  cartilha?: Maybe<UploadFile>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  titulo: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type AscomCartilhasAggregator = {
  __typename?: 'AscomCartilhasAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type AscomCartilhasConnection = {
  __typename?: 'AscomCartilhasConnection';
  aggregate?: Maybe<AscomCartilhasAggregator>;
  groupBy?: Maybe<AscomCartilhasGroupBy>;
  values?: Maybe<Array<Maybe<AscomCartilhas>>>;
};

export type AscomCartilhasConnectionAno = {
  __typename?: 'AscomCartilhasConnectionAno';
  connection?: Maybe<AscomCartilhasConnection>;
  key?: Maybe<Scalars['String']>;
};

export type AscomCartilhasConnectionCartilha = {
  __typename?: 'AscomCartilhasConnectionCartilha';
  connection?: Maybe<AscomCartilhasConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type AscomCartilhasConnectionCreated_At = {
  __typename?: 'AscomCartilhasConnectionCreated_at';
  connection?: Maybe<AscomCartilhasConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type AscomCartilhasConnectionId = {
  __typename?: 'AscomCartilhasConnectionId';
  connection?: Maybe<AscomCartilhasConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type AscomCartilhasConnectionPublished_At = {
  __typename?: 'AscomCartilhasConnectionPublished_at';
  connection?: Maybe<AscomCartilhasConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type AscomCartilhasConnectionTitulo = {
  __typename?: 'AscomCartilhasConnectionTitulo';
  connection?: Maybe<AscomCartilhasConnection>;
  key?: Maybe<Scalars['String']>;
};

export type AscomCartilhasConnectionUpdated_At = {
  __typename?: 'AscomCartilhasConnectionUpdated_at';
  connection?: Maybe<AscomCartilhasConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type AscomCartilhasGroupBy = {
  __typename?: 'AscomCartilhasGroupBy';
  Ano?: Maybe<Array<Maybe<AscomCartilhasConnectionAno>>>;
  cartilha?: Maybe<Array<Maybe<AscomCartilhasConnectionCartilha>>>;
  created_at?: Maybe<Array<Maybe<AscomCartilhasConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<AscomCartilhasConnectionId>>>;
  published_at?: Maybe<Array<Maybe<AscomCartilhasConnectionPublished_At>>>;
  titulo?: Maybe<Array<Maybe<AscomCartilhasConnectionTitulo>>>;
  updated_at?: Maybe<Array<Maybe<AscomCartilhasConnectionUpdated_At>>>;
};

export type AscomFaq = {
  __typename?: 'AscomFaq';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  pergunta: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  resposta: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type AscomFaqAggregator = {
  __typename?: 'AscomFaqAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type AscomFaqConnection = {
  __typename?: 'AscomFaqConnection';
  aggregate?: Maybe<AscomFaqAggregator>;
  groupBy?: Maybe<AscomFaqGroupBy>;
  values?: Maybe<Array<Maybe<AscomFaq>>>;
};

export type AscomFaqConnectionCreated_At = {
  __typename?: 'AscomFaqConnectionCreated_at';
  connection?: Maybe<AscomFaqConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type AscomFaqConnectionId = {
  __typename?: 'AscomFaqConnectionId';
  connection?: Maybe<AscomFaqConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type AscomFaqConnectionPergunta = {
  __typename?: 'AscomFaqConnectionPergunta';
  connection?: Maybe<AscomFaqConnection>;
  key?: Maybe<Scalars['String']>;
};

export type AscomFaqConnectionPublished_At = {
  __typename?: 'AscomFaqConnectionPublished_at';
  connection?: Maybe<AscomFaqConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type AscomFaqConnectionResposta = {
  __typename?: 'AscomFaqConnectionResposta';
  connection?: Maybe<AscomFaqConnection>;
  key?: Maybe<Scalars['String']>;
};

export type AscomFaqConnectionUpdated_At = {
  __typename?: 'AscomFaqConnectionUpdated_at';
  connection?: Maybe<AscomFaqConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type AscomFaqGroupBy = {
  __typename?: 'AscomFaqGroupBy';
  created_at?: Maybe<Array<Maybe<AscomFaqConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<AscomFaqConnectionId>>>;
  pergunta?: Maybe<Array<Maybe<AscomFaqConnectionPergunta>>>;
  published_at?: Maybe<Array<Maybe<AscomFaqConnectionPublished_At>>>;
  resposta?: Maybe<Array<Maybe<AscomFaqConnectionResposta>>>;
  updated_at?: Maybe<Array<Maybe<AscomFaqConnectionUpdated_At>>>;
};

export type AscomFaqInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  pergunta: Scalars['String'];
  published_at?: InputMaybe<Scalars['DateTime']>;
  resposta: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type AtasDeColegiado = {
  __typename?: 'AtasDeColegiado';
  Data: Scalars['DateTime'];
  Titulo: Scalars['String'];
  created_at: Scalars['DateTime'];
  descritption?: Maybe<Scalars['String']>;
  documentos?: Maybe<Array<Maybe<UploadFile>>>;
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  teste?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};


export type AtasDeColegiadoDocumentosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type AtasDeColegiadoAggregator = {
  __typename?: 'AtasDeColegiadoAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type AtasDeColegiadoConnection = {
  __typename?: 'AtasDeColegiadoConnection';
  aggregate?: Maybe<AtasDeColegiadoAggregator>;
  groupBy?: Maybe<AtasDeColegiadoGroupBy>;
  values?: Maybe<Array<Maybe<AtasDeColegiado>>>;
};

export type AtasDeColegiadoConnectionCreated_At = {
  __typename?: 'AtasDeColegiadoConnectionCreated_at';
  connection?: Maybe<AtasDeColegiadoConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type AtasDeColegiadoConnectionData = {
  __typename?: 'AtasDeColegiadoConnectionData';
  connection?: Maybe<AtasDeColegiadoConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type AtasDeColegiadoConnectionDescritption = {
  __typename?: 'AtasDeColegiadoConnectionDescritption';
  connection?: Maybe<AtasDeColegiadoConnection>;
  key?: Maybe<Scalars['String']>;
};

export type AtasDeColegiadoConnectionId = {
  __typename?: 'AtasDeColegiadoConnectionId';
  connection?: Maybe<AtasDeColegiadoConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type AtasDeColegiadoConnectionPublished_At = {
  __typename?: 'AtasDeColegiadoConnectionPublished_at';
  connection?: Maybe<AtasDeColegiadoConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type AtasDeColegiadoConnectionTeste = {
  __typename?: 'AtasDeColegiadoConnectionTeste';
  connection?: Maybe<AtasDeColegiadoConnection>;
  key?: Maybe<Scalars['String']>;
};

export type AtasDeColegiadoConnectionTitulo = {
  __typename?: 'AtasDeColegiadoConnectionTitulo';
  connection?: Maybe<AtasDeColegiadoConnection>;
  key?: Maybe<Scalars['String']>;
};

export type AtasDeColegiadoConnectionUpdated_At = {
  __typename?: 'AtasDeColegiadoConnectionUpdated_at';
  connection?: Maybe<AtasDeColegiadoConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type AtasDeColegiadoGroupBy = {
  __typename?: 'AtasDeColegiadoGroupBy';
  Data?: Maybe<Array<Maybe<AtasDeColegiadoConnectionData>>>;
  Titulo?: Maybe<Array<Maybe<AtasDeColegiadoConnectionTitulo>>>;
  created_at?: Maybe<Array<Maybe<AtasDeColegiadoConnectionCreated_At>>>;
  descritption?: Maybe<Array<Maybe<AtasDeColegiadoConnectionDescritption>>>;
  id?: Maybe<Array<Maybe<AtasDeColegiadoConnectionId>>>;
  published_at?: Maybe<Array<Maybe<AtasDeColegiadoConnectionPublished_At>>>;
  teste?: Maybe<Array<Maybe<AtasDeColegiadoConnectionTeste>>>;
  updated_at?: Maybe<Array<Maybe<AtasDeColegiadoConnectionUpdated_At>>>;
};

export type AtasDeColegiadoInput = {
  Data: Scalars['DateTime'];
  Titulo: Scalars['String'];
  created_by?: InputMaybe<Scalars['ID']>;
  descritption?: InputMaybe<Scalars['String']>;
  documentos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  teste?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type AtasDeJulgamento = {
  __typename?: 'AtasDeJulgamento';
  Data?: Maybe<Scalars['DateTime']>;
  Description?: Maybe<Scalars['String']>;
  Documentos?: Maybe<Array<Maybe<UploadFile>>>;
  Titulo: Scalars['String'];
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
};


export type AtasDeJulgamentoDocumentosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type AtasDeJulgamentoAggregator = {
  __typename?: 'AtasDeJulgamentoAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type AtasDeJulgamentoConnection = {
  __typename?: 'AtasDeJulgamentoConnection';
  aggregate?: Maybe<AtasDeJulgamentoAggregator>;
  groupBy?: Maybe<AtasDeJulgamentoGroupBy>;
  values?: Maybe<Array<Maybe<AtasDeJulgamento>>>;
};

export type AtasDeJulgamentoConnectionCreated_At = {
  __typename?: 'AtasDeJulgamentoConnectionCreated_at';
  connection?: Maybe<AtasDeJulgamentoConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type AtasDeJulgamentoConnectionData = {
  __typename?: 'AtasDeJulgamentoConnectionData';
  connection?: Maybe<AtasDeJulgamentoConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type AtasDeJulgamentoConnectionDescription = {
  __typename?: 'AtasDeJulgamentoConnectionDescription';
  connection?: Maybe<AtasDeJulgamentoConnection>;
  key?: Maybe<Scalars['String']>;
};

export type AtasDeJulgamentoConnectionId = {
  __typename?: 'AtasDeJulgamentoConnectionId';
  connection?: Maybe<AtasDeJulgamentoConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type AtasDeJulgamentoConnectionPublished_At = {
  __typename?: 'AtasDeJulgamentoConnectionPublished_at';
  connection?: Maybe<AtasDeJulgamentoConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type AtasDeJulgamentoConnectionTitulo = {
  __typename?: 'AtasDeJulgamentoConnectionTitulo';
  connection?: Maybe<AtasDeJulgamentoConnection>;
  key?: Maybe<Scalars['String']>;
};

export type AtasDeJulgamentoConnectionUpdated_At = {
  __typename?: 'AtasDeJulgamentoConnectionUpdated_at';
  connection?: Maybe<AtasDeJulgamentoConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type AtasDeJulgamentoGroupBy = {
  __typename?: 'AtasDeJulgamentoGroupBy';
  Data?: Maybe<Array<Maybe<AtasDeJulgamentoConnectionData>>>;
  Description?: Maybe<Array<Maybe<AtasDeJulgamentoConnectionDescription>>>;
  Titulo?: Maybe<Array<Maybe<AtasDeJulgamentoConnectionTitulo>>>;
  created_at?: Maybe<Array<Maybe<AtasDeJulgamentoConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<AtasDeJulgamentoConnectionId>>>;
  published_at?: Maybe<Array<Maybe<AtasDeJulgamentoConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<AtasDeJulgamentoConnectionUpdated_At>>>;
};

export type AtasDeJulgamentoInput = {
  Data?: InputMaybe<Scalars['DateTime']>;
  Description?: InputMaybe<Scalars['String']>;
  Documentos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  Titulo: Scalars['String'];
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type AudienciasPublicaInput = {
  Calendario?: InputMaybe<Array<ComponentCalendarCalendarioInput>>;
  Data: Scalars['Date'];
  Titulo: Scalars['String'];
  comunica?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  documentos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  encerramento: Scalars['String'];
  local?: InputMaybe<Scalars['String']>;
  participacao: Scalars['String'];
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type AudienciasPublicas = {
  __typename?: 'AudienciasPublicas';
  Calendario?: Maybe<Array<Maybe<ComponentCalendarCalendario>>>;
  Data: Scalars['Date'];
  Titulo: Scalars['String'];
  comunica?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  documentos?: Maybe<Array<Maybe<UploadFile>>>;
  encerramento: Scalars['String'];
  id: Scalars['ID'];
  local?: Maybe<Scalars['String']>;
  participacao: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
};


export type AudienciasPublicasDocumentosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type AudienciasPublicasAggregator = {
  __typename?: 'AudienciasPublicasAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type AudienciasPublicasConnection = {
  __typename?: 'AudienciasPublicasConnection';
  aggregate?: Maybe<AudienciasPublicasAggregator>;
  groupBy?: Maybe<AudienciasPublicasGroupBy>;
  values?: Maybe<Array<Maybe<AudienciasPublicas>>>;
};

export type AudienciasPublicasConnectionComunica = {
  __typename?: 'AudienciasPublicasConnectionComunica';
  connection?: Maybe<AudienciasPublicasConnection>;
  key?: Maybe<Scalars['String']>;
};

export type AudienciasPublicasConnectionCreated_At = {
  __typename?: 'AudienciasPublicasConnectionCreated_at';
  connection?: Maybe<AudienciasPublicasConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type AudienciasPublicasConnectionData = {
  __typename?: 'AudienciasPublicasConnectionData';
  connection?: Maybe<AudienciasPublicasConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type AudienciasPublicasConnectionEncerramento = {
  __typename?: 'AudienciasPublicasConnectionEncerramento';
  connection?: Maybe<AudienciasPublicasConnection>;
  key?: Maybe<Scalars['String']>;
};

export type AudienciasPublicasConnectionId = {
  __typename?: 'AudienciasPublicasConnectionId';
  connection?: Maybe<AudienciasPublicasConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type AudienciasPublicasConnectionLocal = {
  __typename?: 'AudienciasPublicasConnectionLocal';
  connection?: Maybe<AudienciasPublicasConnection>;
  key?: Maybe<Scalars['String']>;
};

export type AudienciasPublicasConnectionParticipacao = {
  __typename?: 'AudienciasPublicasConnectionParticipacao';
  connection?: Maybe<AudienciasPublicasConnection>;
  key?: Maybe<Scalars['String']>;
};

export type AudienciasPublicasConnectionPublished_At = {
  __typename?: 'AudienciasPublicasConnectionPublished_at';
  connection?: Maybe<AudienciasPublicasConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type AudienciasPublicasConnectionTitulo = {
  __typename?: 'AudienciasPublicasConnectionTitulo';
  connection?: Maybe<AudienciasPublicasConnection>;
  key?: Maybe<Scalars['String']>;
};

export type AudienciasPublicasConnectionUpdated_At = {
  __typename?: 'AudienciasPublicasConnectionUpdated_at';
  connection?: Maybe<AudienciasPublicasConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type AudienciasPublicasGroupBy = {
  __typename?: 'AudienciasPublicasGroupBy';
  Data?: Maybe<Array<Maybe<AudienciasPublicasConnectionData>>>;
  Titulo?: Maybe<Array<Maybe<AudienciasPublicasConnectionTitulo>>>;
  comunica?: Maybe<Array<Maybe<AudienciasPublicasConnectionComunica>>>;
  created_at?: Maybe<Array<Maybe<AudienciasPublicasConnectionCreated_At>>>;
  encerramento?: Maybe<Array<Maybe<AudienciasPublicasConnectionEncerramento>>>;
  id?: Maybe<Array<Maybe<AudienciasPublicasConnectionId>>>;
  local?: Maybe<Array<Maybe<AudienciasPublicasConnectionLocal>>>;
  participacao?: Maybe<Array<Maybe<AudienciasPublicasConnectionParticipacao>>>;
  published_at?: Maybe<Array<Maybe<AudienciasPublicasConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<AudienciasPublicasConnectionUpdated_At>>>;
};

export type ComapContratosCovid = {
  __typename?: 'ComapContratosCovid';
  contratos?: Maybe<Array<Maybe<ComponentContratosContratos>>>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  preambulo: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
};

export type ComapContratosCovidAggregator = {
  __typename?: 'ComapContratosCovidAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ComapContratosCovidConnection = {
  __typename?: 'ComapContratosCovidConnection';
  aggregate?: Maybe<ComapContratosCovidAggregator>;
  groupBy?: Maybe<ComapContratosCovidGroupBy>;
  values?: Maybe<Array<Maybe<ComapContratosCovid>>>;
};

export type ComapContratosCovidConnectionCreated_At = {
  __typename?: 'ComapContratosCovidConnectionCreated_at';
  connection?: Maybe<ComapContratosCovidConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ComapContratosCovidConnectionId = {
  __typename?: 'ComapContratosCovidConnectionId';
  connection?: Maybe<ComapContratosCovidConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ComapContratosCovidConnectionPreambulo = {
  __typename?: 'ComapContratosCovidConnectionPreambulo';
  connection?: Maybe<ComapContratosCovidConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ComapContratosCovidConnectionPublished_At = {
  __typename?: 'ComapContratosCovidConnectionPublished_at';
  connection?: Maybe<ComapContratosCovidConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ComapContratosCovidConnectionUpdated_At = {
  __typename?: 'ComapContratosCovidConnectionUpdated_at';
  connection?: Maybe<ComapContratosCovidConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ComapContratosCovidGroupBy = {
  __typename?: 'ComapContratosCovidGroupBy';
  created_at?: Maybe<Array<Maybe<ComapContratosCovidConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<ComapContratosCovidConnectionId>>>;
  preambulo?: Maybe<Array<Maybe<ComapContratosCovidConnectionPreambulo>>>;
  published_at?: Maybe<Array<Maybe<ComapContratosCovidConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<ComapContratosCovidConnectionUpdated_At>>>;
};

export type ComapContratosCovidInput = {
  contratos?: InputMaybe<Array<InputMaybe<ComponentContratosContratoInput>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  preambulo: Scalars['String'];
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type ComponentAditivoAditivoInput = {
  contrato_do_aditivo?: InputMaybe<Scalars['ID']>;
  data_da_assinatura_do_aditivo?: InputMaybe<Scalars['Date']>;
  numero_do_aditivo?: InputMaybe<Scalars['Int']>;
};

export type ComponentAditivoAditivos = {
  __typename?: 'ComponentAditivoAditivos';
  contrato_do_aditivo?: Maybe<UploadFile>;
  data_da_assinatura_do_aditivo?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  numero_do_aditivo?: Maybe<Scalars['Int']>;
};

export type ComponentCalendarCalendario = {
  __typename?: 'ComponentCalendarCalendario';
  descricao: Scalars['String'];
  final: Scalars['Date'];
  id: Scalars['ID'];
  inicial: Scalars['Date'];
};

export type ComponentCalendarCalendarioInput = {
  descricao: Scalars['String'];
  final: Scalars['Date'];
  inicial: Scalars['Date'];
};

export type ComponentConcessaoConcessao = {
  __typename?: 'ComponentConcessaoConcessao';
  Base_de_servico_de_apoio_ao_usuario?: Maybe<Array<Maybe<UploadFile>>>;
  Concessionaria: Scalars['String'];
  Mapa_da_rodovia?: Maybe<Array<Maybe<UploadFile>>>;
  Objeto_da_Concessao: Scalars['String'];
  Prazo_da_concessao: Scalars['Date'];
  Transporte_de_Cargas_Especiais_e_Faixa_de_Dominio?: Maybe<UploadFile>;
  Trecho_objeto_da_concessao?: Maybe<Array<Maybe<UploadFile>>>;
  data_da_assinatura: Scalars['Date'];
  id: Scalars['ID'];
  localizacao_das_bases_do_servico_de_apoio_ao_usuario?: Maybe<Array<Maybe<UploadFile>>>;
  ouvidoria?: Maybe<Scalars['String']>;
  site: Scalars['String'];
  telefone?: Maybe<Scalars['String']>;
};


export type ComponentConcessaoConcessaoBase_De_Servico_De_Apoio_Ao_UsuarioArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type ComponentConcessaoConcessaoMapa_Da_RodoviaArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type ComponentConcessaoConcessaoTrecho_Objeto_Da_ConcessaoArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type ComponentConcessaoConcessaoLocalizacao_Das_Bases_Do_Servico_De_Apoio_Ao_UsuarioArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type ComponentConcessaoConcessaoInput = {
  Base_de_servico_de_apoio_ao_usuario?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  Concessionaria: Scalars['String'];
  Mapa_da_rodovia?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  Objeto_da_Concessao: Scalars['String'];
  Prazo_da_concessao: Scalars['Date'];
  Transporte_de_Cargas_Especiais_e_Faixa_de_Dominio?: InputMaybe<Scalars['ID']>;
  Trecho_objeto_da_concessao?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  data_da_assinatura: Scalars['Date'];
  localizacao_das_bases_do_servico_de_apoio_ao_usuario?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  ouvidoria?: InputMaybe<Scalars['String']>;
  site: Scalars['String'];
  telefone?: InputMaybe<Scalars['String']>;
};

export type ComponentContentContent = {
  __typename?: 'ComponentContentContent';
  Arquivo?: Maybe<Array<Maybe<UploadFile>>>;
  Foto?: Maybe<UploadFile>;
  id: Scalars['ID'];
  name: Scalars['String'];
  post?: Maybe<Scalars['String']>;
};


export type ComponentContentContentArquivoArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type ComponentContentContentInput = {
  Arquivo?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  Foto?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  post?: InputMaybe<Scalars['String']>;
};

export type ComponentContratosContratoInput = {
  cnpj?: InputMaybe<Scalars['String']>;
  contratado?: InputMaybe<Scalars['String']>;
  contrato?: InputMaybe<Scalars['ID']>;
  data_de_celebracao_doe: Scalars['Date'];
  forma_de_contratacao: Scalars['String'];
  numero_do_contrato?: InputMaybe<Scalars['String']>;
  numero_do_processo?: InputMaybe<Scalars['String']>;
  objeto: Scalars['String'];
  prazo: Scalars['String'];
  valor: Scalars['Float'];
};

export type ComponentContratosContratos = {
  __typename?: 'ComponentContratosContratos';
  cnpj?: Maybe<Scalars['String']>;
  contratado?: Maybe<Scalars['String']>;
  contrato?: Maybe<UploadFile>;
  data_de_celebracao_doe: Scalars['Date'];
  forma_de_contratacao: Scalars['String'];
  id: Scalars['ID'];
  numero_do_contrato?: Maybe<Scalars['String']>;
  numero_do_processo?: Maybe<Scalars['String']>;
  objeto: Scalars['String'];
  prazo: Scalars['String'];
  valor: Scalars['Float'];
};

export type ComponentDataHoraDataHora = {
  __typename?: 'ComponentDataHoraDataHora';
  Final: Scalars['DateTime'];
  Inicio: Scalars['DateTime'];
  descricao: Scalars['String'];
  id: Scalars['ID'];
};

export type ComponentDataHoraDataHoraInput = {
  Final: Scalars['DateTime'];
  Inicio: Scalars['DateTime'];
  descricao: Scalars['String'];
};

export type ComponentDocumentDoc = {
  __typename?: 'ComponentDocumentDoc';
  documentos?: Maybe<Array<Maybe<UploadFile>>>;
  id: Scalars['ID'];
};


export type ComponentDocumentDocDocumentosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type ComponentDocumentDocInput = {
  documentos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ComponentEditalEdital = {
  __typename?: 'ComponentEditalEdital';
  Edital: Scalars['Long'];
  aditivos?: Maybe<Array<Maybe<ComponentAditivoAditivos>>>;
  anexo?: Maybe<Array<Maybe<UploadFile>>>;
  anexoII?: Maybe<Array<Maybe<UploadFile>>>;
  assinatura: Scalars['Date'];
  contrato: Scalars['String'];
  id: Scalars['ID'];
  programa_de_exploracao_de_rodovias?: Maybe<Array<Maybe<UploadFile>>>;
};


export type ComponentEditalEditalAnexoArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type ComponentEditalEditalAnexoIiArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type ComponentEditalEditalPrograma_De_Exploracao_De_RodoviasArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type ComponentEditalEditalInput = {
  Edital: Scalars['Long'];
  aditivos?: InputMaybe<Array<InputMaybe<ComponentAditivoAditivoInput>>>;
  anexo?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  anexoII?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  assinatura: Scalars['Date'];
  contrato: Scalars['String'];
  programa_de_exploracao_de_rodovias?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ComponentPenalidadePenalidade = {
  __typename?: 'ComponentPenalidadePenalidade';
  Infrigidos: Scalars['String'];
  coeficiente: Scalars['String'];
  id: Scalars['ID'];
  natureza: Scalars['String'];
  valor?: Maybe<Scalars['Float']>;
};

export type ComponentPenalidadePenalidadeInput = {
  Infrigidos: Scalars['String'];
  coeficiente: Scalars['String'];
  natureza: Scalars['String'];
  valor?: InputMaybe<Scalars['Float']>;
};

export type ComponentServiceServiceInput = {
  Bg?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name: Scalars['String'];
  url: Scalars['String'];
};

export type ComponentServiceServices = {
  __typename?: 'ComponentServiceServices';
  Bg?: Maybe<Array<Maybe<UploadFile>>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  url: Scalars['String'];
};


export type ComponentServiceServicesBgArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type ComponentSobreAConcessionariaSobreAConcessionaria = {
  __typename?: 'ComponentSobreAConcessionariaSobreAConcessionaria';
  Ouvidoria: Scalars['String'];
  Site: Scalars['String'];
  Telefone: Scalars['String'];
  id: Scalars['ID'];
};

export type ComponentSobreAConcessionariaSobreAConcessionariaInput = {
  Ouvidoria: Scalars['String'];
  Site: Scalars['String'];
  Telefone: Scalars['String'];
};

export type ComponentTagsTagInput = {
  Tag?: InputMaybe<Scalars['String']>;
};

export type ComponentTagsTags = {
  __typename?: 'ComponentTagsTags';
  Tag?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type ComponentTarifasTarifa = {
  __typename?: 'ComponentTarifasTarifa';
  Categorias: Scalars['String'];
  id: Scalars['ID'];
  numero_dos_eixos: Scalars['Int'];
  tarifa_dias_uteis?: Maybe<Scalars['Float']>;
  tipo_de_veiculo: Scalars['String'];
};

export type ComponentTarifasTarifaInput = {
  Categorias: Scalars['String'];
  numero_dos_eixos: Scalars['Int'];
  tarifa_dias_uteis?: InputMaybe<Scalars['Float']>;
  tipo_de_veiculo: Scalars['String'];
};

export type ComponentTarifasTerminaiInput = {
  cidades: Scalars['String'];
  valor: Scalars['Float'];
};

export type ComponentTarifasTerminais = {
  __typename?: 'ComponentTarifasTerminais';
  cidades: Scalars['String'];
  id: Scalars['ID'];
  valor: Scalars['Float'];
};

export type ComponentTaxaTaxaInput = {
  Servico: Scalars['String'];
  valor: Scalars['Float'];
};

export type ComponentTaxaTaxas = {
  __typename?: 'ComponentTaxaTaxas';
  Servico: Scalars['String'];
  id: Scalars['ID'];
  valor: Scalars['Float'];
};

export type ComponentTerminaisHidroviariosTerminaisHidroviarioInput = {
  Classe_I?: InputMaybe<Scalars['String']>;
  Classe_II?: InputMaybe<Scalars['String']>;
  Classe_III?: InputMaybe<Scalars['String']>;
  Classe_IV?: InputMaybe<Scalars['String']>;
  Terminal?: InputMaybe<Scalars['String']>;
};

export type ComponentTerminaisHidroviariosTerminaisHidroviarios = {
  __typename?: 'ComponentTerminaisHidroviariosTerminaisHidroviarios';
  Classe_I?: Maybe<Scalars['String']>;
  Classe_II?: Maybe<Scalars['String']>;
  Classe_III?: Maybe<Scalars['String']>;
  Classe_IV?: Maybe<Scalars['String']>;
  Terminal?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type ConsultasPublicaInput = {
  Calendario?: InputMaybe<Array<ComponentCalendarCalendarioInput>>;
  Data: Scalars['Date'];
  Titulo: Scalars['String'];
  comunica: Scalars['String'];
  created_by?: InputMaybe<Scalars['ID']>;
  documentos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  encerramento?: InputMaybe<Scalars['String']>;
  participacao?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type ConsultasPublicas = {
  __typename?: 'ConsultasPublicas';
  Calendario?: Maybe<Array<Maybe<ComponentCalendarCalendario>>>;
  Data: Scalars['Date'];
  Titulo: Scalars['String'];
  comunica: Scalars['String'];
  created_at: Scalars['DateTime'];
  documentos?: Maybe<Array<Maybe<UploadFile>>>;
  encerramento?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  participacao?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
};


export type ConsultasPublicasDocumentosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type ConsultasPublicasAggregator = {
  __typename?: 'ConsultasPublicasAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ConsultasPublicasConnection = {
  __typename?: 'ConsultasPublicasConnection';
  aggregate?: Maybe<ConsultasPublicasAggregator>;
  groupBy?: Maybe<ConsultasPublicasGroupBy>;
  values?: Maybe<Array<Maybe<ConsultasPublicas>>>;
};

export type ConsultasPublicasConnectionComunica = {
  __typename?: 'ConsultasPublicasConnectionComunica';
  connection?: Maybe<ConsultasPublicasConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ConsultasPublicasConnectionCreated_At = {
  __typename?: 'ConsultasPublicasConnectionCreated_at';
  connection?: Maybe<ConsultasPublicasConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ConsultasPublicasConnectionData = {
  __typename?: 'ConsultasPublicasConnectionData';
  connection?: Maybe<ConsultasPublicasConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ConsultasPublicasConnectionEncerramento = {
  __typename?: 'ConsultasPublicasConnectionEncerramento';
  connection?: Maybe<ConsultasPublicasConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ConsultasPublicasConnectionId = {
  __typename?: 'ConsultasPublicasConnectionId';
  connection?: Maybe<ConsultasPublicasConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ConsultasPublicasConnectionParticipacao = {
  __typename?: 'ConsultasPublicasConnectionParticipacao';
  connection?: Maybe<ConsultasPublicasConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ConsultasPublicasConnectionPublished_At = {
  __typename?: 'ConsultasPublicasConnectionPublished_at';
  connection?: Maybe<ConsultasPublicasConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ConsultasPublicasConnectionTitulo = {
  __typename?: 'ConsultasPublicasConnectionTitulo';
  connection?: Maybe<ConsultasPublicasConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ConsultasPublicasConnectionUpdated_At = {
  __typename?: 'ConsultasPublicasConnectionUpdated_at';
  connection?: Maybe<ConsultasPublicasConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ConsultasPublicasGroupBy = {
  __typename?: 'ConsultasPublicasGroupBy';
  Data?: Maybe<Array<Maybe<ConsultasPublicasConnectionData>>>;
  Titulo?: Maybe<Array<Maybe<ConsultasPublicasConnectionTitulo>>>;
  comunica?: Maybe<Array<Maybe<ConsultasPublicasConnectionComunica>>>;
  created_at?: Maybe<Array<Maybe<ConsultasPublicasConnectionCreated_At>>>;
  encerramento?: Maybe<Array<Maybe<ConsultasPublicasConnectionEncerramento>>>;
  id?: Maybe<Array<Maybe<ConsultasPublicasConnectionId>>>;
  participacao?: Maybe<Array<Maybe<ConsultasPublicasConnectionParticipacao>>>;
  published_at?: Maybe<Array<Maybe<ConsultasPublicasConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<ConsultasPublicasConnectionUpdated_At>>>;
};

export type CsjriInformeDeJulgamento = {
  __typename?: 'CsjriInformeDeJulgamento';
  Data?: Maybe<Scalars['DateTime']>;
  Description?: Maybe<Scalars['String']>;
  Documentos?: Maybe<Array<Maybe<UploadFile>>>;
  Titulo?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
};


export type CsjriInformeDeJulgamentoDocumentosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type CsjriInformeDeJulgamentoAggregator = {
  __typename?: 'CsjriInformeDeJulgamentoAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CsjriInformeDeJulgamentoConnection = {
  __typename?: 'CsjriInformeDeJulgamentoConnection';
  aggregate?: Maybe<CsjriInformeDeJulgamentoAggregator>;
  groupBy?: Maybe<CsjriInformeDeJulgamentoGroupBy>;
  values?: Maybe<Array<Maybe<CsjriInformeDeJulgamento>>>;
};

export type CsjriInformeDeJulgamentoConnectionCreated_At = {
  __typename?: 'CsjriInformeDeJulgamentoConnectionCreated_at';
  connection?: Maybe<CsjriInformeDeJulgamentoConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CsjriInformeDeJulgamentoConnectionData = {
  __typename?: 'CsjriInformeDeJulgamentoConnectionData';
  connection?: Maybe<CsjriInformeDeJulgamentoConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CsjriInformeDeJulgamentoConnectionDescription = {
  __typename?: 'CsjriInformeDeJulgamentoConnectionDescription';
  connection?: Maybe<CsjriInformeDeJulgamentoConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CsjriInformeDeJulgamentoConnectionId = {
  __typename?: 'CsjriInformeDeJulgamentoConnectionId';
  connection?: Maybe<CsjriInformeDeJulgamentoConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type CsjriInformeDeJulgamentoConnectionPublished_At = {
  __typename?: 'CsjriInformeDeJulgamentoConnectionPublished_at';
  connection?: Maybe<CsjriInformeDeJulgamentoConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CsjriInformeDeJulgamentoConnectionTitulo = {
  __typename?: 'CsjriInformeDeJulgamentoConnectionTitulo';
  connection?: Maybe<CsjriInformeDeJulgamentoConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CsjriInformeDeJulgamentoConnectionUpdated_At = {
  __typename?: 'CsjriInformeDeJulgamentoConnectionUpdated_at';
  connection?: Maybe<CsjriInformeDeJulgamentoConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CsjriInformeDeJulgamentoGroupBy = {
  __typename?: 'CsjriInformeDeJulgamentoGroupBy';
  Data?: Maybe<Array<Maybe<CsjriInformeDeJulgamentoConnectionData>>>;
  Description?: Maybe<Array<Maybe<CsjriInformeDeJulgamentoConnectionDescription>>>;
  Titulo?: Maybe<Array<Maybe<CsjriInformeDeJulgamentoConnectionTitulo>>>;
  created_at?: Maybe<Array<Maybe<CsjriInformeDeJulgamentoConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<CsjriInformeDeJulgamentoConnectionId>>>;
  published_at?: Maybe<Array<Maybe<CsjriInformeDeJulgamentoConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<CsjriInformeDeJulgamentoConnectionUpdated_At>>>;
};

export type CsjriInformeDeJulgamentoInput = {
  Data?: InputMaybe<Scalars['DateTime']>;
  Description?: InputMaybe<Scalars['String']>;
  Documentos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  Titulo?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type CsjriInformesDeJulgamento = {
  __typename?: 'CsjriInformesDeJulgamento';
  Informes: Scalars['String'];
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
};

export type CsjriInformesDeJulgamentoInput = {
  Informes: Scalars['String'];
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type DfisLicencasEspeciaiInput = {
  DOCUMENTOS_NECESSARIOS?: InputMaybe<Scalars['String']>;
  LICENCA_DE_FRETAMENTO?: InputMaybe<Scalars['String']>;
  LICENCA_DE_TURISMO?: InputMaybe<Scalars['String']>;
  LICENCA_ESCOLAR?: InputMaybe<Scalars['String']>;
  LICENCA_EVENTUAL?: InputMaybe<Scalars['String']>;
  LICENCA_VINCULADA?: InputMaybe<Scalars['String']>;
  LINK_DE_ACESSO_AO_STIP?: InputMaybe<Scalars['String']>;
  PREAMBULO?: InputMaybe<Scalars['String']>;
  Para_Transportar_Funcionarios_de_Empresas?: InputMaybe<Scalars['String']>;
  Para_Transportar_Grupo_Fixo_Universitarios?: InputMaybe<Scalars['String']>;
  Para_Tratamento_de_Saude_Prefeituras?: InputMaybe<Scalars['String']>;
  RESOLUCOES?: InputMaybe<Scalars['String']>;
  VALOR_DA_TAXA?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type DfisLicencasEspeciais = {
  __typename?: 'DfisLicencasEspeciais';
  DOCUMENTOS_NECESSARIOS?: Maybe<Scalars['String']>;
  LICENCA_DE_FRETAMENTO?: Maybe<Scalars['String']>;
  LICENCA_DE_TURISMO?: Maybe<Scalars['String']>;
  LICENCA_ESCOLAR?: Maybe<Scalars['String']>;
  LICENCA_EVENTUAL?: Maybe<Scalars['String']>;
  LICENCA_VINCULADA?: Maybe<Scalars['String']>;
  LINK_DE_ACESSO_AO_STIP?: Maybe<Scalars['String']>;
  PREAMBULO?: Maybe<Scalars['String']>;
  Para_Transportar_Funcionarios_de_Empresas?: Maybe<Scalars['String']>;
  Para_Transportar_Grupo_Fixo_Universitarios?: Maybe<Scalars['String']>;
  Para_Tratamento_de_Saude_Prefeituras?: Maybe<Scalars['String']>;
  RESOLUCOES?: Maybe<Scalars['String']>;
  VALOR_DA_TAXA?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
};

export type DfisVistoriaInput = {
  DOCUMENTOS_NECESSARIOS: Scalars['String'];
  PREAMBULO: Scalars['String'];
  RESOLUCOES_VISTORIAS?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type DfisVistorias = {
  __typename?: 'DfisVistorias';
  DOCUMENTOS_NECESSARIOS: Scalars['String'];
  PREAMBULO: Scalars['String'];
  RESOLUCOES_VISTORIAS?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
};

export type DpseCadastro = {
  __typename?: 'DpseCadastro';
  concessionarias: Scalars['String'];
  created_at: Scalars['DateTime'];
  empresas_comercializadoras_de_gas: Scalars['String'];
  empresas_de_publicidade: Scalars['String'];
  empresas_do_hidroviario: Scalars['String'];
  id: Scalars['ID'];
  operadoras_de_servicos_especiais: Scalars['String'];
  permissionario_pessoa_juridica: Scalars['String'];
  permissionarios_pessoa_fisica: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  sobre: Scalars['String'];
  sobre_permissionarios: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type DpseCadastroInput = {
  concessionarias: Scalars['String'];
  created_by?: InputMaybe<Scalars['ID']>;
  empresas_comercializadoras_de_gas: Scalars['String'];
  empresas_de_publicidade: Scalars['String'];
  empresas_do_hidroviario: Scalars['String'];
  operadoras_de_servicos_especiais: Scalars['String'];
  permissionario_pessoa_juridica: Scalars['String'];
  permissionarios_pessoa_fisica: Scalars['String'];
  published_at?: InputMaybe<Scalars['DateTime']>;
  sobre: Scalars['String'];
  sobre_permissionarios: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type DtafTarifasDosTerminaisHidroviarioInput = {
  Classe_I?: InputMaybe<Scalars['Float']>;
  Classe_II?: InputMaybe<Scalars['Float']>;
  Classe_III?: InputMaybe<Scalars['Float']>;
  Classe_IV?: InputMaybe<Scalars['Float']>;
  Obs_Classe_I?: InputMaybe<Scalars['Float']>;
  Obs_Classe_II?: InputMaybe<Scalars['Float']>;
  Obs_Classe_III?: InputMaybe<Scalars['Float']>;
  Obs_Classe_IV?: InputMaybe<Scalars['Float']>;
  Terminais_Hidroviarios?: InputMaybe<Array<InputMaybe<ComponentTerminaisHidroviariosTerminaisHidroviarioInput>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type DtafTarifasDosTerminaisHidroviarios = {
  __typename?: 'DtafTarifasDosTerminaisHidroviarios';
  Classe_I?: Maybe<Scalars['Float']>;
  Classe_II?: Maybe<Scalars['Float']>;
  Classe_III?: Maybe<Scalars['Float']>;
  Classe_IV?: Maybe<Scalars['Float']>;
  Obs_Classe_I?: Maybe<Scalars['Float']>;
  Obs_Classe_II?: Maybe<Scalars['Float']>;
  Obs_Classe_III?: Maybe<Scalars['Float']>;
  Obs_Classe_IV?: Maybe<Scalars['Float']>;
  Terminais_Hidroviarios?: Maybe<Array<Maybe<ComponentTerminaisHidroviariosTerminaisHidroviarios>>>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
};

export type DtafTarifasDosTerminaisHidroviariosAggregator = {
  __typename?: 'DtafTarifasDosTerminaisHidroviariosAggregator';
  avg?: Maybe<DtafTarifasDosTerminaisHidroviariosAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<DtafTarifasDosTerminaisHidroviariosAggregatorMax>;
  min?: Maybe<DtafTarifasDosTerminaisHidroviariosAggregatorMin>;
  sum?: Maybe<DtafTarifasDosTerminaisHidroviariosAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type DtafTarifasDosTerminaisHidroviariosAggregatorAvg = {
  __typename?: 'DtafTarifasDosTerminaisHidroviariosAggregatorAvg';
  Classe_I?: Maybe<Scalars['Float']>;
  Classe_II?: Maybe<Scalars['Float']>;
  Classe_III?: Maybe<Scalars['Float']>;
  Classe_IV?: Maybe<Scalars['Float']>;
  Obs_Classe_I?: Maybe<Scalars['Float']>;
  Obs_Classe_II?: Maybe<Scalars['Float']>;
  Obs_Classe_III?: Maybe<Scalars['Float']>;
  Obs_Classe_IV?: Maybe<Scalars['Float']>;
};

export type DtafTarifasDosTerminaisHidroviariosAggregatorMax = {
  __typename?: 'DtafTarifasDosTerminaisHidroviariosAggregatorMax';
  Classe_I?: Maybe<Scalars['Float']>;
  Classe_II?: Maybe<Scalars['Float']>;
  Classe_III?: Maybe<Scalars['Float']>;
  Classe_IV?: Maybe<Scalars['Float']>;
  Obs_Classe_I?: Maybe<Scalars['Float']>;
  Obs_Classe_II?: Maybe<Scalars['Float']>;
  Obs_Classe_III?: Maybe<Scalars['Float']>;
  Obs_Classe_IV?: Maybe<Scalars['Float']>;
};

export type DtafTarifasDosTerminaisHidroviariosAggregatorMin = {
  __typename?: 'DtafTarifasDosTerminaisHidroviariosAggregatorMin';
  Classe_I?: Maybe<Scalars['Float']>;
  Classe_II?: Maybe<Scalars['Float']>;
  Classe_III?: Maybe<Scalars['Float']>;
  Classe_IV?: Maybe<Scalars['Float']>;
  Obs_Classe_I?: Maybe<Scalars['Float']>;
  Obs_Classe_II?: Maybe<Scalars['Float']>;
  Obs_Classe_III?: Maybe<Scalars['Float']>;
  Obs_Classe_IV?: Maybe<Scalars['Float']>;
};

export type DtafTarifasDosTerminaisHidroviariosAggregatorSum = {
  __typename?: 'DtafTarifasDosTerminaisHidroviariosAggregatorSum';
  Classe_I?: Maybe<Scalars['Float']>;
  Classe_II?: Maybe<Scalars['Float']>;
  Classe_III?: Maybe<Scalars['Float']>;
  Classe_IV?: Maybe<Scalars['Float']>;
  Obs_Classe_I?: Maybe<Scalars['Float']>;
  Obs_Classe_II?: Maybe<Scalars['Float']>;
  Obs_Classe_III?: Maybe<Scalars['Float']>;
  Obs_Classe_IV?: Maybe<Scalars['Float']>;
};

export type DtafTarifasDosTerminaisHidroviariosConnection = {
  __typename?: 'DtafTarifasDosTerminaisHidroviariosConnection';
  aggregate?: Maybe<DtafTarifasDosTerminaisHidroviariosAggregator>;
  groupBy?: Maybe<DtafTarifasDosTerminaisHidroviariosGroupBy>;
  values?: Maybe<Array<Maybe<DtafTarifasDosTerminaisHidroviarios>>>;
};

export type DtafTarifasDosTerminaisHidroviariosConnectionClasse_I = {
  __typename?: 'DtafTarifasDosTerminaisHidroviariosConnectionClasse_I';
  connection?: Maybe<DtafTarifasDosTerminaisHidroviariosConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type DtafTarifasDosTerminaisHidroviariosConnectionClasse_Ii = {
  __typename?: 'DtafTarifasDosTerminaisHidroviariosConnectionClasse_II';
  connection?: Maybe<DtafTarifasDosTerminaisHidroviariosConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type DtafTarifasDosTerminaisHidroviariosConnectionClasse_Iii = {
  __typename?: 'DtafTarifasDosTerminaisHidroviariosConnectionClasse_III';
  connection?: Maybe<DtafTarifasDosTerminaisHidroviariosConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type DtafTarifasDosTerminaisHidroviariosConnectionClasse_Iv = {
  __typename?: 'DtafTarifasDosTerminaisHidroviariosConnectionClasse_IV';
  connection?: Maybe<DtafTarifasDosTerminaisHidroviariosConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type DtafTarifasDosTerminaisHidroviariosConnectionCreated_At = {
  __typename?: 'DtafTarifasDosTerminaisHidroviariosConnectionCreated_at';
  connection?: Maybe<DtafTarifasDosTerminaisHidroviariosConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type DtafTarifasDosTerminaisHidroviariosConnectionId = {
  __typename?: 'DtafTarifasDosTerminaisHidroviariosConnectionId';
  connection?: Maybe<DtafTarifasDosTerminaisHidroviariosConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type DtafTarifasDosTerminaisHidroviariosConnectionObs_Classe_I = {
  __typename?: 'DtafTarifasDosTerminaisHidroviariosConnectionObs_Classe_I';
  connection?: Maybe<DtafTarifasDosTerminaisHidroviariosConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type DtafTarifasDosTerminaisHidroviariosConnectionObs_Classe_Ii = {
  __typename?: 'DtafTarifasDosTerminaisHidroviariosConnectionObs_Classe_II';
  connection?: Maybe<DtafTarifasDosTerminaisHidroviariosConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type DtafTarifasDosTerminaisHidroviariosConnectionObs_Classe_Iii = {
  __typename?: 'DtafTarifasDosTerminaisHidroviariosConnectionObs_Classe_III';
  connection?: Maybe<DtafTarifasDosTerminaisHidroviariosConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type DtafTarifasDosTerminaisHidroviariosConnectionObs_Classe_Iv = {
  __typename?: 'DtafTarifasDosTerminaisHidroviariosConnectionObs_Classe_IV';
  connection?: Maybe<DtafTarifasDosTerminaisHidroviariosConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type DtafTarifasDosTerminaisHidroviariosConnectionPublished_At = {
  __typename?: 'DtafTarifasDosTerminaisHidroviariosConnectionPublished_at';
  connection?: Maybe<DtafTarifasDosTerminaisHidroviariosConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type DtafTarifasDosTerminaisHidroviariosConnectionUpdated_At = {
  __typename?: 'DtafTarifasDosTerminaisHidroviariosConnectionUpdated_at';
  connection?: Maybe<DtafTarifasDosTerminaisHidroviariosConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type DtafTarifasDosTerminaisHidroviariosGroupBy = {
  __typename?: 'DtafTarifasDosTerminaisHidroviariosGroupBy';
  Classe_I?: Maybe<Array<Maybe<DtafTarifasDosTerminaisHidroviariosConnectionClasse_I>>>;
  Classe_II?: Maybe<Array<Maybe<DtafTarifasDosTerminaisHidroviariosConnectionClasse_Ii>>>;
  Classe_III?: Maybe<Array<Maybe<DtafTarifasDosTerminaisHidroviariosConnectionClasse_Iii>>>;
  Classe_IV?: Maybe<Array<Maybe<DtafTarifasDosTerminaisHidroviariosConnectionClasse_Iv>>>;
  Obs_Classe_I?: Maybe<Array<Maybe<DtafTarifasDosTerminaisHidroviariosConnectionObs_Classe_I>>>;
  Obs_Classe_II?: Maybe<Array<Maybe<DtafTarifasDosTerminaisHidroviariosConnectionObs_Classe_Ii>>>;
  Obs_Classe_III?: Maybe<Array<Maybe<DtafTarifasDosTerminaisHidroviariosConnectionObs_Classe_Iii>>>;
  Obs_Classe_IV?: Maybe<Array<Maybe<DtafTarifasDosTerminaisHidroviariosConnectionObs_Classe_Iv>>>;
  created_at?: Maybe<Array<Maybe<DtafTarifasDosTerminaisHidroviariosConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<DtafTarifasDosTerminaisHidroviariosConnectionId>>>;
  published_at?: Maybe<Array<Maybe<DtafTarifasDosTerminaisHidroviariosConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<DtafTarifasDosTerminaisHidroviariosConnectionUpdated_At>>>;
};

export enum Enum_Licitacoes_Tipo {
  Online = 'Online',
  Presencial = 'Presencial'
}

export enum Enum_Ngctthtransporteshidroviarios_Terminal {
  Catamara = 'catamara',
  Ferryboat = 'ferryboat',
  Lanchinha = 'lanchinha'
}

export enum Enum_Noticias_Cor_Da_Fonte {
  Black = 'black',
  Blue = 'blue',
  Pink = 'pink',
  White = 'white',
  Yellow = 'yellow'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  size: Scalars['Float'];
  updated_by?: InputMaybe<Scalars['ID']>;
  url: Scalars['String'];
  width?: InputMaybe<Scalars['Int']>;
};

export type Gas = {
  __typename?: 'Gas';
  created_at: Scalars['DateTime'];
  direitos_e_deveres?: Maybe<Scalars['String']>;
  energia_eletrica_e_gas_natural?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  legislacoes?: Maybe<Scalars['String']>;
  nucleo_de_gas?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
};

export type GasInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  direitos_e_deveres?: InputMaybe<Scalars['String']>;
  energia_eletrica_e_gas_natural?: InputMaybe<Scalars['String']>;
  legislacoes?: InputMaybe<Scalars['String']>;
  nucleo_de_gas?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type InputId = {
  id: Scalars['ID'];
};

export type LicitacoeInput = {
  Description: Scalars['String'];
  Documentos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  Local?: InputMaybe<Scalars['String']>;
  SubTitulo?: InputMaybe<Scalars['String']>;
  Tipo: Enum_Licitacoes_Tipo;
  Title: Scalars['String'];
  created_by?: InputMaybe<Scalars['ID']>;
  dataHora?: InputMaybe<Scalars['DateTime']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  url_destino?: InputMaybe<Scalars['String']>;
};

export type Licitacoes = {
  __typename?: 'Licitacoes';
  Description: Scalars['String'];
  Documentos?: Maybe<Array<Maybe<UploadFile>>>;
  Local?: Maybe<Scalars['String']>;
  SubTitulo?: Maybe<Scalars['String']>;
  Tipo: Enum_Licitacoes_Tipo;
  Title: Scalars['String'];
  created_at: Scalars['DateTime'];
  dataHora?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
  url_destino?: Maybe<Scalars['String']>;
};


export type LicitacoesDocumentosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type LicitacoesAggregator = {
  __typename?: 'LicitacoesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type LicitacoesConnection = {
  __typename?: 'LicitacoesConnection';
  aggregate?: Maybe<LicitacoesAggregator>;
  groupBy?: Maybe<LicitacoesGroupBy>;
  values?: Maybe<Array<Maybe<Licitacoes>>>;
};

export type LicitacoesConnectionCreated_At = {
  __typename?: 'LicitacoesConnectionCreated_at';
  connection?: Maybe<LicitacoesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type LicitacoesConnectionDataHora = {
  __typename?: 'LicitacoesConnectionDataHora';
  connection?: Maybe<LicitacoesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type LicitacoesConnectionDescription = {
  __typename?: 'LicitacoesConnectionDescription';
  connection?: Maybe<LicitacoesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type LicitacoesConnectionId = {
  __typename?: 'LicitacoesConnectionId';
  connection?: Maybe<LicitacoesConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type LicitacoesConnectionLocal = {
  __typename?: 'LicitacoesConnectionLocal';
  connection?: Maybe<LicitacoesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type LicitacoesConnectionPublished_At = {
  __typename?: 'LicitacoesConnectionPublished_at';
  connection?: Maybe<LicitacoesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type LicitacoesConnectionSubTitulo = {
  __typename?: 'LicitacoesConnectionSubTitulo';
  connection?: Maybe<LicitacoesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type LicitacoesConnectionTipo = {
  __typename?: 'LicitacoesConnectionTipo';
  connection?: Maybe<LicitacoesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type LicitacoesConnectionTitle = {
  __typename?: 'LicitacoesConnectionTitle';
  connection?: Maybe<LicitacoesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type LicitacoesConnectionUpdated_At = {
  __typename?: 'LicitacoesConnectionUpdated_at';
  connection?: Maybe<LicitacoesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type LicitacoesConnectionUrl_Destino = {
  __typename?: 'LicitacoesConnectionUrl_destino';
  connection?: Maybe<LicitacoesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type LicitacoesGroupBy = {
  __typename?: 'LicitacoesGroupBy';
  Description?: Maybe<Array<Maybe<LicitacoesConnectionDescription>>>;
  Local?: Maybe<Array<Maybe<LicitacoesConnectionLocal>>>;
  SubTitulo?: Maybe<Array<Maybe<LicitacoesConnectionSubTitulo>>>;
  Tipo?: Maybe<Array<Maybe<LicitacoesConnectionTipo>>>;
  Title?: Maybe<Array<Maybe<LicitacoesConnectionTitle>>>;
  created_at?: Maybe<Array<Maybe<LicitacoesConnectionCreated_At>>>;
  dataHora?: Maybe<Array<Maybe<LicitacoesConnectionDataHora>>>;
  id?: Maybe<Array<Maybe<LicitacoesConnectionId>>>;
  published_at?: Maybe<Array<Maybe<LicitacoesConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<LicitacoesConnectionUpdated_At>>>;
  url_destino?: Maybe<Array<Maybe<LicitacoesConnectionUrl_Destino>>>;
};

export type LocaleInput = {
  code?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Morph = AscomCartilhas | AscomCartilhasAggregator | AscomCartilhasConnection | AscomCartilhasConnectionAno | AscomCartilhasConnectionCartilha | AscomCartilhasConnectionCreated_At | AscomCartilhasConnectionId | AscomCartilhasConnectionPublished_At | AscomCartilhasConnectionTitulo | AscomCartilhasConnectionUpdated_At | AscomCartilhasGroupBy | AscomFaq | AscomFaqAggregator | AscomFaqConnection | AscomFaqConnectionCreated_At | AscomFaqConnectionId | AscomFaqConnectionPergunta | AscomFaqConnectionPublished_At | AscomFaqConnectionResposta | AscomFaqConnectionUpdated_At | AscomFaqGroupBy | AtasDeColegiado | AtasDeColegiadoAggregator | AtasDeColegiadoConnection | AtasDeColegiadoConnectionCreated_At | AtasDeColegiadoConnectionData | AtasDeColegiadoConnectionDescritption | AtasDeColegiadoConnectionId | AtasDeColegiadoConnectionPublished_At | AtasDeColegiadoConnectionTeste | AtasDeColegiadoConnectionTitulo | AtasDeColegiadoConnectionUpdated_At | AtasDeColegiadoGroupBy | AtasDeJulgamento | AtasDeJulgamentoAggregator | AtasDeJulgamentoConnection | AtasDeJulgamentoConnectionCreated_At | AtasDeJulgamentoConnectionData | AtasDeJulgamentoConnectionDescription | AtasDeJulgamentoConnectionId | AtasDeJulgamentoConnectionPublished_At | AtasDeJulgamentoConnectionTitulo | AtasDeJulgamentoConnectionUpdated_At | AtasDeJulgamentoGroupBy | AudienciasPublicas | AudienciasPublicasAggregator | AudienciasPublicasConnection | AudienciasPublicasConnectionComunica | AudienciasPublicasConnectionCreated_At | AudienciasPublicasConnectionData | AudienciasPublicasConnectionEncerramento | AudienciasPublicasConnectionId | AudienciasPublicasConnectionLocal | AudienciasPublicasConnectionParticipacao | AudienciasPublicasConnectionPublished_At | AudienciasPublicasConnectionTitulo | AudienciasPublicasConnectionUpdated_At | AudienciasPublicasGroupBy | ComapContratosCovid | ComapContratosCovidAggregator | ComapContratosCovidConnection | ComapContratosCovidConnectionCreated_At | ComapContratosCovidConnectionId | ComapContratosCovidConnectionPreambulo | ComapContratosCovidConnectionPublished_At | ComapContratosCovidConnectionUpdated_At | ComapContratosCovidGroupBy | ComponentAditivoAditivos | ComponentCalendarCalendario | ComponentConcessaoConcessao | ComponentContentContent | ComponentContratosContratos | ComponentDataHoraDataHora | ComponentDocumentDoc | ComponentEditalEdital | ComponentPenalidadePenalidade | ComponentServiceServices | ComponentSobreAConcessionariaSobreAConcessionaria | ComponentTagsTags | ComponentTarifasTarifa | ComponentTarifasTerminais | ComponentTaxaTaxas | ComponentTerminaisHidroviariosTerminaisHidroviarios | ConsultasPublicas | ConsultasPublicasAggregator | ConsultasPublicasConnection | ConsultasPublicasConnectionComunica | ConsultasPublicasConnectionCreated_At | ConsultasPublicasConnectionData | ConsultasPublicasConnectionEncerramento | ConsultasPublicasConnectionId | ConsultasPublicasConnectionParticipacao | ConsultasPublicasConnectionPublished_At | ConsultasPublicasConnectionTitulo | ConsultasPublicasConnectionUpdated_At | ConsultasPublicasGroupBy | CsjriInformeDeJulgamento | CsjriInformeDeJulgamentoAggregator | CsjriInformeDeJulgamentoConnection | CsjriInformeDeJulgamentoConnectionCreated_At | CsjriInformeDeJulgamentoConnectionData | CsjriInformeDeJulgamentoConnectionDescription | CsjriInformeDeJulgamentoConnectionId | CsjriInformeDeJulgamentoConnectionPublished_At | CsjriInformeDeJulgamentoConnectionTitulo | CsjriInformeDeJulgamentoConnectionUpdated_At | CsjriInformeDeJulgamentoGroupBy | CsjriInformesDeJulgamento | DfisLicencasEspeciais | DfisVistorias | DpseCadastro | DtafTarifasDosTerminaisHidroviarios | DtafTarifasDosTerminaisHidroviariosAggregator | DtafTarifasDosTerminaisHidroviariosAggregatorAvg | DtafTarifasDosTerminaisHidroviariosAggregatorMax | DtafTarifasDosTerminaisHidroviariosAggregatorMin | DtafTarifasDosTerminaisHidroviariosAggregatorSum | DtafTarifasDosTerminaisHidroviariosConnection | DtafTarifasDosTerminaisHidroviariosConnectionClasse_I | DtafTarifasDosTerminaisHidroviariosConnectionClasse_Ii | DtafTarifasDosTerminaisHidroviariosConnectionClasse_Iii | DtafTarifasDosTerminaisHidroviariosConnectionClasse_Iv | DtafTarifasDosTerminaisHidroviariosConnectionCreated_At | DtafTarifasDosTerminaisHidroviariosConnectionId | DtafTarifasDosTerminaisHidroviariosConnectionObs_Classe_I | DtafTarifasDosTerminaisHidroviariosConnectionObs_Classe_Ii | DtafTarifasDosTerminaisHidroviariosConnectionObs_Classe_Iii | DtafTarifasDosTerminaisHidroviariosConnectionObs_Classe_Iv | DtafTarifasDosTerminaisHidroviariosConnectionPublished_At | DtafTarifasDosTerminaisHidroviariosConnectionUpdated_At | DtafTarifasDosTerminaisHidroviariosGroupBy | Gas | I18NLocale | Licitacoes | LicitacoesAggregator | LicitacoesConnection | LicitacoesConnectionCreated_At | LicitacoesConnectionDataHora | LicitacoesConnectionDescription | LicitacoesConnectionId | LicitacoesConnectionLocal | LicitacoesConnectionPublished_At | LicitacoesConnectionSubTitulo | LicitacoesConnectionTipo | LicitacoesConnectionTitle | LicitacoesConnectionUpdated_At | LicitacoesConnectionUrl_Destino | LicitacoesGroupBy | NgctthTransportesHidroviarios | NgctthTransportesHidroviariosAggregator | NgctthTransportesHidroviariosConnection | NgctthTransportesHidroviariosConnectionContrato | NgctthTransportesHidroviariosConnectionCreated_At | NgctthTransportesHidroviariosConnectionEmail | NgctthTransportesHidroviariosConnectionEmpresa | NgctthTransportesHidroviariosConnectionEndereco | NgctthTransportesHidroviariosConnectionId | NgctthTransportesHidroviariosConnectionPublished_At | NgctthTransportesHidroviariosConnectionTelefone | NgctthTransportesHidroviariosConnectionTerminal | NgctthTransportesHidroviariosConnectionUpdated_At | NgctthTransportesHidroviariosGroupBy | Noticias | NoticiasAggregator | NoticiasConnection | NoticiasConnectionAlternativo | NoticiasConnectionApoio | NoticiasConnectionCor_Da_Fonte | NoticiasConnectionCreated_At | NoticiasConnectionData | NoticiasConnectionDestaque | NoticiasConnectionFonte_Foto | NoticiasConnectionId | NoticiasConnectionMateria | NoticiasConnectionPublished_At | NoticiasConnectionTipo | NoticiasConnectionTitulo | NoticiasConnectionUpdated_At | NoticiasGroupBy | NoticiasUrgentes | NoticiasUrgentesAggregator | NoticiasUrgentesConnection | NoticiasUrgentesConnectionCreated_At | NoticiasUrgentesConnectionId | NoticiasUrgentesConnectionPublished_At | NoticiasUrgentesConnectionTitulo | NoticiasUrgentesConnectionUpdated_At | NoticiasUrgentesConnectionUrl | NoticiasUrgentesGroupBy | Ouvidoria | Paginas | PaginasAggregator | PaginasConnection | PaginasConnectionContent | PaginasConnectionCreated_At | PaginasConnectionId | PaginasConnectionPublished_At | PaginasConnectionTitulo | PaginasConnectionUpdated_At | PaginasConnectionUrl | PaginasGroupBy | Penalidaddes | PenalidaddesAggregator | PenalidaddesConnection | PenalidaddesConnectionCreated_At | PenalidaddesConnectionId | PenalidaddesConnectionPublished_At | PenalidaddesConnectionTitulo | PenalidaddesConnectionUpdated_At | PenalidaddesGroupBy | Resolucoes | ResolucoesAggregator | ResolucoesConnection | ResolucoesConnectionCreated_At | ResolucoesConnectionData | ResolucoesConnectionEmenta | ResolucoesConnectionId | ResolucoesConnectionPublished_At | ResolucoesConnectionSub_Tipo_De_Resolucao | ResolucoesConnectionTipos_De_Resolucoe | ResolucoesConnectionTitulo | ResolucoesConnectionUpdated_At | ResolucoesGroupBy | Rodovias | RodoviasAggregator | RodoviasConnection | RodoviasConnectionCreated_At | RodoviasConnectionId | RodoviasConnectionNome | RodoviasConnectionPublished_At | RodoviasConnectionTermo_De_Subrogacao | RodoviasConnectionUpdated_At | RodoviasGroupBy | Servicos | ServicosAggregator | ServicosConnection | ServicosConnectionCreated_At | ServicosConnectionId | ServicosConnectionPublished_At | ServicosConnectionTitle | ServicosConnectionTitulo | ServicosConnectionUpdated_At | ServicosGroupBy | SubTipoDeResolucao | SubTipoDeResolucaoAggregator | SubTipoDeResolucaoConnection | SubTipoDeResolucaoConnectionCreated_At | SubTipoDeResolucaoConnectionId | SubTipoDeResolucaoConnectionPublished_At | SubTipoDeResolucaoConnectionSubTipo | SubTipoDeResolucaoConnectionUpdated_At | SubTipoDeResolucaoGroupBy | TarifasDasRodovias | TarifasDasRodoviasAggregator | TarifasDasRodoviasConnection | TarifasDasRodoviasConnectionCreated_At | TarifasDasRodoviasConnectionId | TarifasDasRodoviasConnectionPublished_At | TarifasDasRodoviasConnectionRodovia | TarifasDasRodoviasConnectionUpdated_At | TarifasDasRodoviasGroupBy | TarifasDosTerminaisRodoviarios | TarifasDosTerminaisRodoviariosAggregator | TarifasDosTerminaisRodoviariosAggregatorAvg | TarifasDosTerminaisRodoviariosAggregatorMax | TarifasDosTerminaisRodoviariosAggregatorMin | TarifasDosTerminaisRodoviariosAggregatorSum | TarifasDosTerminaisRodoviariosConnection | TarifasDosTerminaisRodoviariosConnectionCreated_At | TarifasDosTerminaisRodoviariosConnectionId | TarifasDosTerminaisRodoviariosConnectionObs_Classe_I | TarifasDosTerminaisRodoviariosConnectionObs_Classe_Ii | TarifasDosTerminaisRodoviariosConnectionObs_Classe_Iii | TarifasDosTerminaisRodoviariosConnectionObs_Classe_Iv | TarifasDosTerminaisRodoviariosConnectionPublished_At | TarifasDosTerminaisRodoviariosConnectionUpdated_At | TarifasDosTerminaisRodoviariosGroupBy | TaxasEValores | TaxasEValoresAggregator | TaxasEValoresConnection | TaxasEValoresConnectionCreated_At | TaxasEValoresConnectionId | TaxasEValoresConnectionNome | TaxasEValoresConnectionPublished_At | TaxasEValoresConnectionUpdated_At | TaxasEValoresGroupBy | TerminaisAeroviarios | TerminaisAeroviariosAggregator | TerminaisAeroviariosConnection | TerminaisAeroviariosConnectionContrato | TerminaisAeroviariosConnectionCreated_At | TerminaisAeroviariosConnectionEmail | TerminaisAeroviariosConnectionId | TerminaisAeroviariosConnectionPublished_At | TerminaisAeroviariosConnectionTelefone | TerminaisAeroviariosConnectionTerminal | TerminaisAeroviariosConnectionUpdated_At | TerminaisAeroviariosGroupBy | TerminaisHidroviarios | TerminaisHidroviariosAggregator | TerminaisHidroviariosConnection | TerminaisHidroviariosConnectionContrato | TerminaisHidroviariosConnectionCreated_At | TerminaisHidroviariosConnectionEmail | TerminaisHidroviariosConnectionId | TerminaisHidroviariosConnectionPublished_At | TerminaisHidroviariosConnectionTelefone | TerminaisHidroviariosConnectionTerminal | TerminaisHidroviariosConnectionUpdated_At | TerminaisHidroviariosGroupBy | TerminaisRodoviarios | TerminaisRodoviariosAggregator | TerminaisRodoviariosConnection | TerminaisRodoviariosConnectionContrato | TerminaisRodoviariosConnectionCreated_At | TerminaisRodoviariosConnectionEmail | TerminaisRodoviariosConnectionId | TerminaisRodoviariosConnectionPublished_At | TerminaisRodoviariosConnectionTelefone | TerminaisRodoviariosConnectionTerminal | TerminaisRodoviariosConnectionUpdated_At | TerminaisRodoviariosGroupBy | Teste | TesteAggregator | TesteConnection | TesteConnectionCreated_At | TesteConnectionId | TesteConnectionPublished_At | TesteConnectionTeste | TesteConnectionTestetttt | TesteConnectionUpdated_At | TesteGroupBy | TiposDeResolucoes | TiposDeResolucoesAggregator | TiposDeResolucoesConnection | TiposDeResolucoesConnectionCreated_At | TiposDeResolucoesConnectionId | TiposDeResolucoesConnectionPublished_At | TiposDeResolucoesConnectionTipo | TiposDeResolucoesConnectionUpdated_At | TiposDeResolucoesGroupBy | UploadFile | UploadFileAggregator | UploadFileAggregatorAvg | UploadFileAggregatorMax | UploadFileAggregatorMin | UploadFileAggregatorSum | UploadFileConnection | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionCreated_At | UploadFileConnectionExt | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionHeight | UploadFileConnectionId | UploadFileConnectionMime | UploadFileConnectionName | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | UploadFileConnectionSize | UploadFileConnectionUpdated_At | UploadFileConnectionUrl | UploadFileConnectionWidth | UploadFileGroupBy | UserPermissionsPasswordPayload | UsersPermissionsLoginPayload | UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleAggregator | UsersPermissionsRoleConnection | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionType | UsersPermissionsRoleGroupBy | UsersPermissionsUser | UsersPermissionsUserAggregator | UsersPermissionsUserConnection | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserGroupBy | CreateAscomCartilhaPayload | CreateAscomFaqPayload | CreateAtasDeColegiadoPayload | CreateAtasDeJulgamentoPayload | CreateAudienciasPublicaPayload | CreateComapContratosCovidPayload | CreateConsultasPublicaPayload | CreateCsjriInformeDeJulgamentoPayload | CreateDtafTarifasDosTerminaisHidroviarioPayload | CreateLicitacoePayload | CreateNgctthTransportesHidroviarioPayload | CreateNoticiaPayload | CreateNoticiasUrgentePayload | CreatePaginaPayload | CreatePenalidaddePayload | CreateResolucoePayload | CreateRodoviaPayload | CreateRolePayload | CreateServicoPayload | CreateSubTipoDeResolucaoPayload | CreateTarifasDasRodoviaPayload | CreateTarifasDosTerminaisRodoviarioPayload | CreateTaxasEValorePayload | CreateTerminaisAeroviarioPayload | CreateTerminaisHidroviarioPayload | CreateTerminaisRodoviarioPayload | CreateTestePayload | CreateTiposDeResolucoePayload | CreateUserPayload | DeleteAscomCartilhaPayload | DeleteAscomFaqPayload | DeleteAtasDeColegiadoPayload | DeleteAtasDeJulgamentoPayload | DeleteAudienciasPublicaPayload | DeleteComapContratosCovidPayload | DeleteConsultasPublicaPayload | DeleteCsjriInformeDeJulgamentoPayload | DeleteCsjriInformesDeJulgamentoPayload | DeleteDfisLicencasEspeciaiPayload | DeleteDfisVistoriaPayload | DeleteDpseCadastroPayload | DeleteDtafTarifasDosTerminaisHidroviarioPayload | DeleteFilePayload | DeleteGasPayload | DeleteLicitacoePayload | DeleteNgctthTransportesHidroviarioPayload | DeleteNoticiaPayload | DeleteNoticiasUrgentePayload | DeleteOuvidoriaPayload | DeletePaginaPayload | DeletePenalidaddePayload | DeleteResolucoePayload | DeleteRodoviaPayload | DeleteRolePayload | DeleteServicoPayload | DeleteSubTipoDeResolucaoPayload | DeleteTarifasDasRodoviaPayload | DeleteTarifasDosTerminaisRodoviarioPayload | DeleteTaxasEValorePayload | DeleteTerminaisAeroviarioPayload | DeleteTerminaisHidroviarioPayload | DeleteTerminaisRodoviarioPayload | DeleteTestePayload | DeleteTiposDeResolucoePayload | DeleteUserPayload | UpdateAscomCartilhaPayload | UpdateAscomFaqPayload | UpdateAtasDeColegiadoPayload | UpdateAtasDeJulgamentoPayload | UpdateAudienciasPublicaPayload | UpdateComapContratosCovidPayload | UpdateConsultasPublicaPayload | UpdateCsjriInformeDeJulgamentoPayload | UpdateCsjriInformesDeJulgamentoPayload | UpdateDfisLicencasEspeciaiPayload | UpdateDfisVistoriaPayload | UpdateDpseCadastroPayload | UpdateDtafTarifasDosTerminaisHidroviarioPayload | UpdateGasPayload | UpdateLicitacoePayload | UpdateNgctthTransportesHidroviarioPayload | UpdateNoticiaPayload | UpdateNoticiasUrgentePayload | UpdateOuvidoriaPayload | UpdatePaginaPayload | UpdatePenalidaddePayload | UpdateResolucoePayload | UpdateRodoviaPayload | UpdateRolePayload | UpdateServicoPayload | UpdateSubTipoDeResolucaoPayload | UpdateTarifasDasRodoviaPayload | UpdateTarifasDosTerminaisRodoviarioPayload | UpdateTaxasEValorePayload | UpdateTerminaisAeroviarioPayload | UpdateTerminaisHidroviarioPayload | UpdateTerminaisRodoviarioPayload | UpdateTestePayload | UpdateTiposDeResolucoePayload | UpdateUserPayload;

export type Mutation = {
  __typename?: 'Mutation';
  createAscomCartilha?: Maybe<CreateAscomCartilhaPayload>;
  createAscomFaq?: Maybe<CreateAscomFaqPayload>;
  createAtasDeColegiado?: Maybe<CreateAtasDeColegiadoPayload>;
  createAtasDeJulgamento?: Maybe<CreateAtasDeJulgamentoPayload>;
  createAudienciasPublica?: Maybe<CreateAudienciasPublicaPayload>;
  createComapContratosCovid?: Maybe<CreateComapContratosCovidPayload>;
  createConsultasPublica?: Maybe<CreateConsultasPublicaPayload>;
  createCsjriInformeDeJulgamento?: Maybe<CreateCsjriInformeDeJulgamentoPayload>;
  createDtafTarifasDosTerminaisHidroviario?: Maybe<CreateDtafTarifasDosTerminaisHidroviarioPayload>;
  createLicitacoe?: Maybe<CreateLicitacoePayload>;
  createNgctthTransportesHidroviario?: Maybe<CreateNgctthTransportesHidroviarioPayload>;
  createNoticia?: Maybe<CreateNoticiaPayload>;
  createNoticiasUrgente?: Maybe<CreateNoticiasUrgentePayload>;
  createPagina?: Maybe<CreatePaginaPayload>;
  createPenalidadde?: Maybe<CreatePenalidaddePayload>;
  createResolucoe?: Maybe<CreateResolucoePayload>;
  createRodovia?: Maybe<CreateRodoviaPayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  createServico?: Maybe<CreateServicoPayload>;
  createSubTipoDeResolucao?: Maybe<CreateSubTipoDeResolucaoPayload>;
  createTarifasDasRodovia?: Maybe<CreateTarifasDasRodoviaPayload>;
  createTarifasDosTerminaisRodoviario?: Maybe<CreateTarifasDosTerminaisRodoviarioPayload>;
  createTaxasEValore?: Maybe<CreateTaxasEValorePayload>;
  createTerminaisAeroviario?: Maybe<CreateTerminaisAeroviarioPayload>;
  createTerminaisHidroviario?: Maybe<CreateTerminaisHidroviarioPayload>;
  createTerminaisRodoviario?: Maybe<CreateTerminaisRodoviarioPayload>;
  createTeste?: Maybe<CreateTestePayload>;
  createTiposDeResolucoe?: Maybe<CreateTiposDeResolucoePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  deleteAscomCartilha?: Maybe<DeleteAscomCartilhaPayload>;
  deleteAscomFaq?: Maybe<DeleteAscomFaqPayload>;
  deleteAtasDeColegiado?: Maybe<DeleteAtasDeColegiadoPayload>;
  deleteAtasDeJulgamento?: Maybe<DeleteAtasDeJulgamentoPayload>;
  deleteAudienciasPublica?: Maybe<DeleteAudienciasPublicaPayload>;
  deleteComapContratosCovid?: Maybe<DeleteComapContratosCovidPayload>;
  deleteConsultasPublica?: Maybe<DeleteConsultasPublicaPayload>;
  deleteCsjriInformeDeJulgamento?: Maybe<DeleteCsjriInformeDeJulgamentoPayload>;
  deleteCsjriInformesDeJulgamento?: Maybe<DeleteCsjriInformesDeJulgamentoPayload>;
  deleteDfisLicencasEspeciai?: Maybe<DeleteDfisLicencasEspeciaiPayload>;
  deleteDfisVistoria?: Maybe<DeleteDfisVistoriaPayload>;
  deleteDpseCadastro?: Maybe<DeleteDpseCadastroPayload>;
  deleteDtafTarifasDosTerminaisHidroviario?: Maybe<DeleteDtafTarifasDosTerminaisHidroviarioPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  deleteGas?: Maybe<DeleteGasPayload>;
  deleteLicitacoe?: Maybe<DeleteLicitacoePayload>;
  deleteNgctthTransportesHidroviario?: Maybe<DeleteNgctthTransportesHidroviarioPayload>;
  deleteNoticia?: Maybe<DeleteNoticiaPayload>;
  deleteNoticiasUrgente?: Maybe<DeleteNoticiasUrgentePayload>;
  deleteOuvidoria?: Maybe<DeleteOuvidoriaPayload>;
  deletePagina?: Maybe<DeletePaginaPayload>;
  deletePenalidadde?: Maybe<DeletePenalidaddePayload>;
  deleteResolucoe?: Maybe<DeleteResolucoePayload>;
  deleteRodovia?: Maybe<DeleteRodoviaPayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  deleteServico?: Maybe<DeleteServicoPayload>;
  deleteSubTipoDeResolucao?: Maybe<DeleteSubTipoDeResolucaoPayload>;
  deleteTarifasDasRodovia?: Maybe<DeleteTarifasDasRodoviaPayload>;
  deleteTarifasDosTerminaisRodoviario?: Maybe<DeleteTarifasDosTerminaisRodoviarioPayload>;
  deleteTaxasEValore?: Maybe<DeleteTaxasEValorePayload>;
  deleteTerminaisAeroviario?: Maybe<DeleteTerminaisAeroviarioPayload>;
  deleteTerminaisHidroviario?: Maybe<DeleteTerminaisHidroviarioPayload>;
  deleteTerminaisRodoviario?: Maybe<DeleteTerminaisRodoviarioPayload>;
  deleteTeste?: Maybe<DeleteTestePayload>;
  deleteTiposDeResolucoe?: Maybe<DeleteTiposDeResolucoePayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFile>>;
  register: UsersPermissionsLoginPayload;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAscomCartilha?: Maybe<UpdateAscomCartilhaPayload>;
  updateAscomFaq?: Maybe<UpdateAscomFaqPayload>;
  updateAtasDeColegiado?: Maybe<UpdateAtasDeColegiadoPayload>;
  updateAtasDeJulgamento?: Maybe<UpdateAtasDeJulgamentoPayload>;
  updateAudienciasPublica?: Maybe<UpdateAudienciasPublicaPayload>;
  updateComapContratosCovid?: Maybe<UpdateComapContratosCovidPayload>;
  updateConsultasPublica?: Maybe<UpdateConsultasPublicaPayload>;
  updateCsjriInformeDeJulgamento?: Maybe<UpdateCsjriInformeDeJulgamentoPayload>;
  updateCsjriInformesDeJulgamento?: Maybe<UpdateCsjriInformesDeJulgamentoPayload>;
  updateDfisLicencasEspeciai?: Maybe<UpdateDfisLicencasEspeciaiPayload>;
  updateDfisVistoria?: Maybe<UpdateDfisVistoriaPayload>;
  updateDpseCadastro?: Maybe<UpdateDpseCadastroPayload>;
  updateDtafTarifasDosTerminaisHidroviario?: Maybe<UpdateDtafTarifasDosTerminaisHidroviarioPayload>;
  updateFileInfo: UploadFile;
  updateGas?: Maybe<UpdateGasPayload>;
  updateLicitacoe?: Maybe<UpdateLicitacoePayload>;
  updateNgctthTransportesHidroviario?: Maybe<UpdateNgctthTransportesHidroviarioPayload>;
  updateNoticia?: Maybe<UpdateNoticiaPayload>;
  updateNoticiasUrgente?: Maybe<UpdateNoticiasUrgentePayload>;
  updateOuvidoria?: Maybe<UpdateOuvidoriaPayload>;
  updatePagina?: Maybe<UpdatePaginaPayload>;
  updatePenalidadde?: Maybe<UpdatePenalidaddePayload>;
  updateResolucoe?: Maybe<UpdateResolucoePayload>;
  updateRodovia?: Maybe<UpdateRodoviaPayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  updateServico?: Maybe<UpdateServicoPayload>;
  updateSubTipoDeResolucao?: Maybe<UpdateSubTipoDeResolucaoPayload>;
  updateTarifasDasRodovia?: Maybe<UpdateTarifasDasRodoviaPayload>;
  updateTarifasDosTerminaisRodoviario?: Maybe<UpdateTarifasDosTerminaisRodoviarioPayload>;
  updateTaxasEValore?: Maybe<UpdateTaxasEValorePayload>;
  updateTerminaisAeroviario?: Maybe<UpdateTerminaisAeroviarioPayload>;
  updateTerminaisHidroviario?: Maybe<UpdateTerminaisHidroviarioPayload>;
  updateTerminaisRodoviario?: Maybe<UpdateTerminaisRodoviarioPayload>;
  updateTeste?: Maybe<UpdateTestePayload>;
  updateTiposDeResolucoe?: Maybe<UpdateTiposDeResolucoePayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  upload: UploadFile;
};


export type MutationCreateAscomCartilhaArgs = {
  input?: InputMaybe<CreateAscomCartilhaInput>;
};


export type MutationCreateAscomFaqArgs = {
  input?: InputMaybe<CreateAscomFaqInput>;
};


export type MutationCreateAtasDeColegiadoArgs = {
  input?: InputMaybe<CreateAtasDeColegiadoInput>;
};


export type MutationCreateAtasDeJulgamentoArgs = {
  input?: InputMaybe<CreateAtasDeJulgamentoInput>;
};


export type MutationCreateAudienciasPublicaArgs = {
  input?: InputMaybe<CreateAudienciasPublicaInput>;
};


export type MutationCreateComapContratosCovidArgs = {
  input?: InputMaybe<CreateComapContratosCovidInput>;
};


export type MutationCreateConsultasPublicaArgs = {
  input?: InputMaybe<CreateConsultasPublicaInput>;
};


export type MutationCreateCsjriInformeDeJulgamentoArgs = {
  input?: InputMaybe<CreateCsjriInformeDeJulgamentoInput>;
};


export type MutationCreateDtafTarifasDosTerminaisHidroviarioArgs = {
  input?: InputMaybe<CreateDtafTarifasDosTerminaisHidroviarioInput>;
};


export type MutationCreateLicitacoeArgs = {
  input?: InputMaybe<CreateLicitacoeInput>;
};


export type MutationCreateNgctthTransportesHidroviarioArgs = {
  input?: InputMaybe<CreateNgctthTransportesHidroviarioInput>;
};


export type MutationCreateNoticiaArgs = {
  input?: InputMaybe<CreateNoticiaInput>;
};


export type MutationCreateNoticiasUrgenteArgs = {
  input?: InputMaybe<CreateNoticiasUrgenteInput>;
};


export type MutationCreatePaginaArgs = {
  input?: InputMaybe<CreatePaginaInput>;
};


export type MutationCreatePenalidaddeArgs = {
  input?: InputMaybe<CreatePenalidaddeInput>;
};


export type MutationCreateResolucoeArgs = {
  input?: InputMaybe<CreateResolucoeInput>;
};


export type MutationCreateRodoviaArgs = {
  input?: InputMaybe<CreateRodoviaInput>;
};


export type MutationCreateRoleArgs = {
  input?: InputMaybe<CreateRoleInput>;
};


export type MutationCreateServicoArgs = {
  input?: InputMaybe<CreateServicoInput>;
};


export type MutationCreateSubTipoDeResolucaoArgs = {
  input?: InputMaybe<CreateSubTipoDeResolucaoInput>;
};


export type MutationCreateTarifasDasRodoviaArgs = {
  input?: InputMaybe<CreateTarifasDasRodoviaInput>;
};


export type MutationCreateTarifasDosTerminaisRodoviarioArgs = {
  input?: InputMaybe<CreateTarifasDosTerminaisRodoviarioInput>;
};


export type MutationCreateTaxasEValoreArgs = {
  input?: InputMaybe<CreateTaxasEValoreInput>;
};


export type MutationCreateTerminaisAeroviarioArgs = {
  input?: InputMaybe<CreateTerminaisAeroviarioInput>;
};


export type MutationCreateTerminaisHidroviarioArgs = {
  input?: InputMaybe<CreateTerminaisHidroviarioInput>;
};


export type MutationCreateTerminaisRodoviarioArgs = {
  input?: InputMaybe<CreateTerminaisRodoviarioInput>;
};


export type MutationCreateTesteArgs = {
  input?: InputMaybe<CreateTesteInput>;
};


export type MutationCreateTiposDeResolucoeArgs = {
  input?: InputMaybe<CreateTiposDeResolucoeInput>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};


export type MutationDeleteAscomCartilhaArgs = {
  input?: InputMaybe<DeleteAscomCartilhaInput>;
};


export type MutationDeleteAscomFaqArgs = {
  input?: InputMaybe<DeleteAscomFaqInput>;
};


export type MutationDeleteAtasDeColegiadoArgs = {
  input?: InputMaybe<DeleteAtasDeColegiadoInput>;
};


export type MutationDeleteAtasDeJulgamentoArgs = {
  input?: InputMaybe<DeleteAtasDeJulgamentoInput>;
};


export type MutationDeleteAudienciasPublicaArgs = {
  input?: InputMaybe<DeleteAudienciasPublicaInput>;
};


export type MutationDeleteComapContratosCovidArgs = {
  input?: InputMaybe<DeleteComapContratosCovidInput>;
};


export type MutationDeleteConsultasPublicaArgs = {
  input?: InputMaybe<DeleteConsultasPublicaInput>;
};


export type MutationDeleteCsjriInformeDeJulgamentoArgs = {
  input?: InputMaybe<DeleteCsjriInformeDeJulgamentoInput>;
};


export type MutationDeleteDtafTarifasDosTerminaisHidroviarioArgs = {
  input?: InputMaybe<DeleteDtafTarifasDosTerminaisHidroviarioInput>;
};


export type MutationDeleteFileArgs = {
  input?: InputMaybe<DeleteFileInput>;
};


export type MutationDeleteLicitacoeArgs = {
  input?: InputMaybe<DeleteLicitacoeInput>;
};


export type MutationDeleteNgctthTransportesHidroviarioArgs = {
  input?: InputMaybe<DeleteNgctthTransportesHidroviarioInput>;
};


export type MutationDeleteNoticiaArgs = {
  input?: InputMaybe<DeleteNoticiaInput>;
};


export type MutationDeleteNoticiasUrgenteArgs = {
  input?: InputMaybe<DeleteNoticiasUrgenteInput>;
};


export type MutationDeletePaginaArgs = {
  input?: InputMaybe<DeletePaginaInput>;
};


export type MutationDeletePenalidaddeArgs = {
  input?: InputMaybe<DeletePenalidaddeInput>;
};


export type MutationDeleteResolucoeArgs = {
  input?: InputMaybe<DeleteResolucoeInput>;
};


export type MutationDeleteRodoviaArgs = {
  input?: InputMaybe<DeleteRodoviaInput>;
};


export type MutationDeleteRoleArgs = {
  input?: InputMaybe<DeleteRoleInput>;
};


export type MutationDeleteServicoArgs = {
  input?: InputMaybe<DeleteServicoInput>;
};


export type MutationDeleteSubTipoDeResolucaoArgs = {
  input?: InputMaybe<DeleteSubTipoDeResolucaoInput>;
};


export type MutationDeleteTarifasDasRodoviaArgs = {
  input?: InputMaybe<DeleteTarifasDasRodoviaInput>;
};


export type MutationDeleteTarifasDosTerminaisRodoviarioArgs = {
  input?: InputMaybe<DeleteTarifasDosTerminaisRodoviarioInput>;
};


export type MutationDeleteTaxasEValoreArgs = {
  input?: InputMaybe<DeleteTaxasEValoreInput>;
};


export type MutationDeleteTerminaisAeroviarioArgs = {
  input?: InputMaybe<DeleteTerminaisAeroviarioInput>;
};


export type MutationDeleteTerminaisHidroviarioArgs = {
  input?: InputMaybe<DeleteTerminaisHidroviarioInput>;
};


export type MutationDeleteTerminaisRodoviarioArgs = {
  input?: InputMaybe<DeleteTerminaisRodoviarioInput>;
};


export type MutationDeleteTesteArgs = {
  input?: InputMaybe<DeleteTesteInput>;
};


export type MutationDeleteTiposDeResolucoeArgs = {
  input?: InputMaybe<DeleteTiposDeResolucoeInput>;
};


export type MutationDeleteUserArgs = {
  input?: InputMaybe<DeleteUserInput>;
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
  source?: InputMaybe<Scalars['String']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateAscomCartilhaArgs = {
  input?: InputMaybe<UpdateAscomCartilhaInput>;
};


export type MutationUpdateAscomFaqArgs = {
  input?: InputMaybe<UpdateAscomFaqInput>;
};


export type MutationUpdateAtasDeColegiadoArgs = {
  input?: InputMaybe<UpdateAtasDeColegiadoInput>;
};


export type MutationUpdateAtasDeJulgamentoArgs = {
  input?: InputMaybe<UpdateAtasDeJulgamentoInput>;
};


export type MutationUpdateAudienciasPublicaArgs = {
  input?: InputMaybe<UpdateAudienciasPublicaInput>;
};


export type MutationUpdateComapContratosCovidArgs = {
  input?: InputMaybe<UpdateComapContratosCovidInput>;
};


export type MutationUpdateConsultasPublicaArgs = {
  input?: InputMaybe<UpdateConsultasPublicaInput>;
};


export type MutationUpdateCsjriInformeDeJulgamentoArgs = {
  input?: InputMaybe<UpdateCsjriInformeDeJulgamentoInput>;
};


export type MutationUpdateCsjriInformesDeJulgamentoArgs = {
  input?: InputMaybe<UpdateCsjriInformesDeJulgamentoInput>;
};


export type MutationUpdateDfisLicencasEspeciaiArgs = {
  input?: InputMaybe<UpdateDfisLicencasEspeciaiInput>;
};


export type MutationUpdateDfisVistoriaArgs = {
  input?: InputMaybe<UpdateDfisVistoriaInput>;
};


export type MutationUpdateDpseCadastroArgs = {
  input?: InputMaybe<UpdateDpseCadastroInput>;
};


export type MutationUpdateDtafTarifasDosTerminaisHidroviarioArgs = {
  input?: InputMaybe<UpdateDtafTarifasDosTerminaisHidroviarioInput>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationUpdateGasArgs = {
  input?: InputMaybe<UpdateGasInput>;
};


export type MutationUpdateLicitacoeArgs = {
  input?: InputMaybe<UpdateLicitacoeInput>;
};


export type MutationUpdateNgctthTransportesHidroviarioArgs = {
  input?: InputMaybe<UpdateNgctthTransportesHidroviarioInput>;
};


export type MutationUpdateNoticiaArgs = {
  input?: InputMaybe<UpdateNoticiaInput>;
};


export type MutationUpdateNoticiasUrgenteArgs = {
  input?: InputMaybe<UpdateNoticiasUrgenteInput>;
};


export type MutationUpdateOuvidoriaArgs = {
  input?: InputMaybe<UpdateOuvidoriaInput>;
};


export type MutationUpdatePaginaArgs = {
  input?: InputMaybe<UpdatePaginaInput>;
};


export type MutationUpdatePenalidaddeArgs = {
  input?: InputMaybe<UpdatePenalidaddeInput>;
};


export type MutationUpdateResolucoeArgs = {
  input?: InputMaybe<UpdateResolucoeInput>;
};


export type MutationUpdateRodoviaArgs = {
  input?: InputMaybe<UpdateRodoviaInput>;
};


export type MutationUpdateRoleArgs = {
  input?: InputMaybe<UpdateRoleInput>;
};


export type MutationUpdateServicoArgs = {
  input?: InputMaybe<UpdateServicoInput>;
};


export type MutationUpdateSubTipoDeResolucaoArgs = {
  input?: InputMaybe<UpdateSubTipoDeResolucaoInput>;
};


export type MutationUpdateTarifasDasRodoviaArgs = {
  input?: InputMaybe<UpdateTarifasDasRodoviaInput>;
};


export type MutationUpdateTarifasDosTerminaisRodoviarioArgs = {
  input?: InputMaybe<UpdateTarifasDosTerminaisRodoviarioInput>;
};


export type MutationUpdateTaxasEValoreArgs = {
  input?: InputMaybe<UpdateTaxasEValoreInput>;
};


export type MutationUpdateTerminaisAeroviarioArgs = {
  input?: InputMaybe<UpdateTerminaisAeroviarioInput>;
};


export type MutationUpdateTerminaisHidroviarioArgs = {
  input?: InputMaybe<UpdateTerminaisHidroviarioInput>;
};


export type MutationUpdateTerminaisRodoviarioArgs = {
  input?: InputMaybe<UpdateTerminaisRodoviarioInput>;
};


export type MutationUpdateTesteArgs = {
  input?: InputMaybe<UpdateTesteInput>;
};


export type MutationUpdateTiposDeResolucoeArgs = {
  input?: InputMaybe<UpdateTiposDeResolucoeInput>;
};


export type MutationUpdateUserArgs = {
  input?: InputMaybe<UpdateUserInput>;
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
  source?: InputMaybe<Scalars['String']>;
};

export type NgctthTransportesHidroviarioInput = {
  aditivos?: InputMaybe<Array<InputMaybe<ComponentAditivoAditivoInput>>>;
  contrato?: InputMaybe<Scalars['ID']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email: Scalars['String'];
  empresa: Scalars['String'];
  endereco: Scalars['String'];
  published_at?: InputMaybe<Scalars['DateTime']>;
  telefone: Scalars['String'];
  terminal: Enum_Ngctthtransporteshidroviarios_Terminal;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type NgctthTransportesHidroviarios = {
  __typename?: 'NgctthTransportesHidroviarios';
  aditivos?: Maybe<Array<Maybe<ComponentAditivoAditivos>>>;
  contrato?: Maybe<UploadFile>;
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  empresa: Scalars['String'];
  endereco: Scalars['String'];
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  telefone: Scalars['String'];
  terminal: Enum_Ngctthtransporteshidroviarios_Terminal;
  updated_at: Scalars['DateTime'];
};

export type NgctthTransportesHidroviariosAggregator = {
  __typename?: 'NgctthTransportesHidroviariosAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type NgctthTransportesHidroviariosConnection = {
  __typename?: 'NgctthTransportesHidroviariosConnection';
  aggregate?: Maybe<NgctthTransportesHidroviariosAggregator>;
  groupBy?: Maybe<NgctthTransportesHidroviariosGroupBy>;
  values?: Maybe<Array<Maybe<NgctthTransportesHidroviarios>>>;
};

export type NgctthTransportesHidroviariosConnectionContrato = {
  __typename?: 'NgctthTransportesHidroviariosConnectionContrato';
  connection?: Maybe<NgctthTransportesHidroviariosConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type NgctthTransportesHidroviariosConnectionCreated_At = {
  __typename?: 'NgctthTransportesHidroviariosConnectionCreated_at';
  connection?: Maybe<NgctthTransportesHidroviariosConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type NgctthTransportesHidroviariosConnectionEmail = {
  __typename?: 'NgctthTransportesHidroviariosConnectionEmail';
  connection?: Maybe<NgctthTransportesHidroviariosConnection>;
  key?: Maybe<Scalars['String']>;
};

export type NgctthTransportesHidroviariosConnectionEmpresa = {
  __typename?: 'NgctthTransportesHidroviariosConnectionEmpresa';
  connection?: Maybe<NgctthTransportesHidroviariosConnection>;
  key?: Maybe<Scalars['String']>;
};

export type NgctthTransportesHidroviariosConnectionEndereco = {
  __typename?: 'NgctthTransportesHidroviariosConnectionEndereco';
  connection?: Maybe<NgctthTransportesHidroviariosConnection>;
  key?: Maybe<Scalars['String']>;
};

export type NgctthTransportesHidroviariosConnectionId = {
  __typename?: 'NgctthTransportesHidroviariosConnectionId';
  connection?: Maybe<NgctthTransportesHidroviariosConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type NgctthTransportesHidroviariosConnectionPublished_At = {
  __typename?: 'NgctthTransportesHidroviariosConnectionPublished_at';
  connection?: Maybe<NgctthTransportesHidroviariosConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type NgctthTransportesHidroviariosConnectionTelefone = {
  __typename?: 'NgctthTransportesHidroviariosConnectionTelefone';
  connection?: Maybe<NgctthTransportesHidroviariosConnection>;
  key?: Maybe<Scalars['String']>;
};

export type NgctthTransportesHidroviariosConnectionTerminal = {
  __typename?: 'NgctthTransportesHidroviariosConnectionTerminal';
  connection?: Maybe<NgctthTransportesHidroviariosConnection>;
  key?: Maybe<Scalars['String']>;
};

export type NgctthTransportesHidroviariosConnectionUpdated_At = {
  __typename?: 'NgctthTransportesHidroviariosConnectionUpdated_at';
  connection?: Maybe<NgctthTransportesHidroviariosConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type NgctthTransportesHidroviariosGroupBy = {
  __typename?: 'NgctthTransportesHidroviariosGroupBy';
  contrato?: Maybe<Array<Maybe<NgctthTransportesHidroviariosConnectionContrato>>>;
  created_at?: Maybe<Array<Maybe<NgctthTransportesHidroviariosConnectionCreated_At>>>;
  email?: Maybe<Array<Maybe<NgctthTransportesHidroviariosConnectionEmail>>>;
  empresa?: Maybe<Array<Maybe<NgctthTransportesHidroviariosConnectionEmpresa>>>;
  endereco?: Maybe<Array<Maybe<NgctthTransportesHidroviariosConnectionEndereco>>>;
  id?: Maybe<Array<Maybe<NgctthTransportesHidroviariosConnectionId>>>;
  published_at?: Maybe<Array<Maybe<NgctthTransportesHidroviariosConnectionPublished_At>>>;
  telefone?: Maybe<Array<Maybe<NgctthTransportesHidroviariosConnectionTelefone>>>;
  terminal?: Maybe<Array<Maybe<NgctthTransportesHidroviariosConnectionTerminal>>>;
  updated_at?: Maybe<Array<Maybe<NgctthTransportesHidroviariosConnectionUpdated_At>>>;
};

export type NoticiaInput = {
  Destaque?: InputMaybe<Scalars['Boolean']>;
  Imagem?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  Tags?: InputMaybe<Array<Scalars['NoticiasTagsDynamicZoneInput']>>;
  Titulo: Scalars['String'];
  alternativo?: InputMaybe<Scalars['String']>;
  apoio?: InputMaybe<Scalars['String']>;
  cor_da_fonte: Enum_Noticias_Cor_Da_Fonte;
  created_by?: InputMaybe<Scalars['ID']>;
  data?: InputMaybe<Scalars['Date']>;
  fonte_foto?: InputMaybe<Scalars['String']>;
  materia: Scalars['String'];
  published_at?: InputMaybe<Scalars['DateTime']>;
  tipo?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Noticias = {
  __typename?: 'Noticias';
  Destaque: Scalars['Boolean'];
  Imagem?: Maybe<Array<Maybe<UploadFile>>>;
  Tags?: Maybe<Array<Maybe<NoticiasTagsDynamicZone>>>;
  Titulo: Scalars['String'];
  alternativo?: Maybe<Scalars['String']>;
  apoio?: Maybe<Scalars['String']>;
  cor_da_fonte: Enum_Noticias_Cor_Da_Fonte;
  created_at: Scalars['DateTime'];
  data?: Maybe<Scalars['Date']>;
  fonte_foto?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  materia: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  tipo?: Maybe<TiposDeResolucoes>;
  updated_at: Scalars['DateTime'];
};


export type NoticiasImagemArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type NoticiasAggregator = {
  __typename?: 'NoticiasAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type NoticiasConnection = {
  __typename?: 'NoticiasConnection';
  aggregate?: Maybe<NoticiasAggregator>;
  groupBy?: Maybe<NoticiasGroupBy>;
  values?: Maybe<Array<Maybe<Noticias>>>;
};

export type NoticiasConnectionAlternativo = {
  __typename?: 'NoticiasConnectionAlternativo';
  connection?: Maybe<NoticiasConnection>;
  key?: Maybe<Scalars['String']>;
};

export type NoticiasConnectionApoio = {
  __typename?: 'NoticiasConnectionApoio';
  connection?: Maybe<NoticiasConnection>;
  key?: Maybe<Scalars['String']>;
};

export type NoticiasConnectionCor_Da_Fonte = {
  __typename?: 'NoticiasConnectionCor_da_fonte';
  connection?: Maybe<NoticiasConnection>;
  key?: Maybe<Scalars['String']>;
};

export type NoticiasConnectionCreated_At = {
  __typename?: 'NoticiasConnectionCreated_at';
  connection?: Maybe<NoticiasConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type NoticiasConnectionData = {
  __typename?: 'NoticiasConnectionData';
  connection?: Maybe<NoticiasConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type NoticiasConnectionDestaque = {
  __typename?: 'NoticiasConnectionDestaque';
  connection?: Maybe<NoticiasConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type NoticiasConnectionFonte_Foto = {
  __typename?: 'NoticiasConnectionFonte_foto';
  connection?: Maybe<NoticiasConnection>;
  key?: Maybe<Scalars['String']>;
};

export type NoticiasConnectionId = {
  __typename?: 'NoticiasConnectionId';
  connection?: Maybe<NoticiasConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type NoticiasConnectionMateria = {
  __typename?: 'NoticiasConnectionMateria';
  connection?: Maybe<NoticiasConnection>;
  key?: Maybe<Scalars['String']>;
};

export type NoticiasConnectionPublished_At = {
  __typename?: 'NoticiasConnectionPublished_at';
  connection?: Maybe<NoticiasConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type NoticiasConnectionTipo = {
  __typename?: 'NoticiasConnectionTipo';
  connection?: Maybe<NoticiasConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type NoticiasConnectionTitulo = {
  __typename?: 'NoticiasConnectionTitulo';
  connection?: Maybe<NoticiasConnection>;
  key?: Maybe<Scalars['String']>;
};

export type NoticiasConnectionUpdated_At = {
  __typename?: 'NoticiasConnectionUpdated_at';
  connection?: Maybe<NoticiasConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type NoticiasGroupBy = {
  __typename?: 'NoticiasGroupBy';
  Destaque?: Maybe<Array<Maybe<NoticiasConnectionDestaque>>>;
  Titulo?: Maybe<Array<Maybe<NoticiasConnectionTitulo>>>;
  alternativo?: Maybe<Array<Maybe<NoticiasConnectionAlternativo>>>;
  apoio?: Maybe<Array<Maybe<NoticiasConnectionApoio>>>;
  cor_da_fonte?: Maybe<Array<Maybe<NoticiasConnectionCor_Da_Fonte>>>;
  created_at?: Maybe<Array<Maybe<NoticiasConnectionCreated_At>>>;
  data?: Maybe<Array<Maybe<NoticiasConnectionData>>>;
  fonte_foto?: Maybe<Array<Maybe<NoticiasConnectionFonte_Foto>>>;
  id?: Maybe<Array<Maybe<NoticiasConnectionId>>>;
  materia?: Maybe<Array<Maybe<NoticiasConnectionMateria>>>;
  published_at?: Maybe<Array<Maybe<NoticiasConnectionPublished_At>>>;
  tipo?: Maybe<Array<Maybe<NoticiasConnectionTipo>>>;
  updated_at?: Maybe<Array<Maybe<NoticiasConnectionUpdated_At>>>;
};

export type NoticiasTagsDynamicZone = ComponentTagsTags;

export type NoticiasUrgenteInput = {
  Titulo: Scalars['String'];
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  url: Scalars['String'];
};

export type NoticiasUrgentes = {
  __typename?: 'NoticiasUrgentes';
  Titulo: Scalars['String'];
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
  url: Scalars['String'];
};

export type NoticiasUrgentesAggregator = {
  __typename?: 'NoticiasUrgentesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type NoticiasUrgentesConnection = {
  __typename?: 'NoticiasUrgentesConnection';
  aggregate?: Maybe<NoticiasUrgentesAggregator>;
  groupBy?: Maybe<NoticiasUrgentesGroupBy>;
  values?: Maybe<Array<Maybe<NoticiasUrgentes>>>;
};

export type NoticiasUrgentesConnectionCreated_At = {
  __typename?: 'NoticiasUrgentesConnectionCreated_at';
  connection?: Maybe<NoticiasUrgentesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type NoticiasUrgentesConnectionId = {
  __typename?: 'NoticiasUrgentesConnectionId';
  connection?: Maybe<NoticiasUrgentesConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type NoticiasUrgentesConnectionPublished_At = {
  __typename?: 'NoticiasUrgentesConnectionPublished_at';
  connection?: Maybe<NoticiasUrgentesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type NoticiasUrgentesConnectionTitulo = {
  __typename?: 'NoticiasUrgentesConnectionTitulo';
  connection?: Maybe<NoticiasUrgentesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type NoticiasUrgentesConnectionUpdated_At = {
  __typename?: 'NoticiasUrgentesConnectionUpdated_at';
  connection?: Maybe<NoticiasUrgentesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type NoticiasUrgentesConnectionUrl = {
  __typename?: 'NoticiasUrgentesConnectionUrl';
  connection?: Maybe<NoticiasUrgentesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type NoticiasUrgentesGroupBy = {
  __typename?: 'NoticiasUrgentesGroupBy';
  Titulo?: Maybe<Array<Maybe<NoticiasUrgentesConnectionTitulo>>>;
  created_at?: Maybe<Array<Maybe<NoticiasUrgentesConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<NoticiasUrgentesConnectionId>>>;
  published_at?: Maybe<Array<Maybe<NoticiasUrgentesConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<NoticiasUrgentesConnectionUpdated_At>>>;
  url?: Maybe<Array<Maybe<NoticiasUrgentesConnectionUrl>>>;
};

export type Ouvidoria = {
  __typename?: 'Ouvidoria';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  sobre?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type OuvidoriaInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  sobre?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type PaginaInput = {
  Content: Scalars['String'];
  Files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  Titulo?: InputMaybe<Scalars['String']>;
  Url: Scalars['String'];
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Paginas = {
  __typename?: 'Paginas';
  Content: Scalars['String'];
  Files?: Maybe<Array<Maybe<UploadFile>>>;
  Titulo?: Maybe<Scalars['String']>;
  Url: Scalars['String'];
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
};


export type PaginasFilesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type PaginasAggregator = {
  __typename?: 'PaginasAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PaginasConnection = {
  __typename?: 'PaginasConnection';
  aggregate?: Maybe<PaginasAggregator>;
  groupBy?: Maybe<PaginasGroupBy>;
  values?: Maybe<Array<Maybe<Paginas>>>;
};

export type PaginasConnectionContent = {
  __typename?: 'PaginasConnectionContent';
  connection?: Maybe<PaginasConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PaginasConnectionCreated_At = {
  __typename?: 'PaginasConnectionCreated_at';
  connection?: Maybe<PaginasConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PaginasConnectionId = {
  __typename?: 'PaginasConnectionId';
  connection?: Maybe<PaginasConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type PaginasConnectionPublished_At = {
  __typename?: 'PaginasConnectionPublished_at';
  connection?: Maybe<PaginasConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PaginasConnectionTitulo = {
  __typename?: 'PaginasConnectionTitulo';
  connection?: Maybe<PaginasConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PaginasConnectionUpdated_At = {
  __typename?: 'PaginasConnectionUpdated_at';
  connection?: Maybe<PaginasConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PaginasConnectionUrl = {
  __typename?: 'PaginasConnectionUrl';
  connection?: Maybe<PaginasConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PaginasGroupBy = {
  __typename?: 'PaginasGroupBy';
  Content?: Maybe<Array<Maybe<PaginasConnectionContent>>>;
  Titulo?: Maybe<Array<Maybe<PaginasConnectionTitulo>>>;
  Url?: Maybe<Array<Maybe<PaginasConnectionUrl>>>;
  created_at?: Maybe<Array<Maybe<PaginasConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<PaginasConnectionId>>>;
  published_at?: Maybe<Array<Maybe<PaginasConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<PaginasConnectionUpdated_At>>>;
};

export type PenalidaddeInput = {
  Titulo: Scalars['String'];
  created_by?: InputMaybe<Scalars['ID']>;
  penalidade?: InputMaybe<Array<ComponentPenalidadePenalidadeInput>>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Penalidaddes = {
  __typename?: 'Penalidaddes';
  Titulo: Scalars['String'];
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  penalidade?: Maybe<Array<Maybe<ComponentPenalidadePenalidade>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
};

export type PenalidaddesAggregator = {
  __typename?: 'PenalidaddesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PenalidaddesConnection = {
  __typename?: 'PenalidaddesConnection';
  aggregate?: Maybe<PenalidaddesAggregator>;
  groupBy?: Maybe<PenalidaddesGroupBy>;
  values?: Maybe<Array<Maybe<Penalidaddes>>>;
};

export type PenalidaddesConnectionCreated_At = {
  __typename?: 'PenalidaddesConnectionCreated_at';
  connection?: Maybe<PenalidaddesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PenalidaddesConnectionId = {
  __typename?: 'PenalidaddesConnectionId';
  connection?: Maybe<PenalidaddesConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type PenalidaddesConnectionPublished_At = {
  __typename?: 'PenalidaddesConnectionPublished_at';
  connection?: Maybe<PenalidaddesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PenalidaddesConnectionTitulo = {
  __typename?: 'PenalidaddesConnectionTitulo';
  connection?: Maybe<PenalidaddesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PenalidaddesConnectionUpdated_At = {
  __typename?: 'PenalidaddesConnectionUpdated_at';
  connection?: Maybe<PenalidaddesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PenalidaddesGroupBy = {
  __typename?: 'PenalidaddesGroupBy';
  Titulo?: Maybe<Array<Maybe<PenalidaddesConnectionTitulo>>>;
  created_at?: Maybe<Array<Maybe<PenalidaddesConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<PenalidaddesConnectionId>>>;
  published_at?: Maybe<Array<Maybe<PenalidaddesConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<PenalidaddesConnectionUpdated_At>>>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  ascomCartilha?: Maybe<AscomCartilhas>;
  ascomCartilhas?: Maybe<Array<Maybe<AscomCartilhas>>>;
  ascomCartilhasConnection?: Maybe<AscomCartilhasConnection>;
  ascomFaq?: Maybe<AscomFaq>;
  ascomFaqs?: Maybe<Array<Maybe<AscomFaq>>>;
  ascomFaqsConnection?: Maybe<AscomFaqConnection>;
  atasDeColegiado?: Maybe<AtasDeColegiado>;
  atasDeColegiados?: Maybe<Array<Maybe<AtasDeColegiado>>>;
  atasDeColegiadosConnection?: Maybe<AtasDeColegiadoConnection>;
  atasDeJulgamento?: Maybe<AtasDeJulgamento>;
  atasDeJulgamentos?: Maybe<Array<Maybe<AtasDeJulgamento>>>;
  atasDeJulgamentosConnection?: Maybe<AtasDeJulgamentoConnection>;
  audienciasPublica?: Maybe<AudienciasPublicas>;
  audienciasPublicas?: Maybe<Array<Maybe<AudienciasPublicas>>>;
  audienciasPublicasConnection?: Maybe<AudienciasPublicasConnection>;
  comapContratosCovid?: Maybe<ComapContratosCovid>;
  comapContratosCovids?: Maybe<Array<Maybe<ComapContratosCovid>>>;
  comapContratosCovidsConnection?: Maybe<ComapContratosCovidConnection>;
  consultasPublica?: Maybe<ConsultasPublicas>;
  consultasPublicas?: Maybe<Array<Maybe<ConsultasPublicas>>>;
  consultasPublicasConnection?: Maybe<ConsultasPublicasConnection>;
  csjriInformeDeJulgamento?: Maybe<CsjriInformeDeJulgamento>;
  csjriInformeDeJulgamentos?: Maybe<Array<Maybe<CsjriInformeDeJulgamento>>>;
  csjriInformeDeJulgamentosConnection?: Maybe<CsjriInformeDeJulgamentoConnection>;
  csjriInformesDeJulgamento?: Maybe<CsjriInformesDeJulgamento>;
  dfisLicencasEspeciai?: Maybe<DfisLicencasEspeciais>;
  dfisVistoria?: Maybe<DfisVistorias>;
  dpseCadastro?: Maybe<DpseCadastro>;
  dtafTarifasDosTerminaisHidroviario?: Maybe<DtafTarifasDosTerminaisHidroviarios>;
  dtafTarifasDosTerminaisHidroviarios?: Maybe<Array<Maybe<DtafTarifasDosTerminaisHidroviarios>>>;
  dtafTarifasDosTerminaisHidroviariosConnection?: Maybe<DtafTarifasDosTerminaisHidroviariosConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  gas?: Maybe<Gas>;
  licitacoe?: Maybe<Licitacoes>;
  licitacoes?: Maybe<Array<Maybe<Licitacoes>>>;
  licitacoesConnection?: Maybe<LicitacoesConnection>;
  me?: Maybe<UsersPermissionsMe>;
  ngctthTransportesHidroviario?: Maybe<NgctthTransportesHidroviarios>;
  ngctthTransportesHidroviarios?: Maybe<Array<Maybe<NgctthTransportesHidroviarios>>>;
  ngctthTransportesHidroviariosConnection?: Maybe<NgctthTransportesHidroviariosConnection>;
  noticia?: Maybe<Noticias>;
  noticias?: Maybe<Array<Maybe<Noticias>>>;
  noticiasConnection?: Maybe<NoticiasConnection>;
  noticiasUrgente?: Maybe<NoticiasUrgentes>;
  noticiasUrgentes?: Maybe<Array<Maybe<NoticiasUrgentes>>>;
  noticiasUrgentesConnection?: Maybe<NoticiasUrgentesConnection>;
  ouvidoria?: Maybe<Ouvidoria>;
  pagina?: Maybe<Paginas>;
  paginas?: Maybe<Array<Maybe<Paginas>>>;
  paginasConnection?: Maybe<PaginasConnection>;
  penalidadde?: Maybe<Penalidaddes>;
  penalidaddes?: Maybe<Array<Maybe<Penalidaddes>>>;
  penalidaddesConnection?: Maybe<PenalidaddesConnection>;
  resolucoe?: Maybe<Resolucoes>;
  resolucoes?: Maybe<Array<Maybe<Resolucoes>>>;
  resolucoesConnection?: Maybe<ResolucoesConnection>;
  rodovia?: Maybe<Rodovias>;
  rodovias?: Maybe<Array<Maybe<Rodovias>>>;
  rodoviasConnection?: Maybe<RodoviasConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  servico?: Maybe<Servicos>;
  servicos?: Maybe<Array<Maybe<Servicos>>>;
  servicosConnection?: Maybe<ServicosConnection>;
  subTipoDeResolucao?: Maybe<SubTipoDeResolucao>;
  subTipoDeResolucaos?: Maybe<Array<Maybe<SubTipoDeResolucao>>>;
  subTipoDeResolucaosConnection?: Maybe<SubTipoDeResolucaoConnection>;
  tarifasDasRodovia?: Maybe<TarifasDasRodovias>;
  tarifasDasRodovias?: Maybe<Array<Maybe<TarifasDasRodovias>>>;
  tarifasDasRodoviasConnection?: Maybe<TarifasDasRodoviasConnection>;
  tarifasDosTerminaisRodoviario?: Maybe<TarifasDosTerminaisRodoviarios>;
  tarifasDosTerminaisRodoviarios?: Maybe<Array<Maybe<TarifasDosTerminaisRodoviarios>>>;
  tarifasDosTerminaisRodoviariosConnection?: Maybe<TarifasDosTerminaisRodoviariosConnection>;
  taxasEValore?: Maybe<TaxasEValores>;
  taxasEValores?: Maybe<Array<Maybe<TaxasEValores>>>;
  taxasEValoresConnection?: Maybe<TaxasEValoresConnection>;
  terminaisAeroviario?: Maybe<TerminaisAeroviarios>;
  terminaisAeroviarios?: Maybe<Array<Maybe<TerminaisAeroviarios>>>;
  terminaisAeroviariosConnection?: Maybe<TerminaisAeroviariosConnection>;
  terminaisHidroviario?: Maybe<TerminaisHidroviarios>;
  terminaisHidroviarios?: Maybe<Array<Maybe<TerminaisHidroviarios>>>;
  terminaisHidroviariosConnection?: Maybe<TerminaisHidroviariosConnection>;
  terminaisRodoviario?: Maybe<TerminaisRodoviarios>;
  terminaisRodoviarios?: Maybe<Array<Maybe<TerminaisRodoviarios>>>;
  terminaisRodoviariosConnection?: Maybe<TerminaisRodoviariosConnection>;
  teste?: Maybe<Teste>;
  testes?: Maybe<Array<Maybe<Teste>>>;
  testesConnection?: Maybe<TesteConnection>;
  tiposDeResolucoe?: Maybe<TiposDeResolucoes>;
  tiposDeResolucoes?: Maybe<Array<Maybe<TiposDeResolucoes>>>;
  tiposDeResolucoesConnection?: Maybe<TiposDeResolucoesConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
};


export type QueryAscomCartilhaArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryAscomCartilhasArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryAscomCartilhasConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryAscomFaqArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryAscomFaqsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryAscomFaqsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryAtasDeColegiadoArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryAtasDeColegiadosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryAtasDeColegiadosConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryAtasDeJulgamentoArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryAtasDeJulgamentosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryAtasDeJulgamentosConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryAudienciasPublicaArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryAudienciasPublicasArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryAudienciasPublicasConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryComapContratosCovidArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryComapContratosCovidsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryComapContratosCovidsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryConsultasPublicaArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryConsultasPublicasArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryConsultasPublicasConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryCsjriInformeDeJulgamentoArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryCsjriInformeDeJulgamentosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryCsjriInformeDeJulgamentosConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryCsjriInformesDeJulgamentoArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryDfisLicencasEspeciaiArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryDfisVistoriaArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryDpseCadastroArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryDtafTarifasDosTerminaisHidroviarioArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryDtafTarifasDosTerminaisHidroviariosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryDtafTarifasDosTerminaisHidroviariosConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFilesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryGasArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryLicitacoeArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryLicitacoesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryLicitacoesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryNgctthTransportesHidroviarioArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryNgctthTransportesHidroviariosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryNgctthTransportesHidroviariosConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryNoticiaArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryNoticiasArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryNoticiasConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryNoticiasUrgenteArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryNoticiasUrgentesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryNoticiasUrgentesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryOuvidoriaArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryPaginaArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryPaginasArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryPaginasConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryPenalidaddeArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryPenalidaddesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryPenalidaddesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryResolucoeArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryResolucoesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryResolucoesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryRodoviaArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryRodoviasArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryRodoviasConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryRolesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryServicoArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryServicosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryServicosConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QuerySubTipoDeResolucaoArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QuerySubTipoDeResolucaosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QuerySubTipoDeResolucaosConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTarifasDasRodoviaArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTarifasDasRodoviasArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTarifasDasRodoviasConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTarifasDosTerminaisRodoviarioArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTarifasDosTerminaisRodoviariosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTarifasDosTerminaisRodoviariosConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTaxasEValoreArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTaxasEValoresArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTaxasEValoresConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTerminaisAeroviarioArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTerminaisAeroviariosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTerminaisAeroviariosConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTerminaisHidroviarioArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTerminaisHidroviariosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTerminaisHidroviariosConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTerminaisRodoviarioArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTerminaisRodoviariosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTerminaisRodoviariosConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTesteArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTestesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTestesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTiposDeResolucoeArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTiposDeResolucoesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTiposDeResolucoesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryUsersConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type ResolucoeInput = {
  Documents?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  Titulo: Scalars['String'];
  created_by?: InputMaybe<Scalars['ID']>;
  data: Scalars['DateTime'];
  ementa: Scalars['String'];
  published_at?: InputMaybe<Scalars['DateTime']>;
  sub_tipo_de_resolucao?: InputMaybe<Scalars['ID']>;
  tag?: InputMaybe<Array<InputMaybe<ComponentTagsTagInput>>>;
  tipos_de_resolucoe?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Resolucoes = {
  __typename?: 'Resolucoes';
  Documents?: Maybe<Array<Maybe<UploadFile>>>;
  Titulo: Scalars['String'];
  created_at: Scalars['DateTime'];
  data: Scalars['DateTime'];
  ementa: Scalars['String'];
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  sub_tipo_de_resolucao?: Maybe<SubTipoDeResolucao>;
  tag?: Maybe<Array<Maybe<ComponentTagsTags>>>;
  tipos_de_resolucoe?: Maybe<TiposDeResolucoes>;
  updated_at: Scalars['DateTime'];
};


export type ResolucoesDocumentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type ResolucoesAggregator = {
  __typename?: 'ResolucoesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ResolucoesConnection = {
  __typename?: 'ResolucoesConnection';
  aggregate?: Maybe<ResolucoesAggregator>;
  groupBy?: Maybe<ResolucoesGroupBy>;
  values?: Maybe<Array<Maybe<Resolucoes>>>;
};

export type ResolucoesConnectionCreated_At = {
  __typename?: 'ResolucoesConnectionCreated_at';
  connection?: Maybe<ResolucoesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ResolucoesConnectionData = {
  __typename?: 'ResolucoesConnectionData';
  connection?: Maybe<ResolucoesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ResolucoesConnectionEmenta = {
  __typename?: 'ResolucoesConnectionEmenta';
  connection?: Maybe<ResolucoesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ResolucoesConnectionId = {
  __typename?: 'ResolucoesConnectionId';
  connection?: Maybe<ResolucoesConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ResolucoesConnectionPublished_At = {
  __typename?: 'ResolucoesConnectionPublished_at';
  connection?: Maybe<ResolucoesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ResolucoesConnectionSub_Tipo_De_Resolucao = {
  __typename?: 'ResolucoesConnectionSub_tipo_de_resolucao';
  connection?: Maybe<ResolucoesConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ResolucoesConnectionTipos_De_Resolucoe = {
  __typename?: 'ResolucoesConnectionTipos_de_resolucoe';
  connection?: Maybe<ResolucoesConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ResolucoesConnectionTitulo = {
  __typename?: 'ResolucoesConnectionTitulo';
  connection?: Maybe<ResolucoesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ResolucoesConnectionUpdated_At = {
  __typename?: 'ResolucoesConnectionUpdated_at';
  connection?: Maybe<ResolucoesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ResolucoesGroupBy = {
  __typename?: 'ResolucoesGroupBy';
  Titulo?: Maybe<Array<Maybe<ResolucoesConnectionTitulo>>>;
  created_at?: Maybe<Array<Maybe<ResolucoesConnectionCreated_At>>>;
  data?: Maybe<Array<Maybe<ResolucoesConnectionData>>>;
  ementa?: Maybe<Array<Maybe<ResolucoesConnectionEmenta>>>;
  id?: Maybe<Array<Maybe<ResolucoesConnectionId>>>;
  published_at?: Maybe<Array<Maybe<ResolucoesConnectionPublished_At>>>;
  sub_tipo_de_resolucao?: Maybe<Array<Maybe<ResolucoesConnectionSub_Tipo_De_Resolucao>>>;
  tipos_de_resolucoe?: Maybe<Array<Maybe<ResolucoesConnectionTipos_De_Resolucoe>>>;
  updated_at?: Maybe<Array<Maybe<ResolucoesConnectionUpdated_At>>>;
};

export type RodoviaInput = {
  Concessao?: InputMaybe<Array<ComponentConcessaoConcessaoInput>>;
  Edital?: InputMaybe<Array<InputMaybe<ComponentEditalEditalInput>>>;
  Nome: Scalars['String'];
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  termo_de_subrogacao?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Rodovias = {
  __typename?: 'Rodovias';
  Concessao?: Maybe<Array<Maybe<ComponentConcessaoConcessao>>>;
  Edital?: Maybe<Array<Maybe<ComponentEditalEdital>>>;
  Nome: Scalars['String'];
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  termo_de_subrogacao?: Maybe<UploadFile>;
  updated_at: Scalars['DateTime'];
};

export type RodoviasAggregator = {
  __typename?: 'RodoviasAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type RodoviasConnection = {
  __typename?: 'RodoviasConnection';
  aggregate?: Maybe<RodoviasAggregator>;
  groupBy?: Maybe<RodoviasGroupBy>;
  values?: Maybe<Array<Maybe<Rodovias>>>;
};

export type RodoviasConnectionCreated_At = {
  __typename?: 'RodoviasConnectionCreated_at';
  connection?: Maybe<RodoviasConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type RodoviasConnectionId = {
  __typename?: 'RodoviasConnectionId';
  connection?: Maybe<RodoviasConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type RodoviasConnectionNome = {
  __typename?: 'RodoviasConnectionNome';
  connection?: Maybe<RodoviasConnection>;
  key?: Maybe<Scalars['String']>;
};

export type RodoviasConnectionPublished_At = {
  __typename?: 'RodoviasConnectionPublished_at';
  connection?: Maybe<RodoviasConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type RodoviasConnectionTermo_De_Subrogacao = {
  __typename?: 'RodoviasConnectionTermo_de_subrogacao';
  connection?: Maybe<RodoviasConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type RodoviasConnectionUpdated_At = {
  __typename?: 'RodoviasConnectionUpdated_at';
  connection?: Maybe<RodoviasConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type RodoviasGroupBy = {
  __typename?: 'RodoviasGroupBy';
  Nome?: Maybe<Array<Maybe<RodoviasConnectionNome>>>;
  created_at?: Maybe<Array<Maybe<RodoviasConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<RodoviasConnectionId>>>;
  published_at?: Maybe<Array<Maybe<RodoviasConnectionPublished_At>>>;
  termo_de_subrogacao?: Maybe<Array<Maybe<RodoviasConnectionTermo_De_Subrogacao>>>;
  updated_at?: Maybe<Array<Maybe<RodoviasConnectionUpdated_At>>>;
};

export type RoleInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ServicoInput = {
  Conteudo?: InputMaybe<Array<InputMaybe<ComponentContentContentInput>>>;
  Links?: InputMaybe<Array<ComponentServiceServiceInput>>;
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  title: Scalars['String'];
  titulo: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Servicos = {
  __typename?: 'Servicos';
  Conteudo?: Maybe<Array<Maybe<ComponentContentContent>>>;
  Links?: Maybe<Array<Maybe<ComponentServiceServices>>>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  titulo: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type ServicosAggregator = {
  __typename?: 'ServicosAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ServicosConnection = {
  __typename?: 'ServicosConnection';
  aggregate?: Maybe<ServicosAggregator>;
  groupBy?: Maybe<ServicosGroupBy>;
  values?: Maybe<Array<Maybe<Servicos>>>;
};

export type ServicosConnectionCreated_At = {
  __typename?: 'ServicosConnectionCreated_at';
  connection?: Maybe<ServicosConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ServicosConnectionId = {
  __typename?: 'ServicosConnectionId';
  connection?: Maybe<ServicosConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ServicosConnectionPublished_At = {
  __typename?: 'ServicosConnectionPublished_at';
  connection?: Maybe<ServicosConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ServicosConnectionTitle = {
  __typename?: 'ServicosConnectionTitle';
  connection?: Maybe<ServicosConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ServicosConnectionTitulo = {
  __typename?: 'ServicosConnectionTitulo';
  connection?: Maybe<ServicosConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ServicosConnectionUpdated_At = {
  __typename?: 'ServicosConnectionUpdated_at';
  connection?: Maybe<ServicosConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ServicosGroupBy = {
  __typename?: 'ServicosGroupBy';
  created_at?: Maybe<Array<Maybe<ServicosConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<ServicosConnectionId>>>;
  published_at?: Maybe<Array<Maybe<ServicosConnectionPublished_At>>>;
  title?: Maybe<Array<Maybe<ServicosConnectionTitle>>>;
  titulo?: Maybe<Array<Maybe<ServicosConnectionTitulo>>>;
  updated_at?: Maybe<Array<Maybe<ServicosConnectionUpdated_At>>>;
};

export type SubTipoDeResolucao = {
  __typename?: 'SubTipoDeResolucao';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  subTipo?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type SubTipoDeResolucaoAggregator = {
  __typename?: 'SubTipoDeResolucaoAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SubTipoDeResolucaoConnection = {
  __typename?: 'SubTipoDeResolucaoConnection';
  aggregate?: Maybe<SubTipoDeResolucaoAggregator>;
  groupBy?: Maybe<SubTipoDeResolucaoGroupBy>;
  values?: Maybe<Array<Maybe<SubTipoDeResolucao>>>;
};

export type SubTipoDeResolucaoConnectionCreated_At = {
  __typename?: 'SubTipoDeResolucaoConnectionCreated_at';
  connection?: Maybe<SubTipoDeResolucaoConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type SubTipoDeResolucaoConnectionId = {
  __typename?: 'SubTipoDeResolucaoConnectionId';
  connection?: Maybe<SubTipoDeResolucaoConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type SubTipoDeResolucaoConnectionPublished_At = {
  __typename?: 'SubTipoDeResolucaoConnectionPublished_at';
  connection?: Maybe<SubTipoDeResolucaoConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type SubTipoDeResolucaoConnectionSubTipo = {
  __typename?: 'SubTipoDeResolucaoConnectionSubTipo';
  connection?: Maybe<SubTipoDeResolucaoConnection>;
  key?: Maybe<Scalars['String']>;
};

export type SubTipoDeResolucaoConnectionUpdated_At = {
  __typename?: 'SubTipoDeResolucaoConnectionUpdated_at';
  connection?: Maybe<SubTipoDeResolucaoConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type SubTipoDeResolucaoGroupBy = {
  __typename?: 'SubTipoDeResolucaoGroupBy';
  created_at?: Maybe<Array<Maybe<SubTipoDeResolucaoConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<SubTipoDeResolucaoConnectionId>>>;
  published_at?: Maybe<Array<Maybe<SubTipoDeResolucaoConnectionPublished_At>>>;
  subTipo?: Maybe<Array<Maybe<SubTipoDeResolucaoConnectionSubTipo>>>;
  updated_at?: Maybe<Array<Maybe<SubTipoDeResolucaoConnectionUpdated_At>>>;
};

export type SubTipoDeResolucaoInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  subTipo?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type TarifasDasRodoviaInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  rodovia: Scalars['String'];
  tarifas?: InputMaybe<Array<ComponentTarifasTarifaInput>>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type TarifasDasRodovias = {
  __typename?: 'TarifasDasRodovias';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  rodovia: Scalars['String'];
  tarifas?: Maybe<Array<Maybe<ComponentTarifasTarifa>>>;
  updated_at: Scalars['DateTime'];
};

export type TarifasDasRodoviasAggregator = {
  __typename?: 'TarifasDasRodoviasAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TarifasDasRodoviasConnection = {
  __typename?: 'TarifasDasRodoviasConnection';
  aggregate?: Maybe<TarifasDasRodoviasAggregator>;
  groupBy?: Maybe<TarifasDasRodoviasGroupBy>;
  values?: Maybe<Array<Maybe<TarifasDasRodovias>>>;
};

export type TarifasDasRodoviasConnectionCreated_At = {
  __typename?: 'TarifasDasRodoviasConnectionCreated_at';
  connection?: Maybe<TarifasDasRodoviasConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TarifasDasRodoviasConnectionId = {
  __typename?: 'TarifasDasRodoviasConnectionId';
  connection?: Maybe<TarifasDasRodoviasConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TarifasDasRodoviasConnectionPublished_At = {
  __typename?: 'TarifasDasRodoviasConnectionPublished_at';
  connection?: Maybe<TarifasDasRodoviasConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TarifasDasRodoviasConnectionRodovia = {
  __typename?: 'TarifasDasRodoviasConnectionRodovia';
  connection?: Maybe<TarifasDasRodoviasConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TarifasDasRodoviasConnectionUpdated_At = {
  __typename?: 'TarifasDasRodoviasConnectionUpdated_at';
  connection?: Maybe<TarifasDasRodoviasConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TarifasDasRodoviasGroupBy = {
  __typename?: 'TarifasDasRodoviasGroupBy';
  created_at?: Maybe<Array<Maybe<TarifasDasRodoviasConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<TarifasDasRodoviasConnectionId>>>;
  published_at?: Maybe<Array<Maybe<TarifasDasRodoviasConnectionPublished_At>>>;
  rodovia?: Maybe<Array<Maybe<TarifasDasRodoviasConnectionRodovia>>>;
  updated_at?: Maybe<Array<Maybe<TarifasDasRodoviasConnectionUpdated_At>>>;
};

export type TarifasDosTerminaisRodoviarioInput = {
  Obs_Classe_I?: InputMaybe<Scalars['Float']>;
  Obs_Classe_II?: InputMaybe<Scalars['Float']>;
  Obs_Classe_III?: InputMaybe<Scalars['Float']>;
  Obs_Classe_IV?: InputMaybe<Scalars['Float']>;
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  terminais_rodoviarios?: InputMaybe<Array<ComponentTarifasTerminaiInput>>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type TarifasDosTerminaisRodoviarios = {
  __typename?: 'TarifasDosTerminaisRodoviarios';
  Obs_Classe_I?: Maybe<Scalars['Float']>;
  Obs_Classe_II?: Maybe<Scalars['Float']>;
  Obs_Classe_III?: Maybe<Scalars['Float']>;
  Obs_Classe_IV?: Maybe<Scalars['Float']>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  terminais_rodoviarios?: Maybe<Array<Maybe<ComponentTarifasTerminais>>>;
  updated_at: Scalars['DateTime'];
};

export type TarifasDosTerminaisRodoviariosAggregator = {
  __typename?: 'TarifasDosTerminaisRodoviariosAggregator';
  avg?: Maybe<TarifasDosTerminaisRodoviariosAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<TarifasDosTerminaisRodoviariosAggregatorMax>;
  min?: Maybe<TarifasDosTerminaisRodoviariosAggregatorMin>;
  sum?: Maybe<TarifasDosTerminaisRodoviariosAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TarifasDosTerminaisRodoviariosAggregatorAvg = {
  __typename?: 'TarifasDosTerminaisRodoviariosAggregatorAvg';
  Obs_Classe_I?: Maybe<Scalars['Float']>;
  Obs_Classe_II?: Maybe<Scalars['Float']>;
  Obs_Classe_III?: Maybe<Scalars['Float']>;
  Obs_Classe_IV?: Maybe<Scalars['Float']>;
};

export type TarifasDosTerminaisRodoviariosAggregatorMax = {
  __typename?: 'TarifasDosTerminaisRodoviariosAggregatorMax';
  Obs_Classe_I?: Maybe<Scalars['Float']>;
  Obs_Classe_II?: Maybe<Scalars['Float']>;
  Obs_Classe_III?: Maybe<Scalars['Float']>;
  Obs_Classe_IV?: Maybe<Scalars['Float']>;
};

export type TarifasDosTerminaisRodoviariosAggregatorMin = {
  __typename?: 'TarifasDosTerminaisRodoviariosAggregatorMin';
  Obs_Classe_I?: Maybe<Scalars['Float']>;
  Obs_Classe_II?: Maybe<Scalars['Float']>;
  Obs_Classe_III?: Maybe<Scalars['Float']>;
  Obs_Classe_IV?: Maybe<Scalars['Float']>;
};

export type TarifasDosTerminaisRodoviariosAggregatorSum = {
  __typename?: 'TarifasDosTerminaisRodoviariosAggregatorSum';
  Obs_Classe_I?: Maybe<Scalars['Float']>;
  Obs_Classe_II?: Maybe<Scalars['Float']>;
  Obs_Classe_III?: Maybe<Scalars['Float']>;
  Obs_Classe_IV?: Maybe<Scalars['Float']>;
};

export type TarifasDosTerminaisRodoviariosConnection = {
  __typename?: 'TarifasDosTerminaisRodoviariosConnection';
  aggregate?: Maybe<TarifasDosTerminaisRodoviariosAggregator>;
  groupBy?: Maybe<TarifasDosTerminaisRodoviariosGroupBy>;
  values?: Maybe<Array<Maybe<TarifasDosTerminaisRodoviarios>>>;
};

export type TarifasDosTerminaisRodoviariosConnectionCreated_At = {
  __typename?: 'TarifasDosTerminaisRodoviariosConnectionCreated_at';
  connection?: Maybe<TarifasDosTerminaisRodoviariosConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TarifasDosTerminaisRodoviariosConnectionId = {
  __typename?: 'TarifasDosTerminaisRodoviariosConnectionId';
  connection?: Maybe<TarifasDosTerminaisRodoviariosConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TarifasDosTerminaisRodoviariosConnectionObs_Classe_I = {
  __typename?: 'TarifasDosTerminaisRodoviariosConnectionObs_Classe_I';
  connection?: Maybe<TarifasDosTerminaisRodoviariosConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type TarifasDosTerminaisRodoviariosConnectionObs_Classe_Ii = {
  __typename?: 'TarifasDosTerminaisRodoviariosConnectionObs_Classe_II';
  connection?: Maybe<TarifasDosTerminaisRodoviariosConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type TarifasDosTerminaisRodoviariosConnectionObs_Classe_Iii = {
  __typename?: 'TarifasDosTerminaisRodoviariosConnectionObs_Classe_III';
  connection?: Maybe<TarifasDosTerminaisRodoviariosConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type TarifasDosTerminaisRodoviariosConnectionObs_Classe_Iv = {
  __typename?: 'TarifasDosTerminaisRodoviariosConnectionObs_Classe_IV';
  connection?: Maybe<TarifasDosTerminaisRodoviariosConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type TarifasDosTerminaisRodoviariosConnectionPublished_At = {
  __typename?: 'TarifasDosTerminaisRodoviariosConnectionPublished_at';
  connection?: Maybe<TarifasDosTerminaisRodoviariosConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TarifasDosTerminaisRodoviariosConnectionUpdated_At = {
  __typename?: 'TarifasDosTerminaisRodoviariosConnectionUpdated_at';
  connection?: Maybe<TarifasDosTerminaisRodoviariosConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TarifasDosTerminaisRodoviariosGroupBy = {
  __typename?: 'TarifasDosTerminaisRodoviariosGroupBy';
  Obs_Classe_I?: Maybe<Array<Maybe<TarifasDosTerminaisRodoviariosConnectionObs_Classe_I>>>;
  Obs_Classe_II?: Maybe<Array<Maybe<TarifasDosTerminaisRodoviariosConnectionObs_Classe_Ii>>>;
  Obs_Classe_III?: Maybe<Array<Maybe<TarifasDosTerminaisRodoviariosConnectionObs_Classe_Iii>>>;
  Obs_Classe_IV?: Maybe<Array<Maybe<TarifasDosTerminaisRodoviariosConnectionObs_Classe_Iv>>>;
  created_at?: Maybe<Array<Maybe<TarifasDosTerminaisRodoviariosConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<TarifasDosTerminaisRodoviariosConnectionId>>>;
  published_at?: Maybe<Array<Maybe<TarifasDosTerminaisRodoviariosConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<TarifasDosTerminaisRodoviariosConnectionUpdated_At>>>;
};

export type TaxasEValoreInput = {
  Nome: Scalars['String'];
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  taxas?: InputMaybe<Array<InputMaybe<ComponentTaxaTaxaInput>>>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type TaxasEValores = {
  __typename?: 'TaxasEValores';
  Nome: Scalars['String'];
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  taxas?: Maybe<Array<Maybe<ComponentTaxaTaxas>>>;
  updated_at: Scalars['DateTime'];
};

export type TaxasEValoresAggregator = {
  __typename?: 'TaxasEValoresAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TaxasEValoresConnection = {
  __typename?: 'TaxasEValoresConnection';
  aggregate?: Maybe<TaxasEValoresAggregator>;
  groupBy?: Maybe<TaxasEValoresGroupBy>;
  values?: Maybe<Array<Maybe<TaxasEValores>>>;
};

export type TaxasEValoresConnectionCreated_At = {
  __typename?: 'TaxasEValoresConnectionCreated_at';
  connection?: Maybe<TaxasEValoresConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TaxasEValoresConnectionId = {
  __typename?: 'TaxasEValoresConnectionId';
  connection?: Maybe<TaxasEValoresConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TaxasEValoresConnectionNome = {
  __typename?: 'TaxasEValoresConnectionNome';
  connection?: Maybe<TaxasEValoresConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TaxasEValoresConnectionPublished_At = {
  __typename?: 'TaxasEValoresConnectionPublished_at';
  connection?: Maybe<TaxasEValoresConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TaxasEValoresConnectionUpdated_At = {
  __typename?: 'TaxasEValoresConnectionUpdated_at';
  connection?: Maybe<TaxasEValoresConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TaxasEValoresGroupBy = {
  __typename?: 'TaxasEValoresGroupBy';
  Nome?: Maybe<Array<Maybe<TaxasEValoresConnectionNome>>>;
  created_at?: Maybe<Array<Maybe<TaxasEValoresConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<TaxasEValoresConnectionId>>>;
  published_at?: Maybe<Array<Maybe<TaxasEValoresConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<TaxasEValoresConnectionUpdated_At>>>;
};

export type TerminaisAeroviarioInput = {
  contrato?: InputMaybe<Scalars['ID']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  telefone?: InputMaybe<Scalars['String']>;
  terminal?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type TerminaisAeroviarios = {
  __typename?: 'TerminaisAeroviarios';
  contrato?: Maybe<UploadFile>;
  created_at: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  telefone?: Maybe<Scalars['String']>;
  terminal?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type TerminaisAeroviariosAggregator = {
  __typename?: 'TerminaisAeroviariosAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TerminaisAeroviariosConnection = {
  __typename?: 'TerminaisAeroviariosConnection';
  aggregate?: Maybe<TerminaisAeroviariosAggregator>;
  groupBy?: Maybe<TerminaisAeroviariosGroupBy>;
  values?: Maybe<Array<Maybe<TerminaisAeroviarios>>>;
};

export type TerminaisAeroviariosConnectionContrato = {
  __typename?: 'TerminaisAeroviariosConnectionContrato';
  connection?: Maybe<TerminaisAeroviariosConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TerminaisAeroviariosConnectionCreated_At = {
  __typename?: 'TerminaisAeroviariosConnectionCreated_at';
  connection?: Maybe<TerminaisAeroviariosConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TerminaisAeroviariosConnectionEmail = {
  __typename?: 'TerminaisAeroviariosConnectionEmail';
  connection?: Maybe<TerminaisAeroviariosConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TerminaisAeroviariosConnectionId = {
  __typename?: 'TerminaisAeroviariosConnectionId';
  connection?: Maybe<TerminaisAeroviariosConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TerminaisAeroviariosConnectionPublished_At = {
  __typename?: 'TerminaisAeroviariosConnectionPublished_at';
  connection?: Maybe<TerminaisAeroviariosConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TerminaisAeroviariosConnectionTelefone = {
  __typename?: 'TerminaisAeroviariosConnectionTelefone';
  connection?: Maybe<TerminaisAeroviariosConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TerminaisAeroviariosConnectionTerminal = {
  __typename?: 'TerminaisAeroviariosConnectionTerminal';
  connection?: Maybe<TerminaisAeroviariosConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TerminaisAeroviariosConnectionUpdated_At = {
  __typename?: 'TerminaisAeroviariosConnectionUpdated_at';
  connection?: Maybe<TerminaisAeroviariosConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TerminaisAeroviariosGroupBy = {
  __typename?: 'TerminaisAeroviariosGroupBy';
  contrato?: Maybe<Array<Maybe<TerminaisAeroviariosConnectionContrato>>>;
  created_at?: Maybe<Array<Maybe<TerminaisAeroviariosConnectionCreated_At>>>;
  email?: Maybe<Array<Maybe<TerminaisAeroviariosConnectionEmail>>>;
  id?: Maybe<Array<Maybe<TerminaisAeroviariosConnectionId>>>;
  published_at?: Maybe<Array<Maybe<TerminaisAeroviariosConnectionPublished_At>>>;
  telefone?: Maybe<Array<Maybe<TerminaisAeroviariosConnectionTelefone>>>;
  terminal?: Maybe<Array<Maybe<TerminaisAeroviariosConnectionTerminal>>>;
  updated_at?: Maybe<Array<Maybe<TerminaisAeroviariosConnectionUpdated_At>>>;
};

export type TerminaisHidroviarioInput = {
  contrato?: InputMaybe<Scalars['ID']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  telefone?: InputMaybe<Scalars['String']>;
  terminal?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type TerminaisHidroviarios = {
  __typename?: 'TerminaisHidroviarios';
  contrato?: Maybe<UploadFile>;
  created_at: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  telefone?: Maybe<Scalars['String']>;
  terminal?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type TerminaisHidroviariosAggregator = {
  __typename?: 'TerminaisHidroviariosAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TerminaisHidroviariosConnection = {
  __typename?: 'TerminaisHidroviariosConnection';
  aggregate?: Maybe<TerminaisHidroviariosAggregator>;
  groupBy?: Maybe<TerminaisHidroviariosGroupBy>;
  values?: Maybe<Array<Maybe<TerminaisHidroviarios>>>;
};

export type TerminaisHidroviariosConnectionContrato = {
  __typename?: 'TerminaisHidroviariosConnectionContrato';
  connection?: Maybe<TerminaisHidroviariosConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TerminaisHidroviariosConnectionCreated_At = {
  __typename?: 'TerminaisHidroviariosConnectionCreated_at';
  connection?: Maybe<TerminaisHidroviariosConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TerminaisHidroviariosConnectionEmail = {
  __typename?: 'TerminaisHidroviariosConnectionEmail';
  connection?: Maybe<TerminaisHidroviariosConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TerminaisHidroviariosConnectionId = {
  __typename?: 'TerminaisHidroviariosConnectionId';
  connection?: Maybe<TerminaisHidroviariosConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TerminaisHidroviariosConnectionPublished_At = {
  __typename?: 'TerminaisHidroviariosConnectionPublished_at';
  connection?: Maybe<TerminaisHidroviariosConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TerminaisHidroviariosConnectionTelefone = {
  __typename?: 'TerminaisHidroviariosConnectionTelefone';
  connection?: Maybe<TerminaisHidroviariosConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TerminaisHidroviariosConnectionTerminal = {
  __typename?: 'TerminaisHidroviariosConnectionTerminal';
  connection?: Maybe<TerminaisHidroviariosConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TerminaisHidroviariosConnectionUpdated_At = {
  __typename?: 'TerminaisHidroviariosConnectionUpdated_at';
  connection?: Maybe<TerminaisHidroviariosConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TerminaisHidroviariosGroupBy = {
  __typename?: 'TerminaisHidroviariosGroupBy';
  contrato?: Maybe<Array<Maybe<TerminaisHidroviariosConnectionContrato>>>;
  created_at?: Maybe<Array<Maybe<TerminaisHidroviariosConnectionCreated_At>>>;
  email?: Maybe<Array<Maybe<TerminaisHidroviariosConnectionEmail>>>;
  id?: Maybe<Array<Maybe<TerminaisHidroviariosConnectionId>>>;
  published_at?: Maybe<Array<Maybe<TerminaisHidroviariosConnectionPublished_At>>>;
  telefone?: Maybe<Array<Maybe<TerminaisHidroviariosConnectionTelefone>>>;
  terminal?: Maybe<Array<Maybe<TerminaisHidroviariosConnectionTerminal>>>;
  updated_at?: Maybe<Array<Maybe<TerminaisHidroviariosConnectionUpdated_At>>>;
};

export type TerminaisRodoviarioInput = {
  contrato?: InputMaybe<Scalars['ID']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  telefone?: InputMaybe<Scalars['String']>;
  terminal?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type TerminaisRodoviarios = {
  __typename?: 'TerminaisRodoviarios';
  contrato?: Maybe<UploadFile>;
  created_at: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  telefone?: Maybe<Scalars['String']>;
  terminal?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type TerminaisRodoviariosAggregator = {
  __typename?: 'TerminaisRodoviariosAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TerminaisRodoviariosConnection = {
  __typename?: 'TerminaisRodoviariosConnection';
  aggregate?: Maybe<TerminaisRodoviariosAggregator>;
  groupBy?: Maybe<TerminaisRodoviariosGroupBy>;
  values?: Maybe<Array<Maybe<TerminaisRodoviarios>>>;
};

export type TerminaisRodoviariosConnectionContrato = {
  __typename?: 'TerminaisRodoviariosConnectionContrato';
  connection?: Maybe<TerminaisRodoviariosConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TerminaisRodoviariosConnectionCreated_At = {
  __typename?: 'TerminaisRodoviariosConnectionCreated_at';
  connection?: Maybe<TerminaisRodoviariosConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TerminaisRodoviariosConnectionEmail = {
  __typename?: 'TerminaisRodoviariosConnectionEmail';
  connection?: Maybe<TerminaisRodoviariosConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TerminaisRodoviariosConnectionId = {
  __typename?: 'TerminaisRodoviariosConnectionId';
  connection?: Maybe<TerminaisRodoviariosConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TerminaisRodoviariosConnectionPublished_At = {
  __typename?: 'TerminaisRodoviariosConnectionPublished_at';
  connection?: Maybe<TerminaisRodoviariosConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TerminaisRodoviariosConnectionTelefone = {
  __typename?: 'TerminaisRodoviariosConnectionTelefone';
  connection?: Maybe<TerminaisRodoviariosConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TerminaisRodoviariosConnectionTerminal = {
  __typename?: 'TerminaisRodoviariosConnectionTerminal';
  connection?: Maybe<TerminaisRodoviariosConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TerminaisRodoviariosConnectionUpdated_At = {
  __typename?: 'TerminaisRodoviariosConnectionUpdated_at';
  connection?: Maybe<TerminaisRodoviariosConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TerminaisRodoviariosGroupBy = {
  __typename?: 'TerminaisRodoviariosGroupBy';
  contrato?: Maybe<Array<Maybe<TerminaisRodoviariosConnectionContrato>>>;
  created_at?: Maybe<Array<Maybe<TerminaisRodoviariosConnectionCreated_At>>>;
  email?: Maybe<Array<Maybe<TerminaisRodoviariosConnectionEmail>>>;
  id?: Maybe<Array<Maybe<TerminaisRodoviariosConnectionId>>>;
  published_at?: Maybe<Array<Maybe<TerminaisRodoviariosConnectionPublished_At>>>;
  telefone?: Maybe<Array<Maybe<TerminaisRodoviariosConnectionTelefone>>>;
  terminal?: Maybe<Array<Maybe<TerminaisRodoviariosConnectionTerminal>>>;
  updated_at?: Maybe<Array<Maybe<TerminaisRodoviariosConnectionUpdated_At>>>;
};

export type Teste = {
  __typename?: 'Teste';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  teste?: Maybe<Scalars['String']>;
  testetttt?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type TesteAggregator = {
  __typename?: 'TesteAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TesteConnection = {
  __typename?: 'TesteConnection';
  aggregate?: Maybe<TesteAggregator>;
  groupBy?: Maybe<TesteGroupBy>;
  values?: Maybe<Array<Maybe<Teste>>>;
};

export type TesteConnectionCreated_At = {
  __typename?: 'TesteConnectionCreated_at';
  connection?: Maybe<TesteConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TesteConnectionId = {
  __typename?: 'TesteConnectionId';
  connection?: Maybe<TesteConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TesteConnectionPublished_At = {
  __typename?: 'TesteConnectionPublished_at';
  connection?: Maybe<TesteConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TesteConnectionTeste = {
  __typename?: 'TesteConnectionTeste';
  connection?: Maybe<TesteConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TesteConnectionTestetttt = {
  __typename?: 'TesteConnectionTestetttt';
  connection?: Maybe<TesteConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TesteConnectionUpdated_At = {
  __typename?: 'TesteConnectionUpdated_at';
  connection?: Maybe<TesteConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TesteGroupBy = {
  __typename?: 'TesteGroupBy';
  created_at?: Maybe<Array<Maybe<TesteConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<TesteConnectionId>>>;
  published_at?: Maybe<Array<Maybe<TesteConnectionPublished_At>>>;
  teste?: Maybe<Array<Maybe<TesteConnectionTeste>>>;
  testetttt?: Maybe<Array<Maybe<TesteConnectionTestetttt>>>;
  updated_at?: Maybe<Array<Maybe<TesteConnectionUpdated_At>>>;
};

export type TesteInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  teste?: InputMaybe<Scalars['String']>;
  testetttt?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type TiposDeResolucoeInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  tipo: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type TiposDeResolucoes = {
  __typename?: 'TiposDeResolucoes';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  tipo: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type TiposDeResolucoesAggregator = {
  __typename?: 'TiposDeResolucoesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TiposDeResolucoesConnection = {
  __typename?: 'TiposDeResolucoesConnection';
  aggregate?: Maybe<TiposDeResolucoesAggregator>;
  groupBy?: Maybe<TiposDeResolucoesGroupBy>;
  values?: Maybe<Array<Maybe<TiposDeResolucoes>>>;
};

export type TiposDeResolucoesConnectionCreated_At = {
  __typename?: 'TiposDeResolucoesConnectionCreated_at';
  connection?: Maybe<TiposDeResolucoesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TiposDeResolucoesConnectionId = {
  __typename?: 'TiposDeResolucoesConnectionId';
  connection?: Maybe<TiposDeResolucoesConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TiposDeResolucoesConnectionPublished_At = {
  __typename?: 'TiposDeResolucoesConnectionPublished_at';
  connection?: Maybe<TiposDeResolucoesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TiposDeResolucoesConnectionTipo = {
  __typename?: 'TiposDeResolucoesConnectionTipo';
  connection?: Maybe<TiposDeResolucoesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TiposDeResolucoesConnectionUpdated_At = {
  __typename?: 'TiposDeResolucoesConnectionUpdated_at';
  connection?: Maybe<TiposDeResolucoesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TiposDeResolucoesGroupBy = {
  __typename?: 'TiposDeResolucoesGroupBy';
  created_at?: Maybe<Array<Maybe<TiposDeResolucoesConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<TiposDeResolucoesConnectionId>>>;
  published_at?: Maybe<Array<Maybe<TiposDeResolucoesConnectionPublished_At>>>;
  tipo?: Maybe<Array<Maybe<TiposDeResolucoesConnectionTipo>>>;
  updated_at?: Maybe<Array<Maybe<TiposDeResolucoesConnectionUpdated_At>>>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
  size: Scalars['Float'];
  updated_at: Scalars['DateTime'];
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};


export type UploadFileRelatedArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  avg?: Maybe<UploadFileAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UploadFileAggregatorMax>;
  min?: Maybe<UploadFileAggregatorMin>;
  sum?: Maybe<UploadFileAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  aggregate?: Maybe<UploadFileAggregator>;
  groupBy?: Maybe<UploadFileGroupBy>;
  values?: Maybe<Array<Maybe<UploadFile>>>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
};

export type UserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  username: Scalars['String'];
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  controller: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  type: Scalars['String'];
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  type?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
};

export type CreateAscomCartilhaInput = {
  data?: InputMaybe<AscomCartilhaInput>;
};

export type CreateAscomCartilhaPayload = {
  __typename?: 'createAscomCartilhaPayload';
  ascomCartilha?: Maybe<AscomCartilhas>;
};

export type CreateAscomFaqInput = {
  data?: InputMaybe<AscomFaqInput>;
};

export type CreateAscomFaqPayload = {
  __typename?: 'createAscomFaqPayload';
  ascomFaq?: Maybe<AscomFaq>;
};

export type CreateAtasDeColegiadoInput = {
  data?: InputMaybe<AtasDeColegiadoInput>;
};

export type CreateAtasDeColegiadoPayload = {
  __typename?: 'createAtasDeColegiadoPayload';
  atasDeColegiado?: Maybe<AtasDeColegiado>;
};

export type CreateAtasDeJulgamentoInput = {
  data?: InputMaybe<AtasDeJulgamentoInput>;
};

export type CreateAtasDeJulgamentoPayload = {
  __typename?: 'createAtasDeJulgamentoPayload';
  atasDeJulgamento?: Maybe<AtasDeJulgamento>;
};

export type CreateAudienciasPublicaInput = {
  data?: InputMaybe<AudienciasPublicaInput>;
};

export type CreateAudienciasPublicaPayload = {
  __typename?: 'createAudienciasPublicaPayload';
  audienciasPublica?: Maybe<AudienciasPublicas>;
};

export type CreateComapContratosCovidInput = {
  data?: InputMaybe<ComapContratosCovidInput>;
};

export type CreateComapContratosCovidPayload = {
  __typename?: 'createComapContratosCovidPayload';
  comapContratosCovid?: Maybe<ComapContratosCovid>;
};

export type CreateConsultasPublicaInput = {
  data?: InputMaybe<ConsultasPublicaInput>;
};

export type CreateConsultasPublicaPayload = {
  __typename?: 'createConsultasPublicaPayload';
  consultasPublica?: Maybe<ConsultasPublicas>;
};

export type CreateCsjriInformeDeJulgamentoInput = {
  data?: InputMaybe<CsjriInformeDeJulgamentoInput>;
};

export type CreateCsjriInformeDeJulgamentoPayload = {
  __typename?: 'createCsjriInformeDeJulgamentoPayload';
  csjriInformeDeJulgamento?: Maybe<CsjriInformeDeJulgamento>;
};

export type CreateDtafTarifasDosTerminaisHidroviarioInput = {
  data?: InputMaybe<DtafTarifasDosTerminaisHidroviarioInput>;
};

export type CreateDtafTarifasDosTerminaisHidroviarioPayload = {
  __typename?: 'createDtafTarifasDosTerminaisHidroviarioPayload';
  dtafTarifasDosTerminaisHidroviario?: Maybe<DtafTarifasDosTerminaisHidroviarios>;
};

export type CreateLicitacoeInput = {
  data?: InputMaybe<LicitacoeInput>;
};

export type CreateLicitacoePayload = {
  __typename?: 'createLicitacoePayload';
  licitacoe?: Maybe<Licitacoes>;
};

export type CreateNgctthTransportesHidroviarioInput = {
  data?: InputMaybe<NgctthTransportesHidroviarioInput>;
};

export type CreateNgctthTransportesHidroviarioPayload = {
  __typename?: 'createNgctthTransportesHidroviarioPayload';
  ngctthTransportesHidroviario?: Maybe<NgctthTransportesHidroviarios>;
};

export type CreateNoticiaInput = {
  data?: InputMaybe<NoticiaInput>;
};

export type CreateNoticiaPayload = {
  __typename?: 'createNoticiaPayload';
  noticia?: Maybe<Noticias>;
};

export type CreateNoticiasUrgenteInput = {
  data?: InputMaybe<NoticiasUrgenteInput>;
};

export type CreateNoticiasUrgentePayload = {
  __typename?: 'createNoticiasUrgentePayload';
  noticiasUrgente?: Maybe<NoticiasUrgentes>;
};

export type CreatePaginaInput = {
  data?: InputMaybe<PaginaInput>;
};

export type CreatePaginaPayload = {
  __typename?: 'createPaginaPayload';
  pagina?: Maybe<Paginas>;
};

export type CreatePenalidaddeInput = {
  data?: InputMaybe<PenalidaddeInput>;
};

export type CreatePenalidaddePayload = {
  __typename?: 'createPenalidaddePayload';
  penalidadde?: Maybe<Penalidaddes>;
};

export type CreateResolucoeInput = {
  data?: InputMaybe<ResolucoeInput>;
};

export type CreateResolucoePayload = {
  __typename?: 'createResolucoePayload';
  resolucoe?: Maybe<Resolucoes>;
};

export type CreateRodoviaInput = {
  data?: InputMaybe<RodoviaInput>;
};

export type CreateRodoviaPayload = {
  __typename?: 'createRodoviaPayload';
  rodovia?: Maybe<Rodovias>;
};

export type CreateRoleInput = {
  data?: InputMaybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateServicoInput = {
  data?: InputMaybe<ServicoInput>;
};

export type CreateServicoPayload = {
  __typename?: 'createServicoPayload';
  servico?: Maybe<Servicos>;
};

export type CreateSubTipoDeResolucaoInput = {
  data?: InputMaybe<SubTipoDeResolucaoInput>;
};

export type CreateSubTipoDeResolucaoPayload = {
  __typename?: 'createSubTipoDeResolucaoPayload';
  subTipoDeResolucao?: Maybe<SubTipoDeResolucao>;
};

export type CreateTarifasDasRodoviaInput = {
  data?: InputMaybe<TarifasDasRodoviaInput>;
};

export type CreateTarifasDasRodoviaPayload = {
  __typename?: 'createTarifasDasRodoviaPayload';
  tarifasDasRodovia?: Maybe<TarifasDasRodovias>;
};

export type CreateTarifasDosTerminaisRodoviarioInput = {
  data?: InputMaybe<TarifasDosTerminaisRodoviarioInput>;
};

export type CreateTarifasDosTerminaisRodoviarioPayload = {
  __typename?: 'createTarifasDosTerminaisRodoviarioPayload';
  tarifasDosTerminaisRodoviario?: Maybe<TarifasDosTerminaisRodoviarios>;
};

export type CreateTaxasEValoreInput = {
  data?: InputMaybe<TaxasEValoreInput>;
};

export type CreateTaxasEValorePayload = {
  __typename?: 'createTaxasEValorePayload';
  taxasEValore?: Maybe<TaxasEValores>;
};

export type CreateTerminaisAeroviarioInput = {
  data?: InputMaybe<TerminaisAeroviarioInput>;
};

export type CreateTerminaisAeroviarioPayload = {
  __typename?: 'createTerminaisAeroviarioPayload';
  terminaisAeroviario?: Maybe<TerminaisAeroviarios>;
};

export type CreateTerminaisHidroviarioInput = {
  data?: InputMaybe<TerminaisHidroviarioInput>;
};

export type CreateTerminaisHidroviarioPayload = {
  __typename?: 'createTerminaisHidroviarioPayload';
  terminaisHidroviario?: Maybe<TerminaisHidroviarios>;
};

export type CreateTerminaisRodoviarioInput = {
  data?: InputMaybe<TerminaisRodoviarioInput>;
};

export type CreateTerminaisRodoviarioPayload = {
  __typename?: 'createTerminaisRodoviarioPayload';
  terminaisRodoviario?: Maybe<TerminaisRodoviarios>;
};

export type CreateTesteInput = {
  data?: InputMaybe<TesteInput>;
};

export type CreateTestePayload = {
  __typename?: 'createTestePayload';
  teste?: Maybe<Teste>;
};

export type CreateTiposDeResolucoeInput = {
  data?: InputMaybe<TiposDeResolucoeInput>;
};

export type CreateTiposDeResolucoePayload = {
  __typename?: 'createTiposDeResolucoePayload';
  tiposDeResolucoe?: Maybe<TiposDeResolucoes>;
};

export type CreateUserInput = {
  data?: InputMaybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteAscomCartilhaInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteAscomCartilhaPayload = {
  __typename?: 'deleteAscomCartilhaPayload';
  ascomCartilha?: Maybe<AscomCartilhas>;
};

export type DeleteAscomFaqInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteAscomFaqPayload = {
  __typename?: 'deleteAscomFaqPayload';
  ascomFaq?: Maybe<AscomFaq>;
};

export type DeleteAtasDeColegiadoInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteAtasDeColegiadoPayload = {
  __typename?: 'deleteAtasDeColegiadoPayload';
  atasDeColegiado?: Maybe<AtasDeColegiado>;
};

export type DeleteAtasDeJulgamentoInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteAtasDeJulgamentoPayload = {
  __typename?: 'deleteAtasDeJulgamentoPayload';
  atasDeJulgamento?: Maybe<AtasDeJulgamento>;
};

export type DeleteAudienciasPublicaInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteAudienciasPublicaPayload = {
  __typename?: 'deleteAudienciasPublicaPayload';
  audienciasPublica?: Maybe<AudienciasPublicas>;
};

export type DeleteComapContratosCovidInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteComapContratosCovidPayload = {
  __typename?: 'deleteComapContratosCovidPayload';
  comapContratosCovid?: Maybe<ComapContratosCovid>;
};

export type DeleteConsultasPublicaInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteConsultasPublicaPayload = {
  __typename?: 'deleteConsultasPublicaPayload';
  consultasPublica?: Maybe<ConsultasPublicas>;
};

export type DeleteCsjriInformeDeJulgamentoInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteCsjriInformeDeJulgamentoPayload = {
  __typename?: 'deleteCsjriInformeDeJulgamentoPayload';
  csjriInformeDeJulgamento?: Maybe<CsjriInformeDeJulgamento>;
};

export type DeleteCsjriInformesDeJulgamentoPayload = {
  __typename?: 'deleteCsjriInformesDeJulgamentoPayload';
  csjriInformesDeJulgamento?: Maybe<CsjriInformesDeJulgamento>;
};

export type DeleteDfisLicencasEspeciaiPayload = {
  __typename?: 'deleteDfisLicencasEspeciaiPayload';
  dfisLicencasEspeciai?: Maybe<DfisLicencasEspeciais>;
};

export type DeleteDfisVistoriaPayload = {
  __typename?: 'deleteDfisVistoriaPayload';
  dfisVistoria?: Maybe<DfisVistorias>;
};

export type DeleteDpseCadastroPayload = {
  __typename?: 'deleteDpseCadastroPayload';
  dpseCadastro?: Maybe<DpseCadastro>;
};

export type DeleteDtafTarifasDosTerminaisHidroviarioInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteDtafTarifasDosTerminaisHidroviarioPayload = {
  __typename?: 'deleteDtafTarifasDosTerminaisHidroviarioPayload';
  dtafTarifasDosTerminaisHidroviario?: Maybe<DtafTarifasDosTerminaisHidroviarios>;
};

export type DeleteFileInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteGasPayload = {
  __typename?: 'deleteGasPayload';
  gas?: Maybe<Gas>;
};

export type DeleteLicitacoeInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteLicitacoePayload = {
  __typename?: 'deleteLicitacoePayload';
  licitacoe?: Maybe<Licitacoes>;
};

export type DeleteNgctthTransportesHidroviarioInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteNgctthTransportesHidroviarioPayload = {
  __typename?: 'deleteNgctthTransportesHidroviarioPayload';
  ngctthTransportesHidroviario?: Maybe<NgctthTransportesHidroviarios>;
};

export type DeleteNoticiaInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteNoticiaPayload = {
  __typename?: 'deleteNoticiaPayload';
  noticia?: Maybe<Noticias>;
};

export type DeleteNoticiasUrgenteInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteNoticiasUrgentePayload = {
  __typename?: 'deleteNoticiasUrgentePayload';
  noticiasUrgente?: Maybe<NoticiasUrgentes>;
};

export type DeleteOuvidoriaPayload = {
  __typename?: 'deleteOuvidoriaPayload';
  ouvidoria?: Maybe<Ouvidoria>;
};

export type DeletePaginaInput = {
  where?: InputMaybe<InputId>;
};

export type DeletePaginaPayload = {
  __typename?: 'deletePaginaPayload';
  pagina?: Maybe<Paginas>;
};

export type DeletePenalidaddeInput = {
  where?: InputMaybe<InputId>;
};

export type DeletePenalidaddePayload = {
  __typename?: 'deletePenalidaddePayload';
  penalidadde?: Maybe<Penalidaddes>;
};

export type DeleteResolucoeInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteResolucoePayload = {
  __typename?: 'deleteResolucoePayload';
  resolucoe?: Maybe<Resolucoes>;
};

export type DeleteRodoviaInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteRodoviaPayload = {
  __typename?: 'deleteRodoviaPayload';
  rodovia?: Maybe<Rodovias>;
};

export type DeleteRoleInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteServicoInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteServicoPayload = {
  __typename?: 'deleteServicoPayload';
  servico?: Maybe<Servicos>;
};

export type DeleteSubTipoDeResolucaoInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteSubTipoDeResolucaoPayload = {
  __typename?: 'deleteSubTipoDeResolucaoPayload';
  subTipoDeResolucao?: Maybe<SubTipoDeResolucao>;
};

export type DeleteTarifasDasRodoviaInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteTarifasDasRodoviaPayload = {
  __typename?: 'deleteTarifasDasRodoviaPayload';
  tarifasDasRodovia?: Maybe<TarifasDasRodovias>;
};

export type DeleteTarifasDosTerminaisRodoviarioInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteTarifasDosTerminaisRodoviarioPayload = {
  __typename?: 'deleteTarifasDosTerminaisRodoviarioPayload';
  tarifasDosTerminaisRodoviario?: Maybe<TarifasDosTerminaisRodoviarios>;
};

export type DeleteTaxasEValoreInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteTaxasEValorePayload = {
  __typename?: 'deleteTaxasEValorePayload';
  taxasEValore?: Maybe<TaxasEValores>;
};

export type DeleteTerminaisAeroviarioInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteTerminaisAeroviarioPayload = {
  __typename?: 'deleteTerminaisAeroviarioPayload';
  terminaisAeroviario?: Maybe<TerminaisAeroviarios>;
};

export type DeleteTerminaisHidroviarioInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteTerminaisHidroviarioPayload = {
  __typename?: 'deleteTerminaisHidroviarioPayload';
  terminaisHidroviario?: Maybe<TerminaisHidroviarios>;
};

export type DeleteTerminaisRodoviarioInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteTerminaisRodoviarioPayload = {
  __typename?: 'deleteTerminaisRodoviarioPayload';
  terminaisRodoviario?: Maybe<TerminaisRodoviarios>;
};

export type DeleteTesteInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteTestePayload = {
  __typename?: 'deleteTestePayload';
  teste?: Maybe<Teste>;
};

export type DeleteTiposDeResolucoeInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteTiposDeResolucoePayload = {
  __typename?: 'deleteTiposDeResolucoePayload';
  tiposDeResolucoe?: Maybe<TiposDeResolucoes>;
};

export type DeleteUserInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type EditAscomCartilhaInput = {
  Ano?: InputMaybe<Scalars['String']>;
  cartilha?: InputMaybe<Scalars['ID']>;
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  titulo?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditAscomFaqInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  pergunta?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  resposta?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditAtasDeColegiadoInput = {
  Data?: InputMaybe<Scalars['DateTime']>;
  Titulo?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  descritption?: InputMaybe<Scalars['String']>;
  documentos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  teste?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditAtasDeJulgamentoInput = {
  Data?: InputMaybe<Scalars['DateTime']>;
  Description?: InputMaybe<Scalars['String']>;
  Documentos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  Titulo?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditAudienciasPublicaInput = {
  Calendario?: InputMaybe<Array<InputMaybe<EditComponentCalendarCalendarioInput>>>;
  Data?: InputMaybe<Scalars['Date']>;
  Titulo?: InputMaybe<Scalars['String']>;
  comunica?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  documentos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  encerramento?: InputMaybe<Scalars['String']>;
  local?: InputMaybe<Scalars['String']>;
  participacao?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditComapContratosCovidInput = {
  contratos?: InputMaybe<Array<InputMaybe<EditComponentContratosContratoInput>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  preambulo?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditComponentAditivoAditivoInput = {
  contrato_do_aditivo?: InputMaybe<Scalars['ID']>;
  data_da_assinatura_do_aditivo?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  numero_do_aditivo?: InputMaybe<Scalars['Int']>;
};

export type EditComponentCalendarCalendarioInput = {
  descricao?: InputMaybe<Scalars['String']>;
  final?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  inicial?: InputMaybe<Scalars['Date']>;
};

export type EditComponentConcessaoConcessaoInput = {
  Base_de_servico_de_apoio_ao_usuario?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  Concessionaria?: InputMaybe<Scalars['String']>;
  Mapa_da_rodovia?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  Objeto_da_Concessao?: InputMaybe<Scalars['String']>;
  Prazo_da_concessao?: InputMaybe<Scalars['Date']>;
  Transporte_de_Cargas_Especiais_e_Faixa_de_Dominio?: InputMaybe<Scalars['ID']>;
  Trecho_objeto_da_concessao?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  data_da_assinatura?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  localizacao_das_bases_do_servico_de_apoio_ao_usuario?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  ouvidoria?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Scalars['String']>;
  telefone?: InputMaybe<Scalars['String']>;
};

export type EditComponentContentContentInput = {
  Arquivo?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  Foto?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  post?: InputMaybe<Scalars['String']>;
};

export type EditComponentContratosContratoInput = {
  cnpj?: InputMaybe<Scalars['String']>;
  contratado?: InputMaybe<Scalars['String']>;
  contrato?: InputMaybe<Scalars['ID']>;
  data_de_celebracao_doe?: InputMaybe<Scalars['Date']>;
  forma_de_contratacao?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  numero_do_contrato?: InputMaybe<Scalars['String']>;
  numero_do_processo?: InputMaybe<Scalars['String']>;
  objeto?: InputMaybe<Scalars['String']>;
  prazo?: InputMaybe<Scalars['String']>;
  valor?: InputMaybe<Scalars['Float']>;
};

export type EditComponentDataHoraDataHoraInput = {
  Final?: InputMaybe<Scalars['DateTime']>;
  Inicio?: InputMaybe<Scalars['DateTime']>;
  descricao?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type EditComponentDocumentDocInput = {
  documentos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
};

export type EditComponentEditalEditalInput = {
  Edital?: InputMaybe<Scalars['Long']>;
  aditivos?: InputMaybe<Array<InputMaybe<EditComponentAditivoAditivoInput>>>;
  anexo?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  anexoII?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  assinatura?: InputMaybe<Scalars['Date']>;
  contrato?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  programa_de_exploracao_de_rodovias?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type EditComponentPenalidadePenalidadeInput = {
  Infrigidos?: InputMaybe<Scalars['String']>;
  coeficiente?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  natureza?: InputMaybe<Scalars['String']>;
  valor?: InputMaybe<Scalars['Float']>;
};

export type EditComponentServiceServiceInput = {
  Bg?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type EditComponentSobreAConcessionariaSobreAConcessionariaInput = {
  Ouvidoria?: InputMaybe<Scalars['String']>;
  Site?: InputMaybe<Scalars['String']>;
  Telefone?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type EditComponentTagsTagInput = {
  Tag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type EditComponentTarifasTarifaInput = {
  Categorias?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  numero_dos_eixos?: InputMaybe<Scalars['Int']>;
  tarifa_dias_uteis?: InputMaybe<Scalars['Float']>;
  tipo_de_veiculo?: InputMaybe<Scalars['String']>;
};

export type EditComponentTarifasTerminaiInput = {
  cidades?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  valor?: InputMaybe<Scalars['Float']>;
};

export type EditComponentTaxaTaxaInput = {
  Servico?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  valor?: InputMaybe<Scalars['Float']>;
};

export type EditComponentTerminaisHidroviariosTerminaisHidroviarioInput = {
  Classe_I?: InputMaybe<Scalars['String']>;
  Classe_II?: InputMaybe<Scalars['String']>;
  Classe_III?: InputMaybe<Scalars['String']>;
  Classe_IV?: InputMaybe<Scalars['String']>;
  Terminal?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type EditConsultasPublicaInput = {
  Calendario?: InputMaybe<Array<InputMaybe<EditComponentCalendarCalendarioInput>>>;
  Data?: InputMaybe<Scalars['Date']>;
  Titulo?: InputMaybe<Scalars['String']>;
  comunica?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  documentos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  encerramento?: InputMaybe<Scalars['String']>;
  participacao?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditCsjriInformeDeJulgamentoInput = {
  Data?: InputMaybe<Scalars['DateTime']>;
  Description?: InputMaybe<Scalars['String']>;
  Documentos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  Titulo?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditCsjriInformesDeJulgamentoInput = {
  Informes?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditDfisLicencasEspeciaiInput = {
  DOCUMENTOS_NECESSARIOS?: InputMaybe<Scalars['String']>;
  LICENCA_DE_FRETAMENTO?: InputMaybe<Scalars['String']>;
  LICENCA_DE_TURISMO?: InputMaybe<Scalars['String']>;
  LICENCA_ESCOLAR?: InputMaybe<Scalars['String']>;
  LICENCA_EVENTUAL?: InputMaybe<Scalars['String']>;
  LICENCA_VINCULADA?: InputMaybe<Scalars['String']>;
  LINK_DE_ACESSO_AO_STIP?: InputMaybe<Scalars['String']>;
  PREAMBULO?: InputMaybe<Scalars['String']>;
  Para_Transportar_Funcionarios_de_Empresas?: InputMaybe<Scalars['String']>;
  Para_Transportar_Grupo_Fixo_Universitarios?: InputMaybe<Scalars['String']>;
  Para_Tratamento_de_Saude_Prefeituras?: InputMaybe<Scalars['String']>;
  RESOLUCOES?: InputMaybe<Scalars['String']>;
  VALOR_DA_TAXA?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditDfisVistoriaInput = {
  DOCUMENTOS_NECESSARIOS?: InputMaybe<Scalars['String']>;
  PREAMBULO?: InputMaybe<Scalars['String']>;
  RESOLUCOES_VISTORIAS?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditDpseCadastroInput = {
  concessionarias?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  empresas_comercializadoras_de_gas?: InputMaybe<Scalars['String']>;
  empresas_de_publicidade?: InputMaybe<Scalars['String']>;
  empresas_do_hidroviario?: InputMaybe<Scalars['String']>;
  operadoras_de_servicos_especiais?: InputMaybe<Scalars['String']>;
  permissionario_pessoa_juridica?: InputMaybe<Scalars['String']>;
  permissionarios_pessoa_fisica?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  sobre?: InputMaybe<Scalars['String']>;
  sobre_permissionarios?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditDtafTarifasDosTerminaisHidroviarioInput = {
  Classe_I?: InputMaybe<Scalars['Float']>;
  Classe_II?: InputMaybe<Scalars['Float']>;
  Classe_III?: InputMaybe<Scalars['Float']>;
  Classe_IV?: InputMaybe<Scalars['Float']>;
  Obs_Classe_I?: InputMaybe<Scalars['Float']>;
  Obs_Classe_II?: InputMaybe<Scalars['Float']>;
  Obs_Classe_III?: InputMaybe<Scalars['Float']>;
  Obs_Classe_IV?: InputMaybe<Scalars['Float']>;
  Terminais_Hidroviarios?: InputMaybe<Array<InputMaybe<EditComponentTerminaisHidroviariosTerminaisHidroviarioInput>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  size?: InputMaybe<Scalars['Float']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type EditGasInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  direitos_e_deveres?: InputMaybe<Scalars['String']>;
  energia_eletrica_e_gas_natural?: InputMaybe<Scalars['String']>;
  legislacoes?: InputMaybe<Scalars['String']>;
  nucleo_de_gas?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditLicitacoeInput = {
  Description?: InputMaybe<Scalars['String']>;
  Documentos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  Local?: InputMaybe<Scalars['String']>;
  SubTitulo?: InputMaybe<Scalars['String']>;
  Tipo?: InputMaybe<Enum_Licitacoes_Tipo>;
  Title?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  dataHora?: InputMaybe<Scalars['DateTime']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  url_destino?: InputMaybe<Scalars['String']>;
};

export type EditLocaleInput = {
  code?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditNgctthTransportesHidroviarioInput = {
  aditivos?: InputMaybe<Array<InputMaybe<EditComponentAditivoAditivoInput>>>;
  contrato?: InputMaybe<Scalars['ID']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  empresa?: InputMaybe<Scalars['String']>;
  endereco?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  telefone?: InputMaybe<Scalars['String']>;
  terminal?: InputMaybe<Enum_Ngctthtransporteshidroviarios_Terminal>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditNoticiaInput = {
  Destaque?: InputMaybe<Scalars['Boolean']>;
  Imagem?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  Tags?: InputMaybe<Array<Scalars['NoticiasTagsDynamicZoneInput']>>;
  Titulo?: InputMaybe<Scalars['String']>;
  alternativo?: InputMaybe<Scalars['String']>;
  apoio?: InputMaybe<Scalars['String']>;
  cor_da_fonte?: InputMaybe<Enum_Noticias_Cor_Da_Fonte>;
  created_by?: InputMaybe<Scalars['ID']>;
  data?: InputMaybe<Scalars['Date']>;
  fonte_foto?: InputMaybe<Scalars['String']>;
  materia?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  tipo?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditNoticiasUrgenteInput = {
  Titulo?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
};

export type EditOuvidoriaInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  sobre?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditPaginaInput = {
  Content?: InputMaybe<Scalars['String']>;
  Files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  Titulo?: InputMaybe<Scalars['String']>;
  Url?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditPenalidaddeInput = {
  Titulo?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  penalidade?: InputMaybe<Array<InputMaybe<EditComponentPenalidadePenalidadeInput>>>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditResolucoeInput = {
  Documents?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  Titulo?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  data?: InputMaybe<Scalars['DateTime']>;
  ementa?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  sub_tipo_de_resolucao?: InputMaybe<Scalars['ID']>;
  tag?: InputMaybe<Array<InputMaybe<EditComponentTagsTagInput>>>;
  tipos_de_resolucoe?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditRodoviaInput = {
  Concessao?: InputMaybe<Array<InputMaybe<EditComponentConcessaoConcessaoInput>>>;
  Edital?: InputMaybe<Array<InputMaybe<EditComponentEditalEditalInput>>>;
  Nome?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  termo_de_subrogacao?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditRoleInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type EditServicoInput = {
  Conteudo?: InputMaybe<Array<InputMaybe<EditComponentContentContentInput>>>;
  Links?: InputMaybe<Array<InputMaybe<EditComponentServiceServiceInput>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  titulo?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditSubTipoDeResolucaoInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  subTipo?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditTarifasDasRodoviaInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  rodovia?: InputMaybe<Scalars['String']>;
  tarifas?: InputMaybe<Array<InputMaybe<EditComponentTarifasTarifaInput>>>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditTarifasDosTerminaisRodoviarioInput = {
  Obs_Classe_I?: InputMaybe<Scalars['Float']>;
  Obs_Classe_II?: InputMaybe<Scalars['Float']>;
  Obs_Classe_III?: InputMaybe<Scalars['Float']>;
  Obs_Classe_IV?: InputMaybe<Scalars['Float']>;
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  terminais_rodoviarios?: InputMaybe<Array<InputMaybe<EditComponentTarifasTerminaiInput>>>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditTaxasEValoreInput = {
  Nome?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  taxas?: InputMaybe<Array<InputMaybe<EditComponentTaxaTaxaInput>>>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditTerminaisAeroviarioInput = {
  contrato?: InputMaybe<Scalars['ID']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  telefone?: InputMaybe<Scalars['String']>;
  terminal?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditTerminaisHidroviarioInput = {
  contrato?: InputMaybe<Scalars['ID']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  telefone?: InputMaybe<Scalars['String']>;
  terminal?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditTerminaisRodoviarioInput = {
  contrato?: InputMaybe<Scalars['ID']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  telefone?: InputMaybe<Scalars['String']>;
  terminal?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditTesteInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  teste?: InputMaybe<Scalars['String']>;
  testetttt?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditTiposDeResolucoeInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  tipo?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UpdateAscomCartilhaInput = {
  data?: InputMaybe<EditAscomCartilhaInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateAscomCartilhaPayload = {
  __typename?: 'updateAscomCartilhaPayload';
  ascomCartilha?: Maybe<AscomCartilhas>;
};

export type UpdateAscomFaqInput = {
  data?: InputMaybe<EditAscomFaqInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateAscomFaqPayload = {
  __typename?: 'updateAscomFaqPayload';
  ascomFaq?: Maybe<AscomFaq>;
};

export type UpdateAtasDeColegiadoInput = {
  data?: InputMaybe<EditAtasDeColegiadoInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateAtasDeColegiadoPayload = {
  __typename?: 'updateAtasDeColegiadoPayload';
  atasDeColegiado?: Maybe<AtasDeColegiado>;
};

export type UpdateAtasDeJulgamentoInput = {
  data?: InputMaybe<EditAtasDeJulgamentoInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateAtasDeJulgamentoPayload = {
  __typename?: 'updateAtasDeJulgamentoPayload';
  atasDeJulgamento?: Maybe<AtasDeJulgamento>;
};

export type UpdateAudienciasPublicaInput = {
  data?: InputMaybe<EditAudienciasPublicaInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateAudienciasPublicaPayload = {
  __typename?: 'updateAudienciasPublicaPayload';
  audienciasPublica?: Maybe<AudienciasPublicas>;
};

export type UpdateComapContratosCovidInput = {
  data?: InputMaybe<EditComapContratosCovidInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateComapContratosCovidPayload = {
  __typename?: 'updateComapContratosCovidPayload';
  comapContratosCovid?: Maybe<ComapContratosCovid>;
};

export type UpdateConsultasPublicaInput = {
  data?: InputMaybe<EditConsultasPublicaInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateConsultasPublicaPayload = {
  __typename?: 'updateConsultasPublicaPayload';
  consultasPublica?: Maybe<ConsultasPublicas>;
};

export type UpdateCsjriInformeDeJulgamentoInput = {
  data?: InputMaybe<EditCsjriInformeDeJulgamentoInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateCsjriInformeDeJulgamentoPayload = {
  __typename?: 'updateCsjriInformeDeJulgamentoPayload';
  csjriInformeDeJulgamento?: Maybe<CsjriInformeDeJulgamento>;
};

export type UpdateCsjriInformesDeJulgamentoInput = {
  data?: InputMaybe<EditCsjriInformesDeJulgamentoInput>;
};

export type UpdateCsjriInformesDeJulgamentoPayload = {
  __typename?: 'updateCsjriInformesDeJulgamentoPayload';
  csjriInformesDeJulgamento?: Maybe<CsjriInformesDeJulgamento>;
};

export type UpdateDfisLicencasEspeciaiInput = {
  data?: InputMaybe<EditDfisLicencasEspeciaiInput>;
};

export type UpdateDfisLicencasEspeciaiPayload = {
  __typename?: 'updateDfisLicencasEspeciaiPayload';
  dfisLicencasEspeciai?: Maybe<DfisLicencasEspeciais>;
};

export type UpdateDfisVistoriaInput = {
  data?: InputMaybe<EditDfisVistoriaInput>;
};

export type UpdateDfisVistoriaPayload = {
  __typename?: 'updateDfisVistoriaPayload';
  dfisVistoria?: Maybe<DfisVistorias>;
};

export type UpdateDpseCadastroInput = {
  data?: InputMaybe<EditDpseCadastroInput>;
};

export type UpdateDpseCadastroPayload = {
  __typename?: 'updateDpseCadastroPayload';
  dpseCadastro?: Maybe<DpseCadastro>;
};

export type UpdateDtafTarifasDosTerminaisHidroviarioInput = {
  data?: InputMaybe<EditDtafTarifasDosTerminaisHidroviarioInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateDtafTarifasDosTerminaisHidroviarioPayload = {
  __typename?: 'updateDtafTarifasDosTerminaisHidroviarioPayload';
  dtafTarifasDosTerminaisHidroviario?: Maybe<DtafTarifasDosTerminaisHidroviarios>;
};

export type UpdateGasInput = {
  data?: InputMaybe<EditGasInput>;
};

export type UpdateGasPayload = {
  __typename?: 'updateGasPayload';
  gas?: Maybe<Gas>;
};

export type UpdateLicitacoeInput = {
  data?: InputMaybe<EditLicitacoeInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateLicitacoePayload = {
  __typename?: 'updateLicitacoePayload';
  licitacoe?: Maybe<Licitacoes>;
};

export type UpdateNgctthTransportesHidroviarioInput = {
  data?: InputMaybe<EditNgctthTransportesHidroviarioInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateNgctthTransportesHidroviarioPayload = {
  __typename?: 'updateNgctthTransportesHidroviarioPayload';
  ngctthTransportesHidroviario?: Maybe<NgctthTransportesHidroviarios>;
};

export type UpdateNoticiaInput = {
  data?: InputMaybe<EditNoticiaInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateNoticiaPayload = {
  __typename?: 'updateNoticiaPayload';
  noticia?: Maybe<Noticias>;
};

export type UpdateNoticiasUrgenteInput = {
  data?: InputMaybe<EditNoticiasUrgenteInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateNoticiasUrgentePayload = {
  __typename?: 'updateNoticiasUrgentePayload';
  noticiasUrgente?: Maybe<NoticiasUrgentes>;
};

export type UpdateOuvidoriaInput = {
  data?: InputMaybe<EditOuvidoriaInput>;
};

export type UpdateOuvidoriaPayload = {
  __typename?: 'updateOuvidoriaPayload';
  ouvidoria?: Maybe<Ouvidoria>;
};

export type UpdatePaginaInput = {
  data?: InputMaybe<EditPaginaInput>;
  where?: InputMaybe<InputId>;
};

export type UpdatePaginaPayload = {
  __typename?: 'updatePaginaPayload';
  pagina?: Maybe<Paginas>;
};

export type UpdatePenalidaddeInput = {
  data?: InputMaybe<EditPenalidaddeInput>;
  where?: InputMaybe<InputId>;
};

export type UpdatePenalidaddePayload = {
  __typename?: 'updatePenalidaddePayload';
  penalidadde?: Maybe<Penalidaddes>;
};

export type UpdateResolucoeInput = {
  data?: InputMaybe<EditResolucoeInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateResolucoePayload = {
  __typename?: 'updateResolucoePayload';
  resolucoe?: Maybe<Resolucoes>;
};

export type UpdateRodoviaInput = {
  data?: InputMaybe<EditRodoviaInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateRodoviaPayload = {
  __typename?: 'updateRodoviaPayload';
  rodovia?: Maybe<Rodovias>;
};

export type UpdateRoleInput = {
  data?: InputMaybe<EditRoleInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateServicoInput = {
  data?: InputMaybe<EditServicoInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateServicoPayload = {
  __typename?: 'updateServicoPayload';
  servico?: Maybe<Servicos>;
};

export type UpdateSubTipoDeResolucaoInput = {
  data?: InputMaybe<EditSubTipoDeResolucaoInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateSubTipoDeResolucaoPayload = {
  __typename?: 'updateSubTipoDeResolucaoPayload';
  subTipoDeResolucao?: Maybe<SubTipoDeResolucao>;
};

export type UpdateTarifasDasRodoviaInput = {
  data?: InputMaybe<EditTarifasDasRodoviaInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateTarifasDasRodoviaPayload = {
  __typename?: 'updateTarifasDasRodoviaPayload';
  tarifasDasRodovia?: Maybe<TarifasDasRodovias>;
};

export type UpdateTarifasDosTerminaisRodoviarioInput = {
  data?: InputMaybe<EditTarifasDosTerminaisRodoviarioInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateTarifasDosTerminaisRodoviarioPayload = {
  __typename?: 'updateTarifasDosTerminaisRodoviarioPayload';
  tarifasDosTerminaisRodoviario?: Maybe<TarifasDosTerminaisRodoviarios>;
};

export type UpdateTaxasEValoreInput = {
  data?: InputMaybe<EditTaxasEValoreInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateTaxasEValorePayload = {
  __typename?: 'updateTaxasEValorePayload';
  taxasEValore?: Maybe<TaxasEValores>;
};

export type UpdateTerminaisAeroviarioInput = {
  data?: InputMaybe<EditTerminaisAeroviarioInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateTerminaisAeroviarioPayload = {
  __typename?: 'updateTerminaisAeroviarioPayload';
  terminaisAeroviario?: Maybe<TerminaisAeroviarios>;
};

export type UpdateTerminaisHidroviarioInput = {
  data?: InputMaybe<EditTerminaisHidroviarioInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateTerminaisHidroviarioPayload = {
  __typename?: 'updateTerminaisHidroviarioPayload';
  terminaisHidroviario?: Maybe<TerminaisHidroviarios>;
};

export type UpdateTerminaisRodoviarioInput = {
  data?: InputMaybe<EditTerminaisRodoviarioInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateTerminaisRodoviarioPayload = {
  __typename?: 'updateTerminaisRodoviarioPayload';
  terminaisRodoviario?: Maybe<TerminaisRodoviarios>;
};

export type UpdateTesteInput = {
  data?: InputMaybe<EditTesteInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateTestePayload = {
  __typename?: 'updateTestePayload';
  teste?: Maybe<Teste>;
};

export type UpdateTiposDeResolucoeInput = {
  data?: InputMaybe<EditTiposDeResolucoeInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateTiposDeResolucoePayload = {
  __typename?: 'updateTiposDeResolucoePayload';
  tiposDeResolucoe?: Maybe<TiposDeResolucoes>;
};

export type UpdateUserInput = {
  data?: InputMaybe<EditUserInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type GetAtasDoColegiadoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAtasDoColegiadoQuery = { __typename?: 'Query', atasDeColegiados?: Array<{ __typename?: 'AtasDeColegiado', id: string, Titulo: string, Data: any, descritption?: string | null, published_at?: any | null, documentos?: Array<{ __typename?: 'UploadFile', id: string, name: string, size: number, url: string } | null> | null } | null> | null };

export type GetCartilhasQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCartilhasQuery = { __typename?: 'Query', ascomCartilhas?: Array<{ __typename?: 'AscomCartilhas', id: string, Ano?: string | null, titulo: string, cartilha?: { __typename?: 'UploadFile', id: string, name: string, alternativeText?: string | null, url: string } | null } | null> | null };

export type GetConsultaPublicaByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetConsultaPublicaByIdQuery = { __typename?: 'Query', consultasPublica?: { __typename?: 'ConsultasPublicas', id: string, Titulo: string, comunica: string, participacao?: string | null, encerramento?: string | null, Data: any, Calendario?: Array<{ __typename?: 'ComponentCalendarCalendario', id: string, descricao: string, inicial: any, final: any } | null> | null, documentos?: Array<{ __typename?: 'UploadFile', id: string, name: string, size: number, url: string } | null> | null } | null };

export type GetConsultasPublicasQueryVariables = Exact<{ [key: string]: never; }>;


export type GetConsultasPublicasQuery = { __typename?: 'Query', consultasPublicas?: Array<{ __typename?: 'ConsultasPublicas', id: string, Titulo: string, comunica: string, Data: any } | null> | null };

export type GetFaqsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFaqsQuery = { __typename?: 'Query', ascomFaqs?: Array<{ __typename?: 'AscomFaq', id: string, pergunta: string, resposta: string, published_at?: any | null } | null> | null };

export type GetLicitacoesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLicitacoesQuery = { __typename?: 'Query', licitacoes?: Array<{ __typename?: 'Licitacoes', id: string, dataHora?: any | null, Title: string, SubTitulo?: string | null, Description: string, Local?: string | null, Tipo: Enum_Licitacoes_Tipo, Documentos?: Array<{ __typename?: 'UploadFile', id: string, name: string, alternativeText?: string | null, caption?: string | null, url: string } | null> | null } | null> | null };

export type GetResolucoesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetResolucoesQuery = { __typename?: 'Query', resolucoes?: Array<{ __typename?: 'Resolucoes', id: string, Titulo: string, ementa: string, data: any, tipos_de_resolucoe?: { __typename?: 'TiposDeResolucoes', id: string, tipo: string } | null, tag?: Array<{ __typename?: 'ComponentTagsTags', id: string, Tag?: string | null } | null> | null, Documents?: Array<{ __typename?: 'UploadFile', id: string, name: string, url: string, hash: string } | null> | null } | null> | null };

export type GetRodoviasConcessionadasQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRodoviasConcessionadasQuery = { __typename?: 'Query', rodovias?: Array<{ __typename?: 'Rodovias', id: string, Nome: string, Concessao?: Array<{ __typename?: 'ComponentConcessaoConcessao', id: string, Concessionaria: string, telefone?: string | null, site: string, ouvidoria?: string | null } | null> | null } | null> | null };

export type GetTerminaisAeroviariosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTerminaisAeroviariosQuery = { __typename?: 'Query', terminaisAeroviarios?: Array<{ __typename?: 'TerminaisAeroviarios', id: string, terminal?: string | null, telefone?: string | null, email?: string | null, contrato?: { __typename?: 'UploadFile', id: string, name: string } | null } | null> | null };

export type GetTerminaisHidroviariosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTerminaisHidroviariosQuery = { __typename?: 'Query', terminaisHidroviarios?: Array<{ __typename?: 'TerminaisHidroviarios', id: string, terminal?: string | null, telefone?: string | null, email?: string | null } | null> | null };

export type GetTerminaisRodoviariosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTerminaisRodoviariosQuery = { __typename?: 'Query', terminaisRodoviarios?: Array<{ __typename?: 'TerminaisRodoviarios', id: string, terminal?: string | null, telefone?: string | null, email?: string | null, contrato?: { __typename?: 'UploadFile', id: string, name: string } | null } | null> | null };


export const GetAtasDoColegiadoDocument = gql`
    query GetAtasDoColegiado {
  atasDeColegiados {
    id
    Titulo
    Data
    descritption
    published_at
    documentos {
      id
      name
      size
      url
    }
  }
}
    `;

/**
 * __useGetAtasDoColegiadoQuery__
 *
 * To run a query within a React component, call `useGetAtasDoColegiadoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAtasDoColegiadoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAtasDoColegiadoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAtasDoColegiadoQuery(baseOptions?: Apollo.QueryHookOptions<GetAtasDoColegiadoQuery, GetAtasDoColegiadoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAtasDoColegiadoQuery, GetAtasDoColegiadoQueryVariables>(GetAtasDoColegiadoDocument, options);
      }
export function useGetAtasDoColegiadoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAtasDoColegiadoQuery, GetAtasDoColegiadoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAtasDoColegiadoQuery, GetAtasDoColegiadoQueryVariables>(GetAtasDoColegiadoDocument, options);
        }
export type GetAtasDoColegiadoQueryHookResult = ReturnType<typeof useGetAtasDoColegiadoQuery>;
export type GetAtasDoColegiadoLazyQueryHookResult = ReturnType<typeof useGetAtasDoColegiadoLazyQuery>;
export type GetAtasDoColegiadoQueryResult = Apollo.QueryResult<GetAtasDoColegiadoQuery, GetAtasDoColegiadoQueryVariables>;
export const GetCartilhasDocument = gql`
    query GetCartilhas {
  ascomCartilhas {
    id
    Ano
    titulo
    cartilha {
      id
      name
      alternativeText
      url
    }
  }
}
    `;

/**
 * __useGetCartilhasQuery__
 *
 * To run a query within a React component, call `useGetCartilhasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCartilhasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCartilhasQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCartilhasQuery(baseOptions?: Apollo.QueryHookOptions<GetCartilhasQuery, GetCartilhasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCartilhasQuery, GetCartilhasQueryVariables>(GetCartilhasDocument, options);
      }
export function useGetCartilhasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCartilhasQuery, GetCartilhasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCartilhasQuery, GetCartilhasQueryVariables>(GetCartilhasDocument, options);
        }
export type GetCartilhasQueryHookResult = ReturnType<typeof useGetCartilhasQuery>;
export type GetCartilhasLazyQueryHookResult = ReturnType<typeof useGetCartilhasLazyQuery>;
export type GetCartilhasQueryResult = Apollo.QueryResult<GetCartilhasQuery, GetCartilhasQueryVariables>;
export const GetConsultaPublicaByIdDocument = gql`
    query GetConsultaPublicaById($id: ID!) {
  consultasPublica(id: $id) {
    id
    Titulo
    comunica
    participacao
    encerramento
    Data
    Calendario {
      id
      descricao
      inicial
      final
    }
    documentos {
      id
      name
      size
      url
    }
  }
}
    `;

/**
 * __useGetConsultaPublicaByIdQuery__
 *
 * To run a query within a React component, call `useGetConsultaPublicaByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetConsultaPublicaByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetConsultaPublicaByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetConsultaPublicaByIdQuery(baseOptions: Apollo.QueryHookOptions<GetConsultaPublicaByIdQuery, GetConsultaPublicaByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetConsultaPublicaByIdQuery, GetConsultaPublicaByIdQueryVariables>(GetConsultaPublicaByIdDocument, options);
      }
export function useGetConsultaPublicaByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetConsultaPublicaByIdQuery, GetConsultaPublicaByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetConsultaPublicaByIdQuery, GetConsultaPublicaByIdQueryVariables>(GetConsultaPublicaByIdDocument, options);
        }
export type GetConsultaPublicaByIdQueryHookResult = ReturnType<typeof useGetConsultaPublicaByIdQuery>;
export type GetConsultaPublicaByIdLazyQueryHookResult = ReturnType<typeof useGetConsultaPublicaByIdLazyQuery>;
export type GetConsultaPublicaByIdQueryResult = Apollo.QueryResult<GetConsultaPublicaByIdQuery, GetConsultaPublicaByIdQueryVariables>;
export const GetConsultasPublicasDocument = gql`
    query GetConsultasPublicas {
  consultasPublicas {
    id
    Titulo
    comunica
    Data
  }
}
    `;

/**
 * __useGetConsultasPublicasQuery__
 *
 * To run a query within a React component, call `useGetConsultasPublicasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetConsultasPublicasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetConsultasPublicasQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetConsultasPublicasQuery(baseOptions?: Apollo.QueryHookOptions<GetConsultasPublicasQuery, GetConsultasPublicasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetConsultasPublicasQuery, GetConsultasPublicasQueryVariables>(GetConsultasPublicasDocument, options);
      }
export function useGetConsultasPublicasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetConsultasPublicasQuery, GetConsultasPublicasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetConsultasPublicasQuery, GetConsultasPublicasQueryVariables>(GetConsultasPublicasDocument, options);
        }
export type GetConsultasPublicasQueryHookResult = ReturnType<typeof useGetConsultasPublicasQuery>;
export type GetConsultasPublicasLazyQueryHookResult = ReturnType<typeof useGetConsultasPublicasLazyQuery>;
export type GetConsultasPublicasQueryResult = Apollo.QueryResult<GetConsultasPublicasQuery, GetConsultasPublicasQueryVariables>;
export const GetFaqsDocument = gql`
    query GetFaqs {
  ascomFaqs {
    id
    pergunta
    resposta
    published_at
  }
}
    `;

/**
 * __useGetFaqsQuery__
 *
 * To run a query within a React component, call `useGetFaqsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFaqsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFaqsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFaqsQuery(baseOptions?: Apollo.QueryHookOptions<GetFaqsQuery, GetFaqsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFaqsQuery, GetFaqsQueryVariables>(GetFaqsDocument, options);
      }
export function useGetFaqsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFaqsQuery, GetFaqsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFaqsQuery, GetFaqsQueryVariables>(GetFaqsDocument, options);
        }
export type GetFaqsQueryHookResult = ReturnType<typeof useGetFaqsQuery>;
export type GetFaqsLazyQueryHookResult = ReturnType<typeof useGetFaqsLazyQuery>;
export type GetFaqsQueryResult = Apollo.QueryResult<GetFaqsQuery, GetFaqsQueryVariables>;
export const GetLicitacoesDocument = gql`
    query GetLicitacoes {
  licitacoes(publicationState: LIVE, sort: "dataHora:desc") {
    id
    dataHora
    Title
    SubTitulo
    Description
    Local
    Tipo
    Documentos {
      id
      name
      alternativeText
      caption
      url
    }
  }
}
    `;

/**
 * __useGetLicitacoesQuery__
 *
 * To run a query within a React component, call `useGetLicitacoesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLicitacoesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLicitacoesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLicitacoesQuery(baseOptions?: Apollo.QueryHookOptions<GetLicitacoesQuery, GetLicitacoesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLicitacoesQuery, GetLicitacoesQueryVariables>(GetLicitacoesDocument, options);
      }
export function useGetLicitacoesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLicitacoesQuery, GetLicitacoesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLicitacoesQuery, GetLicitacoesQueryVariables>(GetLicitacoesDocument, options);
        }
export type GetLicitacoesQueryHookResult = ReturnType<typeof useGetLicitacoesQuery>;
export type GetLicitacoesLazyQueryHookResult = ReturnType<typeof useGetLicitacoesLazyQuery>;
export type GetLicitacoesQueryResult = Apollo.QueryResult<GetLicitacoesQuery, GetLicitacoesQueryVariables>;
export const GetResolucoesDocument = gql`
    query GetResolucoes {
  resolucoes {
    id
    Titulo
    ementa
    data
    tipos_de_resolucoe {
      id
      tipo
    }
    tag {
      id
      Tag
    }
    Documents {
      id
      name
      url
      hash
    }
  }
}
    `;

/**
 * __useGetResolucoesQuery__
 *
 * To run a query within a React component, call `useGetResolucoesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetResolucoesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetResolucoesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetResolucoesQuery(baseOptions?: Apollo.QueryHookOptions<GetResolucoesQuery, GetResolucoesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetResolucoesQuery, GetResolucoesQueryVariables>(GetResolucoesDocument, options);
      }
export function useGetResolucoesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetResolucoesQuery, GetResolucoesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetResolucoesQuery, GetResolucoesQueryVariables>(GetResolucoesDocument, options);
        }
export type GetResolucoesQueryHookResult = ReturnType<typeof useGetResolucoesQuery>;
export type GetResolucoesLazyQueryHookResult = ReturnType<typeof useGetResolucoesLazyQuery>;
export type GetResolucoesQueryResult = Apollo.QueryResult<GetResolucoesQuery, GetResolucoesQueryVariables>;
export const GetRodoviasConcessionadasDocument = gql`
    query GetRodoviasConcessionadas {
  rodovias {
    id
    Nome
    Concessao {
      id
      Concessionaria
      telefone
      site
      ouvidoria
    }
  }
}
    `;

/**
 * __useGetRodoviasConcessionadasQuery__
 *
 * To run a query within a React component, call `useGetRodoviasConcessionadasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRodoviasConcessionadasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRodoviasConcessionadasQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRodoviasConcessionadasQuery(baseOptions?: Apollo.QueryHookOptions<GetRodoviasConcessionadasQuery, GetRodoviasConcessionadasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRodoviasConcessionadasQuery, GetRodoviasConcessionadasQueryVariables>(GetRodoviasConcessionadasDocument, options);
      }
export function useGetRodoviasConcessionadasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRodoviasConcessionadasQuery, GetRodoviasConcessionadasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRodoviasConcessionadasQuery, GetRodoviasConcessionadasQueryVariables>(GetRodoviasConcessionadasDocument, options);
        }
export type GetRodoviasConcessionadasQueryHookResult = ReturnType<typeof useGetRodoviasConcessionadasQuery>;
export type GetRodoviasConcessionadasLazyQueryHookResult = ReturnType<typeof useGetRodoviasConcessionadasLazyQuery>;
export type GetRodoviasConcessionadasQueryResult = Apollo.QueryResult<GetRodoviasConcessionadasQuery, GetRodoviasConcessionadasQueryVariables>;
export const GetTerminaisAeroviariosDocument = gql`
    query GetTerminaisAeroviarios {
  terminaisAeroviarios {
    id
    terminal
    telefone
    email
    contrato {
      id
      name
    }
  }
}
    `;

/**
 * __useGetTerminaisAeroviariosQuery__
 *
 * To run a query within a React component, call `useGetTerminaisAeroviariosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTerminaisAeroviariosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTerminaisAeroviariosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTerminaisAeroviariosQuery(baseOptions?: Apollo.QueryHookOptions<GetTerminaisAeroviariosQuery, GetTerminaisAeroviariosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTerminaisAeroviariosQuery, GetTerminaisAeroviariosQueryVariables>(GetTerminaisAeroviariosDocument, options);
      }
export function useGetTerminaisAeroviariosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTerminaisAeroviariosQuery, GetTerminaisAeroviariosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTerminaisAeroviariosQuery, GetTerminaisAeroviariosQueryVariables>(GetTerminaisAeroviariosDocument, options);
        }
export type GetTerminaisAeroviariosQueryHookResult = ReturnType<typeof useGetTerminaisAeroviariosQuery>;
export type GetTerminaisAeroviariosLazyQueryHookResult = ReturnType<typeof useGetTerminaisAeroviariosLazyQuery>;
export type GetTerminaisAeroviariosQueryResult = Apollo.QueryResult<GetTerminaisAeroviariosQuery, GetTerminaisAeroviariosQueryVariables>;
export const GetTerminaisHidroviariosDocument = gql`
    query GetTerminaisHidroviarios {
  terminaisHidroviarios {
    id
    terminal
    telefone
    email
  }
}
    `;

/**
 * __useGetTerminaisHidroviariosQuery__
 *
 * To run a query within a React component, call `useGetTerminaisHidroviariosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTerminaisHidroviariosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTerminaisHidroviariosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTerminaisHidroviariosQuery(baseOptions?: Apollo.QueryHookOptions<GetTerminaisHidroviariosQuery, GetTerminaisHidroviariosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTerminaisHidroviariosQuery, GetTerminaisHidroviariosQueryVariables>(GetTerminaisHidroviariosDocument, options);
      }
export function useGetTerminaisHidroviariosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTerminaisHidroviariosQuery, GetTerminaisHidroviariosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTerminaisHidroviariosQuery, GetTerminaisHidroviariosQueryVariables>(GetTerminaisHidroviariosDocument, options);
        }
export type GetTerminaisHidroviariosQueryHookResult = ReturnType<typeof useGetTerminaisHidroviariosQuery>;
export type GetTerminaisHidroviariosLazyQueryHookResult = ReturnType<typeof useGetTerminaisHidroviariosLazyQuery>;
export type GetTerminaisHidroviariosQueryResult = Apollo.QueryResult<GetTerminaisHidroviariosQuery, GetTerminaisHidroviariosQueryVariables>;
export const GetTerminaisRodoviariosDocument = gql`
    query GetTerminaisRodoviarios {
  terminaisRodoviarios {
    id
    terminal
    telefone
    email
    contrato {
      id
      name
    }
  }
}
    `;

/**
 * __useGetTerminaisRodoviariosQuery__
 *
 * To run a query within a React component, call `useGetTerminaisRodoviariosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTerminaisRodoviariosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTerminaisRodoviariosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTerminaisRodoviariosQuery(baseOptions?: Apollo.QueryHookOptions<GetTerminaisRodoviariosQuery, GetTerminaisRodoviariosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTerminaisRodoviariosQuery, GetTerminaisRodoviariosQueryVariables>(GetTerminaisRodoviariosDocument, options);
      }
export function useGetTerminaisRodoviariosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTerminaisRodoviariosQuery, GetTerminaisRodoviariosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTerminaisRodoviariosQuery, GetTerminaisRodoviariosQueryVariables>(GetTerminaisRodoviariosDocument, options);
        }
export type GetTerminaisRodoviariosQueryHookResult = ReturnType<typeof useGetTerminaisRodoviariosQuery>;
export type GetTerminaisRodoviariosLazyQueryHookResult = ReturnType<typeof useGetTerminaisRodoviariosLazyQuery>;
export type GetTerminaisRodoviariosQueryResult = Apollo.QueryResult<GetTerminaisRodoviariosQuery, GetTerminaisRodoviariosQueryVariables>;