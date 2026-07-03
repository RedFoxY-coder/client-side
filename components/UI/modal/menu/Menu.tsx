import { FC } from 'react'
import { useEffect, useRef } from 'react'
import { Dispatch } from 'react'
import { SetStateAction } from 'react'
import closeIcon from '@/public/icons/close.png'
import Image from 'next/image'
import editIcon from '@/public/icons/edit.png'
const Menu: FC<{
    setIsOpen: Dispatch<SetStateAction<boolean>>
}> = ({ setIsOpen }) => {
    const ref: any = useRef(null)

    useEffect(() => {
        const clickOutSide = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target)) setIsOpen(false)
        }
        addEventListener('mousedown', clickOutSide)
        return () => removeEventListener('mousedown', clickOutSide)
    }, [MouseEvent])
    return (
        <div
            className=" relative left-[40%] -top-10 w-[60%] border border-gray-400  rounded-lg shadow-md bg-white p-4"
            ref={ref}>
            <div className="flex gap-1  items-center">
                <Image src={editIcon} alt="" width={20} height={20} />
                <div>Редактировать</div>
            </div>
            <div className=" h-px bg-gray-400 rounded-xl my-1.5"></div>
            <div className="flex gap-1.5 items-center ml-1">
                <Image src={closeIcon} alt="" width={12} height={12} />
                <div onClick={() => console.log('test')} className="p-1">
                    Удалить
                </div>
            </div>
        </div>
    )
}

export default Menu
