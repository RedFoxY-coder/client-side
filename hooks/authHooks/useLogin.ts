import { AuthService } from '@/services/AuthService'
import { useRouter } from 'next/navigation'
import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'

export function useLogin() {
  const queryClient = useQueryClient()
  const router = useRouter()

  const login = useMutation({
    mutationFn: AuthService.login,
    onSuccess: () => {
      router.push('/stack/1')
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [AuthService.baseUrl],
      })
    },
  })
  return login
}
