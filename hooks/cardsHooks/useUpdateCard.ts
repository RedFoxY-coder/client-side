import { CardService } from '@/services/CardService'
import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'

export function useUpdateCard() {
  const queryClient = useQueryClient()

  const updateCard = useMutation({
    mutationFn: CardService.updateCard,

    onSuccess: (cardData) => {
      const oldData =
        queryClient.getQueryData(
          CardService.getByLevel({
            stackId: cardData.StackId,
            level: cardData.level,
          }).queryKey
        )
      if (oldData) {
        queryClient.setQueryData(
          CardService.getByLevel({
            stackId: cardData.StackId,
            level: cardData.level,
          }).queryKey,
          oldData.map((item) =>
            item.id === cardData.id ?
              {
                ...item,
                titleRu:
                  cardData.titleRu,
                titleEn:
                  cardData.titleEn,
                frontSide:
                  cardData.frontSide,
                backSide:
                  cardData.backSide,
                transcription:
                  cardData.transcription,
              }
            : item
          )
        )
      }
    },

    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: [CardService.baseUrl],
      }),
  })

  return updateCard
}
