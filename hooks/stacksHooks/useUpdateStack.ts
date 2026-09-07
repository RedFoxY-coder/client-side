import { stackService } from '@/services/StackService'
import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'

export function useUpdateStack() {
  const queryClient = useQueryClient()
  const updateStack = useMutation({
    mutationFn:
      stackService.updateStack,
    onSuccess: (data) => {
      const oldData =
        queryClient.getQueryData(
          stackService.getStacks()
            .queryKey
        )
      if (oldData) {
        queryClient.setQueryData(
          stackService.getStacks()
            .queryKey,
          oldData.map((item) =>
            item.id === data.id ?
              {
                ...item,
                name: data.name,
              }
            : item
          )
        )
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [
          stackService.baseUrl,
        ],
      })
    },
  })
  return updateStack
}
