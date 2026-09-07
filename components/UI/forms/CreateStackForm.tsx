'use client'
import { useUnit } from 'effector-react'
import { FC } from 'react'
import {
  useForm,
  SubmitHandler,
} from 'react-hook-form'
import {
  changeState,
  $formAction,
  $oldStack,
  clearState,
} from '@/stores/StackFormStore'
import { useCreateStack } from '@/hooks/stacksHooks/useCreateStack'
import { useUpdateStack } from '@/hooks/stacksHooks/useUpdateStack'
import { $level } from '@/stores/LevelStore'
const CreateStackForm: FC = ({}) => {
  const [
    setIsOpen,
    action,
    stack,
    removeOldStack,
  ] = useUnit([
    changeState,
    $formAction,
    $oldStack,
    clearState,
  ])
  const createStack = useCreateStack()
  const updateStack = useUpdateStack()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ name: string }>()
  const onSubmit: SubmitHandler<{
    name: string
  }> = (data) => {
    if (action === 'UPDATE' && stack) {
      updateStack.mutate({
        id: stack?.id,
        name: data.name,
      })
      removeOldStack()
    } else {
      createStack.mutate({
        name: data.name,
      })
    }

    setIsOpen(false)
  }
  return (
    <form
      className="mt-4 ml-4"
      onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Новая колода"
        defaultValue={stack?.name}
        {...register('name', {
          required: true,
        })}
        className="ml-5  p-2 rounded-md block focus:outline-0"
      />
      {errors.name && (
        <span className="text-sm text-left text-red-500 p-0">
          Заполните поле
        </span>
      )}
      <div className="w-5/6 border-b border-gray-400 m-auto"></div>
      <div className="flex justify-end items-center">
        <div className="flex gap-3 my-4 mr-5">
          <button
            onClick={() => {
              setIsOpen(false)
              removeOldStack()
            }}
            className={
              'py-1 px-2 border-gray-300 border rounded-md hover:bg-gray-100'
            }>
            Отмена
          </button>
          <input
            type="submit"
            value={
              action === 'CREATE' ?
                'Создать'
              : 'Сохранить'
            }
            className="block py-1 px-2 border rounded-md cursor-pointer hover:bg-green-600/80 bg-green-500/80 text-white"
          />
        </div>
      </div>
    </form>
  )
}

export default CreateStackForm
