import { COIN_ICON } from "@/components/CurrencyCards/data"
import { CoinProps } from "@/entities/crypto-currencies"
import { ExtraProps } from "@/types"
import clsx from "clsx"
import { IoMdArrowDropdown } from "react-icons/io";
import { CgDollar } from "react-icons/cg";

export default function Card({
  id,
  name,
  currentPrice,
  priceChangePercentageLastDay,
  className
}: CoinProps & ExtraProps) {
  return (
    <article className={clsx('flex px-16 py-12 gap-24 justify-between bg-card rounded-md', className)}>
      <div className='flex gap-24 items-center'>
        <div className='col-span-1 row-span-2'>
          {COIN_ICON[id]}
        </div>

        <div>
          <h3 className='text-14'>{name}</h3>
          <p className='text-20-caption-bold flex items-center'>
            <span className='overflow-hidden w-[0.7em]'><CgDollar className='-translate-x-5' /></span>
            <span>{currentPrice}</span>
          </p>
        </div>
      </div>

      <div className='self-end text-14 flex gap-3'>
        {priceChangePercentageLastDay >= 0
          ? <IoMdArrowDropdown size={18} className='text-bright-green rotate-180' />
          : <IoMdArrowDropdown size={18} className='text-red' />
        }
        {`${priceChangePercentageLastDay.toFixed(2)} %`}
      </div>
    </article>
  )
}
