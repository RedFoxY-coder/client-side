import { createEvent, createStore } from 'effector'

export const changeState = createEvent()

export const $isOpen = createStore(false).on(changeState, (state) => !state)
