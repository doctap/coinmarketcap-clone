'use client'

import { fetchCurrencies } from "@/entities/crypto-currencies"
import { useQuery } from "@tanstack/react-query"
import Card from "../Card/Card"

export default function CardList({ }: { className?: string }) {
  const { data, isLoading } = useQuery({ queryKey: ['cards'], queryFn: fetchCurrencies })

  if (isLoading) {
    return 'Loading'
  }

  return (
    <ul className='w-1000 grid grid-cols-3 gap-24'>
      {data
        ? data.map(coin => <li key={coin.id}><Card {...coin}/></li>)
        : <li>Empty List</li>}
    </ul>
  )
}
