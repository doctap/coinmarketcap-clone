'use client'

import { Popover, PopoverTrigger, PopoverContent, UpDownIndicator } from "@/shared"
import { Skeleton } from "@/shared"
import { RiExpandUpDownLine } from "react-icons/ri"
import { Cases, CoinSearchSelect, CoinSearchSelectItem } from "@/components"
import { CgDollar } from "react-icons/cg"
import { memo, useCallback, useState } from "react"
import { intFormatter } from "@/lib/utils"
import { useCoinsQuery } from "@/hooks"

type CoinToFiatItem = CoinSearchSelectItem & { currentPrice: number, priceChangePercentageLastDay: number }

export const CoinToFiat = memo(function CoinToFiat({
  selectedCoinId,
  onChange,
}: {
  selectedCoinId: string,
  onChange: (value: string) => void
}) {
  const { data, isLoading, isError, error } = useCoinsQuery<CoinToFiatItem>({
    limit: 50,
    vsCurrency: 'usd',
    mapper: coin => ({
      id: coin.id,
      name: coin.name,
      image: coin.image,
      currentPrice: coin.current_price,
      priceChangePercentageLastDay: coin.market_cap_change_percentage_24h,
    }),
  })

  const [isOpen, setIsOpen] = useState(false)
  const selectedCoinData = data?.find(({ id }) => id === selectedCoinId)

  const handleCoinSelect = useCallback((value: string) => {
    onChange(value)
    setIsOpen(prev => !prev)
  }, [onChange])

  const skeletons = <>
    <Skeleton className='mb-16 w-200 h-42 rounded-sm' />
    <Skeleton className='w-200 h-42 rounded-sm' />
  </>

  return (
    <article>
      <Cases
        isLoading={isLoading}
        isError={isError}
        error={error}
        skeletons={skeletons}
      >
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger className='flex justify-between items-center w-200 border-1 rounded-sm p-8'>
            {selectedCoinData?.name}
            <RiExpandUpDownLine className='ml-auto' size={20} />
          </PopoverTrigger>
          <PopoverContent className='w-200'>
            <CoinSearchSelect
              value={selectedCoinId}
              onChange={handleCoinSelect}
              coins={data}
            />
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

            <UpDownIndicator
              isUp={selectedCoinData.priceChangePercentageLastDay < 0}
              value={String(selectedCoinData.priceChangePercentageLastDay)}
            />
          </div>
        )}
      </Cases>
    </article>
  )
})
