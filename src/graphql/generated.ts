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
  Upload: any;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentArquivosArquivos = {
  __typename?: 'ComponentArquivosArquivos';
  file: UploadFileEntityResponse;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ComponentArquivosArquivosFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentArquivosArquivosFiltersInput>>>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentArquivosArquivosFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentArquivosArquivosFiltersInput>>>;
};

export type ComponentArquivosArquivosInput = {
  file?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ComponentCalendarCalendar = {
  __typename?: 'ComponentCalendarCalendar';
  finish_in?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  starts_in: Scalars['DateTime'];
  title: Scalars['String'];
};

export type ComponentEventEvent = {
  __typename?: 'ComponentEventEvent';
  finish_in?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  starts_in?: Maybe<Scalars['DateTime']>;
  title: Enum_Componenteventevent_Title;
};

export type ComponentEventEventFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentEventEventFiltersInput>>>;
  finish_in?: InputMaybe<DateTimeFilterInput>;
  not?: InputMaybe<ComponentEventEventFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentEventEventFiltersInput>>>;
  starts_in?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentEventEventInput = {
  finish_in?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  starts_in?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Enum_Componenteventevent_Title>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  contains?: InputMaybe<Scalars['Date']>;
  containsi?: InputMaybe<Scalars['Date']>;
  endsWith?: InputMaybe<Scalars['Date']>;
  eq?: InputMaybe<Scalars['Date']>;
  eqi?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']>;
  notContainsi?: InputMaybe<Scalars['Date']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  startsWith?: InputMaybe<Scalars['Date']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Componenteventevent_Title {
  AudienciaPublica = 'Audiencia_Publica',
  PublicacaoDoAviso = 'Publicacao_do_Aviso',
  RecebimentoDeContribuicoes = 'Recebimento_de_Contribuicoes'
}

export enum Enum_Eventopublico_Event_Type {
  AudienciaPublica = 'Audiencia_Publica',
  ConsultaPublica = 'Consulta_Publica'
}

export enum Enum_Legislation_Type {
  Decretos = 'Decretos',
  Leis = 'Leis',
  Resolucoes = 'Resolucoes'
}

export enum Enum_Noticia_Newtype {
  Noticias = 'Noticias',
  NoticiasUrgentes = 'Noticias_Urgentes'
}

export type EventoPublico = {
  __typename?: 'EventoPublico';
  Documentos?: Maybe<Array<Maybe<ComponentArquivosArquivos>>>;
  calendar?: Maybe<Array<Maybe<ComponentEventEvent>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['Date'];
  event_type: Enum_Eventopublico_Event_Type;
  notify?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type EventoPublicoDocumentosArgs = {
  filters?: InputMaybe<ComponentArquivosArquivosFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type EventoPublicoCalendarArgs = {
  filters?: InputMaybe<ComponentEventEventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type EventoPublicoEntity = {
  __typename?: 'EventoPublicoEntity';
  attributes?: Maybe<EventoPublico>;
  id?: Maybe<Scalars['ID']>;
};

export type EventoPublicoEntityResponse = {
  __typename?: 'EventoPublicoEntityResponse';
  data?: Maybe<EventoPublicoEntity>;
};

export type EventoPublicoEntityResponseCollection = {
  __typename?: 'EventoPublicoEntityResponseCollection';
  data: Array<EventoPublicoEntity>;
  meta: ResponseCollectionMeta;
};

export type EventoPublicoFiltersInput = {
  Documentos?: InputMaybe<ComponentArquivosArquivosFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<EventoPublicoFiltersInput>>>;
  calendar?: InputMaybe<ComponentEventEventFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<DateFilterInput>;
  event_type?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<EventoPublicoFiltersInput>;
  notify?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<EventoPublicoFiltersInput>>>;
  place?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EventoPublicoInput = {
  Documentos?: InputMaybe<Array<InputMaybe<ComponentArquivosArquivosInput>>>;
  calendar?: InputMaybe<Array<InputMaybe<ComponentEventEventInput>>>;
  date?: InputMaybe<Scalars['Date']>;
  event_type?: InputMaybe<Enum_Eventopublico_Event_Type>;
  notify?: InputMaybe<Scalars['String']>;
  place?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph = ComponentArquivosArquivos | ComponentCalendarCalendar | ComponentEventEvent | EventoPublico | I18NLocale | Legislation | Log | Noticia | QuadroTarifario | Title | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Legislation = {
  __typename?: 'Legislation';
  createdAt?: Maybe<Scalars['DateTime']>;
  file: UploadFileEntityResponse;
  menu: Scalars['String'];
  publication_date: Scalars['Date'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  type: Enum_Legislation_Type;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LegislationEntity = {
  __typename?: 'LegislationEntity';
  attributes?: Maybe<Legislation>;
  id?: Maybe<Scalars['ID']>;
};

export type LegislationEntityResponse = {
  __typename?: 'LegislationEntityResponse';
  data?: Maybe<LegislationEntity>;
};

export type LegislationEntityResponseCollection = {
  __typename?: 'LegislationEntityResponseCollection';
  data: Array<LegislationEntity>;
  meta: ResponseCollectionMeta;
};

export type LegislationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<LegislationFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  menu?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<LegislationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<LegislationFiltersInput>>>;
  publication_date?: InputMaybe<DateFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type LegislationInput = {
  file?: InputMaybe<Scalars['ID']>;
  menu?: InputMaybe<Scalars['String']>;
  publication_date?: InputMaybe<Scalars['Date']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Enum_Legislation_Type>;
};

export type Log = {
  __typename?: 'Log';
  createdAt?: Maybe<Scalars['DateTime']>;
  data?: Maybe<Scalars['JSON']>;
  eventDate?: Maybe<Scalars['DateTime']>;
  message?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LogEntity = {
  __typename?: 'LogEntity';
  attributes?: Maybe<Log>;
  id?: Maybe<Scalars['ID']>;
};

export type LogEntityResponse = {
  __typename?: 'LogEntityResponse';
  data?: Maybe<LogEntity>;
};

export type LogEntityResponseCollection = {
  __typename?: 'LogEntityResponseCollection';
  data: Array<LogEntity>;
  meta: ResponseCollectionMeta;
};

export type LogFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<LogFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  data?: InputMaybe<JsonFilterInput>;
  eventDate?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  message?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<LogFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<LogFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type LogInput = {
  data?: InputMaybe<Scalars['JSON']>;
  eventDate?: InputMaybe<Scalars['DateTime']>;
  message?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createEventoPublico?: Maybe<EventoPublicoEntityResponse>;
  createLegislation?: Maybe<LegislationEntityResponse>;
  createLog?: Maybe<LogEntityResponse>;
  createNoticia?: Maybe<NoticiaEntityResponse>;
  createQuadroTarifario?: Maybe<QuadroTarifarioEntityResponse>;
  createTitle?: Maybe<TitleEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteEventoPublico?: Maybe<EventoPublicoEntityResponse>;
  deleteLegislation?: Maybe<LegislationEntityResponse>;
  deleteLog?: Maybe<LogEntityResponse>;
  deleteNoticia?: Maybe<NoticiaEntityResponse>;
  deleteQuadroTarifario?: Maybe<QuadroTarifarioEntityResponse>;
  deleteTitle?: Maybe<TitleEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateEventoPublico?: Maybe<EventoPublicoEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateLegislation?: Maybe<LegislationEntityResponse>;
  updateLog?: Maybe<LogEntityResponse>;
  updateNoticia?: Maybe<NoticiaEntityResponse>;
  updateQuadroTarifario?: Maybe<QuadroTarifarioEntityResponse>;
  updateTitle?: Maybe<TitleEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationCreateEventoPublicoArgs = {
  data: EventoPublicoInput;
};


export type MutationCreateLegislationArgs = {
  data: LegislationInput;
};


export type MutationCreateLogArgs = {
  data: LogInput;
};


export type MutationCreateNoticiaArgs = {
  data: NoticiaInput;
};


export type MutationCreateQuadroTarifarioArgs = {
  data: QuadroTarifarioInput;
};


export type MutationCreateTitleArgs = {
  data: TitleInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteEventoPublicoArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteLegislationArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteLogArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteNoticiaArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteQuadroTarifarioArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTitleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
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
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateEventoPublicoArgs = {
  data: EventoPublicoInput;
  id: Scalars['ID'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateLegislationArgs = {
  data: LegislationInput;
  id: Scalars['ID'];
};


export type MutationUpdateLogArgs = {
  data: LogInput;
  id: Scalars['ID'];
};


export type MutationUpdateNoticiaArgs = {
  data: NoticiaInput;
  id: Scalars['ID'];
};


export type MutationUpdateQuadroTarifarioArgs = {
  data: QuadroTarifarioInput;
  id: Scalars['ID'];
};


export type MutationUpdateTitleArgs = {
  data: TitleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Noticia = {
  __typename?: 'Noticia';
  content: Scalars['String'];
  cover: UploadFileEntityResponse;
  createdAt?: Maybe<Scalars['DateTime']>;
  deadline?: Maybe<Scalars['Date']>;
  gallery?: Maybe<UploadFileRelationResponseCollection>;
  highlight: Scalars['Boolean'];
  newtype: Enum_Noticia_Newtype;
  publishedAt?: Maybe<Scalars['DateTime']>;
  subtitle: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type NoticiaGalleryArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NoticiaEntity = {
  __typename?: 'NoticiaEntity';
  attributes?: Maybe<Noticia>;
  id?: Maybe<Scalars['ID']>;
};

export type NoticiaEntityResponse = {
  __typename?: 'NoticiaEntityResponse';
  data?: Maybe<NoticiaEntity>;
};

export type NoticiaEntityResponseCollection = {
  __typename?: 'NoticiaEntityResponseCollection';
  data: Array<NoticiaEntity>;
  meta: ResponseCollectionMeta;
};

export type NoticiaFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<NoticiaFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  deadline?: InputMaybe<DateFilterInput>;
  highlight?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  newtype?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<NoticiaFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NoticiaFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  subtitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type NoticiaInput = {
  content?: InputMaybe<Scalars['String']>;
  cover?: InputMaybe<Scalars['ID']>;
  deadline?: InputMaybe<Scalars['Date']>;
  gallery?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  highlight?: InputMaybe<Scalars['Boolean']>;
  newtype?: InputMaybe<Enum_Noticia_Newtype>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type QuadroTarifario = {
  __typename?: 'QuadroTarifario';
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type QuadroTarifarioEntity = {
  __typename?: 'QuadroTarifarioEntity';
  attributes?: Maybe<QuadroTarifario>;
  id?: Maybe<Scalars['ID']>;
};

export type QuadroTarifarioEntityResponse = {
  __typename?: 'QuadroTarifarioEntityResponse';
  data?: Maybe<QuadroTarifarioEntity>;
};

export type QuadroTarifarioEntityResponseCollection = {
  __typename?: 'QuadroTarifarioEntityResponseCollection';
  data: Array<QuadroTarifarioEntity>;
  meta: ResponseCollectionMeta;
};

export type QuadroTarifarioFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<QuadroTarifarioFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<QuadroTarifarioFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<QuadroTarifarioFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type QuadroTarifarioInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  eventoPublico?: Maybe<EventoPublicoEntityResponse>;
  eventosPublicos?: Maybe<EventoPublicoEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  legislation?: Maybe<LegislationEntityResponse>;
  legislations?: Maybe<LegislationEntityResponseCollection>;
  log?: Maybe<LogEntityResponse>;
  logs?: Maybe<LogEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  noticia?: Maybe<NoticiaEntityResponse>;
  noticias?: Maybe<NoticiaEntityResponseCollection>;
  quadroTarifario?: Maybe<QuadroTarifarioEntityResponse>;
  quadroTarifarios?: Maybe<QuadroTarifarioEntityResponseCollection>;
  title?: Maybe<TitleEntityResponse>;
  titles?: Maybe<TitleEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryEventoPublicoArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryEventosPublicosArgs = {
  filters?: InputMaybe<EventoPublicoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryLegislationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryLegislationsArgs = {
  filters?: InputMaybe<LegislationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryLogArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryLogsArgs = {
  filters?: InputMaybe<LogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNoticiaArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryNoticiasArgs = {
  filters?: InputMaybe<NoticiaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryQuadroTarifarioArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryQuadroTarifariosArgs = {
  filters?: InputMaybe<QuadroTarifarioFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTitleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTitlesArgs = {
  filters?: InputMaybe<TitleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Title = {
  __typename?: 'Title';
  createdAt?: Maybe<Scalars['DateTime']>;
  file: UploadFileEntityResponse;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
};

export type TitleEntity = {
  __typename?: 'TitleEntity';
  attributes?: Maybe<Title>;
  id?: Maybe<Scalars['ID']>;
};

export type TitleEntityResponse = {
  __typename?: 'TitleEntityResponse';
  data?: Maybe<TitleEntity>;
};

export type TitleEntityResponseCollection = {
  __typename?: 'TitleEntityResponseCollection';
  data: Array<TitleEntity>;
  meta: ResponseCollectionMeta;
};

export type TitleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TitleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<TitleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TitleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  year?: InputMaybe<IntFilterInput>;
};

export type TitleInput = {
  file?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['Int']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
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
  email?: Maybe<Scalars['String']>;
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

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type GetAudienciaPublicaByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetAudienciaPublicaByIdQuery = { __typename?: 'Query', eventoPublico?: { __typename?: 'EventoPublicoEntityResponse', data?: { __typename?: 'EventoPublicoEntity', id?: string | null, attributes?: { __typename?: 'EventoPublico', title: string, event_type: Enum_Eventopublico_Event_Type, notify?: string | null, date: any, place?: string | null, calendar?: Array<{ __typename?: 'ComponentEventEvent', id: string, title: Enum_Componenteventevent_Title, starts_in?: any | null, finish_in?: any | null } | null> | null, Documentos?: Array<{ __typename?: 'ComponentArquivosArquivos', name: string, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null> | null } | null } | null } | null };

export type GetAudienciasPublicasQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAudienciasPublicasQuery = { __typename?: 'Query', eventosPublicos?: { __typename?: 'EventoPublicoEntityResponseCollection', data: Array<{ __typename?: 'EventoPublicoEntity', id?: string | null, attributes?: { __typename?: 'EventoPublico', title: string, notify?: string | null, event_type: Enum_Eventopublico_Event_Type, date: any, calendar?: Array<{ __typename?: 'ComponentEventEvent', title: Enum_Componenteventevent_Title, starts_in?: any | null, finish_in?: any | null } | null> | null } | null }> } | null };

export type GetCartilhasQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCartilhasQuery = { __typename?: 'Query', titles?: { __typename?: 'TitleEntityResponseCollection', data: Array<{ __typename?: 'TitleEntity', id?: string | null, attributes?: { __typename?: 'Title', title: string, slug?: string | null, year: number, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, url: string } | null } | null } } | null }> } | null };

export type GetConsultasPublicasQueryVariables = Exact<{ [key: string]: never; }>;


export type GetConsultasPublicasQuery = { __typename?: 'Query', eventosPublicos?: { __typename?: 'EventoPublicoEntityResponseCollection', data: Array<{ __typename?: 'EventoPublicoEntity', id?: string | null, attributes?: { __typename?: 'EventoPublico', title: string, notify?: string | null, event_type: Enum_Eventopublico_Event_Type, date: any, calendar?: Array<{ __typename?: 'ComponentEventEvent', title: Enum_Componenteventevent_Title, starts_in?: any | null, finish_in?: any | null } | null> | null } | null }> } | null };

export type GetLegislacoesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLegislacoesQuery = { __typename?: 'Query', legislations?: { __typename?: 'LegislationEntityResponseCollection', data: Array<{ __typename?: 'LegislationEntity', id?: string | null, attributes?: { __typename?: 'Legislation', title: string, menu: string, slug: string, type: Enum_Legislation_Type, publication_date: any, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } } | null }> } | null };

export type GetNoticiasDestaqueQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNoticiasDestaqueQuery = { __typename?: 'Query', noticias?: { __typename?: 'NoticiaEntityResponseCollection', data: Array<{ __typename?: 'NoticiaEntity', id?: string | null, attributes?: { __typename?: 'Noticia', title: string, subtitle: string, content: string, newtype: Enum_Noticia_Newtype, highlight: boolean, deadline?: any | null, cover: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null }, gallery?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null }> } | null } | null }> } | null };


export const GetAudienciaPublicaByIdDocument = gql`
    query GetAudienciaPublicaById($id: ID!) {
  eventoPublico(id: $id) {
    data {
      id
      attributes {
        title
        event_type
        notify
        date
        calendar {
          id
          title
          starts_in
          finish_in
        }
        place
        Documentos {
          name
          file {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetAudienciaPublicaByIdQuery__
 *
 * To run a query within a React component, call `useGetAudienciaPublicaByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAudienciaPublicaByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAudienciaPublicaByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAudienciaPublicaByIdQuery(baseOptions: Apollo.QueryHookOptions<GetAudienciaPublicaByIdQuery, GetAudienciaPublicaByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAudienciaPublicaByIdQuery, GetAudienciaPublicaByIdQueryVariables>(GetAudienciaPublicaByIdDocument, options);
      }
export function useGetAudienciaPublicaByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAudienciaPublicaByIdQuery, GetAudienciaPublicaByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAudienciaPublicaByIdQuery, GetAudienciaPublicaByIdQueryVariables>(GetAudienciaPublicaByIdDocument, options);
        }
export type GetAudienciaPublicaByIdQueryHookResult = ReturnType<typeof useGetAudienciaPublicaByIdQuery>;
export type GetAudienciaPublicaByIdLazyQueryHookResult = ReturnType<typeof useGetAudienciaPublicaByIdLazyQuery>;
export type GetAudienciaPublicaByIdQueryResult = Apollo.QueryResult<GetAudienciaPublicaByIdQuery, GetAudienciaPublicaByIdQueryVariables>;
export const GetAudienciasPublicasDocument = gql`
    query GetAudienciasPublicas {
  eventosPublicos(
    publicationState: LIVE
    sort: "date:desc"
    filters: {event_type: {eq: "Audiência Pública"}}
  ) {
    data {
      id
      attributes {
        title
        notify
        event_type
        date
        calendar {
          title
          starts_in
          finish_in
        }
      }
    }
  }
}
    `;

/**
 * __useGetAudienciasPublicasQuery__
 *
 * To run a query within a React component, call `useGetAudienciasPublicasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAudienciasPublicasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAudienciasPublicasQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAudienciasPublicasQuery(baseOptions?: Apollo.QueryHookOptions<GetAudienciasPublicasQuery, GetAudienciasPublicasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAudienciasPublicasQuery, GetAudienciasPublicasQueryVariables>(GetAudienciasPublicasDocument, options);
      }
export function useGetAudienciasPublicasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAudienciasPublicasQuery, GetAudienciasPublicasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAudienciasPublicasQuery, GetAudienciasPublicasQueryVariables>(GetAudienciasPublicasDocument, options);
        }
export type GetAudienciasPublicasQueryHookResult = ReturnType<typeof useGetAudienciasPublicasQuery>;
export type GetAudienciasPublicasLazyQueryHookResult = ReturnType<typeof useGetAudienciasPublicasLazyQuery>;
export type GetAudienciasPublicasQueryResult = Apollo.QueryResult<GetAudienciasPublicasQuery, GetAudienciasPublicasQueryVariables>;
export const GetCartilhasDocument = gql`
    query GetCartilhas {
  titles {
    data {
      id
      attributes {
        title
        slug
        year
        file {
          data {
            id
            attributes {
              name
              url
            }
          }
        }
      }
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
export const GetConsultasPublicasDocument = gql`
    query GetConsultasPublicas {
  eventosPublicos(
    publicationState: LIVE
    sort: "date:desc"
    filters: {event_type: {eq: "Consulta Pública"}}
  ) {
    data {
      id
      attributes {
        title
        notify
        event_type
        date
        calendar {
          title
          starts_in
          finish_in
        }
      }
    }
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
export const GetLegislacoesDocument = gql`
    query GetLegislacoes {
  legislations(publicationState: LIVE, sort: "publication_date:DESC") {
    data {
      id
      attributes {
        title
        menu
        slug
        type
        publication_date
        file {
          data {
            id
            attributes {
              name
              alternativeText
              url
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetLegislacoesQuery__
 *
 * To run a query within a React component, call `useGetLegislacoesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLegislacoesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLegislacoesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLegislacoesQuery(baseOptions?: Apollo.QueryHookOptions<GetLegislacoesQuery, GetLegislacoesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLegislacoesQuery, GetLegislacoesQueryVariables>(GetLegislacoesDocument, options);
      }
export function useGetLegislacoesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLegislacoesQuery, GetLegislacoesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLegislacoesQuery, GetLegislacoesQueryVariables>(GetLegislacoesDocument, options);
        }
export type GetLegislacoesQueryHookResult = ReturnType<typeof useGetLegislacoesQuery>;
export type GetLegislacoesLazyQueryHookResult = ReturnType<typeof useGetLegislacoesLazyQuery>;
export type GetLegislacoesQueryResult = Apollo.QueryResult<GetLegislacoesQuery, GetLegislacoesQueryVariables>;
export const GetNoticiasDestaqueDocument = gql`
    query GetNoticiasDestaque {
  noticias(publicationState: LIVE, filters: {highlight: {eq: true}}) {
    data {
      id
      attributes {
        cover {
          data {
            attributes {
              name
              alternativeText
              url
            }
          }
        }
        title
        subtitle
        content
        newtype
        highlight
        deadline
        gallery {
          data {
            id
            attributes {
              name
              alternativeText
              url
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetNoticiasDestaqueQuery__
 *
 * To run a query within a React component, call `useGetNoticiasDestaqueQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNoticiasDestaqueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNoticiasDestaqueQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNoticiasDestaqueQuery(baseOptions?: Apollo.QueryHookOptions<GetNoticiasDestaqueQuery, GetNoticiasDestaqueQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNoticiasDestaqueQuery, GetNoticiasDestaqueQueryVariables>(GetNoticiasDestaqueDocument, options);
      }
export function useGetNoticiasDestaqueLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNoticiasDestaqueQuery, GetNoticiasDestaqueQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNoticiasDestaqueQuery, GetNoticiasDestaqueQueryVariables>(GetNoticiasDestaqueDocument, options);
        }
export type GetNoticiasDestaqueQueryHookResult = ReturnType<typeof useGetNoticiasDestaqueQuery>;
export type GetNoticiasDestaqueLazyQueryHookResult = ReturnType<typeof useGetNoticiasDestaqueLazyQuery>;
export type GetNoticiasDestaqueQueryResult = Apollo.QueryResult<GetNoticiasDestaqueQuery, GetNoticiasDestaqueQueryVariables>;