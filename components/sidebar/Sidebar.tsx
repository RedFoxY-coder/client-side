import { FC } from 'react'
import UserIcon from './UserIcon'
import SidebarContent from './sidebarContent/SidebarContent'

const Sidebar: FC = ({}) => {
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
