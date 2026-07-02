import { useQuery } from '@tanstack/react-query'
import { useGetStackId } from '../useGetStackId'
import { CardService } from '@/services/CardService'

export function useGetByLevel(level: number) {
    const stackId = useGetStackId()
    const resData = { id: stackId, level }
    const { data, isPending } = useQuery({ ...CardService.getByLevel(resData) })
    return { data, isPending }
}
