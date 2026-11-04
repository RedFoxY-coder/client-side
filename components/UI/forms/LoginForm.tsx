'use client'
import {
  useForm,
  SubmitHandler,
} from 'react-hook-form'
import { TAuthForm } from '@/types/auth.types'
import { FC } from 'react'
import Image from 'next/image'
import googleIcon from '@/public/icons/googleIcon.png'
import { useUnit } from 'effector-react'
import { changeState } from '@/stores/AuthorizationFormStore'
import { loginEvent } from '@/stores/userStore'
const LoginForm: FC = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthForm>()
  const [changeFormState] = useUnit([
    changeState,
  ])
  const login = useUnit(loginEvent)
  const onSubmit: SubmitHandler<
    TAuthForm
  > = (data) => {
    if (data) {
      login(data)
    }
  }
  return (
    <div className="mt-16 p-4 text-center">
      <div className="mb-4 text-5xl font-bold">
        Вход
      </div>
      <div className="">
        Введите email и пароль для входа
        в аккаунт
      </div>
      <form
        className="m-auto mt-10 w-1/2 *:block *:w-full"
        onSubmit={handleSubmit(
          onSubmit
        )}>
        <label
          htmlFor="email"
          className="p-2 text-left font-semibold">
          Email
        </label>
        <input
          className="rounded-lg bg-gray-200/60 p-2 text-sm"
          id="email"
          type="text"
          placeholder="Email"
          {...register('email', {
            required: true,
          })}
        />
        <label
          htmlFor="password"
          className="mt-3 p-2 text-left font-semibold">
          Пароль
        </label>
        <input
          className="rounded-lg bg-gray-200/60 p-2 text-sm"
          id="password"
          type="text"
          placeholder="Пароль"
          {...register('password', {
            required: true,
          })}
        />
        <button className="mt-2 text-right text-sm hover:cursor-pointer hover:text-gray-500">
          Забыли пароль?
        </button>
        <input
          className="mt-8 rounded-lg bg-black p-3 text-center font-semibold text-white hover:cursor-pointer hover:bg-gray-700"
          type="submit"
          value={'Войти'}
        />
      </form>
      <button className="m-auto mt-2 flex w-1/2 items-center justify-center gap-5 rounded-lg border border-gray-200 p-3 text-center hover:cursor-pointer hover:bg-gray-100/50">
        <Image
          className="block"
          src={googleIcon}
          alt="icon"
          width={20}
          height={20}
        />
        <div>
          Войти с помощью Google
        </div>
      </button>
      <div className="mt-10">
        Нет аккаунта?
        <button
          className="px-2 font-semibold hover:cursor-pointer hover:text-blue-500"
          onClick={() =>
            changeFormState(
              'REGISTRATION'
            )
          }>
          Зарегистрирваться
        </button>
      </div>
    </div>
  )
}

export default LoginForm
