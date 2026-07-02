import { ISidebarItem } from '@/types/sidebarItem.type'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import clsx from 'clsx'
import { useDeleteStack } from '@/hooks/stacksHooks/useDeleteStack'
import menuIcon from '@/public/icons/menuIcon.png'
import Menu from '@/components/UI/modal/menu/Menu'
const SidebarItem: FC<ISidebarItem> = ({ id, name, current, setCurrent }) => {
    const deleteStack = useDeleteStack()
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <Link
                className={clsx(
                    'flex justify-between p-4 items-center rounded-full group m-2',
                    {
                        'bg-green-100/60': id === current,
                        'hover:bg-gray-100/50': id != current,
                    }
                )}
                href={`/stack/${id}`}
                onClick={() => setCurrent(id)}>
                <div className="font-bold pl-3">{name}</div>
                <button
                    className="float-end  hidden group-hover:block transition-all duration-300 hover:cursor-pointer opacity-60  hover:opacity-100 pl-3"
                    onClick={(e) => {
                        setIsOpen(true)
                        e.preventDefault()
                    }}>
                    <Image src={menuIcon} alt="loop" width={20} height={20} />
                </button>
            </Link>
            {isOpen && <Menu setIsOpen={setIsOpen} />}
        </div>
    )
}

export default SidebarItem
