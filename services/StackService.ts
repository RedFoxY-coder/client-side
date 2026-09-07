import { NewAxios } from '@/api/axios'
import { IStack } from '@/types/stack.type'
import { queryOptions } from '@tanstack/react-query'

type TCreateStack = {
  name: string
}
type TUpdateStack = {
  name: string
  id: number
}
export const stackService = {
  baseUrl: 'stacks',
  async createStack(
    data: TCreateStack
  ) {
    return await NewAxios.post<IStack>(
      'stack',
      data
    ).then((res) => {
      return res.data
    })
  },
  getStacks() {
    return queryOptions({
      queryKey: ['stacks'],
      queryFn: () =>
        NewAxios.get<IStack[]>(
          `stack`
        ).then((res) => {
          return res.data
        }),
    })
  },
  async deleteStack(id: number) {
    return NewAxios.delete<string>(
      `stack/${id}`
    ).then((res) => {
      return res.data
    })
  },
  async updateStack(
    data: TUpdateStack
  ) {
    return NewAxios.patch<TUpdateStack>(
      `stack/${data.id}`,
      { name: data.name }
    ).then((res) => {
      return res.data
    })
  },
}
