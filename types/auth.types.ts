import { TUser } from "./user.type"

export type TAuthForm = {
  email: string
  password: string
}

type TTokens = {
  refreshToken: string
  accessToken: string
}

export type TAuthResponse = {
  tokens: TTokens
  user: TUser
}