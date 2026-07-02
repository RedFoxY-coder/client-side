'use client'
import { $isOpen } from '@/stores/ModalStore'
import { useUnit } from 'effector-react'
import { FC } from 'react'
import Modal from './Modal'
const ModalWrapper: FC = ({}) => {
    const [isOpen] = useUnit([$isOpen])
    return <>{isOpen && <Modal />}</>
}

export default ModalWrapper
