import { ICard } from '@/types/card.type'
import {
  createEvent,
  createStore,
  sample,
} from 'effector'
import { TAction } from '@/types/card.type'

export const clearState = createEvent()
export const $card =
  createStore<ICard | null>(null).on(
    clearState,
    (state) => (state = null)
  )
export const saveCardData =
  createEvent<ICard>()

sample({
  clock: saveCardData,
  source: $card,
  fn: (_, cardData) => {
    return cardData
  },
  target: $card,
})

export const changeAction =
  createEvent<TAction>()
export const $action =
  createStore<TAction>('CREATE')

sample({
  clock: changeAction,
  source: $action,
  fn: (_, NewAction) => {
    return NewAction
  },
  target: $action,
})

export const changeFormState =
  createEvent<boolean>()

export const $isOpenForm = createStore(
  false
).on(
  changeFormState,
  (_, state) => state
)
