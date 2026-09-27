import { AuthService } from '@/services/AuthService'
import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'

export function useRegistration() {
  const queryClient = useQueryClient()

  const registration = useMutation({
    mutationFn:
      AuthService.registration,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [AuthService.baseUrl],
      })
    },
  })
  return registration
}
