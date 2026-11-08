'use client'
import { FC } from 'react'
import UserIcon from './UserIcon'
import SidebarContent from './sidebarContent/SidebarContent'
import CreateStackForm from '../UI/forms/CreateStackForm'
import {
  $formState,
  changeState,
} from '@/stores/StackFormStore'
import { useUnit } from 'effector-react'
import { useCheckAuth } from '@/hooks/authHooks/useCheckAuth'
const Sidebar: FC = ({}) => {
  useCheckAuth()
  const [isOpen, setIsOpen] = useUnit([
    $formState,
    changeState,
  ])
  return (
    <div className="absolute h-full w-1/8 shadow-lg shadow-gray-400">
      <div className="mx-4 rounded-xl bg-white">
        <UserIcon />
        <SidebarContent />
      </div>
    </div>
  )
}

export default Sidebar
