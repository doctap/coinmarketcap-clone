import { Coin, CoinProps, FetchCoinsQuery, CoinPrices, FetchCoinPricesQuery } from "../types"

export const fetchCoins = async ({ 
  vsCurrency,
  limit
}: FetchCoinsQuery): Promise<CoinProps[]> => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vsCurrency}&per_page=${limit}`
  )

  if (!response.ok) {
    // TODO: do some things to handle an error
  }

  const coins = await response.json() as Coin[]

  return coins.map<CoinProps>(coin => ({
     id: coin.id,
     symbol: coin.symbol,
     image: coin.image,
     name: coin.name,
     currentPrice: coin.current_price,
     priceChangePercentageLastDay: coin.market_cap_change_percentage_24h
  }))
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