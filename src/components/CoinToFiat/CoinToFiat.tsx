'use client'

import { Popover, PopoverTrigger, PopoverContent } from "@/shared"
import { Skeleton } from "@/shared"
import { RiExpandUpDownLine } from "react-icons/ri"
import { CoinChartSearch } from "@/components"
import { CgDollar } from "react-icons/cg"
import { memo, useCallback, useState } from "react"
import { CoinProps } from "@/entities/coins"
import clsx from "clsx"
import { intFormatter } from "@/lib/utils"

export const CoinToFiat = memo(function CoinToFiat({
  isLoading,
  selectedCoinId,
  onChange,
  coins,
}: {
  isLoading: boolean,
  selectedCoinId: string,
  onChange: (value: string) => void
  coins?: CoinProps[]
}) {
  const [isOpen, setIsOpen] = useState(false)
  const selectedCoinData = coins?.find(({ id }) => id === selectedCoinId)

  const handleCoinSelect = useCallback((value: string) => {
    onChange(value)
    setIsOpen(prev => !prev)
  }, [onChange])

  if (isLoading) {
    return (
      <article>
        <Skeleton className='mb-16 w-200 h-42 rounded-sm' />
        <Skeleton className='w-200 h-42 rounded-sm' />
      </article>
    )
  }

  return (
    <article>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger className='flex justify-between items-center w-200 border-1 rounded-sm p-8'>
          {selectedCoinData?.name}
          <RiExpandUpDownLine size={20} />
        </PopoverTrigger>
        <PopoverContent className='w-200'>
          <CoinChartSearch value={selectedCoinId} onChange={handleCoinSelect} coins={coins} />
        </PopoverContent>
      </Popover>

      {!!selectedCoinData && (
        <div className='flex gap-16 mt-16'>
          <div className='flex items-center text-h4'>
            <CgDollar />
            {intFormatter({
              num: selectedCoinData.currentPrice,
              notation: 'standard',
              fixed: 2,
            })}
          </div>
          <div className={clsx(
            'mt-auto pb-3',
            selectedCoinData.priceChangePercentageLastDay < 0 ? 'text-red' : 'text-green-300',
          )}>
            {selectedCoinData.priceChangePercentageLastDay}
          </div>
        </div>
      )}
    </article>
  )
})
