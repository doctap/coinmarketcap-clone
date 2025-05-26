import {
  FetchCoinPricesQuery,
  fetchCoinPrices,
} from "@/entities/coins";
import { normalizePrices, splitToPeriods } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";

export const useCoinPricesQuery = (params: FetchCoinPricesQuery) =>
  useQuery({
    queryKey: ["coin-prices", params],
    queryFn: async () => {
      const { prices } = await fetchCoinPrices(params)
      const normalizedPrices = normalizePrices(prices);
      const splittedToPeriods = splitToPeriods(normalizedPrices);

      return splittedToPeriods
    },
  });
