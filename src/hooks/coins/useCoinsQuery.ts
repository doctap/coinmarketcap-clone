import { FetchCoinsQuery, fetchCoins } from '@/entities/coins';
import { useQuery } from '@tanstack/react-query'

export const useCoinsQuery = (params: FetchCoinsQuery) => (
  useQuery({
    queryKey: ['coins', params],
    queryFn: () => fetchCoins(params),
  })
)