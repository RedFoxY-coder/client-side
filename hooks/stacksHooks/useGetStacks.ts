import { useQuery } from '@tanstack/react-query'
import { stackService } from '@/services/StackService'
export function useGetStacks() {
    const { data, isPending } = useQuery({ ...stackService.getStacks() })
    return { data, isPending }
}
