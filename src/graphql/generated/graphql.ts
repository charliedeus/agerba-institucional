export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  MainMenuMainMenuItemsDynamicZoneInput: any;
  QuadroTarifarioResourcesDynamicZoneInput: any;
  Upload: any;
};

export type Advertisement = {
  __typename?: 'Advertisement';
  backgroundColor?: Maybe<Enum_Advertisement_Backgroundcolor>;
  cover?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  endDate?: Maybe<Scalars['Date']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  startDate: Scalars['Date'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};

export type AdvertisementEntity = {
  __typename?: 'AdvertisementEntity';
  attributes?: Maybe<Advertisement>;
  id?: Maybe<Scalars['ID']>;
};

export type AdvertisementEntityResponse = {
  __typename?: 'AdvertisementEntityResponse';
  data?: Maybe<AdvertisementEntity>;
};

export type AdvertisementEntityResponseCollection = {
  __typename?: 'AdvertisementEntityResponseCollection';
  data: Array<AdvertisementEntity>;
  meta: ResponseCollectionMeta;
};

export type AdvertisementFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AdvertisementFiltersInput>>>;
  backgroundColor?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  endDate?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<AdvertisementFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AdvertisementFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  startDate?: InputMaybe<DateFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type AdvertisementInput = {
  backgroundColor?: InputMaybe<Enum_Advertisement_Backgroundcolor>;
  cover?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['Date']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  startDate?: InputMaybe<Scalars['Date']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
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
  nei?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type Category = {
  __typename?: 'Category';
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  noticia?: Maybe<NoticiaEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars['ID']>;
};

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse';
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  noticia?: InputMaybe<NoticiaFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  name?: InputMaybe<Scalars['String']>;
  noticia?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CategoryRelationResponseCollection = {
  __typename?: 'CategoryRelationResponseCollection';
  data: Array<CategoryEntity>;
};

export type City = {
  __typename?: 'City';
  createdAt?: Maybe<Scalars['DateTime']>;
  initial: Scalars['String'];
  name: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CityEntity = {
  __typename?: 'CityEntity';
  attributes?: Maybe<City>;
  id?: Maybe<Scalars['ID']>;
};

export type CityEntityResponse = {
  __typename?: 'CityEntityResponse';
  data?: Maybe<CityEntity>;
};

export type CityEntityResponseCollection = {
  __typename?: 'CityEntityResponseCollection';
  data: Array<CityEntity>;
  meta: ResponseCollectionMeta;
};

export type CityFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CityFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  initial?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CityFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CityFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CityInput = {
  initial?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CityRelationResponseCollection = {
  __typename?: 'CityRelationResponseCollection';
  data: Array<CityEntity>;
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

export type ComponentClassClasses = {
  __typename?: 'ComponentClassClasses';
  document?: Maybe<ComponentDocumentoVigenciaDocumentoVigencia>;
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type ComponentDocumentoVigenciaDocumentoVigencia = {
  __typename?: 'ComponentDocumentoVigenciaDocumentoVigencia';
  file: UploadFileEntityResponse;
  id: Scalars['ID'];
  starts_in: Scalars['Date'];
};

export type ComponentDocumentoVigenciaDocumentoVigenciaFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentDocumentoVigenciaDocumentoVigenciaFiltersInput>>>;
  not?: InputMaybe<ComponentDocumentoVigenciaDocumentoVigenciaFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentDocumentoVigenciaDocumentoVigenciaFiltersInput>>>;
  starts_in?: InputMaybe<DateFilterInput>;
};

export type ComponentDocumentoVigenciaDocumentoVigenciaInput = {
  file?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  starts_in?: InputMaybe<Scalars['Date']>;
};

export type ComponentEventEvent = {
  __typename?: 'ComponentEventEvent';
  finish_in?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  retification: Scalars['Boolean'];
  starts_in?: Maybe<Scalars['DateTime']>;
  title: Enum_Componenteventevent_Title;
};

export type ComponentEventEventFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentEventEventFiltersInput>>>;
  finish_in?: InputMaybe<DateTimeFilterInput>;
  not?: InputMaybe<ComponentEventEventFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentEventEventFiltersInput>>>;
  retification?: InputMaybe<BooleanFilterInput>;
  starts_in?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentEventEventInput = {
  finish_in?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  retification?: InputMaybe<Scalars['Boolean']>;
  starts_in?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Enum_Componenteventevent_Title>;
};

export type ComponentLayoutHeader = {
  __typename?: 'ComponentLayoutHeader';
  id: Scalars['ID'];
};

export type ComponentLayoutHeaderInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentMenuDropdown = {
  __typename?: 'ComponentMenuDropdown';
  id: Scalars['ID'];
  links?: Maybe<Array<Maybe<ComponentMenuLink>>>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentMenuDropdownLinksArgs = {
  filters?: InputMaybe<ComponentMenuLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentMenuLink = {
  __typename?: 'ComponentMenuLink';
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentMenuLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentMenuLinkFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentMenuLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentMenuLinkFiltersInput>>>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentMenuLinkInput = {
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentMenuMenuButton = {
  __typename?: 'ComponentMenuMenuButton';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Enum_Componentmenumenubutton_Type>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentMenuMenuLink = {
  __typename?: 'ComponentMenuMenuLink';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentMunicipiosMunicipios = {
  __typename?: 'ComponentMunicipiosMunicipios';
  id: Scalars['ID'];
  municipios?: Maybe<CityRelationResponseCollection>;
};


export type ComponentMunicipiosMunicipiosMunicipiosArgs = {
  filters?: InputMaybe<CityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentPerguntasERespostasPAndR = {
  __typename?: 'ComponentPerguntasERespostasPAndR';
  answers?: Maybe<Array<Maybe<ComponentSectionsToContentSections>>>;
  documents?: Maybe<Array<Maybe<ComponentArquivosArquivos>>>;
  id: Scalars['ID'];
  question: Scalars['String'];
};


export type ComponentPerguntasERespostasPAndRAnswersArgs = {
  filters?: InputMaybe<ComponentSectionsToContentSectionsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentPerguntasERespostasPAndRDocumentsArgs = {
  filters?: InputMaybe<ComponentArquivosArquivosFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentPerguntasERespostasPAndRFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPerguntasERespostasPAndRFiltersInput>>>;
  answers?: InputMaybe<ComponentSectionsToContentSectionsFiltersInput>;
  documents?: InputMaybe<ComponentArquivosArquivosFiltersInput>;
  not?: InputMaybe<ComponentPerguntasERespostasPAndRFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPerguntasERespostasPAndRFiltersInput>>>;
  question?: InputMaybe<StringFilterInput>;
};

export type ComponentPerguntasERespostasPAndRInput = {
  answers?: InputMaybe<Array<InputMaybe<ComponentSectionsToContentSectionsInput>>>;
  documents?: InputMaybe<Array<InputMaybe<ComponentArquivosArquivosInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  question?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsToContentSections = {
  __typename?: 'ComponentSectionsToContentSections';
  content: Scalars['String'];
  cover?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type ComponentSectionsToContentSectionsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsToContentSectionsFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSectionsToContentSectionsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsToContentSectionsFiltersInput>>>;
  subtitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsToContentSectionsInput = {
  content?: InputMaybe<Scalars['String']>;
  cover?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentStudentsStudentResources = {
  __typename?: 'ComponentStudentsStudentResources';
  approved: Scalars['Boolean'];
  endsAt: Scalars['Date'];
  id: Scalars['ID'];
  resources?: Maybe<UploadFileRelationResponseCollection>;
};


export type ComponentStudentsStudentResourcesResourcesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentStudentsStudentResourcesFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentStudentsStudentResourcesFiltersInput>>>;
  approved?: InputMaybe<BooleanFilterInput>;
  endsAt?: InputMaybe<DateFilterInput>;
  not?: InputMaybe<ComponentStudentsStudentResourcesFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentStudentsStudentResourcesFiltersInput>>>;
};

export type ComponentStudentsStudentResourcesInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  endsAt?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  resources?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ComponentTagsTags = {
  __typename?: 'ComponentTagsTags';
  Tag: Scalars['String'];
  id: Scalars['ID'];
};

export type ComponentTagsTagsFiltersInput = {
  Tag?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentTagsTagsFiltersInput>>>;
  not?: InputMaybe<ComponentTagsTagsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentTagsTagsFiltersInput>>>;
};

export type ComponentTagsTagsInput = {
  Tag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentTarifasFerryBoat = {
  __typename?: 'ComponentTarifasFerryBoat';
  document?: Maybe<Array<Maybe<ComponentDocumentoVigenciaDocumentoVigencia>>>;
  id: Scalars['ID'];
};


export type ComponentTarifasFerryBoatDocumentArgs = {
  filters?: InputMaybe<ComponentDocumentoVigenciaDocumentoVigenciaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentTarifasTarifasTransporteRodoviario = {
  __typename?: 'ComponentTarifasTarifasTransporteRodoviario';
  document?: Maybe<Array<Maybe<ComponentDocumentoVigenciaDocumentoVigencia>>>;
  id: Scalars['ID'];
  type?: Maybe<Enum_Componenttarifastarifastransporterodoviario_Type>;
};


export type ComponentTarifasTarifasTransporteRodoviarioDocumentArgs = {
  filters?: InputMaybe<ComponentDocumentoVigenciaDocumentoVigenciaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentTarifasTransporteHidroviario = {
  __typename?: 'ComponentTarifasTransporteHidroviario';
  document?: Maybe<Array<Maybe<ComponentDocumentoVigenciaDocumentoVigencia>>>;
  id: Scalars['ID'];
  type?: Maybe<Enum_Componenttarifastransportehidroviario_Type>;
};


export type ComponentTarifasTransporteHidroviarioDocumentArgs = {
  filters?: InputMaybe<ComponentDocumentoVigenciaDocumentoVigenciaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentTarifasTute = {
  __typename?: 'ComponentTarifasTute';
  document?: Maybe<Array<Maybe<ComponentDocumentoVigenciaDocumentoVigencia>>>;
  id: Scalars['ID'];
  type?: Maybe<Enum_Componenttarifastute_Type>;
};


export type ComponentTarifasTuteDocumentArgs = {
  filters?: InputMaybe<ComponentDocumentoVigenciaDocumentoVigenciaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
  nei?: InputMaybe<Scalars['Date']>;
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
  nei?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export type Department = {
  __typename?: 'Department';
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  sections?: Maybe<Array<Maybe<ComponentPerguntasERespostasPAndR>>>;
  type?: Maybe<Enum_Department_Type>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type DepartmentSectionsArgs = {
  filters?: InputMaybe<ComponentPerguntasERespostasPAndRFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type DepartmentEntity = {
  __typename?: 'DepartmentEntity';
  attributes?: Maybe<Department>;
  id?: Maybe<Scalars['ID']>;
};

export type DepartmentEntityResponse = {
  __typename?: 'DepartmentEntityResponse';
  data?: Maybe<DepartmentEntity>;
};

export type DepartmentEntityResponseCollection = {
  __typename?: 'DepartmentEntityResponseCollection';
  data: Array<DepartmentEntity>;
  meta: ResponseCollectionMeta;
};

export type DepartmentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<DepartmentFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<DepartmentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<DepartmentFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  sections?: InputMaybe<ComponentPerguntasERespostasPAndRFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type DepartmentInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  sections?: InputMaybe<Array<InputMaybe<ComponentPerguntasERespostasPAndRInput>>>;
  type?: InputMaybe<Enum_Department_Type>;
};

export enum Enum_Advertisement_Backgroundcolor {
  Azul = 'Azul',
  Vermelho = 'Vermelho'
}

export enum Enum_Componenteventevent_Title {
  AudienciaPublica = 'Audiencia_Publica',
  PublicacaoDoAviso = 'Publicacao_do_Aviso',
  RecebimentoDeContribuicoes = 'Recebimento_de_Contribuicoes'
}

export enum Enum_Componentmenumenubutton_Type {
  Primary = 'primary',
  Secondary = 'secondary'
}

export enum Enum_Componenttarifastarifastransporterodoviario_Type {
  Complementar = 'Complementar',
  Intermunicipal = 'Intermunicipal',
  MetropolitanoESemiurbano = 'Metropolitano_e_Semiurbano'
}

export enum Enum_Componenttarifastransportehidroviario_Type {
  Catamara = 'Catamara',
  Ferryboat = 'Ferryboat',
  Lanchas = 'Lanchas'
}

export enum Enum_Componenttarifastute_Type {
  Aeroviario = 'Aeroviario',
  Hidroviario = 'Hidroviario',
  Rodoviario = 'Rodoviario'
}

export enum Enum_Department_Type {
  Cadastros = 'Cadastros',
  Licencas = 'Licencas',
  Linhas = 'Linhas',
  VeiculosEVistorias = 'Veiculos_e_Vistorias'
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

export enum Enum_Licitacao_Type {
  Online = 'Online',
  Presencial = 'Presencial'
}

export enum Enum_Noticia_Colortitle {
  Black = 'black',
  White = 'white'
}

export enum Enum_Noticia_Newtype {
  Noticias = 'Noticias',
  NoticiasUrgentes = 'Noticias_Urgentes'
}

export enum Enum_Publicconsultation_Eventtype {
  AudienciaPublica = 'Audiencia_Publica',
  ConsultaPublica = 'Consulta_Publica'
}

export enum Enum_Quadrotarifario_Entitytype {
  Empresa = 'Empresa',
  Polo = 'Polo'
}

export enum Enum_Terminalsusagefee_Type {
  Hidroviario = 'Hidroviario',
  Rodoviario = 'Rodoviario'
}

export enum Enum_Terminal_Type {
  Aeroviario = 'Aeroviario',
  Hidroviario = 'Hidroviario',
  Rodoviario = 'Rodoviario'
}

export enum Enum_Transportfee_Entitytype {
  Empresa = 'Empresa',
  Polo = 'Polo'
}

export enum Enum_Transportfee_Transporttype {
  Complementar = 'Complementar',
  Intermunicipal = 'Intermunicipal',
  Metropolitano = 'Metropolitano',
  Semiurbano = 'Semiurbano'
}

export enum Enum_Waterwaytransporttariff_Entitytype {
  Catamara = 'Catamara',
  FerryBoat = 'FerryBoat',
  Lanchas = 'Lanchas'
}

export enum Enum_Waterwaytransport_Type {
  Catamara = 'Catamara',
  FerryBoat = 'Ferry_Boat',
  Lanchas = 'Lanchas'
}

export type Error = {
  __typename?: 'Error';
  code: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type EventoPublico = {
  __typename?: 'EventoPublico';
  Documentos?: Maybe<Array<Maybe<ComponentArquivosArquivos>>>;
  calendar?: Maybe<Array<Maybe<ComponentEventEvent>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['Date'];
  event_type: Enum_Eventopublico_Event_Type;
  finalReport?: Maybe<Array<Maybe<ComponentArquivosArquivos>>>;
  justification?: Maybe<Scalars['String']>;
  meetLink?: Maybe<Scalars['String']>;
  notify?: Maybe<Scalars['String']>;
  onlyRemote?: Maybe<Scalars['Boolean']>;
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


export type EventoPublicoFinalReportArgs = {
  filters?: InputMaybe<ComponentArquivosArquivosFiltersInput>;
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
  finalReport?: InputMaybe<ComponentArquivosArquivosFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  justification?: InputMaybe<StringFilterInput>;
  meetLink?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<EventoPublicoFiltersInput>;
  notify?: InputMaybe<StringFilterInput>;
  onlyRemote?: InputMaybe<BooleanFilterInput>;
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
  finalReport?: InputMaybe<Array<InputMaybe<ComponentArquivosArquivosInput>>>;
  justification?: InputMaybe<Scalars['String']>;
  meetLink?: InputMaybe<Scalars['String']>;
  notify?: InputMaybe<Scalars['String']>;
  onlyRemote?: InputMaybe<Scalars['Boolean']>;
  place?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Faq = {
  __typename?: 'Faq';
  answer: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  question?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FaqEntity = {
  __typename?: 'FaqEntity';
  attributes?: Maybe<Faq>;
  id?: Maybe<Scalars['ID']>;
};

export type FaqEntityResponse = {
  __typename?: 'FaqEntityResponse';
  data?: Maybe<FaqEntity>;
};

export type FaqEntityResponseCollection = {
  __typename?: 'FaqEntityResponseCollection';
  data: Array<FaqEntity>;
  meta: ResponseCollectionMeta;
};

export type FaqFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<FaqFiltersInput>>>;
  answer?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<FaqFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<FaqFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  question?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type FaqInput = {
  answer?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  question?: InputMaybe<Scalars['String']>;
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
  nei?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GasTariff = {
  __typename?: 'GasTariff';
  createdAt?: Maybe<Scalars['DateTime']>;
  document?: Maybe<Array<Maybe<ComponentDocumentoVigenciaDocumentoVigencia>>>;
  name?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type GasTariffDocumentArgs = {
  filters?: InputMaybe<ComponentDocumentoVigenciaDocumentoVigenciaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type GasTariffEntity = {
  __typename?: 'GasTariffEntity';
  attributes?: Maybe<GasTariff>;
  id?: Maybe<Scalars['ID']>;
};

export type GasTariffEntityResponse = {
  __typename?: 'GasTariffEntityResponse';
  data?: Maybe<GasTariffEntity>;
};

export type GasTariffEntityResponseCollection = {
  __typename?: 'GasTariffEntityResponseCollection';
  data: Array<GasTariffEntity>;
  meta: ResponseCollectionMeta;
};

export type GasTariffFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<GasTariffFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  document?: InputMaybe<ComponentDocumentoVigenciaDocumentoVigenciaFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<GasTariffFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GasTariffFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type GasTariffInput = {
  document?: InputMaybe<Array<InputMaybe<ComponentDocumentoVigenciaDocumentoVigenciaInput>>>;
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GenericMorph = Advertisement | Category | City | ComponentArquivosArquivos | ComponentCalendarCalendar | ComponentClassClasses | ComponentDocumentoVigenciaDocumentoVigencia | ComponentEventEvent | ComponentLayoutHeader | ComponentMenuDropdown | ComponentMenuLink | ComponentMenuMenuButton | ComponentMenuMenuLink | ComponentMunicipiosMunicipios | ComponentPerguntasERespostasPAndR | ComponentSectionsToContentSections | ComponentStudentsStudentResources | ComponentTagsTags | ComponentTarifasFerryBoat | ComponentTarifasTarifasTransporteRodoviario | ComponentTarifasTransporteHidroviario | ComponentTarifasTute | Department | EventoPublico | Faq | GasTariff | Global | I18NLocale | JudgmentNote | Legislation | Licitacao | Linha | Log | MainMenu | MeetingNote | Noticia | PublicConsultation | QuadroTarifario | RevenueGroup | RevenueService | School | SearchResult | Section | StudentId | Terminal | TerminalsUsageFee | Title | TollRoadTariff | TransportFee | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | WaterwayTransport | WaterwayTransportTariff;

export type Global = {
  __typename?: 'Global';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  header?: Maybe<ComponentLayoutHeader>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GlobalEntity = {
  __typename?: 'GlobalEntity';
  attributes?: Maybe<Global>;
  id?: Maybe<Scalars['ID']>;
};

export type GlobalEntityResponse = {
  __typename?: 'GlobalEntityResponse';
  data?: Maybe<GlobalEntity>;
};

export type GlobalInput = {
  description?: InputMaybe<Scalars['String']>;
  header?: InputMaybe<ComponentLayoutHeaderInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

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
  nei?: InputMaybe<Scalars['ID']>;
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
  nei?: InputMaybe<Scalars['Int']>;
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
  nei?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type JudgmentNote = {
  __typename?: 'JudgmentNote';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  document: UploadFileEntityResponse;
  judgment_date: Scalars['DateTime'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type JudgmentNoteEntity = {
  __typename?: 'JudgmentNoteEntity';
  attributes?: Maybe<JudgmentNote>;
  id?: Maybe<Scalars['ID']>;
};

export type JudgmentNoteEntityResponse = {
  __typename?: 'JudgmentNoteEntityResponse';
  data?: Maybe<JudgmentNoteEntity>;
};

export type JudgmentNoteEntityResponseCollection = {
  __typename?: 'JudgmentNoteEntityResponseCollection';
  data: Array<JudgmentNoteEntity>;
  meta: ResponseCollectionMeta;
};

export type JudgmentNoteFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<JudgmentNoteFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  judgment_date?: InputMaybe<DateTimeFilterInput>;
  not?: InputMaybe<JudgmentNoteFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<JudgmentNoteFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type JudgmentNoteInput = {
  description?: InputMaybe<Scalars['String']>;
  document?: InputMaybe<Scalars['ID']>;
  judgment_date?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
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

export type Licitacao = {
  __typename?: 'Licitacao';
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  documents?: Maybe<Array<Maybe<ComponentArquivosArquivos>>>;
  place: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  subtitle: Scalars['String'];
  title: Scalars['String'];
  type?: Maybe<Enum_Licitacao_Type>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type LicitacaoDocumentsArgs = {
  filters?: InputMaybe<ComponentArquivosArquivosFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LicitacaoEntity = {
  __typename?: 'LicitacaoEntity';
  attributes?: Maybe<Licitacao>;
  id?: Maybe<Scalars['ID']>;
};

export type LicitacaoEntityResponse = {
  __typename?: 'LicitacaoEntityResponse';
  data?: Maybe<LicitacaoEntity>;
};

export type LicitacaoEntityResponseCollection = {
  __typename?: 'LicitacaoEntityResponseCollection';
  data: Array<LicitacaoEntity>;
  meta: ResponseCollectionMeta;
};

export type LicitacaoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<LicitacaoFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  documents?: InputMaybe<ComponentArquivosArquivosFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<LicitacaoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<LicitacaoFiltersInput>>>;
  place?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  subtitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type LicitacaoInput = {
  date?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  documents?: InputMaybe<Array<InputMaybe<ComponentArquivosArquivosInput>>>;
  place?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Enum_Licitacao_Type>;
};

export type Linha = {
  __typename?: 'Linha';
  boativo?: Maybe<Scalars['Boolean']>;
  cdlinha?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dedescricao?: Maybe<Scalars['String']>;
  dedestino?: Maybe<Scalars['String']>;
  deorigem?: Maybe<Scalars['String']>;
  nulinha?: Maybe<Scalars['String']>;
  nupermissionarios?: Maybe<Scalars['Int']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LinhaEntity = {
  __typename?: 'LinhaEntity';
  attributes?: Maybe<Linha>;
  id?: Maybe<Scalars['ID']>;
};

export type LinhaEntityResponse = {
  __typename?: 'LinhaEntityResponse';
  data?: Maybe<LinhaEntity>;
};

export type LinhaEntityResponseCollection = {
  __typename?: 'LinhaEntityResponseCollection';
  data: Array<LinhaEntity>;
  meta: ResponseCollectionMeta;
};

export type LinhaFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<LinhaFiltersInput>>>;
  boativo?: InputMaybe<BooleanFilterInput>;
  cdlinha?: InputMaybe<IntFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  dedescricao?: InputMaybe<StringFilterInput>;
  dedestino?: InputMaybe<StringFilterInput>;
  deorigem?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<LinhaFiltersInput>;
  nulinha?: InputMaybe<StringFilterInput>;
  nupermissionarios?: InputMaybe<IntFilterInput>;
  or?: InputMaybe<Array<InputMaybe<LinhaFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type LinhaInput = {
  boativo?: InputMaybe<Scalars['Boolean']>;
  cdlinha?: InputMaybe<Scalars['Int']>;
  dedescricao?: InputMaybe<Scalars['String']>;
  dedestino?: InputMaybe<Scalars['String']>;
  deorigem?: InputMaybe<Scalars['String']>;
  nulinha?: InputMaybe<Scalars['String']>;
  nupermissionarios?: InputMaybe<Scalars['Int']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
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

export type MainMenu = {
  __typename?: 'MainMenu';
  createdAt?: Maybe<Scalars['DateTime']>;
  mainMenuItems?: Maybe<Array<Maybe<MainMenuMainMenuItemsDynamicZone>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MainMenuEntity = {
  __typename?: 'MainMenuEntity';
  attributes?: Maybe<MainMenu>;
  id?: Maybe<Scalars['ID']>;
};

export type MainMenuEntityResponse = {
  __typename?: 'MainMenuEntityResponse';
  data?: Maybe<MainMenuEntity>;
};

export type MainMenuInput = {
  mainMenuItems?: InputMaybe<Array<Scalars['MainMenuMainMenuItemsDynamicZoneInput']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MainMenuMainMenuItemsDynamicZone = ComponentMenuDropdown | ComponentMenuMenuButton | ComponentMenuMenuLink | Error;

export type MeetingNote = {
  __typename?: 'MeetingNote';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  document: UploadFileEntityResponse;
  meeting_date: Scalars['DateTime'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MeetingNoteEntity = {
  __typename?: 'MeetingNoteEntity';
  attributes?: Maybe<MeetingNote>;
  id?: Maybe<Scalars['ID']>;
};

export type MeetingNoteEntityResponse = {
  __typename?: 'MeetingNoteEntityResponse';
  data?: Maybe<MeetingNoteEntity>;
};

export type MeetingNoteEntityResponseCollection = {
  __typename?: 'MeetingNoteEntityResponseCollection';
  data: Array<MeetingNoteEntity>;
  meta: ResponseCollectionMeta;
};

export type MeetingNoteFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MeetingNoteFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  meeting_date?: InputMaybe<DateTimeFilterInput>;
  not?: InputMaybe<MeetingNoteFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MeetingNoteFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type MeetingNoteInput = {
  description?: InputMaybe<Scalars['String']>;
  document?: InputMaybe<Scalars['ID']>;
  meeting_date?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createAdvertisement?: Maybe<AdvertisementEntityResponse>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createCity?: Maybe<CityEntityResponse>;
  createDepartment?: Maybe<DepartmentEntityResponse>;
  createEventoPublico?: Maybe<EventoPublicoEntityResponse>;
  createFaq?: Maybe<FaqEntityResponse>;
  createGasTariff?: Maybe<GasTariffEntityResponse>;
  createJudgmentNote?: Maybe<JudgmentNoteEntityResponse>;
  createLegislation?: Maybe<LegislationEntityResponse>;
  createLicitacao?: Maybe<LicitacaoEntityResponse>;
  createLinha?: Maybe<LinhaEntityResponse>;
  createLog?: Maybe<LogEntityResponse>;
  createMeetingNote?: Maybe<MeetingNoteEntityResponse>;
  createNoticia?: Maybe<NoticiaEntityResponse>;
  createPublicConsultation?: Maybe<PublicConsultationEntityResponse>;
  createQuadroTarifario?: Maybe<QuadroTarifarioEntityResponse>;
  createRevenueGroup?: Maybe<RevenueGroupEntityResponse>;
  createRevenueService?: Maybe<RevenueServiceEntityResponse>;
  createSchool?: Maybe<SchoolEntityResponse>;
  createSearchResult?: Maybe<SearchResultEntityResponse>;
  createSection?: Maybe<SectionEntityResponse>;
  createStudentId?: Maybe<StudentIdEntityResponse>;
  createTerminal?: Maybe<TerminalEntityResponse>;
  createTerminalsUsageFee?: Maybe<TerminalsUsageFeeEntityResponse>;
  createTitle?: Maybe<TitleEntityResponse>;
  createTollRoadTariff?: Maybe<TollRoadTariffEntityResponse>;
  createTransportFee?: Maybe<TransportFeeEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createWaterwayTransport?: Maybe<WaterwayTransportEntityResponse>;
  createWaterwayTransportTariff?: Maybe<WaterwayTransportTariffEntityResponse>;
  deleteAdvertisement?: Maybe<AdvertisementEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteCity?: Maybe<CityEntityResponse>;
  deleteDepartment?: Maybe<DepartmentEntityResponse>;
  deleteEventoPublico?: Maybe<EventoPublicoEntityResponse>;
  deleteFaq?: Maybe<FaqEntityResponse>;
  deleteGasTariff?: Maybe<GasTariffEntityResponse>;
  deleteGlobal?: Maybe<GlobalEntityResponse>;
  deleteJudgmentNote?: Maybe<JudgmentNoteEntityResponse>;
  deleteLegislation?: Maybe<LegislationEntityResponse>;
  deleteLicitacao?: Maybe<LicitacaoEntityResponse>;
  deleteLinha?: Maybe<LinhaEntityResponse>;
  deleteLog?: Maybe<LogEntityResponse>;
  deleteMainMenu?: Maybe<MainMenuEntityResponse>;
  deleteMeetingNote?: Maybe<MeetingNoteEntityResponse>;
  deleteNoticia?: Maybe<NoticiaEntityResponse>;
  deletePublicConsultation?: Maybe<PublicConsultationEntityResponse>;
  deleteQuadroTarifario?: Maybe<QuadroTarifarioEntityResponse>;
  deleteRevenueGroup?: Maybe<RevenueGroupEntityResponse>;
  deleteRevenueService?: Maybe<RevenueServiceEntityResponse>;
  deleteSchool?: Maybe<SchoolEntityResponse>;
  deleteSearchResult?: Maybe<SearchResultEntityResponse>;
  deleteSection?: Maybe<SectionEntityResponse>;
  deleteStudentId?: Maybe<StudentIdEntityResponse>;
  deleteTerminal?: Maybe<TerminalEntityResponse>;
  deleteTerminalsUsageFee?: Maybe<TerminalsUsageFeeEntityResponse>;
  deleteTitle?: Maybe<TitleEntityResponse>;
  deleteTollRoadTariff?: Maybe<TollRoadTariffEntityResponse>;
  deleteTransportFee?: Maybe<TransportFeeEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteWaterwayTransport?: Maybe<WaterwayTransportEntityResponse>;
  deleteWaterwayTransportTariff?: Maybe<WaterwayTransportTariffEntityResponse>;
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
  updateAdvertisement?: Maybe<AdvertisementEntityResponse>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateCity?: Maybe<CityEntityResponse>;
  updateDepartment?: Maybe<DepartmentEntityResponse>;
  updateEventoPublico?: Maybe<EventoPublicoEntityResponse>;
  updateFaq?: Maybe<FaqEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateGasTariff?: Maybe<GasTariffEntityResponse>;
  updateGlobal?: Maybe<GlobalEntityResponse>;
  updateJudgmentNote?: Maybe<JudgmentNoteEntityResponse>;
  updateLegislation?: Maybe<LegislationEntityResponse>;
  updateLicitacao?: Maybe<LicitacaoEntityResponse>;
  updateLinha?: Maybe<LinhaEntityResponse>;
  updateLog?: Maybe<LogEntityResponse>;
  updateMainMenu?: Maybe<MainMenuEntityResponse>;
  updateMeetingNote?: Maybe<MeetingNoteEntityResponse>;
  updateNoticia?: Maybe<NoticiaEntityResponse>;
  updatePublicConsultation?: Maybe<PublicConsultationEntityResponse>;
  updateQuadroTarifario?: Maybe<QuadroTarifarioEntityResponse>;
  updateRevenueGroup?: Maybe<RevenueGroupEntityResponse>;
  updateRevenueService?: Maybe<RevenueServiceEntityResponse>;
  updateSchool?: Maybe<SchoolEntityResponse>;
  updateSearchResult?: Maybe<SearchResultEntityResponse>;
  updateSection?: Maybe<SectionEntityResponse>;
  updateStudentId?: Maybe<StudentIdEntityResponse>;
  updateTerminal?: Maybe<TerminalEntityResponse>;
  updateTerminalsUsageFee?: Maybe<TerminalsUsageFeeEntityResponse>;
  updateTitle?: Maybe<TitleEntityResponse>;
  updateTollRoadTariff?: Maybe<TollRoadTariffEntityResponse>;
  updateTransportFee?: Maybe<TransportFeeEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateWaterwayTransport?: Maybe<WaterwayTransportEntityResponse>;
  updateWaterwayTransportTariff?: Maybe<WaterwayTransportTariffEntityResponse>;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationCreateAdvertisementArgs = {
  data: AdvertisementInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};


export type MutationCreateCityArgs = {
  data: CityInput;
};


export type MutationCreateDepartmentArgs = {
  data: DepartmentInput;
};


export type MutationCreateEventoPublicoArgs = {
  data: EventoPublicoInput;
};


export type MutationCreateFaqArgs = {
  data: FaqInput;
};


export type MutationCreateGasTariffArgs = {
  data: GasTariffInput;
};


export type MutationCreateJudgmentNoteArgs = {
  data: JudgmentNoteInput;
};


export type MutationCreateLegislationArgs = {
  data: LegislationInput;
};


export type MutationCreateLicitacaoArgs = {
  data: LicitacaoInput;
};


export type MutationCreateLinhaArgs = {
  data: LinhaInput;
};


export type MutationCreateLogArgs = {
  data: LogInput;
};


export type MutationCreateMeetingNoteArgs = {
  data: MeetingNoteInput;
};


export type MutationCreateNoticiaArgs = {
  data: NoticiaInput;
};


export type MutationCreatePublicConsultationArgs = {
  data: PublicConsultationInput;
};


export type MutationCreateQuadroTarifarioArgs = {
  data: QuadroTarifarioInput;
};


export type MutationCreateRevenueGroupArgs = {
  data: RevenueGroupInput;
};


export type MutationCreateRevenueServiceArgs = {
  data: RevenueServiceInput;
};


export type MutationCreateSchoolArgs = {
  data: SchoolInput;
};


export type MutationCreateSearchResultArgs = {
  data: SearchResultInput;
};


export type MutationCreateSectionArgs = {
  data: SectionInput;
};


export type MutationCreateStudentIdArgs = {
  data: StudentIdInput;
};


export type MutationCreateTerminalArgs = {
  data: TerminalInput;
};


export type MutationCreateTerminalsUsageFeeArgs = {
  data: TerminalsUsageFeeInput;
};


export type MutationCreateTitleArgs = {
  data: TitleInput;
};


export type MutationCreateTollRoadTariffArgs = {
  data: TollRoadTariffInput;
};


export type MutationCreateTransportFeeArgs = {
  data: TransportFeeInput;
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


export type MutationCreateWaterwayTransportArgs = {
  data: WaterwayTransportInput;
};


export type MutationCreateWaterwayTransportTariffArgs = {
  data: WaterwayTransportTariffInput;
};


export type MutationDeleteAdvertisementArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCityArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteDepartmentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEventoPublicoArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteFaqArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteGasTariffArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteJudgmentNoteArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteLegislationArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteLicitacaoArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteLinhaArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteLogArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMeetingNoteArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteNoticiaArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePublicConsultationArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteQuadroTarifarioArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRevenueGroupArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRevenueServiceArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSchoolArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSearchResultArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSectionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteStudentIdArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTerminalArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTerminalsUsageFeeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTitleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTollRoadTariffArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTransportFeeArgs = {
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


export type MutationDeleteWaterwayTransportArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteWaterwayTransportTariffArgs = {
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


export type MutationUpdateAdvertisementArgs = {
  data: AdvertisementInput;
  id: Scalars['ID'];
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID'];
};


export type MutationUpdateCityArgs = {
  data: CityInput;
  id: Scalars['ID'];
};


export type MutationUpdateDepartmentArgs = {
  data: DepartmentInput;
  id: Scalars['ID'];
};


export type MutationUpdateEventoPublicoArgs = {
  data: EventoPublicoInput;
  id: Scalars['ID'];
};


export type MutationUpdateFaqArgs = {
  data: FaqInput;
  id: Scalars['ID'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateGasTariffArgs = {
  data: GasTariffInput;
  id: Scalars['ID'];
};


export type MutationUpdateGlobalArgs = {
  data: GlobalInput;
};


export type MutationUpdateJudgmentNoteArgs = {
  data: JudgmentNoteInput;
  id: Scalars['ID'];
};


export type MutationUpdateLegislationArgs = {
  data: LegislationInput;
  id: Scalars['ID'];
};


export type MutationUpdateLicitacaoArgs = {
  data: LicitacaoInput;
  id: Scalars['ID'];
};


export type MutationUpdateLinhaArgs = {
  data: LinhaInput;
  id: Scalars['ID'];
};


export type MutationUpdateLogArgs = {
  data: LogInput;
  id: Scalars['ID'];
};


export type MutationUpdateMainMenuArgs = {
  data: MainMenuInput;
};


export type MutationUpdateMeetingNoteArgs = {
  data: MeetingNoteInput;
  id: Scalars['ID'];
};


export type MutationUpdateNoticiaArgs = {
  data: NoticiaInput;
  id: Scalars['ID'];
};


export type MutationUpdatePublicConsultationArgs = {
  data: PublicConsultationInput;
  id: Scalars['ID'];
};


export type MutationUpdateQuadroTarifarioArgs = {
  data: QuadroTarifarioInput;
  id: Scalars['ID'];
};


export type MutationUpdateRevenueGroupArgs = {
  data: RevenueGroupInput;
  id: Scalars['ID'];
};


export type MutationUpdateRevenueServiceArgs = {
  data: RevenueServiceInput;
  id: Scalars['ID'];
};


export type MutationUpdateSchoolArgs = {
  data: SchoolInput;
  id: Scalars['ID'];
};


export type MutationUpdateSearchResultArgs = {
  data: SearchResultInput;
  id: Scalars['ID'];
};


export type MutationUpdateSectionArgs = {
  data: SectionInput;
  id: Scalars['ID'];
};


export type MutationUpdateStudentIdArgs = {
  data: StudentIdInput;
  id: Scalars['ID'];
};


export type MutationUpdateTerminalArgs = {
  data: TerminalInput;
  id: Scalars['ID'];
};


export type MutationUpdateTerminalsUsageFeeArgs = {
  data: TerminalsUsageFeeInput;
  id: Scalars['ID'];
};


export type MutationUpdateTitleArgs = {
  data: TitleInput;
  id: Scalars['ID'];
};


export type MutationUpdateTollRoadTariffArgs = {
  data: TollRoadTariffInput;
  id: Scalars['ID'];
};


export type MutationUpdateTransportFeeArgs = {
  data: TransportFeeInput;
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


export type MutationUpdateWaterwayTransportArgs = {
  data: WaterwayTransportInput;
  id: Scalars['ID'];
};


export type MutationUpdateWaterwayTransportTariffArgs = {
  data: WaterwayTransportTariffInput;
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
  Files?: Maybe<Array<Maybe<ComponentArquivosArquivos>>>;
  PublishDate: Scalars['Date'];
  Sections?: Maybe<Array<Maybe<ComponentSectionsToContentSections>>>;
  Tags?: Maybe<Array<Maybe<ComponentTagsTags>>>;
  categorias?: Maybe<CategoryRelationResponseCollection>;
  colorTitle?: Maybe<Enum_Noticia_Colortitle>;
  content: Scalars['String'];
  cover?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deadline?: Maybe<Scalars['Date']>;
  gallery?: Maybe<UploadFileRelationResponseCollection>;
  highlight: Scalars['Boolean'];
  newtype: Enum_Noticia_Newtype;
  publishedAt?: Maybe<Scalars['DateTime']>;
  shortTitle?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type NoticiaFilesArgs = {
  filters?: InputMaybe<ComponentArquivosArquivosFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type NoticiaSectionsArgs = {
  filters?: InputMaybe<ComponentSectionsToContentSectionsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type NoticiaTagsArgs = {
  filters?: InputMaybe<ComponentTagsTagsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type NoticiaCategoriasArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
  Files?: InputMaybe<ComponentArquivosArquivosFiltersInput>;
  PublishDate?: InputMaybe<DateFilterInput>;
  Sections?: InputMaybe<ComponentSectionsToContentSectionsFiltersInput>;
  Tags?: InputMaybe<ComponentTagsTagsFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<NoticiaFiltersInput>>>;
  categorias?: InputMaybe<CategoryFiltersInput>;
  colorTitle?: InputMaybe<StringFilterInput>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  deadline?: InputMaybe<DateFilterInput>;
  highlight?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  newtype?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<NoticiaFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NoticiaFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  shortTitle?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  subtitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type NoticiaInput = {
  Files?: InputMaybe<Array<InputMaybe<ComponentArquivosArquivosInput>>>;
  PublishDate?: InputMaybe<Scalars['Date']>;
  Sections?: InputMaybe<Array<InputMaybe<ComponentSectionsToContentSectionsInput>>>;
  Tags?: InputMaybe<Array<InputMaybe<ComponentTagsTagsInput>>>;
  categorias?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  colorTitle?: InputMaybe<Enum_Noticia_Colortitle>;
  content?: InputMaybe<Scalars['String']>;
  cover?: InputMaybe<Scalars['ID']>;
  deadline?: InputMaybe<Scalars['Date']>;
  gallery?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  highlight?: InputMaybe<Scalars['Boolean']>;
  newtype?: InputMaybe<Enum_Noticia_Newtype>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  shortTitle?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
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

export type PublicConsultation = {
  __typename?: 'PublicConsultation';
  calendar?: Maybe<Array<Maybe<ComponentEventEvent>>>;
  closure?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['Date'];
  documents?: Maybe<Array<Maybe<ComponentArquivosArquivos>>>;
  eventType: Enum_Publicconsultation_Eventtype;
  notify?: Maybe<Scalars['String']>;
  participation?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type PublicConsultationCalendarArgs = {
  filters?: InputMaybe<ComponentEventEventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PublicConsultationDocumentsArgs = {
  filters?: InputMaybe<ComponentArquivosArquivosFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PublicConsultationEntity = {
  __typename?: 'PublicConsultationEntity';
  attributes?: Maybe<PublicConsultation>;
  id?: Maybe<Scalars['ID']>;
};

export type PublicConsultationEntityResponse = {
  __typename?: 'PublicConsultationEntityResponse';
  data?: Maybe<PublicConsultationEntity>;
};

export type PublicConsultationEntityResponseCollection = {
  __typename?: 'PublicConsultationEntityResponseCollection';
  data: Array<PublicConsultationEntity>;
  meta: ResponseCollectionMeta;
};

export type PublicConsultationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PublicConsultationFiltersInput>>>;
  calendar?: InputMaybe<ComponentEventEventFiltersInput>;
  closure?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<DateFilterInput>;
  documents?: InputMaybe<ComponentArquivosArquivosFiltersInput>;
  eventType?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<PublicConsultationFiltersInput>;
  notify?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<PublicConsultationFiltersInput>>>;
  participation?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PublicConsultationInput = {
  calendar?: InputMaybe<Array<InputMaybe<ComponentEventEventInput>>>;
  closure?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['Date']>;
  documents?: InputMaybe<Array<InputMaybe<ComponentArquivosArquivosInput>>>;
  eventType?: InputMaybe<Enum_Publicconsultation_Eventtype>;
  notify?: InputMaybe<Scalars['String']>;
  participation?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type QuadroTarifario = {
  __typename?: 'QuadroTarifario';
  createdAt?: Maybe<Scalars['DateTime']>;
  entityType: Enum_Quadrotarifario_Entitytype;
  name: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  resources?: Maybe<Array<Maybe<QuadroTarifarioResourcesDynamicZone>>>;
  slug: Scalars['String'];
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
  entityType?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<QuadroTarifarioFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<QuadroTarifarioFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type QuadroTarifarioInput = {
  entityType?: InputMaybe<Enum_Quadrotarifario_Entitytype>;
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  resources?: InputMaybe<Array<Scalars['QuadroTarifarioResourcesDynamicZoneInput']>>;
  slug?: InputMaybe<Scalars['String']>;
};

export type QuadroTarifarioResourcesDynamicZone = ComponentTarifasTarifasTransporteRodoviario | ComponentTarifasTransporteHidroviario | ComponentTarifasTute | Error;

export type Query = {
  __typename?: 'Query';
  advertisement?: Maybe<AdvertisementEntityResponse>;
  advertisements?: Maybe<AdvertisementEntityResponseCollection>;
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  cities?: Maybe<CityEntityResponseCollection>;
  city?: Maybe<CityEntityResponse>;
  department?: Maybe<DepartmentEntityResponse>;
  departments?: Maybe<DepartmentEntityResponseCollection>;
  eventoPublico?: Maybe<EventoPublicoEntityResponse>;
  eventosPublicos?: Maybe<EventoPublicoEntityResponseCollection>;
  faq?: Maybe<FaqEntityResponse>;
  faqs?: Maybe<FaqEntityResponseCollection>;
  gasTariff?: Maybe<GasTariffEntityResponse>;
  gasTariffs?: Maybe<GasTariffEntityResponseCollection>;
  global?: Maybe<GlobalEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  judgmentNote?: Maybe<JudgmentNoteEntityResponse>;
  judgmentNotes?: Maybe<JudgmentNoteEntityResponseCollection>;
  legislation?: Maybe<LegislationEntityResponse>;
  legislations?: Maybe<LegislationEntityResponseCollection>;
  licitacao?: Maybe<LicitacaoEntityResponse>;
  licitacaos?: Maybe<LicitacaoEntityResponseCollection>;
  linha?: Maybe<LinhaEntityResponse>;
  linhas?: Maybe<LinhaEntityResponseCollection>;
  log?: Maybe<LogEntityResponse>;
  logs?: Maybe<LogEntityResponseCollection>;
  mainMenu?: Maybe<MainMenuEntityResponse>;
  me?: Maybe<UsersPermissionsMe>;
  meetingNote?: Maybe<MeetingNoteEntityResponse>;
  meetingNotes?: Maybe<MeetingNoteEntityResponseCollection>;
  noticia?: Maybe<NoticiaEntityResponse>;
  noticias?: Maybe<NoticiaEntityResponseCollection>;
  publicConsultation?: Maybe<PublicConsultationEntityResponse>;
  publicConsultations?: Maybe<PublicConsultationEntityResponseCollection>;
  quadroTarifario?: Maybe<QuadroTarifarioEntityResponse>;
  quadroTarifarios?: Maybe<QuadroTarifarioEntityResponseCollection>;
  revenueGroup?: Maybe<RevenueGroupEntityResponse>;
  revenueGroups?: Maybe<RevenueGroupEntityResponseCollection>;
  revenueService?: Maybe<RevenueServiceEntityResponse>;
  revenueServices?: Maybe<RevenueServiceEntityResponseCollection>;
  school?: Maybe<SchoolEntityResponse>;
  schools?: Maybe<SchoolEntityResponseCollection>;
  searchResult?: Maybe<SearchResultEntityResponse>;
  searchResults?: Maybe<SearchResultEntityResponseCollection>;
  section?: Maybe<SectionEntityResponse>;
  sections?: Maybe<SectionEntityResponseCollection>;
  studentId?: Maybe<StudentIdEntityResponse>;
  studentIds?: Maybe<StudentIdEntityResponseCollection>;
  terminais?: Maybe<TerminalEntityResponseCollection>;
  terminal?: Maybe<TerminalEntityResponse>;
  terminalsUsageFee?: Maybe<TerminalsUsageFeeEntityResponse>;
  terminalsUsageFees?: Maybe<TerminalsUsageFeeEntityResponseCollection>;
  title?: Maybe<TitleEntityResponse>;
  titles?: Maybe<TitleEntityResponseCollection>;
  tollRoadTariff?: Maybe<TollRoadTariffEntityResponse>;
  tollRoadTariffs?: Maybe<TollRoadTariffEntityResponseCollection>;
  transportFee?: Maybe<TransportFeeEntityResponse>;
  transportFees?: Maybe<TransportFeeEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  waterwayTransport?: Maybe<WaterwayTransportEntityResponse>;
  waterwayTransportTariff?: Maybe<WaterwayTransportTariffEntityResponse>;
  waterwayTransportTariffs?: Maybe<WaterwayTransportTariffEntityResponseCollection>;
  waterwayTransports?: Maybe<WaterwayTransportEntityResponseCollection>;
};


export type QueryAdvertisementArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAdvertisementsArgs = {
  filters?: InputMaybe<AdvertisementFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCitiesArgs = {
  filters?: InputMaybe<CityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCityArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryDepartmentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryDepartmentsArgs = {
  filters?: InputMaybe<DepartmentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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


export type QueryFaqArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryFaqsArgs = {
  filters?: InputMaybe<FaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryGasTariffArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryGasTariffsArgs = {
  filters?: InputMaybe<GasTariffFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryGlobalArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryJudgmentNoteArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryJudgmentNotesArgs = {
  filters?: InputMaybe<JudgmentNoteFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
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


export type QueryLicitacaoArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryLicitacaosArgs = {
  filters?: InputMaybe<LicitacaoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryLinhaArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryLinhasArgs = {
  filters?: InputMaybe<LinhaFiltersInput>;
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


export type QueryMainMenuArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryMeetingNoteArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryMeetingNotesArgs = {
  filters?: InputMaybe<MeetingNoteFiltersInput>;
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


export type QueryPublicConsultationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPublicConsultationsArgs = {
  filters?: InputMaybe<PublicConsultationFiltersInput>;
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


export type QueryRevenueGroupArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryRevenueGroupsArgs = {
  filters?: InputMaybe<RevenueGroupFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryRevenueServiceArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryRevenueServicesArgs = {
  filters?: InputMaybe<RevenueServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySchoolArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerySchoolsArgs = {
  filters?: InputMaybe<SchoolFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySearchResultArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerySearchResultsArgs = {
  filters?: InputMaybe<SearchResultFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySectionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerySectionsArgs = {
  filters?: InputMaybe<SectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryStudentIdArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryStudentIdsArgs = {
  filters?: InputMaybe<StudentIdFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTerminaisArgs = {
  filters?: InputMaybe<TerminalFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTerminalArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTerminalsUsageFeeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTerminalsUsageFeesArgs = {
  filters?: InputMaybe<TerminalsUsageFeeFiltersInput>;
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


export type QueryTollRoadTariffArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTollRoadTariffsArgs = {
  filters?: InputMaybe<TollRoadTariffFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTransportFeeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTransportFeesArgs = {
  filters?: InputMaybe<TransportFeeFiltersInput>;
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


export type QueryWaterwayTransportArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryWaterwayTransportTariffArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryWaterwayTransportTariffsArgs = {
  filters?: InputMaybe<WaterwayTransportTariffFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryWaterwayTransportsArgs = {
  filters?: InputMaybe<WaterwayTransportFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type RevenueGroup = {
  __typename?: 'RevenueGroup';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  revenue_services?: Maybe<RevenueServiceRelationResponseCollection>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type RevenueGroupRevenue_ServicesArgs = {
  filters?: InputMaybe<RevenueServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type RevenueGroupEntity = {
  __typename?: 'RevenueGroupEntity';
  attributes?: Maybe<RevenueGroup>;
  id?: Maybe<Scalars['ID']>;
};

export type RevenueGroupEntityResponse = {
  __typename?: 'RevenueGroupEntityResponse';
  data?: Maybe<RevenueGroupEntity>;
};

export type RevenueGroupEntityResponseCollection = {
  __typename?: 'RevenueGroupEntityResponseCollection';
  data: Array<RevenueGroupEntity>;
  meta: ResponseCollectionMeta;
};

export type RevenueGroupFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<RevenueGroupFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<RevenueGroupFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<RevenueGroupFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  revenue_services?: InputMaybe<RevenueServiceFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type RevenueGroupInput = {
  description?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  revenue_services?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type RevenueService = {
  __typename?: 'RevenueService';
  cost: Scalars['Float'];
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  receitas_grupo?: Maybe<RevenueGroupEntityResponse>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RevenueServiceEntity = {
  __typename?: 'RevenueServiceEntity';
  attributes?: Maybe<RevenueService>;
  id?: Maybe<Scalars['ID']>;
};

export type RevenueServiceEntityResponse = {
  __typename?: 'RevenueServiceEntityResponse';
  data?: Maybe<RevenueServiceEntity>;
};

export type RevenueServiceEntityResponseCollection = {
  __typename?: 'RevenueServiceEntityResponseCollection';
  data: Array<RevenueServiceEntity>;
  meta: ResponseCollectionMeta;
};

export type RevenueServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<RevenueServiceFiltersInput>>>;
  cost?: InputMaybe<FloatFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<RevenueServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<RevenueServiceFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  receitas_grupo?: InputMaybe<RevenueGroupFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type RevenueServiceInput = {
  cost?: InputMaybe<Scalars['Float']>;
  description?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  receitas_grupo?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type RevenueServiceRelationResponseCollection = {
  __typename?: 'RevenueServiceRelationResponseCollection';
  data: Array<RevenueServiceEntity>;
};

export type School = {
  __typename?: 'School';
  createdAt?: Maybe<Scalars['DateTime']>;
  document: Scalars['String'];
  name: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SchoolEntity = {
  __typename?: 'SchoolEntity';
  attributes?: Maybe<School>;
  id?: Maybe<Scalars['ID']>;
};

export type SchoolEntityResponse = {
  __typename?: 'SchoolEntityResponse';
  data?: Maybe<SchoolEntity>;
};

export type SchoolEntityResponseCollection = {
  __typename?: 'SchoolEntityResponseCollection';
  data: Array<SchoolEntity>;
  meta: ResponseCollectionMeta;
};

export type SchoolFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SchoolFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  document?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SchoolFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SchoolFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SchoolInput = {
  document?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type SearchResult = {
  __typename?: 'SearchResult';
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['Date'];
  document?: Maybe<Array<Maybe<ComponentArquivosArquivos>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type SearchResultDocumentArgs = {
  filters?: InputMaybe<ComponentArquivosArquivosFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SearchResultEntity = {
  __typename?: 'SearchResultEntity';
  attributes?: Maybe<SearchResult>;
  id?: Maybe<Scalars['ID']>;
};

export type SearchResultEntityResponse = {
  __typename?: 'SearchResultEntityResponse';
  data?: Maybe<SearchResultEntity>;
};

export type SearchResultEntityResponseCollection = {
  __typename?: 'SearchResultEntityResponseCollection';
  data: Array<SearchResultEntity>;
  meta: ResponseCollectionMeta;
};

export type SearchResultFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SearchResultFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<DateFilterInput>;
  document?: InputMaybe<ComponentArquivosArquivosFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<SearchResultFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SearchResultFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SearchResultInput = {
  date?: InputMaybe<Scalars['Date']>;
  document?: InputMaybe<Array<InputMaybe<ComponentArquivosArquivosInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Section = {
  __typename?: 'Section';
  createdAt?: Maybe<Scalars['DateTime']>;
  links?: Maybe<Array<Maybe<ComponentMenuLink>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type SectionLinksArgs = {
  filters?: InputMaybe<ComponentMenuLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SectionEntity = {
  __typename?: 'SectionEntity';
  attributes?: Maybe<Section>;
  id?: Maybe<Scalars['ID']>;
};

export type SectionEntityResponse = {
  __typename?: 'SectionEntityResponse';
  data?: Maybe<SectionEntity>;
};

export type SectionEntityResponseCollection = {
  __typename?: 'SectionEntityResponseCollection';
  data: Array<SectionEntity>;
  meta: ResponseCollectionMeta;
};

export type SectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SectionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  links?: InputMaybe<ComponentMenuLinkFiltersInput>;
  not?: InputMaybe<SectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SectionFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SectionInput = {
  links?: InputMaybe<Array<InputMaybe<ComponentMenuLinkInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
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
  nei?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StudentId = {
  __typename?: 'StudentId';
  avatar?: Maybe<UploadFileEntityResponse>;
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  document: Scalars['String'];
  name: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  resources?: Maybe<Array<Maybe<ComponentStudentsStudentResources>>>;
  slug?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type StudentIdResourcesArgs = {
  filters?: InputMaybe<ComponentStudentsStudentResourcesFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StudentIdEntity = {
  __typename?: 'StudentIdEntity';
  attributes?: Maybe<StudentId>;
  id?: Maybe<Scalars['ID']>;
};

export type StudentIdEntityResponse = {
  __typename?: 'StudentIdEntityResponse';
  data?: Maybe<StudentIdEntity>;
};

export type StudentIdEntityResponseCollection = {
  __typename?: 'StudentIdEntityResponseCollection';
  data: Array<StudentIdEntity>;
  meta: ResponseCollectionMeta;
};

export type StudentIdFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<StudentIdFiltersInput>>>;
  bio?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  document?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<StudentIdFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<StudentIdFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  resources?: InputMaybe<ComponentStudentsStudentResourcesFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type StudentIdInput = {
  avatar?: InputMaybe<Scalars['ID']>;
  bio?: InputMaybe<Scalars['String']>;
  document?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  resources?: InputMaybe<Array<InputMaybe<ComponentStudentsStudentResourcesInput>>>;
  slug?: InputMaybe<Scalars['String']>;
};

export type Terminal = {
  __typename?: 'Terminal';
  active: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  document?: Maybe<UploadFileEntityResponse>;
  email?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  type: Enum_Terminal_Type;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TerminalEntity = {
  __typename?: 'TerminalEntity';
  attributes?: Maybe<Terminal>;
  id?: Maybe<Scalars['ID']>;
};

export type TerminalEntityResponse = {
  __typename?: 'TerminalEntityResponse';
  data?: Maybe<TerminalEntity>;
};

export type TerminalEntityResponseCollection = {
  __typename?: 'TerminalEntityResponseCollection';
  data: Array<TerminalEntity>;
  meta: ResponseCollectionMeta;
};

export type TerminalFiltersInput = {
  active?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<TerminalFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TerminalFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TerminalFiltersInput>>>;
  phone?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TerminalInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  document?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  type?: InputMaybe<Enum_Terminal_Type>;
};

export type TerminalsUsageFee = {
  __typename?: 'TerminalsUsageFee';
  createdAt?: Maybe<Scalars['DateTime']>;
  document?: Maybe<Array<Maybe<ComponentDocumentoVigenciaDocumentoVigencia>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  type?: Maybe<Enum_Terminalsusagefee_Type>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type TerminalsUsageFeeDocumentArgs = {
  filters?: InputMaybe<ComponentDocumentoVigenciaDocumentoVigenciaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TerminalsUsageFeeEntity = {
  __typename?: 'TerminalsUsageFeeEntity';
  attributes?: Maybe<TerminalsUsageFee>;
  id?: Maybe<Scalars['ID']>;
};

export type TerminalsUsageFeeEntityResponse = {
  __typename?: 'TerminalsUsageFeeEntityResponse';
  data?: Maybe<TerminalsUsageFeeEntity>;
};

export type TerminalsUsageFeeEntityResponseCollection = {
  __typename?: 'TerminalsUsageFeeEntityResponseCollection';
  data: Array<TerminalsUsageFeeEntity>;
  meta: ResponseCollectionMeta;
};

export type TerminalsUsageFeeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TerminalsUsageFeeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  document?: InputMaybe<ComponentDocumentoVigenciaDocumentoVigenciaFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<TerminalsUsageFeeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TerminalsUsageFeeFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TerminalsUsageFeeInput = {
  document?: InputMaybe<Array<InputMaybe<ComponentDocumentoVigenciaDocumentoVigenciaInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  type?: InputMaybe<Enum_Terminalsusagefee_Type>;
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

export type TollRoadTariff = {
  __typename?: 'TollRoadTariff';
  createdAt?: Maybe<Scalars['DateTime']>;
  document?: Maybe<Array<Maybe<ComponentDocumentoVigenciaDocumentoVigencia>>>;
  name: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type TollRoadTariffDocumentArgs = {
  filters?: InputMaybe<ComponentDocumentoVigenciaDocumentoVigenciaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TollRoadTariffEntity = {
  __typename?: 'TollRoadTariffEntity';
  attributes?: Maybe<TollRoadTariff>;
  id?: Maybe<Scalars['ID']>;
};

export type TollRoadTariffEntityResponse = {
  __typename?: 'TollRoadTariffEntityResponse';
  data?: Maybe<TollRoadTariffEntity>;
};

export type TollRoadTariffEntityResponseCollection = {
  __typename?: 'TollRoadTariffEntityResponseCollection';
  data: Array<TollRoadTariffEntity>;
  meta: ResponseCollectionMeta;
};

export type TollRoadTariffFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TollRoadTariffFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  document?: InputMaybe<ComponentDocumentoVigenciaDocumentoVigenciaFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TollRoadTariffFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TollRoadTariffFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TollRoadTariffInput = {
  document?: InputMaybe<Array<InputMaybe<ComponentDocumentoVigenciaDocumentoVigenciaInput>>>;
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TransportFee = {
  __typename?: 'TransportFee';
  createdAt?: Maybe<Scalars['DateTime']>;
  entityType?: Maybe<Enum_Transportfee_Entitytype>;
  files?: Maybe<Array<Maybe<ComponentDocumentoVigenciaDocumentoVigencia>>>;
  name: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  transportType?: Maybe<Enum_Transportfee_Transporttype>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type TransportFeeFilesArgs = {
  filters?: InputMaybe<ComponentDocumentoVigenciaDocumentoVigenciaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TransportFeeEntity = {
  __typename?: 'TransportFeeEntity';
  attributes?: Maybe<TransportFee>;
  id?: Maybe<Scalars['ID']>;
};

export type TransportFeeEntityResponse = {
  __typename?: 'TransportFeeEntityResponse';
  data?: Maybe<TransportFeeEntity>;
};

export type TransportFeeEntityResponseCollection = {
  __typename?: 'TransportFeeEntityResponseCollection';
  data: Array<TransportFeeEntity>;
  meta: ResponseCollectionMeta;
};

export type TransportFeeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TransportFeeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  entityType?: InputMaybe<StringFilterInput>;
  files?: InputMaybe<ComponentDocumentoVigenciaDocumentoVigenciaFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TransportFeeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TransportFeeFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  transportType?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TransportFeeInput = {
  entityType?: InputMaybe<Enum_Transportfee_Entitytype>;
  files?: InputMaybe<Array<InputMaybe<ComponentDocumentoVigenciaDocumentoVigenciaInput>>>;
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  transportType?: InputMaybe<Enum_Transportfee_Transporttype>;
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

export type WaterwayTransport = {
  __typename?: 'WaterwayTransport';
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  documents?: Maybe<Array<Maybe<ComponentArquivosArquivos>>>;
  email?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  type?: Maybe<Enum_Waterwaytransport_Type>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type WaterwayTransportDocumentsArgs = {
  filters?: InputMaybe<ComponentArquivosArquivosFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type WaterwayTransportEntity = {
  __typename?: 'WaterwayTransportEntity';
  attributes?: Maybe<WaterwayTransport>;
  id?: Maybe<Scalars['ID']>;
};

export type WaterwayTransportEntityResponse = {
  __typename?: 'WaterwayTransportEntityResponse';
  data?: Maybe<WaterwayTransportEntity>;
};

export type WaterwayTransportEntityResponseCollection = {
  __typename?: 'WaterwayTransportEntityResponseCollection';
  data: Array<WaterwayTransportEntity>;
  meta: ResponseCollectionMeta;
};

export type WaterwayTransportFiltersInput = {
  address?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<WaterwayTransportFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documents?: InputMaybe<ComponentArquivosArquivosFiltersInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<WaterwayTransportFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<WaterwayTransportFiltersInput>>>;
  phone?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type WaterwayTransportInput = {
  address?: InputMaybe<Scalars['String']>;
  documents?: InputMaybe<Array<InputMaybe<ComponentArquivosArquivosInput>>>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  type?: InputMaybe<Enum_Waterwaytransport_Type>;
};

export type WaterwayTransportTariff = {
  __typename?: 'WaterwayTransportTariff';
  createdAt?: Maybe<Scalars['DateTime']>;
  entityType: Enum_Waterwaytransporttariff_Entitytype;
  files?: Maybe<Array<Maybe<ComponentDocumentoVigenciaDocumentoVigencia>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type WaterwayTransportTariffFilesArgs = {
  filters?: InputMaybe<ComponentDocumentoVigenciaDocumentoVigenciaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type WaterwayTransportTariffEntity = {
  __typename?: 'WaterwayTransportTariffEntity';
  attributes?: Maybe<WaterwayTransportTariff>;
  id?: Maybe<Scalars['ID']>;
};

export type WaterwayTransportTariffEntityResponse = {
  __typename?: 'WaterwayTransportTariffEntityResponse';
  data?: Maybe<WaterwayTransportTariffEntity>;
};

export type WaterwayTransportTariffEntityResponseCollection = {
  __typename?: 'WaterwayTransportTariffEntityResponseCollection';
  data: Array<WaterwayTransportTariffEntity>;
  meta: ResponseCollectionMeta;
};

export type WaterwayTransportTariffFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<WaterwayTransportTariffFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  entityType?: InputMaybe<StringFilterInput>;
  files?: InputMaybe<ComponentDocumentoVigenciaDocumentoVigenciaFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<WaterwayTransportTariffFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<WaterwayTransportTariffFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type WaterwayTransportTariffInput = {
  entityType?: InputMaybe<Enum_Waterwaytransporttariff_Entitytype>;
  files?: InputMaybe<Array<InputMaybe<ComponentDocumentoVigenciaDocumentoVigenciaInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GetAtasDeJulgamentoQueryVariables = Exact<{
  limit: Scalars['Int'];
  start?: InputMaybe<Scalars['Int']>;
}>;


export type GetAtasDeJulgamentoQuery = { __typename?: 'Query', judgmentNotes?: { __typename?: 'JudgmentNoteEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, pageCount: number, page: number, pageSize: number } }, data: Array<{ __typename?: 'JudgmentNoteEntity', id?: string | null, attributes?: { __typename?: 'JudgmentNote', title: string, description?: string | null, judgment_date: any, document: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null }> } | null };

export type GetAtasDeReuniaoQueryVariables = Exact<{
  limit: Scalars['Int'];
  start?: InputMaybe<Scalars['Int']>;
}>;


export type GetAtasDeReuniaoQuery = { __typename?: 'Query', meetingNotes?: { __typename?: 'MeetingNoteEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, pageCount: number, page: number, pageSize: number } }, data: Array<{ __typename?: 'MeetingNoteEntity', id?: string | null, attributes?: { __typename?: 'MeetingNote', title: string, description?: string | null, meeting_date: any, document: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null }> } | null };

export type GetAudienciaPublicaByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetAudienciaPublicaByIdQuery = { __typename?: 'Query', eventoPublico?: { __typename?: 'EventoPublicoEntityResponse', data?: { __typename?: 'EventoPublicoEntity', id?: string | null, attributes?: { __typename?: 'EventoPublico', title: string, event_type: Enum_Eventopublico_Event_Type, notify?: string | null, date: any, place?: string | null, meetLink?: string | null, onlyRemote?: boolean | null, justification?: string | null, calendar?: Array<{ __typename?: 'ComponentEventEvent', id: string, title: Enum_Componenteventevent_Title, starts_in?: any | null, finish_in?: any | null, retification: boolean } | null> | null, Documentos?: Array<{ __typename?: 'ComponentArquivosArquivos', name: string, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null> | null, finalReport?: Array<{ __typename?: 'ComponentArquivosArquivos', id: string, name: string, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, url: string } | null } | null } } | null> | null } | null } | null } | null };

export type GetAudienciasPublicasQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAudienciasPublicasQuery = { __typename?: 'Query', eventosPublicos?: { __typename?: 'EventoPublicoEntityResponseCollection', data: Array<{ __typename?: 'EventoPublicoEntity', id?: string | null, attributes?: { __typename?: 'EventoPublico', title: string, notify?: string | null, event_type: Enum_Eventopublico_Event_Type, date: any, calendar?: Array<{ __typename?: 'ComponentEventEvent', title: Enum_Componenteventevent_Title, starts_in?: any | null, finish_in?: any | null } | null> | null } | null }> } | null };

export type GetCartilhasQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCartilhasQuery = { __typename?: 'Query', titles?: { __typename?: 'TitleEntityResponseCollection', data: Array<{ __typename?: 'TitleEntity', id?: string | null, attributes?: { __typename?: 'Title', title: string, slug?: string | null, year: number, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, url: string } | null } | null } } | null }> } | null };

export type GetConsultaPublicaByidQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetConsultaPublicaByidQuery = { __typename?: 'Query', publicConsultation?: { __typename?: 'PublicConsultationEntityResponse', data?: { __typename?: 'PublicConsultationEntity', id?: string | null, attributes?: { __typename?: 'PublicConsultation', title: string, eventType: Enum_Publicconsultation_Eventtype, notify?: string | null, date: any, participation?: string | null, closure?: string | null, calendar?: Array<{ __typename?: 'ComponentEventEvent', id: string, title: Enum_Componenteventevent_Title, starts_in?: any | null, finish_in?: any | null, retification: boolean } | null> | null, documents?: Array<{ __typename?: 'ComponentArquivosArquivos', id: string, name: string, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } } | null> | null } | null } | null } | null };

export type GetConsultasPublicasQueryVariables = Exact<{
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type GetConsultasPublicasQuery = { __typename?: 'Query', publicConsultations?: { __typename?: 'PublicConsultationEntityResponseCollection', data: Array<{ __typename?: 'PublicConsultationEntity', id?: string | null, attributes?: { __typename?: 'PublicConsultation', title: string, notify?: string | null, eventType: Enum_Publicconsultation_Eventtype, date: any, calendar?: Array<{ __typename?: 'ComponentEventEvent', title: Enum_Componenteventevent_Title, starts_in?: any | null, finish_in?: any | null } | null> | null } | null }> } | null };

export type GetConteudoSetorQueryVariables = Exact<{
  limit: Scalars['Int'];
  start?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
}>;


export type GetConteudoSetorQuery = { __typename?: 'Query', departments?: { __typename?: 'DepartmentEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, pageCount: number, page: number, pageSize: number } }, data: Array<{ __typename?: 'DepartmentEntity', id?: string | null, attributes?: { __typename?: 'Department', type?: Enum_Department_Type | null, sections?: Array<{ __typename?: 'ComponentPerguntasERespostasPAndR', id: string, question: string, answers?: Array<{ __typename?: 'ComponentSectionsToContentSections', id: string, title: string, subtitle?: string | null, content: string, cover?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } | null } | null> | null, documents?: Array<{ __typename?: 'ComponentArquivosArquivos', name: string, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } } | null> | null } | null> | null } | null }> } | null };

export type GetFaQsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFaQsQuery = { __typename?: 'Query', faqs?: { __typename?: 'FaqEntityResponseCollection', data: Array<{ __typename?: 'FaqEntity', id?: string | null, attributes?: { __typename?: 'Faq', question?: string | null, answer: string, updatedAt?: any | null } | null }> } | null };

export type GetGruposEServicosQueryVariables = Exact<{
  limit: Scalars['Int'];
  start?: InputMaybe<Scalars['Int']>;
}>;


export type GetGruposEServicosQuery = { __typename?: 'Query', revenueGroups?: { __typename?: 'RevenueGroupEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, pageCount: number, page: number, pageSize: number } }, data: Array<{ __typename?: 'RevenueGroupEntity', id?: string | null, attributes?: { __typename?: 'RevenueGroup', title: string, revenue_services?: { __typename?: 'RevenueServiceRelationResponseCollection', data: Array<{ __typename?: 'RevenueServiceEntity', id?: string | null, attributes?: { __typename?: 'RevenueService', title: string, description?: string | null, cost: number } | null }> } | null } | null }> } | null };

export type GetLegislacoesQueryVariables = Exact<{
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type GetLegislacoesQuery = { __typename?: 'Query', resolutions?: { __typename?: 'LegislationEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, pageCount: number, page: number, pageSize: number } }, data: Array<{ __typename?: 'LegislationEntity', id?: string | null, attributes?: { __typename?: 'Legislation', title: string, menu: string, slug: string, type: Enum_Legislation_Type, publication_date: any, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } } | null }> } | null, laws?: { __typename?: 'LegislationEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, pageCount: number, page: number, pageSize: number } }, data: Array<{ __typename?: 'LegislationEntity', id?: string | null, attributes?: { __typename?: 'Legislation', title: string, menu: string, slug: string, type: Enum_Legislation_Type, publication_date: any, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } } | null }> } | null, decrees?: { __typename?: 'LegislationEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, pageCount: number, page: number, pageSize: number } }, data: Array<{ __typename?: 'LegislationEntity', id?: string | null, attributes?: { __typename?: 'Legislation', title: string, menu: string, slug: string, type: Enum_Legislation_Type, publication_date: any, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } } | null }> } | null };

export type GetLicitacoesFuturasQueryVariables = Exact<{
  data_atual: Scalars['DateTime'];
}>;


export type GetLicitacoesFuturasQuery = { __typename?: 'Query', licitacaos?: { __typename?: 'LicitacaoEntityResponseCollection', data: Array<{ __typename?: 'LicitacaoEntity', id?: string | null, attributes?: { __typename?: 'Licitacao', type?: Enum_Licitacao_Type | null, title: string, subtitle: string, date?: any | null, description: string, place: string, documents?: Array<{ __typename?: 'ComponentArquivosArquivos', id: string, name: string, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null> | null } | null }> } | null };

export type GetLinhasQueryVariables = Exact<{
  limit: Scalars['Int'];
  start: Scalars['Int'];
  query?: InputMaybe<Scalars['String']>;
}>;


export type GetLinhasQuery = { __typename?: 'Query', linhas?: { __typename?: 'LinhaEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, pageCount: number, page: number, pageSize: number } }, data: Array<{ __typename?: 'LinhaEntity', id?: string | null, attributes?: { __typename?: 'Linha', cdlinha?: number | null, nulinha?: string | null, deorigem?: string | null, dedestino?: string | null, dedescricao?: string | null, nupermissionarios?: number | null, boativo?: boolean | null } | null }> } | null };

export type GetNoticiasBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetNoticiasBySlugQuery = { __typename?: 'Query', noticias?: { __typename?: 'NoticiaEntityResponseCollection', data: Array<{ __typename?: 'NoticiaEntity', id?: string | null, attributes?: { __typename?: 'Noticia', slug: string, title: string, subtitle?: string | null, colorTitle?: Enum_Noticia_Colortitle | null, content: string, updatedAt?: any | null, publishedAt?: any | null, deadline?: any | null, cover?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } | null, Tags?: Array<{ __typename?: 'ComponentTagsTags', id: string, Tag: string } | null> | null, Sections?: Array<{ __typename?: 'ComponentSectionsToContentSections', id: string, title: string, subtitle?: string | null, content: string, cover?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } | null } | null> | null, gallery?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null }> } | null, Files?: Array<{ __typename?: 'ComponentArquivosArquivos', id: string, name: string, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } } | null> | null } | null }> } | null };

export type GetNoticiasDestaqueQueryVariables = Exact<{
  limit: Scalars['Int'];
  start?: InputMaybe<Scalars['Int']>;
}>;


export type GetNoticiasDestaqueQuery = { __typename?: 'Query', noticias?: { __typename?: 'NoticiaEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, pageCount: number, page: number, pageSize: number } }, data: Array<{ __typename?: 'NoticiaEntity', id?: string | null, attributes?: { __typename?: 'Noticia', slug: string, title: string, subtitle?: string | null, colorTitle?: Enum_Noticia_Colortitle | null, content: string, publishedAt?: any | null, PublishDate: any, deadline?: any | null, cover?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } | null, Tags?: Array<{ __typename?: 'ComponentTagsTags', id: string, Tag: string } | null> | null } | null }> } | null };

export type GetListaNoticiasQueryVariables = Exact<{
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type GetListaNoticiasQuery = { __typename?: 'Query', noticias?: { __typename?: 'NoticiaEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, pageCount: number, page: number, pageSize: number } }, data: Array<{ __typename?: 'NoticiaEntity', id?: string | null, attributes?: { __typename?: 'Noticia', slug: string, title: string, subtitle?: string | null, shortTitle?: string | null, publishedAt?: any | null, cover?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } | null, categorias?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string } | null }> } | null } | null }> } | null };

export type GetDestaquesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDestaquesQuery = { __typename?: 'Query', advertisements?: { __typename?: 'AdvertisementEntityResponseCollection', data: Array<{ __typename?: 'AdvertisementEntity', id?: string | null, attributes?: { __typename?: 'Advertisement', title: string, url?: string | null, startDate: any, endDate?: any | null, description: string, backgroundColor?: Enum_Advertisement_Backgroundcolor | null, cover?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } | null } | null }> } | null };

export type GetPesquisasDeSatisfacaoQueryVariables = Exact<{
  limit: Scalars['Int'];
  start?: InputMaybe<Scalars['Int']>;
}>;


export type GetPesquisasDeSatisfacaoQuery = { __typename?: 'Query', searchResults?: { __typename?: 'SearchResultEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, pageCount: number, page: number, pageSize: number } }, data: Array<{ __typename?: 'SearchResultEntity', id?: string | null, attributes?: { __typename?: 'SearchResult', title: string, date: any, document?: Array<{ __typename?: 'ComponentArquivosArquivos', id: string, name: string, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, url: string } | null } | null } } | null> | null } | null }> } | null };

export type GetStudentBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetStudentBySlugQuery = { __typename?: 'Query', studentIds?: { __typename?: 'StudentIdEntityResponseCollection', data: Array<{ __typename?: 'StudentIdEntity', id?: string | null, attributes?: { __typename?: 'StudentId', name: string, document: string, slug?: string | null, bio?: string | null, avatar?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } | null, resources?: Array<{ __typename?: 'ComponentStudentsStudentResources', id: string, endsAt: any, approved: boolean } | null> | null } | null }> } | null };

export type GetTarifasDeTransportesHidroviariosQueryVariables = Exact<{
  limit: Scalars['Int'];
  start?: InputMaybe<Scalars['Int']>;
}>;


export type GetTarifasDeTransportesHidroviariosQuery = { __typename?: 'Query', tarifasHidroviarioFerryBoat?: { __typename?: 'WaterwayTransportTariffEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, pageCount: number, page: number, pageSize: number } }, data: Array<{ __typename?: 'WaterwayTransportTariffEntity', id?: string | null, attributes?: { __typename?: 'WaterwayTransportTariff', entityType: Enum_Waterwaytransporttariff_Entitytype, files?: Array<{ __typename?: 'ComponentDocumentoVigenciaDocumentoVigencia', id: string, starts_in: any, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } } | null> | null } | null }> } | null, tarifasHidroviarioCatamara?: { __typename?: 'WaterwayTransportTariffEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, pageCount: number, page: number, pageSize: number } }, data: Array<{ __typename?: 'WaterwayTransportTariffEntity', id?: string | null, attributes?: { __typename?: 'WaterwayTransportTariff', entityType: Enum_Waterwaytransporttariff_Entitytype, files?: Array<{ __typename?: 'ComponentDocumentoVigenciaDocumentoVigencia', id: string, starts_in: any, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } } | null> | null } | null }> } | null, tarifasHidroviarioLanchas?: { __typename?: 'WaterwayTransportTariffEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, pageCount: number, page: number, pageSize: number } }, data: Array<{ __typename?: 'WaterwayTransportTariffEntity', id?: string | null, attributes?: { __typename?: 'WaterwayTransportTariff', entityType: Enum_Waterwaytransporttariff_Entitytype, files?: Array<{ __typename?: 'ComponentDocumentoVigenciaDocumentoVigencia', id: string, starts_in: any, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } } | null> | null } | null }> } | null };

export type GetTarifasDeTransportesRodoviariosQueryVariables = Exact<{
  limit: Scalars['Int'];
  start?: InputMaybe<Scalars['Int']>;
}>;


export type GetTarifasDeTransportesRodoviariosQuery = { __typename?: 'Query', tarifasRodoviarioIntermunicipal?: { __typename?: 'TransportFeeEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, pageCount: number, page: number, pageSize: number } }, data: Array<{ __typename?: 'TransportFeeEntity', id?: string | null, attributes?: { __typename?: 'TransportFee', name: string, entityType?: Enum_Transportfee_Entitytype | null, transportType?: Enum_Transportfee_Transporttype | null, files?: Array<{ __typename?: 'ComponentDocumentoVigenciaDocumentoVigencia', id: string, starts_in: any, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } } | null> | null } | null }> } | null, tarifasRodoviarioMetropolitano?: { __typename?: 'TransportFeeEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, pageCount: number, page: number, pageSize: number } }, data: Array<{ __typename?: 'TransportFeeEntity', id?: string | null, attributes?: { __typename?: 'TransportFee', name: string, entityType?: Enum_Transportfee_Entitytype | null, transportType?: Enum_Transportfee_Transporttype | null, files?: Array<{ __typename?: 'ComponentDocumentoVigenciaDocumentoVigencia', id: string, starts_in: any, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } } | null> | null } | null }> } | null, tarifasRodoviarioSemiurbano?: { __typename?: 'TransportFeeEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, pageCount: number, page: number, pageSize: number } }, data: Array<{ __typename?: 'TransportFeeEntity', id?: string | null, attributes?: { __typename?: 'TransportFee', name: string, entityType?: Enum_Transportfee_Entitytype | null, transportType?: Enum_Transportfee_Transporttype | null, files?: Array<{ __typename?: 'ComponentDocumentoVigenciaDocumentoVigencia', id: string, starts_in: any, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } } | null> | null } | null }> } | null, tarifasRodoviarioComplementar?: { __typename?: 'TransportFeeEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, pageCount: number, page: number, pageSize: number } }, data: Array<{ __typename?: 'TransportFeeEntity', id?: string | null, attributes?: { __typename?: 'TransportFee', name: string, entityType?: Enum_Transportfee_Entitytype | null, transportType?: Enum_Transportfee_Transporttype | null, files?: Array<{ __typename?: 'ComponentDocumentoVigenciaDocumentoVigencia', id: string, starts_in: any, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } } | null> | null } | null }> } | null };

export type GetTutEsQueryVariables = Exact<{
  limit: Scalars['Int'];
  start?: InputMaybe<Scalars['Int']>;
}>;


export type GetTutEsQuery = { __typename?: 'Query', tarifasTerminaisTUTE?: { __typename?: 'TerminalsUsageFeeEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, pageCount: number, page: number, pageSize: number } }, data: Array<{ __typename?: 'TerminalsUsageFeeEntity', id?: string | null, attributes?: { __typename?: 'TerminalsUsageFee', type?: Enum_Terminalsusagefee_Type | null, document?: Array<{ __typename?: 'ComponentDocumentoVigenciaDocumentoVigencia', id: string, starts_in: any, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } } | null> | null } | null }> } | null };

export type GetTarifasGasQueryVariables = Exact<{
  limit: Scalars['Int'];
  start?: InputMaybe<Scalars['Int']>;
}>;


export type GetTarifasGasQuery = { __typename?: 'Query', tarifasGas?: { __typename?: 'GasTariffEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, pageCount: number, page: number, pageSize: number } }, data: Array<{ __typename?: 'GasTariffEntity', id?: string | null, attributes?: { __typename?: 'GasTariff', name?: string | null, document?: Array<{ __typename?: 'ComponentDocumentoVigenciaDocumentoVigencia', id: string, starts_in: any, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } } | null> | null } | null }> } | null };

export type GetRodoviasPedagiadasQueryVariables = Exact<{
  limit: Scalars['Int'];
  start?: InputMaybe<Scalars['Int']>;
}>;


export type GetRodoviasPedagiadasQuery = { __typename?: 'Query', tarifasRodoviasPedagiadas?: { __typename?: 'TollRoadTariffEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, pageCount: number, page: number, pageSize: number } }, data: Array<{ __typename?: 'TollRoadTariffEntity', id?: string | null, attributes?: { __typename?: 'TollRoadTariff', name: string, document?: Array<{ __typename?: 'ComponentDocumentoVigenciaDocumentoVigencia', id: string, starts_in: any, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } } | null> | null } | null }> } | null };

export type GetTerminaisQueryVariables = Exact<{
  limit: Scalars['Int'];
  start?: InputMaybe<Scalars['Int']>;
}>;


export type GetTerminaisQuery = { __typename?: 'Query', rodoviario?: { __typename?: 'TerminalEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, pageCount: number, page: number, pageSize: number } }, data: Array<{ __typename?: 'TerminalEntity', id?: string | null, attributes?: { __typename?: 'Terminal', name: string, phone?: string | null, email?: string | null, type: Enum_Terminal_Type, active: boolean, document?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, url: string } | null } | null } | null } | null }> } | null, hidroviario?: { __typename?: 'TerminalEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, pageCount: number, page: number, pageSize: number } }, data: Array<{ __typename?: 'TerminalEntity', id?: string | null, attributes?: { __typename?: 'Terminal', name: string, phone?: string | null, email?: string | null, type: Enum_Terminal_Type, active: boolean, document?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, url: string } | null } | null } | null } | null }> } | null, aeroviario?: { __typename?: 'TerminalEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, pageCount: number, page: number, pageSize: number } }, data: Array<{ __typename?: 'TerminalEntity', id?: string | null, attributes?: { __typename?: 'Terminal', name: string, phone?: string | null, email?: string | null, type: Enum_Terminal_Type, active: boolean, document?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, url: string } | null } | null } | null } | null }> } | null };

export type GetTransportesHidroviariosQueryVariables = Exact<{
  limit: Scalars['Int'];
  start?: InputMaybe<Scalars['Int']>;
}>;


export type GetTransportesHidroviariosQuery = { __typename?: 'Query', ferryBoat?: { __typename?: 'WaterwayTransportEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, pageCount: number, page: number, pageSize: number } }, data: Array<{ __typename?: 'WaterwayTransportEntity', id?: string | null, attributes?: { __typename?: 'WaterwayTransport', name: string, phone?: string | null, email?: string | null, type?: Enum_Waterwaytransport_Type | null, address?: string | null, documents?: Array<{ __typename?: 'ComponentArquivosArquivos', id: string, name: string, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } } | null> | null } | null }> } | null, lanchas?: { __typename?: 'WaterwayTransportEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, pageCount: number, page: number, pageSize: number } }, data: Array<{ __typename?: 'WaterwayTransportEntity', id?: string | null, attributes?: { __typename?: 'WaterwayTransport', name: string, phone?: string | null, email?: string | null, type?: Enum_Waterwaytransport_Type | null, address?: string | null, documents?: Array<{ __typename?: 'ComponentArquivosArquivos', id: string, name: string, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } } | null> | null } | null }> } | null, catamara?: { __typename?: 'WaterwayTransportEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, pageCount: number, page: number, pageSize: number } }, data: Array<{ __typename?: 'WaterwayTransportEntity', id?: string | null, attributes?: { __typename?: 'WaterwayTransport', name: string, phone?: string | null, email?: string | null, type?: Enum_Waterwaytransport_Type | null, address?: string | null, documents?: Array<{ __typename?: 'ComponentArquivosArquivos', id: string, name: string, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null } } | null> | null } | null }> } | null };
