import { Coin, fetchCoins } from "@/entities/coins";
import { useQuery } from "@tanstack/react-query";

export const useCoinsQuery = () =>
  useQuery<Coin[]>({
    queryKey: ['coins'],
    queryFn: async () => await fetchCoins(),
  });
