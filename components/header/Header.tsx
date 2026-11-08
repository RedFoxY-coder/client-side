'use client'
import { FC } from 'react'
import { headerData } from '@/data/header.data'
import clsx from 'clsx'
import { useUnit } from 'effector-react'
import {
  $level,
  changeLevel,
} from '@/stores/LevelStore'
const Header: FC = () => {
  const [level, setLevel] = useUnit([
    $level,
    changeLevel,
  ])

  return (
    <header className="mx-12 flex h-18 items-center rounded-lg bg-white pl-12 shadow-lg shadow-gray-300">
      {headerData.map((item) => (
        <div
          key={item.id}
          onClick={() =>
            setLevel(item.id)
          }
          className={clsx(
            'flex h-full cursor-pointer items-center rounded-md px-5 text-lg',
            {
              'bg-green-400':
                level === item.id,
            }
          )}>
          {item.name}
        </div>
      ))}
    </header>
  )
}

export default Header
