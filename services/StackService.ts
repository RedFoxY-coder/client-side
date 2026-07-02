import { NewAxios } from '@/api/axios'
import { IStack } from '@/types/stack.type'
import { queryOptions } from '@tanstack/react-query'

export const stackService = {
    baseUrl: 'stacks',
    getStacks() {
        return queryOptions({
            queryKey: ['stacks'],
            queryFn: () =>
                NewAxios.get<IStack[]>(`stack`).then((res) => {
                    return res.data
                }),
        })
    },
    deleteStack(id: number) {
        console.log(id)
        return NewAxios.delete<string>(`stack/${id}`).then((res) => {
            return res.data
        })
    },
}
