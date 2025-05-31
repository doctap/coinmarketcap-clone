'use client'

import { Card, CardContent, CardHeader } from "@/shared"
import { useCoinPricesQuery } from "@/hooks"
import { useCallback, useState } from "react"
import { PeriodToggle } from "@/components"
import { CoinToFiat } from "@/components"
import { CoinChart } from "@/components"
import { ExtraProps, Periods } from "@/types"


export const CoinChartBox = ({ className }: ExtraProps) => {
  const [selectedCoinId, setSelectedCoin] = useState('bitcoin')
  const [selectedPeriod, setSelectedPeriod] = useState<Periods>(7)
  const { data, isLoading } = useCoinPricesQuery({ coinId: selectedCoinId, vsCurrency: 'usd', dayPeriod: 30 })

  const handleCoinSelect = useCallback((value: string) => {
    setSelectedCoin(value)
  }, [])

  const handlePeriodSelect = useCallback((value: string) => {
    setSelectedPeriod(Number(value) as Periods)
  }, [])


  return (
    <section className={className}>
      <h2 className='sr-only'>Crypto currency chart</h2>

      <Card className='h-full'>
        <CardHeader className='flex-row justify-between mb-24'>
          <CoinToFiat
            onChange={handleCoinSelect}
            selectedCoinId={selectedCoinId}
          />

          <PeriodToggle
            value={String(selectedPeriod)}
            onChange={handlePeriodSelect}
          />
        </CardHeader>

        <CardContent className='p-0'>
          <CoinChart prices={data ? data[selectedPeriod] : []} isLoading={isLoading} />
        </CardContent>
      </Card>
    </section>
  )
}
