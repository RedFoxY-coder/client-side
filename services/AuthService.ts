import { NewAxios } from '@/api/axios'
import { TAuth } from '@/types/login.type'

export const AuthService = {
  baseUrl: 'auth',
  registration(data: TAuth) {
    return NewAxios.post<{
      token: string
    }>('auth/registration', data)
  },
  login(data: TAuth) {
    return NewAxios.post<{
      token: string
    }>('auth/login', data)
  },
}
