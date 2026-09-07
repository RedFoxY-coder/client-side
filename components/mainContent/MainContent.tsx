'use client'
import { useGetByLevel } from '@/hooks/cardsHooks/useGetByLevel'
import { $level } from '@/stores/LevelStore'
import { useUnit } from 'effector-react'
import { FC } from 'react'
import Card from './card/Card'
import CardForm from '../UI/forms/CardForm'
import {
  $isOpenForm,
  changeAction,
  changeFormState,
} from '@/stores/cardStore'
const MainContent: FC = ({}) => {
  const [
    level,
    setIsOpen,
    isOpen,
    setAction,
  ] = useUnit([
    $level,
    changeFormState,
    $isOpenForm,
    changeAction,
  ])
  const { data } = useGetByLevel(level)

  return (
    <div className="mx-16">
      <div className="grid grid-cols-5 gap-5  mt-16 mb-4 ">
        {data?.length === 0 && (
          <div className="text-3xl font-bold p-5 pt-0">
            Колода пуста
          </div>
        )}
        {data &&
          data.map((item, index) => (
            <Card
              data={item}
              key={item.id}
              index={index}
            />
          ))}
      </div>
      {!isOpen && (
        <button
          className="text-green-600/50 font-bold  hover:text-green-600/90 mb-10"
          onClick={(e) => {
            setAction('CREATE')
            setIsOpen(true)
          }}>
          Новая карточка
        </button>
      )}

      {isOpen && <CardForm />}
    </div>
  )
}

export default MainContent
