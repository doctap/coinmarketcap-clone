import { FiatCurrency } from "@/types";

export type CoinPrices = {
  prices: number[][];
  market_caps: number[][];
  total_volumes: number[][];
}

export type CoinPricesProps = {date: string, price: string}[]

export type SplittedCoinPricesProps = Record<7 | 15 | 30, CoinPricesProps>

export type FetchCoinPricesQuery = {
  vsCurrency: FiatCurrency;
  dayPeriod: number;
  coinId: string;
};
