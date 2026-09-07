import {
  createEvent,
  createStore,
  sample,
} from 'effector'
import { TAction } from '@/types/card.type'

type TUpdatedStack = {
  id: number
  name: string
}

export const changeState =
  createEvent<boolean>()
export const $formState = createStore(
  false
).on(changeState, (_, state) => state)

export const changeAction =
  createEvent<TAction>()
export const $formAction =
  createStore<TAction>('CREATE')

sample({
  clock: changeAction,
  source: $formAction,
  fn: (_, NewAction) => {
    return NewAction
  },
  target: $formAction,
})

export const clearState = createEvent()
export const $oldStack =
  createStore<TUpdatedStack | null>(
    null
  ).on(
    clearState,
    (state) => (state = null)
  )
export const saveStack =
  createEvent<TUpdatedStack>()

sample({
  clock: saveStack,
  source: $oldStack,
  fn: (_, stackData) => {
    return stackData
  },
  target: $oldStack,
})
