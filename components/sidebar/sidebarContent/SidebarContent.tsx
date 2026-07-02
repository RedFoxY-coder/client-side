'use client'
import { FC, useState } from 'react'
import SidebarItem from './SidebarItem'
import { useGetStacks } from '@/hooks/stacksHooks/useGetStacks'
const sidebarContent: FC = ({}) => {
    const [current, setCurrent] = useState(1)
    const { data, isPending } = useGetStacks()
    return (
        <div className="mt-8">
            <div>
                {data &&
                    data.map((item) => (
                        <SidebarItem
                            key={item.id}
                            setCurrent={setCurrent}
                            current={current}
                            id={item.id}
                            name={item.name}
                        />
                    ))}
            </div>
        </div>
    )
}

export default sidebarContent
