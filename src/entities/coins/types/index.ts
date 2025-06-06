import { FiatCurrency } from "@/types";

export type Coin = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string; // ISO date
  atl: number;
  atl_change_percentage: number;
  atl_date: string; // ISO date
  roi: null | {
    times: number;
    currency: string;
    percentage: number;
  };
  last_updated: string; // ISO date
};

export interface CoinProps {
  id: string;
  symbol: string;
  name: string;
  image: string;
  currentPrice: number;
  priceChangePercentageLastDay: number;
  marketRank: number;
  totalVolume: number;
}

export type CoinPrices = {
  prices: number[][];
  market_caps: number[][];
  total_volumes: number[][];
};

export type CoinPricesProps = { date: string; price: string }[];

export type SplittedCoinPricesProps = Record<7 | 15 | 30, CoinPricesProps>;

export type FetchCoinPricesQuery = {
  vsCurrency: FiatCurrency;
  dayPeriod: number;
  coinId: string;
};
