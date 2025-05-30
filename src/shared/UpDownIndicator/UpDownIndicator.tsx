import { ExtraProps } from "@/types"
import clsx from "clsx"
import { IoMdArrowDropdown } from "react-icons/io"

type UpDownIndicatorMode = "default" | "tick"

export const UpDownIndicator = ({
  isUp,
  value,
  mode = "default",
}: ExtraProps & {
  isUp: boolean,
  value: string,
  mode?: UpDownIndicatorMode
}) => {

  if (mode === "tick") {
    return (
      <div className={'self-end text-14 flex gap-3 text-nowrap'}>
        {isUp
          ? <IoMdArrowDropdown size={18} className='text-green-300 rotate-180' />
          : <IoMdArrowDropdown size={18} className='text-red' />
        }
        {value}
      </div>
    )
  }

  return (
    <div className={clsx('mt-auto pb-3', isUp ? 'text-red' : 'text-green-300')}>
      {value}
    </div>
  )
}