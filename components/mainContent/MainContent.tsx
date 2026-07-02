'use client'
import { useGetByLevel } from '@/hooks/cardsHooks/useGetByLevel'
import { $level } from '@/stores/LevelStore'
import { useUnit } from 'effector-react'
import { FC } from 'react'
import Card from './Card'
import Image from 'next/image'
import plusIcon from '@/public/icons/plus.png'
import { $isOpen, changeState } from '@/stores/ModalStore'
import { createPortal } from 'react-dom'
import Modal from '../UI/modal/Modal'
import CreateCardForm from '../UI/modal/forms/CreateCardForm'
const MainContent: FC = ({}) => {
    const [level, setIsOpen, isOpen] = useUnit([$level, changeState, $isOpen])
    const { data, isPending } = useGetByLevel(level)
    return (
        <div>
            <div className="  grid grid-cols-5 gap-5 mx-12 mt-16 mb-4 ">
                {data && data.map((item) => <Card data={item} key={item.id} />)}
            </div>
            <button
                className="text-green-600/50 font-bold ml-16 hover:text-green-600/90"
                onClick={(e) => {
                    setIsOpen()
                }}>
                Новая карточка
            </button>
            {isOpen &&
                createPortal(
                    <Modal>
                        <CreateCardForm />
                    </Modal>,
                    document.body
                )}
        </div>
    )
}

export default MainContent
