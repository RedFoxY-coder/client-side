'use client'
import { NextPage } from 'next'
import classes from './WelcomePage.module.scss'
import { changeState } from '@/stores/AuthorizationFormStore'
import { useUnit } from 'effector-react'
import Link from 'next/link'
interface Props {}

const WelcomePage: NextPage<
  Props
> = ({}) => {
  const [changeFormState] = useUnit([
    changeState,
  ])
  return (
    <div
      className={`absolute h-screen w-full ${classes.bg} bg-cover text-center`}>
      <div className="relative mt-80">
        <div className="animate-opacity">
          <h1 className="mb-10 text-9xl font-bold text-white">
            Memory Cards
          </h1>
          <div className="mb-2 text-2xl font-bold text-white">
            Изучайте новые слова с
            помощью карточек.
          </div>
          <div className="text-2xl font-bold text-white">
            Начни учить языки прямо
            сейчас
          </div>
        </div>
        <div className="m-auto mt-20 mb-16 h-1 w-1/2 rounded-full bg-gray-500"></div>
        <h2 className="animate-opacity text-5xl font-bold text-white">
          Добро пожаловать
        </h2>
        <div className="animate-buttonSlide mt-16 flex justify-center gap-32 text-xl font-bold">
          <Link
            className="w-64 cursor-pointer rounded-full bg-white p-4 hover:bg-gray-300"
            onClick={() =>
              changeFormState(
                'REGISTRATION'
              )
            }
            href="/login">
            Зарегистрироваться
          </Link>
          <Link
            className="hover:bg-mint-500 w-64 cursor-pointer rounded-full bg-green-400 p-4 hover:text-white"
            onClick={() =>
              changeFormState('LOGIN')
            }
            href="/login">
            Войти
          </Link>
        </div>
      </div>
    </div>
  )
}

export default WelcomePage
