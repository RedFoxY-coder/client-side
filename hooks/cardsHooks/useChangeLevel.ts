import { CardService } from '@/services/CardService'
import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'

export function useChangeLevel() {
  const queryClient = useQueryClient()

  const changeLevel = useMutation({
    mutationFn: CardService.changeLevel,

    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: [CardService.baseUrl],
      }),
  })

  return changeLevel
}
