import { ExchangeProps, fetchExchanges } from "@/entities/exchanges";
import { useQuery } from "@tanstack/react-query";

export const useExchangeQuery = (limit: number) =>
  useQuery({
    queryKey: ["exchanges", limit],
    queryFn: async () => {
      const exchanges = await fetchExchanges(limit);

      return exchanges.map<ExchangeProps>((exchange) => ({
        id: exchange.id,
        name: exchange.name,
        image: exchange.image,
        url: exchange.url,
        tradeVolume24hBtc: exchange.trade_volume_24h_btc,
      }));
    },
  });
