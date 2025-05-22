'use client'

import { fetchCurrencies } from "@/entities/crypto-currencies"
import { useQuery } from "@tanstack/react-query"
import Card from "../Card/Card"
import { Skeleton } from "@/components"

const coinQueryLimit = 3
const spacer = Array(coinQueryLimit).fill(null)

export default function CardList({ }: { className?: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ['cards'],
    queryFn: async () => fetchCurrencies({ limit: coinQueryLimit, vsCurrency: 'usd' })
  })

  if (isLoading) {
    return (
      <ul className='w-1000 grid grid-cols-3 gap-24'>
        {spacer.map((space, i) => <li key={i}><Skeleton className='h-70' /></li>)}
      </ul>
    )
  }

  return (
    <ul className='w-1000 grid grid-cols-3 gap-24'>
      {data
        ? data.map(coin => <li key={coin.id}><Card {...coin} /></li>)
        : <li>Empty List</li>}
    </ul>
  )
}
