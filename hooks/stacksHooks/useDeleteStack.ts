import { stackService } from '@/services/StackService'
import { useMutation } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'
export function useDeleteStack() {
    const queryClient = useQueryClient()
    const deleteStack = useMutation({
        mutationFn: stackService.deleteStack,
        onSuccess: (id) => {
            const oldData = queryClient.getQueryData(
                stackService.getStacks().queryKey
            )
            console.log(oldData)
            console.log(id)
            if (oldData) {
                queryClient.setQueryData(
                    stackService.getStacks().queryKey,
                    oldData.filter((item) => item.id != +id)
                )
            }
        },
        // onSettled: () => {
        //     queryClient.invalidateQueries({ queryKey: [stackService.baseUrl] })
        // },
    })
    return deleteStack
}
