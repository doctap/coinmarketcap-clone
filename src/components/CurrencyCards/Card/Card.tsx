import { COIN_ICON } from "@/components/CurrencyCards/data"
import { CoinProps } from "@/entities/coins"
import { ExtraProps } from "@/types"
import clsx from "clsx"
import { CgDollar } from "react-icons/cg";
import { Card, CardContent, CardDescription, CardFooter, CardParagraph, UpDownIndicator } from "@/shared";
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

      <CardFooter>
        <UpDownIndicator
          value={`${priceChangePercentageLastDay.toFixed(2)} %`}
          isUp={priceChangePercentageLastDay >= 0}
          mode="tick"
        />
      </CardFooter>
    </Card>
  )
}
