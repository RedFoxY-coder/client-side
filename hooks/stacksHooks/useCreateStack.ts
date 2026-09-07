import { stackService } from '@/services/StackService'
import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'

export function useCreateStack() {
  const queryClient = useQueryClient()

  const createStack = useMutation({
    mutationFn:
      stackService.createStack,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [
          stackService.baseUrl,
        ],
      })
    },
  })

  return createStack
}
