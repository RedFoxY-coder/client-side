'use client'
import {
  FC,
  SetStateAction,
  Dispatch,
} from 'react'
import closeIcon from '@/public/icons/closeRed.png'
import Image from 'next/image'
import editIcon from '@/public/icons/edit.png'
import { useDeleteStack } from '@/hooks/stacksHooks/useDeleteStack'
import {
  changeAction,
  changeState,
  saveStack,
} from '@/stores/StackFormStore'
import { useUnit } from 'effector-react'

interface IProps {
  id: number
  name: string
  setIsOpenMenu: Dispatch<
    SetStateAction<boolean>
  >
}
const SidebarItemMenu: FC<IProps> = ({
  id,
  name,
  setIsOpenMenu,
}) => {
  const [
    setIsOpen,
    setCangeAction,
    saveData,
  ] = useUnit([
    changeState,
    changeAction,
    saveStack,
  ])
  const deleteStack = useDeleteStack()
  const handleClick = () => {
    setCangeAction('UPDATE')
    saveData({ id, name })
    setIsOpenMenu(false)
    setIsOpen(true)
  }
  return (
    <div className="absolute left-[40%] -top-15 w-[60%] border border-gray-400  rounded-lg shadow-md bg-white p-4">
      <button
        className="flex gap-1 items-center cursor-pointer w-full hover:bg-gray-100 px-3 py-1 rounded-xl"
        onClick={() => handleClick()}>
        <Image
          src={editIcon}
          alt=""
          width={20}
          height={20}
        />
        <div>Изменить</div>
      </button>
      <div className="h-px bg-gray-400 rounded-xl my-1.5"></div>
      <button className="flex gap-1.5 ml-1 items-center  cursor-pointer w-full hover:bg-gray-100 px-3 rounded-xl">
        <Image
          src={closeIcon}
          alt=""
          width={12}
          height={12}
        />
        <div
          onClick={() =>
            deleteStack.mutate(id)
          }
          className="p-1">
          Удалить
        </div>
      </button>
    </div>
  )
}

export default SidebarItemMenu
