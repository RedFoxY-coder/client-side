import { FC } from 'react'
import { TCreateCard } from '@/types/card.type'
import {
  useForm,
  SubmitHandler,
} from 'react-hook-form'
import { useUnit } from 'effector-react'
import { useCreateCard } from '@/hooks/cardsHooks/useCreateCard'
import { useGetStackId } from '@/hooks/useGetStackId'
import clsx from 'clsx'
import {
  $action,
  $card,
  changeFormState,
  clearState,
} from '@/stores/cardStore'
import { useUpdateCard } from '@/hooks/cardsHooks/useUpdateCard'
import { $level } from '@/stores/LevelStore'

const CardForm: FC = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCreateCard>()

  const [
    setIsOpen,
    cardData,
    action,
    clearForm,
    level,
  ] = useUnit([
    changeFormState,
    $card,
    $action,
    clearState,
    $level,
  ])
  const createCard = useCreateCard()
  const updateCard = useUpdateCard()
  const stackId = useGetStackId()
  const onSubmit: SubmitHandler<
    TCreateCard
  > = (data) => {
    if (
      action === 'UPDATE' &&
      cardData
    ) {
      updateCard.mutate({
        cardData: data,
        id: cardData.id,
      })
      clearForm()
    } else {
      createCard.mutate({
        cardData: { ...data, level },
        stackId,
      })
    }
    setIsOpen(false)
  }
  return (
    <div className="w-2/5 rounded-xl border border-green-600 bg-white p-3 shadow-lg shadow-gray-300">
      <div className="ml-4 p-2 text-xl font-bold">
        Новая карточка
      </div>
      <form
        onSubmit={handleSubmit(
          onSubmit
        )}>
        <div className="flex justify-between">
          <input
            type="text"
            className={clsx(
              'ml-5 block rounded-md p-3 focus:outline-0',
              {
                'bg-red-200':
                  errors.titleEn,
              }
            )}
            placeholder="Слово"
            defaultValue={
              cardData?.titleEn
            }
            {...register('titleEn', {
              required: true,
            })}
          />

          <input
            type="text"
            className="ml-5 block rounded-md p-3 focus:outline-0"
            placeholder="Транскрипция"
            {...register(
              'transcription'
            )}
            defaultValue={
              cardData?.transcription
            }
          />
          <input
            type="text"
            className={clsx(
              'ml-5 block rounded-md p-3 focus:outline-0',
              {
                'bg-red-200':
                  errors.titleRu,
              }
            )}
            placeholder="Перевод"
            {...register('titleRu', {
              required: true,
            })}
            defaultValue={
              cardData?.titleRu
            }
          />
        </div>
        <div className="m-auto border-b border-green-800"></div>
        <div>
          <input
            type="text"
            className="ml-5 block w-100 rounded-md p-3 pb-1 focus:outline-0"
            placeholder="Пример"
            {...register('frontSide')}
            defaultValue={
              cardData?.frontSide
            }
          />
          <input
            type="text"
            className="ml-5 block w-100 rounded-md p-3 pt-1 focus:outline-0"
            placeholder="Перевод"
            {...register('backSide')}
            defaultValue={
              cardData?.backSide
            }
          />
        </div>

        <div className="mr-5 mb-3 flex justify-end gap-3">
          <button
            className={
              'rounded-md border border-gray-300 px-2 py-1 hover:bg-gray-100'
            }
            onClick={() =>
              setIsOpen(false)
            }>
            Отмена
          </button>
          <input
            type="submit"
            value={
              action === 'CREATE' ?
                'Создать'
              : 'Изменить'
            }
            className="block cursor-pointer rounded-md border bg-green-500/80 px-2 py-1 text-white hover:bg-green-600/80"
          />
        </div>
      </form>
    </div>
  )
}

export default CardForm
