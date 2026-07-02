'use client'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TCreateCard } from '@/types/card.type'
import { useUnit } from 'effector-react'
import { useCreateCard } from '@/hooks/cardsHooks/useCreateCard'
import { useGetStackId } from '@/hooks/useGetStackId'
import { changeState } from '@/stores/ModalStore'
import clsx from 'clsx'
const CreateCardForm: FC = ({}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TCreateCard>()
    const [setIsOpen] = useUnit([changeState])
    const createCard = useCreateCard()
    const stackId = useGetStackId()
    const onSubmit: SubmitHandler<TCreateCard> = (data) => {
        createCard.mutate({
            cardData: data,
            stackId,
        })
        setIsOpen()
    }
    return (
        <div>
            <div className="text-center text-lg font-bold mb-3">
                Новая карточка
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className={clsx(
                        'mt-2 p-2 rounded-md block outline-green-200  w-[90%] mx-auto',
                        { 'outline-red-400': errors.titleEn }
                    )}
                    type="text"
                    {...register('titleEn', { required: true })}
                    placeholder="Слово"
                />

                <input
                    type="text"
                    {...register('titleRu', { required: true })}
                    placeholder="Перевод"
                    className={clsx(
                        'mt-2  p-2 rounded-md block outline-green-200  w-[90%] mx-auto',
                        { 'outline-red-400': errors.titleRu }
                    )}
                />

                <input
                    type="text"
                    {...register('transcription')}
                    placeholder="Транскрипция"
                    className="mt-2 p-2 rounded-md block outline-green-200 w-[90%] mx-auto "
                />

                <input
                    type="text"
                    {...register('frontSide')}
                    placeholder="Пример"
                    className="mt-2  p-2 rounded-md block outline-green-200  w-[90%] mx-auto"
                />

                <input
                    type="text"
                    {...register('backSide')}
                    placeholder="Перевод примера"
                    className="mt-2  p-2 rounded-md block outline-green-200  w-[90%] mx-auto"
                />
                <div className="text-center">
                    <input
                        type="submit"
                        defaultValue={'Создать'}
                        className="p-2  border rounded-md w-[90%] mt-5  hover:bg-green-600 hover:border-gree hover:text-white"
                    />
                </div>
            </form>
        </div>
    )
}

export default CreateCardForm
