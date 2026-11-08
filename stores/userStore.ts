import { AuthService } from "@/services/AuthService"
import { TAuthForm } from "@/types/auth.types"
import { TUser } from "@/types/user.type"
import { createEffect, createEvent, createStore, sample } from "effector"
import { useRouter } from 'next/navigation'
import { redirect } from 'next/navigation'
export const $user = createStore<TUser | null>(null)
export const $isAuthorized = createStore<boolean>(false)
const authEvent = createEvent<boolean>()
export const loginEvent = createEvent<TAuthForm>()
export const registrationEvent = createEvent<TAuthForm>()
export const checkAuthEvent = createEvent()
const loginFX = createEffect(async (data: TAuthForm) => {
    try{
        const res = await AuthService.login(data)
        localStorage.setItem('token', res.data.tokens.accessToken)
        authEvent(true)
        return res.data.user
    } catch {
        throw new Error('Failed')
    }
})
const registrationFX = createEffect(async (data: TAuthForm) => {
    try{
     
        const res = await AuthService.registration(data)
        localStorage.setItem('token', res.data.tokens.accessToken)
        authEvent(true)
        return res.data.user
    } catch {
        throw new Error('Failed')
    }
})
const checkAuthFX = createEffect(async () => {
    try{
        const res = await AuthService.checkAuth()
        localStorage.setItem('token', res.data.tokens.accessToken)
        authEvent(true)
        redirect('/stack/1')
        return res.data.user
    } catch {
        throw new Error('Failed')
    }
})

 sample({
        clock: loginEvent,
        target: loginFX,
    })

sample({
    clock: loginFX.doneData,
    target: $user
})

 sample({
        clock: registrationEvent,
        target: registrationFX,
    })

sample({
    clock: registrationFX.doneData,
    target: $user
})

sample({
    clock: authEvent,
    target: $isAuthorized
})
sample({
    clock: checkAuthEvent,
    target: checkAuthFX
})
sample({
    clock: checkAuthFX.doneData,
    target: $user
})


