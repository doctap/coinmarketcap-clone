import { Category } from "../types"

export const fetchCategories = async (perPage: number): Promise<Category[]> => {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/categories')

  if (!response.ok) {
    // TODO: do some things to handle an error
  }

  const categories = await response.json() as Category[]
  categories.length = perPage

  return categories
}
