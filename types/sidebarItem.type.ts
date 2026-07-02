import { Dispatch } from "react"
import { SetStateAction } from "react"
export interface ISidebarItem {
    name: string
    id: number
    current: number
    setCurrent: Dispatch<SetStateAction<number>>
}