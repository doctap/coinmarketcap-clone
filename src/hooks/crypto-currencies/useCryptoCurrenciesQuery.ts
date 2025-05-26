import { FetchCoinsQuery, fetchCoins } from '@/entities/crypto-currencies';
import { useQuery } from '@tanstack/react-query'

export const useCryptoCurrencyQuery = (params: FetchCoinsQuery) => (
  useQuery({
    queryKey: ['currencies', params],
    queryFn: () => fetchCoins(params),
  })
)