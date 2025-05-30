import { CoinProps, FetchCoinsQuery, fetchCoins } from '@/entities/coins';
import { useQuery } from '@tanstack/react-query'

export const useCoinsQuery = (params: FetchCoinsQuery) => (
  useQuery({
    queryKey: ['coins', params],
    queryFn: async () => {
      const coins = await fetchCoins(params)

      return coins.map<CoinProps>(coin => ({
           id: coin.id,
           symbol: coin.symbol,
           image: coin.image,
           name: coin.name,
           currentPrice: coin.current_price,
           priceChangePercentageLastDay: coin.market_cap_change_percentage_24h,
           marketRank: coin.market_cap_rank,
           totalVolume: coin.total_volume,
        }))
    },
  })
)