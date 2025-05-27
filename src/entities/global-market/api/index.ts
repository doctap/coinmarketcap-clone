import { CryptoMarketApiResponse } from "../types"

export const fetchGlobalMarket = async (): Promise<CryptoMarketApiResponse> => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/global`
  )

  if (!response.ok) {
    // TODO: do some things to handle an error
  }

  return await response.json() as CryptoMarketApiResponse
}
