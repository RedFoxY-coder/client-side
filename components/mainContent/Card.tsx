'use client'
import { ICard } from '@/types/card.type'
import Image from 'next/image'
import { FC, useState } from 'react'
import clsx from 'clsx'
import LoopIcon from '@/public/icons/LoopIcon.png'
import closeIcon from '@/public/icons/closeRed.png'
import { useDeleteCard } from '@/hooks/cardsHooks/useDeleteCard'
const Card: FC<{ data: ICard }> = ({ data }) => {
    const [isEn, setIsEn] = useState(true)
    const deleteCard = useDeleteCard()
    return (
        <div className=" rounded-lg p-4 group bg-white h-28">
            <div className=" justify-end inline items-center">
                <button
                    className="float-end  hidden group-hover:block transition-all duration-300 hover:cursor-pointer opacity-60  hover:opacity-100 pl-3"
                    onClick={() => deleteCard.mutate(data.id)}>
                    <Image src={closeIcon} alt="loop" width={15} height={15} />
                </button>
                <button
                    className="float-end  hidden group-hover:block transition-all duration-1000 hover:cursor-pointer hover:rotate-180"
                    onClick={() => setIsEn(!isEn)}>
                    <Image src={LoopIcon} alt="loop" width={16} height={16} />
                </button>
            </div>

            <div className="font-bold text-xl">
                {isEn ? data.titleEn : data.titleRu}
            </div>
            {data.transcription && isEn && (
                <div className="text-sm text-gray-400">
                    [{data.transcription}]
                </div>
            )}
            <div className="mt-2 text-lg text-gray-500 truncate">
                {isEn ? data.frontSide : data.backSide}
            </div>
        </div>
    )
}

export default Card
