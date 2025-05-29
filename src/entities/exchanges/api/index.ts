import { Exchange } from "../types"

export const fetchExchanges = async (limit: number): Promise<Exchange[]> => {
  const response = await fetch(`https://api.coingecko.com/api/v3/exchanges?per_page=${limit}`)

  if (!response.ok) {
    // TODO: do some things to handle an error
  }

  return await response.json() as Exchange[]
}
