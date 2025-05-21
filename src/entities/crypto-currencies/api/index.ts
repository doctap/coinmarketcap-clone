import { Coin, CoinProps } from "../types"

export const fetchCoins = async (): Promise<CoinProps[]> => {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=3')

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
