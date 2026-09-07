'use client'
import { NextPage } from 'next'
import classes from './LoginPage.module.scss'
import LoginForm from '../UI/forms/LoginForm'
import RegistrationForm from '../UI/forms/RegistrationForm'
import { useUnit } from 'effector-react'
import { $authorizationFormState } from '@/stores/AuthorizationFormStore'
import clsx from 'clsx'
interface Props {}

const LoginPage: NextPage<
  Props
> = ({}) => {
  const [formState] = useUnit([
    $authorizationFormState,
  ])
  return (
    <div
      className={`h-screen w-full ${classes.bg} bg-cover`}>
      <div
        className={`absolute top-1/8 left-1/8 flex h-3/4 w-3/4 rounded-xl bg-white ${classes.bgModal} shadow-y-10 flex justify-between bg-cover shadow-lg shadow-gray-600`}>
        <div
          className={clsx(
            `z-10 h-full w-2/5 rounded-xl bg-white transition-all duration-[2s] ease-in-out backface-hidden`,
            {
              'rotate-y-0':
                formState === 'LOGIN',
              '-rotate-y-180':
                formState ===
                'REGISTRATION',
            }
          )}>
          <LoginForm />
        </div>

        <div
          className={clsx(
            `z-10 h-full w-2/5 rounded-xl bg-white transition-all duration-[2s] ease-in-out backface-hidden`,
            {
              'rotate-y-180':
                formState === 'LOGIN',
            }
          )}>
          <RegistrationForm />
        </div>
      </div>
    </div>
  )
}

export default LoginPage
