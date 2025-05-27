import { fetchGlobalMarket, GlobalMarketProps } from "@/entities/global-market";
import { intFormatter } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";

export const useGlobalMarketQuery = () =>
  useQuery<GlobalMarketProps>({
    queryKey: ["global-market"],
    queryFn: async () => {
      const { data } = await fetchGlobalMarket();

      return {
        totalMarketCap: intFormatter({
          num: Object.values(data.total_market_cap).reduce(
            (acc, cur) => acc + cur,
            0
          ),
          notation: "compact",
          fixed: 1,
        }),
        totalVolume: intFormatter({
          num: Object.values(data.total_volume).reduce(
            (acc, cur) => acc + cur,
            0
          ),
          notation: "compact",
          fixed: 1,
        }),
        activeCryptos: intFormatter({
          num: data.active_cryptocurrencies,
          notation: "compact",
          fixed: 1,
        }),
        bitcoinDominance: data.market_cap_percentage.btc,
        marketCapChange: data.market_cap_change_percentage_24h_usd,
      };
    },
  });
