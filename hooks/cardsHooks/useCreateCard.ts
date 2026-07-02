import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useGetStackId } from '../useGetStackId'
import { CardService } from '@/services/CardService'

export function useCreateCard() {
    const queryClient = useQueryClient()

    const createCard = useMutation({
        mutationFn: CardService.createCard,
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: [CardService.baseUrl] })
        },
    })
    return createCard
}
