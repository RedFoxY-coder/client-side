import { CardService } from '@/services/CardService'
import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'

export function useDeleteCard() {
  const queryClient = useQueryClient()

  const deleteCard = useMutation({
    mutationFn: CardService.deleteCard,
    onSuccess: (cardData) => {
      const oldData =
        queryClient.getQueryData(
          CardService.getByLevel({
            stackId: cardData.StackId,
            level: cardData.level,
          }).queryKey
        )
      console.log(oldData)
      if (oldData) {
        queryClient.setQueryData(
          CardService.getByLevel({
            stackId: cardData.StackId,
            level: cardData.level,
          }).queryKey,
          oldData.filter(
            (item) =>
              item.id != +cardData.id
          )
        )
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [CardService.baseUrl],
      })
    },
  })
  return deleteCard
}
