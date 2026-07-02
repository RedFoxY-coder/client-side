import { FC } from 'react'
import UserIconImg from '@/public/icons/UserIcon.png'
import Image from 'next/image'
const UserIcon: FC = ({}) => {
    return (
        <div className="pl-5 pt-3 h-18  bg-white ">
            <div className="flex items-center gap-5 ">
                <Image
                    src={UserIconImg}
                    alt="user icon"
                    width={40}
                    height={40}
                />
                <div className="text-xl font-bold">Foxy</div>
            </div>
            <div className="w-[95%] h-0.5 bg-gray-200 rounded-xl mt-4"></div>
        </div>
    )
}

export default UserIcon
