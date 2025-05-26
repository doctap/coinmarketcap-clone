import {
  FetchCoinPricesQuery,
  fetchCoinPrices,
} from "@/entities/crypto-prices";
import { normalizePrices, splitToPeriods } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";

export const useCryptoPricesQuery = (params: FetchCoinPricesQuery) =>
  useQuery({
    queryKey: ["crypto-prices", params],
    queryFn: async () => {
      const { prices } = await fetchCoinPrices(params)
      const normalizedPrices = normalizePrices(prices);
      const splittedToPeriods = splitToPeriods(normalizedPrices);

      return splittedToPeriods
    },
  });
