import {
  FC,
  Dispatch,
  SetStateAction,
} from 'react'
import editIcon from '@/public/icons/edit.png'
import deleteIcon from '@/public/icons/closeRed.png'
import upArrow from '@/public/icons/upArrow.png'
import downArrow from '@/public/icons/downArrow.png'
import Image from 'next/image'
import { useDeleteCard } from '@/hooks/cardsHooks/useDeleteCard'
import { useUnit } from 'effector-react'
import {
  changeAction,
  changeFormState,
  saveCardData,
} from '@/stores/cardStore'
import { ICard } from '@/types/card.type'
import { useChangeLevel } from '@/hooks/cardsHooks/useChangeLevel'

type TProps = {
  data: ICard
  setIsOpenMenu: Dispatch<
    SetStateAction<boolean>
  >
}
const CardMenu: FC<TProps> = ({
  data,
  setIsOpenMenu,
}) => {
  const [
    saveCard,
    setIsOpen,
    setAction,
  ] = useUnit([
    saveCardData,
    changeFormState,
    changeAction,
  ])
  const deleteCard = useDeleteCard()
  const changeLevel = useChangeLevel()

  const levelUp = () => {
    if (data.level < 5)
      changeLevel.mutate({
        stackId: data.id,
        level: data.level + 1,
      })
  }
  const levelDown = () => {
    if (data.level > 1)
      changeLevel.mutate({
        stackId: data.id,
        level: data.level - 1,
      })
  }

  return (
    <div className="absolute left-[40%] w-[60%] border border-gray-400 rounded-lg shadow-md bg-white p-4 z-10">
      {data.level != 5 && (
        <>
          <button
            className="flex gap-1 items-center cursor-pointer w-full hover:bg-gray-100 px-3 py-1 rounded-xl"
            onClick={() => levelUp()}>
            <Image
              src={upArrow}
              alt=""
              width={20}
              height={20}
            />
            <div>Повысить</div>
          </button>
          <div className="h-px bg-gray-400 rounded-xl my-1.5"></div>
        </>
      )}
      {data.level != 1 && (
        <>
          <button
            className="flex gap-1 items-center cursor-pointer w-full hover:bg-gray-100 px-3 py-1 rounded-xl"
            onClick={() => levelDown()}>
            <Image
              src={downArrow}
              alt=""
              width={20}
              height={20}
            />
            <div>Понизить</div>
          </button>
          <div className="h-px bg-gray-400 rounded-xl my-1.5"></div>
        </>
      )}

      <button
        className="flex gap-1 items-center cursor-pointer w-full hover:bg-gray-100 px-3 py-1 rounded-xl"
        onClick={() => {
          saveCard(data)
          setAction('UPDATE')
          setIsOpen(true)
          setIsOpenMenu(false)
        }}>
        <Image
          src={editIcon}
          alt=""
          width={20}
          height={20}
        />
        <div>Изменить</div>
      </button>
      <div className="h-px bg-gray-400 rounded-xl my-1.5"></div>
      <button
        className="flex gap-1.5 ml-1 items-center  cursor-pointer w-full hover:bg-gray-100 px-3 rounded-xl"
        onClick={() =>
          deleteCard.mutate(data.id)
        }>
        <Image
          src={deleteIcon}
          alt=""
          width={12}
          height={12}
        />
        <div className="p-1">
          Удалить
        </div>
      </button>
    </div>
  )
}

export default CardMenu
