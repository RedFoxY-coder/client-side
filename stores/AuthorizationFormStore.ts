import { createEvent, createStore } from "effector"

export type TAuthorizationFormState = 'LOGIN' | 'REGISTRATION'

export const changeState = createEvent<TAuthorizationFormState>()

export const $authorizationFormState = createStore<TAuthorizationFormState>('LOGIN').on(changeState, (_, state) => state  )


