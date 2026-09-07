import { NewAxios } from '@/api/axios'
import {
  ICard,
  TCreateCard,
} from '@/types/card.type'
import { queryOptions } from '@tanstack/react-query'
type TData = {
  stackId: number
  level: number
}
type TCreate = {
  cardData: TCreateCard
  stackId: string
}
type TUpdate = {
  cardData: TCreateCard
  id: number
}
export const CardService = {
  baseUrl: 'cards',
  getByLevel(data: TData) {
    return queryOptions({
      queryKey: [
        'cards',
        data.stackId,
        data.level,
      ],
      queryFn: () =>
        NewAxios.get<ICard[]>(
          `card/getByLevel/${data.stackId}`,
          {
            params: {
              level: data.level,
            },
          }
        ).then((res) => {
          return res.data
        }),
    })
  },
  createCard(data: TCreate) {
    return NewAxios.post<ICard>(
      `card/${data.stackId}`,
      data.cardData
    )
  },

  async deleteCard(id: number) {
    return await NewAxios.delete<ICard>(
      `card/${id}`
    ).then((res) => {
      return res.data
    })
  },
  async updateCard(data: TUpdate) {
    console.log(data)
    return await NewAxios.patch<ICard>(
      `card/${data.id}`,
      data.cardData
    ).then((res) => {
      return res.data
    })
  },
  async changeLevel(data: TData) {
    console.log(data)
    return await NewAxios.patch<ICard>(
      `card/changeLevel/${data.stackId}`,
      { level: data.level }
    ).then((res) => {
      return res.data
    })
  },
}
