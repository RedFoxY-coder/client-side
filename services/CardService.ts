import { NewAxios } from '@/api/axios'
import { ICard, TCreateCard } from '@/types/card.type'
import { queryOptions } from '@tanstack/react-query'
type TData = {
    id: string
    level: number
}
type TCreate = {
    cardData: TCreateCard
    stackId: string
}
export const CardService = {
    baseUrl: 'cards',
    getByLevel(data: TData) {
        return queryOptions({
            queryKey: ['cards', data.id, data.level],
            queryFn: () =>
                NewAxios.get<ICard[]>(`card/getByLevel/${data.id}`, {
                    params: { level: data.level },
                }).then((res) => {
                    return res.data
                }),
        })
    },
    createCard(data: TCreate) {
        console.log(data.cardData)
        return NewAxios.post<ICard>(`card/${data.stackId}`, data.cardData)
    },

    async deleteCard(id: number) {
        return await NewAxios.delete<ICard>(`card/${id}`).then((res) => {
            return res.data
        })
    },
}
