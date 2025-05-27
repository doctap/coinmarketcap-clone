'use client'

import { CurrencyCard } from "@/components"
import { Skeleton } from "@/shared"
import { useCoinsQuery } from "@/hooks"
import { ExtraProps } from "@/types"

const coinQueryLimit = 3
const spacer = Array(coinQueryLimit).fill(null)

export function CardList({ className }: ExtraProps) {
  const { data, isLoading } = useCoinsQuery({ limit: coinQueryLimit, vsCurrency: 'usd' })

  if (isLoading) {
    return (
      <section className={className}>
        <ul className='grid grid-cols-3 gap-24'>
          {spacer.map((_, i) => <li key={i}><Skeleton className='h-70' /></li>)}
        </ul>
      </section>
    )
  }

  return (
    <section className={className}>
      <h2 className='sr-only'>Main crypto currencies</h2>
      <ul className='grid grid-cols-3 gap-24'>
        {data
          ? data.map(coin => <li key={coin.id}><CurrencyCard {...coin} /></li>)
          : <li>Empty List</li>}
      </ul>
    </section>
  )
}
