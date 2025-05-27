'use client'

import { Card, CardContent, CardHeader } from "@/shared"
import { useCoinsQuery, useCoinPricesQuery } from "@/hooks"
import { useCallback, useMemo, useState } from "react"
import { PeriodToggle } from "@/components"
import { CoinToFiat } from "@/components"
import { CoinChart } from "@/components"
import { ExtraProps, Periods } from "@/types"

export const CoinChartBox = ({ className }: ExtraProps) => {
  const [selectedCoinId, setSelectedCoin] = useState('bitcoin')
  const [selectedPeriod, setSelectedPeriod] = useState<Periods>(7)
  const { data: dataCoins, isLoading: isCoinsLoading } = useCoinsQuery({ limit: 50, vsCurrency: 'usd' })
  const { data: dataPrices, isLoading: isPricesLoading } = useCoinPricesQuery({ coinId: selectedCoinId, vsCurrency: 'usd', dayPeriod: 30 })

  const handleCoinSelect = useCallback((value: string) => {
    setSelectedCoin(value)
  }, [])

  const handlePeriodSelect = useCallback((value: string) => {
    setSelectedPeriod(Number(value) as Periods)
  }, [])

  const coins = useMemo(() => dataCoins, [dataCoins])

  return (
    <section className={className}>
      <h2 className='sr-only'>Crypto currency chart</h2>

      <Card className='h-full'>
        <CardHeader className='flex-row justify-between mb-24'>
          <CoinToFiat
            isLoading={isCoinsLoading}
            onChange={handleCoinSelect}
            selectedCoinId={selectedCoinId}
            coins={coins}
          />

          <PeriodToggle
            value={String(selectedPeriod)}
            onChange={handlePeriodSelect}
          />
        </CardHeader>

        <CardContent className='p-0'>
          <CoinChart prices={dataPrices ? dataPrices[selectedPeriod] : []} isLoading={isPricesLoading} />
        </CardContent>
      </Card>
    </section>
  )
}
