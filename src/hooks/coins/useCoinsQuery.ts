import { Coin, FetchCoinsQuery, fetchCoins } from "@/entities/coins";
import { useQuery } from "@tanstack/react-query";

export const useCoinsQuery = <T extends object>({
  mapper,
  ...params
}: FetchCoinsQuery<T>) =>
  useQuery<Coin[], Error, T[]>({
    queryKey: ["coins", params],
    queryFn: async () => await fetchCoins(params),
    select: (data) => data.map(mapper),
  });
