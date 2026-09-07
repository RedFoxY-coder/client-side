import { FC } from 'react'
import {
  useEffect,
  useRef,
} from 'react'
import { Dispatch } from 'react'
import { SetStateAction } from 'react'
interface IMenu {
  setIsOpen: Dispatch<
    SetStateAction<boolean>
  >
  children: React.ReactNode
}
const Menu: FC<IMenu> = ({
  setIsOpen,
  children,
}) => {
  const ref: any = useRef(null)
  useEffect(() => {
    const clickOutSide = (
      e: MouseEvent
    ) => {
      if (
        ref.current &&
        !ref.current.contains(e.target)
      )
        setIsOpen(false)
    }
    addEventListener(
      'mousedown',
      clickOutSide
    )
    return () =>
      removeEventListener(
        'mousedown',
        clickOutSide
      )
  }, [MouseEvent])
  return (
    <div ref={ref} className="relative">
      {children}
    </div>
  )
}

export default Menu
