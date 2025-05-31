'use client'

import { Cases, CurrencyCard } from "@/components"
import { Skeleton } from "@/shared"
import { useCoinsQuery } from "@/hooks"
import { ExtraProps } from "@/types"
import { CoinCardProps } from "../Card/Card"

const coinQueryLimit = 3
const spacer = Array(coinQueryLimit).fill(null)

export function CardList({ className }: ExtraProps) {
  const { data, isLoading, isError, error } = useCoinsQuery<CoinCardProps>({
    limit: coinQueryLimit,
    vsCurrency: 'usd',
    mapper: coin => ({
      id: coin.id,
      name: coin.name,
      currentPrice: coin.current_price,
      priceChangePercentageLastDay: coin.market_cap_change_percentage_24h,
    }),
  })

  const skeletons = (
    <ul className='grid grid-cols-3 gap-24'>
      {spacer.map((_, i) => <li key={i}><Skeleton className='h-70' /></li>)}
    </ul>
  )

  return (
    <section className={className}>
      <h2 className='sr-only'>Main crypto currencies</h2>

      <Cases
        isLoading={isLoading}
        isError={isError}
        error={error}
        skeletons={skeletons}
      >
        <ul className='grid grid-cols-3 gap-24'>
          {data?.map(coin => <li key={coin.id}><CurrencyCard {...coin} /></li>)}
        </ul>
      </Cases>
    </section>
  )
}
