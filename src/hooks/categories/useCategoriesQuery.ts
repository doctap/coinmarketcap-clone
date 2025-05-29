import { fetchCategories } from "@/entities/categories";
import { useQuery } from "@tanstack/react-query";

export const useCategoriesQuery = (perPage: number) =>
  useQuery({
    queryKey: ["categories", perPage],
    queryFn: async () => {
      const categories = await fetchCategories(perPage);

      return categories.map((category) => ({
        id: category.id,
        name: category.name,
      }));
    },
  });
