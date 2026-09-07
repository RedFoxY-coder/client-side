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
const Sidebar: FC = ({}) => {
  const [isOpen, setIsOpen] = useUnit([
    $formState,
    changeState,
  ])
  return (
    <div className=" w-1/8 absolute  h-full shadow-lg shadow-gray-400">
      <div className="bg-white mx-4 rounded-xl ">
        <UserIcon />
        <SidebarContent />
      </div>
    </div>
  )
}

export default Sidebar
