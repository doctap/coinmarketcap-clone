import { CoinPrices, CoinPricesProps, SplittedCoinPricesProps } from "@/entities/coins";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const normalizePrices = (
  prices: CoinPrices["prices"]
): CoinPricesProps =>
  prices.map(([date, price]) => ({
    date: new Date(date).toDateString(),
    price: price.toFixed(2),
  }));

export const splitToPeriods = (
  splittedPrices: CoinPricesProps
): SplittedCoinPricesProps => ({
  '7': splittedPrices.slice(-7),
  '15': splittedPrices.slice(-15),
  '30': splittedPrices.slice(-30),
})
