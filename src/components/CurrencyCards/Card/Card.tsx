import { COIN_ICON } from "@/components/CurrencyCards/data"
import { CoinProps } from "@/entities/coins"
import { ExtraProps } from "@/types"
import clsx from "clsx"
import { IoMdArrowDropdown } from "react-icons/io";
import { CgDollar } from "react-icons/cg";
import { Card, CardContent, CardDescription, CardFooter, CardParagraph } from "@/shared";
import { intFormatter } from "@/lib/utils";

export function CurrencyCard({
  id,
  name,
  currentPrice,
  priceChangePercentageLastDay,
  className
}: CoinProps & ExtraProps) {
  return (
    <Card className={clsx('flex px-16 py-12 gap-8 justify-between bg-card rounded-md', className)}>
      <CardContent className='flex gap-24 items-center p-0'>
        <div className='col-span-1 row-span-2'>
          {COIN_ICON[id]}
        </div>

        <div>
          <CardDescription className='!text-14'>{name}</CardDescription>
          <CardParagraph className='!text-20-caption-bold flex items-center'>
            <span className='overflow-hidden w-[0.7em]'><CgDollar className='-translate-x-5' /></span>
            <span>
              {intFormatter({
                num: currentPrice,
                notation: 'standard',
                fixed: 2,
              })}
            </span>
          </CardParagraph>
        </div>
      </CardContent>

      <CardFooter className='self-end text-14 flex gap-3 text-nowrap'>
        {priceChangePercentageLastDay >= 0
          ? <IoMdArrowDropdown size={18} className='text-green-300 rotate-180' />
          : <IoMdArrowDropdown size={18} className='text-red' />
        }
        {`${priceChangePercentageLastDay.toFixed(2)} %`}
      </CardFooter>
    </Card>
  )
}
