import { CoinPrices, FetchCoinPricesQuery } from "../types"

export const fetchCoinPrices = async ({
  vsCurrency,
  dayPeriod,
  coinId
}: FetchCoinPricesQuery): Promise<CoinPrices> => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${vsCurrency}&days=${dayPeriod}&interval=daily`
  )

  if (!response.ok) {
    // TODO: do some things to handle an error
  }

  return await response.json() as CoinPrices
}