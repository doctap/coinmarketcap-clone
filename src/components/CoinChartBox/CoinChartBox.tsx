'use client'

import { Card, CardContent, CardHeader } from "../Card/Card"
import { useCoinsQuery, useCoinPricesQuery } from "@/hooks"
import { useCallback, useMemo, useState } from "react"
import PeriodToggle from "../PeriodToggle/PeriodToggle"
import CoinToFiat from "../CoinToFiat/CoinToFiat"
import { CoinChart } from "../CoinChart/CoinChart"
import { Periods } from "@/types"

const CoinChartBox = () => {
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
    <section>
      <h2 className='sr-only'>Crypto currency chart</h2>

      <Card className='h-full border-0 p-24'>
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

export default CoinChartBox
