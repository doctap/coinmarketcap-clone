'use client'

import Card from "../Card/Card"
import { Skeleton } from "@/components"
import { useCoinsQuery } from "@/hooks"

const coinQueryLimit = 3
const spacer = Array(coinQueryLimit).fill(null)

export default function CardList() {
  const { data, isLoading } = useCoinsQuery({ limit: coinQueryLimit, vsCurrency: 'usd' })

  if (isLoading) {
    return (
      <ul className='w-1000 grid grid-cols-3 gap-24'>
        {spacer.map((_, i) => <li key={i}><Skeleton className='h-70' /></li>)}
      </ul>
    )
  }

  return (
    <section>
      <h2 className='sr-only'>Main crypto currencies</h2>
      <ul className='grid grid-cols-3 gap-24'>
        {data
          ? data.map(coin => <li key={coin.id}><Card {...coin} /></li>)
          : <li>Empty List</li>}
      </ul>
    </section>
  )
}
