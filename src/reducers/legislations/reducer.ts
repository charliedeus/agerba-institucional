import { useGetLegislacoesQuery } from '../../graphql/generated'
import { ActionTypes } from './actions'

/* eslint-disable no-unused-vars */
export interface LegislacaoProps {
  id: string
  attributes: {
    title: string
    menu: string
    slug: string
    type: string
    publication_date: Date

    file: {
      data: {
        id: string
        attributes: {
          name: string
          alternativeText: string
          url: string
        }
      }
    }
  }
}

interface LegislacoesPublicadasProps {
  resolutions: LegislacaoProps[]
  laws: LegislacaoProps[]
  decrees: LegislacaoProps[]
}

export function legislationsReducer(
  state: LegislacoesPublicadasProps,
  action: any,
) {
  switch (action.type) {
    case ActionTypes.ADD_RESOLUCAO:
      return {
        ...state,
        resolutions: [...state.resolutions, action.payload.legislation],
      }
    case ActionTypes.ADD_LEI:
      return {
        ...state,
        laws: [...state.laws, action.payload.legislation],
      }
    case ActionTypes.ADD_DECRETO:
      return {
        ...state,
        decrees: [...state.decrees, action.payload.legislation],
      }
    default:
      return state
  }
}
