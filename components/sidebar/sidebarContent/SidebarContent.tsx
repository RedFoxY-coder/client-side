'use client'
import { FC, useState } from 'react'
import SidebarItem from './SidebarItem'
import { useGetStacks } from '@/hooks/stacksHooks/useGetStacks'

import {
  $formState,
  changeAction,
  changeState,
} from '@/stores/StackFormStore'
import { useUnit } from 'effector-react'
import CreateStackForm from '@/components/UI/forms/CreateStackForm'
import { $user } from '@/stores/userStore'
const sidebarContent: FC = ({}) => {
  const [current, setCurrent] =
    useState(1)
  const [
    isOpen,
    setIsOpen,
    setAction,
    user,
  ] = useUnit([
    $formState,
    changeState,
    changeAction,
    $user,
  ])

  const { data } = useGetStacks()

  return (
    <div className="mt-8">
      <div>
        {data &&
          data.map((item) => (
            <SidebarItem
              key={item.id}
              setCurrent={setCurrent}
              current={current}
              id={item.id}
              name={item.name}
            />
          ))}
      </div>
      <div>
        {!isOpen && (
          <button
            onClick={() => {
              setAction('CREATE')
              setIsOpen(true)
            }}
            className="mt-2 ml-5 text-sm font-bold text-green-600/50 hover:text-green-600/90">
            Новая колода
          </button>
        )}
        {isOpen && <CreateStackForm />}
      </div>
    </div>
  )
}

export default sidebarContent
