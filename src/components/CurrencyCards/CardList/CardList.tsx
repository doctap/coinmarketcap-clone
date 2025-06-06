'use client'

import { Cases, CurrencyCard } from "@/components"
import { Skeleton } from "@/shared"
import { useCoinsQuery } from "@/hooks"
import { ExtraProps } from "@/types"
import { CoinCardProps } from "../Card/Card"
import { useEffect, useState } from "react"

const coinQueryLimit = 3
const spacer = Array(coinQueryLimit).fill(null)

export function CardList({ className }: ExtraProps) {
  const { data, isLoading, isError, error } = useCoinsQuery();
  const [items, setItems] = useState<CoinCardProps[]>([]);

  const skeletons = (
    <ul className='grid grid-cols-3 gap-24'>
      {spacer.map((_, i) => <li key={i}><Skeleton className='h-70' /></li>)}
    </ul>
  )

  useEffect(() => {
    if (data) {
      setItems(data.slice(0, coinQueryLimit).map(coin => ({
        id: coin.id,
        name: coin.name,
        currentPrice: coin.current_price,
        priceChangePercentageLastDay: coin.market_cap_change_percentage_24h,
      })))
    }
  }, [data]);

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
          {items?.map(coin => <li key={coin.id}><CurrencyCard {...coin} /></li>)}
        </ul>
      </Cases>
    </section>
  )
}
