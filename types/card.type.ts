export interface ICard {
    id: number
    titleRu: string
    titleEn: string
    frontSide?: string
    backSide?: string
    StackId: string
    createdAt: Date
    updatedAt: Date
    transcription?: String
    level: 1 | 2 | 3 | 4 | 5
}

export type TCreateCard = Omit<
    ICard,
    'id' | 'StackId' | 'createdAt' | 'updatedAt' | 'level'
>
