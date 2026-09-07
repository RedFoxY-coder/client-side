'use client'
import { ICard } from '@/types/card.type'
import Image from 'next/image'
import {
  FC,
  useEffect,
  useState,
} from 'react'
import LoopIcon from '@/public/icons/LoopIcon.png'
import menuIcon from '@/public/icons/menuIcon.png'
import Menu from '@/components/UI/menu/Menu'
import CardMenu from './CardMenu'
import clsx from 'clsx'
import classes from './Card.module.scss'
const Card: FC<{
  data: ICard
  index: number
}> = ({ data, index }) => {
  const [isOpen, setIsOpenMenu] =
    useState(false)
  const [rotate, setRotate] =
    useState(false)
  const [isAnimation, setIsAnimation] =
    useState(false)
  useEffect(() => {
    setTimeout(
      () => setIsAnimation(true),
      index * 200
    )
  }, [])
  return (
    <div
      className={`rounded-lg p-4 group bg-white h-28 ${isAnimation && classes.card} ${!isAnimation && 'hidden'}`}>
      {!isOpen && (
        <div className=" justify-end inline items-center">
          <button
            className="float-end  hidden group-hover:block transition-all duration-300 hover:cursor-pointer opacity-60  hover:opacity-100 pl-3"
            onClick={() =>
              setIsOpenMenu(true)
            }>
            <Image
              src={menuIcon}
              alt="loop"
              width={15}
              height={15}
            />
          </button>
          <button
            className="float-end  hidden group-hover:block transition-all duration-1000 hover:cursor-pointer hover:rotate-180"
            onClick={() =>
              setRotate(!rotate)
            }>
            <Image
              src={LoopIcon}
              alt="loop"
              width={16}
              height={16}
            />
          </button>
        </div>
      )}
      {isOpen && (
        <Menu setIsOpen={setIsOpenMenu}>
          <CardMenu
            data={data}
            setIsOpenMenu={
              setIsOpenMenu
            }
          />
        </Menu>
      )}

      <div className="relative">
        <div
          className={clsx(
            'absolute backface-hidden ease-in-out transition-all duration-[2s]',
            { 'rotate-y-180': rotate }
          )}>
          <div className="font-bold truncate text-lg">
            {data.titleEn}
          </div>
          <div className="text-sm text-gray-400 truncate">
            {data.transcription &&
              `[${data.transcription}]`}
          </div>
          <div className=" mt-2 text-gray-500 truncate">
            {data.frontSide}
          </div>
        </div>

        <div
          className={clsx(
            'absolute backface-hidden ease-in-out transition-all duration-[2s] ',
            {
              'rotate-y-0': rotate,
              '-rotate-y-180': !rotate,
            }
          )}>
          <div className="font-bold truncate text-lg">
            {data.titleRu}
          </div>
          <div className=" mt-2 text-gray-500 truncate">
            {data.backSide}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
