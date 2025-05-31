import { Coin, FetchCoinsQuery, CoinPrices, FetchCoinPricesQuery } from "../types"

export const fetchCoins = async ({ 
  vsCurrency,
  limit
}: Pick<FetchCoinsQuery, 'vsCurrency' | 'limit'>): Promise<Coin[]> => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vsCurrency}&per_page=${limit}`
  )

  if (!response.ok) {
    // TODO: do some things to handle an error
  }

  return await response.json() as Coin[]
}

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