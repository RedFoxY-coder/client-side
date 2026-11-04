import { NewAxios } from '@/api/axios'
import { TAuthForm, TAuthResponse } from '@/types/auth.types'
import { AxiosResponse } from 'axios'

export const AuthService = {
  baseUrl: 'auth',
  registration(data: TAuthForm): Promise<AxiosResponse<TAuthResponse>> {
    const ResData =  NewAxios.post<TAuthResponse>('auth/registration', data)
    return ResData
  },
  login(data: TAuthForm): Promise<AxiosResponse<TAuthResponse>> {
    return NewAxios.post<TAuthResponse>('auth/login', data)
  },
}
