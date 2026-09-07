export interface ICard {
  id: number
  titleRu: string
  titleEn: string
  frontSide?: string
  backSide?: string
  StackId: number
  createdAt: Date
  updatedAt: Date
  transcription?: string
  level: number
}

export type TCreateCard = Omit<
  ICard,
  | 'id'
  | 'StackId'
  | 'createdAt'
  | 'updatedAt'
>

export type TUpdateCard = Omit<
  ICard,
  | 'StackId'
  | 'createdAt'
  | 'updatedAt'
  | 'level'
>

export type TAction =
  'CREATE' | 'UPDATE'
