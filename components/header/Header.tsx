'use client'
import { FC } from 'react'
import { headerData } from '@/data/header.data'
import clsx from 'clsx'
import { useUnit } from 'effector-react'
import { $level, changeLevel } from '@/stores/LevelStore'
import UserIcon from '../sidebar/UserIcon'
const Header: FC = () => {
    const [level, setLevel] = useUnit([$level, changeLevel])

    return (
        <header className="flex items-center pl-12 h-18 mx-12 bg-white rounded-lg shadow-lg shadow-gray-300">
            {headerData.map((item) => (
                <div
                    key={item.id}
                    onClick={() => setLevel(item.id)}
                    className={clsx(
                        'text-lg h-full items-center flex px-5 rounded-md cursor-pointer ',
                        {
                            'bg-green-400': level === item.id,
                        }
                    )}>
                    {item.name}
                </div>
            ))}
        </header>
    )
}

export default Header
