import { createEvent, createStore } from "effector";

export const changeLevel = createEvent<number>()

export const $level = createStore(1).on(changeLevel, (_, currentLevel) => currentLevel)