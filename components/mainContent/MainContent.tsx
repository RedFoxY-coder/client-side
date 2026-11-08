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
  const { data } = useGetByLevel(1)

  return (
    <div className="mx-16">
      <div className="mt-16 mb-4 grid grid-cols-5 gap-5">
        {data?.length === 0 && (
          <div className="p-5 pt-0 text-3xl font-bold">
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
          className="mb-10 font-bold text-green-600/50 hover:text-green-600/90"
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
