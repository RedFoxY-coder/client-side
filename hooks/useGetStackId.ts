import { usePathname } from 'next/navigation'

export function useGetStackId() {
    const path = usePathname().split('/')
    const stackId = path[path.length - 1]
    return stackId
}
