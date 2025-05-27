type CurrencyValues = {
  [key: string]: number;
};

type MarketCapPercentage = {
  btc: number;
  eth: number;
  usdt: number;
  bnb: number;
  sol: number;
  usdc: number;
  xrp: number;
  steth: number;
  doge: number;
  ada: number;
};

type GlobalMarket = {
  active_cryptocurrencies: number;
  upcoming_icos: number;
  ongoing_icos: number;
  ended_icos: number;
  markets: number;
  total_market_cap: CurrencyValues;
  total_volume: CurrencyValues;
  market_cap_percentage: MarketCapPercentage;
  market_cap_change_percentage_24h_usd: number;
  updated_at: number;
};

export type CryptoMarketApiResponse = {
  data: GlobalMarket;
};

export interface GlobalMarketProps {
  totalMarketCap: string;
  totalVolume: string;
  activeCryptos: string;
  bitcoinDominance: number;
  marketCapChange: number;
}
