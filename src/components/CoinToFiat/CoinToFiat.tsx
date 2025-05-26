'use client'

import { Popover, PopoverTrigger, PopoverContent } from "../Popover/Popover"
import Skeleton from "../Skeleton/Skeleton"
import { RiExpandUpDownLine } from "react-icons/ri"
import CoinChartSearch from "../CoinChartSearch/CoinChartSearch"
import { CgDollar } from "react-icons/cg"
import { memo, useCallback, useState } from "react"
import { CoinProps } from "@/entities/crypto-currencies"
import clsx from "clsx"

const CoinToFiat = memo(function CoinToFiat({
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
            {selectedCoinData.currentPrice}
          </div>
          <div className={clsx(
            'mt-auto pb-3',
            selectedCoinData.priceChangePercentageLastDay < 0 ? 'text-red' : 'text-bright-green'
          )}>
            {selectedCoinData.priceChangePercentageLastDay}
          </div>
        </div>
      )}
    </article>
  )
})

export default CoinToFiat
