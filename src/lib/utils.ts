import { CoinPrices, CoinPricesProps, SplittedCoinPricesProps } from "@/entities/crypto-prices";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const normalizePrices = (
  prices: CoinPrices["prices"]
): CoinPricesProps =>
  prices.map(([date, rate]) => ({
    date: new Date(date).toDateString(),
    rate: rate.toFixed(2),
  }));

export const splitToPeriods = (
  splittedPrices: CoinPricesProps
): SplittedCoinPricesProps => ({
  '7': splittedPrices.slice(0, 7),
  '15': splittedPrices.slice(0, 15),
  '30': splittedPrices,
})
