import { useQuery } from '@tanstack/react-query'
import { stackService } from '@/services/StackService'
import { $user } from '@/stores/userStore'
import { useUnit } from 'effector-react'
export function useGetStacks() {

const [user] = useUnit([$user])
  const { data, isPending } = useQuery({
    ...stackService.getStacks(user?.userId),
  })
  return { data, isPending }


}
