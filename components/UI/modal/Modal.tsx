'use client'
import { FC, useEffect, useRef } from 'react'
import classes from './Modal.module.scss'
import Image from 'next/image'
import closeIcon from '@/public/icons/close.png'
import closeIconRed from '@/public/icons/closeRed.png'
import { useUnit } from 'effector-react'
import { changeState } from '@/stores/ModalStore'
const Modal: FC<{ children?: React.ReactNode }> = ({ children }) => {
    const setIsOpen = useUnit(changeState)
    const ref = useRef(null)
    useEffect(() => {
        const clickOutSide = (e: MouseEvent) => {
            console.log(ref)
            if (ref.current && e.target === ref.current) setIsOpen()
        }
        addEventListener('click', clickOutSide)
        return () => removeEventListener('click', clickOutSide)
    }, [MouseEvent])
    useEffect(() => {
        const pressEsc = (e: KeyboardEvent) => {
            if (e.key == 'Escape') setIsOpen()
        }
        addEventListener('keydown', pressEsc)
        return () => removeEventListener('keydown', pressEsc)
    }, [KeyboardEvent])

    return (
        <div
            className={`absolute w-full h-screen bg-black z-10  ${classes.modal}`}
            ref={ref}>
            <div className="relative w-1/4 bg-white m-auto top-80 rounded-lg p-6">
                <button
                    className="relative left-[95%] p-1 cursor-pointer "
                    onClick={() => setIsOpen()}>
                    <Image
                        src={closeIconRed}
                        alt="close"
                        width={20}
                        height={20}
                        className="opacity-70 hover:opacity-100"
                    />
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal
