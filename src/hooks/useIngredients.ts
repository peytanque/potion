import { useQuery } from "@tanstack/react-query";
import {
  endpoints,
  IngredientApiResponse,
  IngredientsApiResponse,
  IngredientSlug,
  PotionsApiResponse,
  PotionType,
} from "@types";

const getIngredientsFn = async (): Promise<IngredientsApiResponse> => {
  const response = await fetch(endpoints.ingredients);
  const data = await response.json();
  return data;
};

const getIngredientFn = async (
  slug: IngredientSlug
): Promise<IngredientApiResponse> => {
  const response = await fetch(endpoints.ingredients + slug);
  const data = await response.json();
  return data;
};

const getInRecipeFn = async (
  slug: IngredientSlug
): Promise<PotionType[]> => {
  const potionsResponse = await fetch(endpoints.potions);
  const potionsData: PotionsApiResponse = await potionsResponse.json();

  const data = potionsData.data.filter(potion => potion.ingredients.some(ingredient => ingredient.slug === slug));

  return data;
};

const useInRecipe = (slug: IngredientSlug) => {
  return useQuery({
    queryKey: ["inRecipe", slug],
    queryFn: () => getInRecipeFn(slug),
  });
};

const useIngredients = () => {
  return useQuery({
    queryKey: ["potions"],
    queryFn: () => getIngredientsFn(),
  });
};

const useIngredient = (slug: IngredientSlug, enabled: boolean = true) => {
  return useQuery({
    queryKey: ["potion", slug],
    queryFn: () => getIngredientFn(slug),
    enabled: enabled,
  });
};

export { useIngredients, useIngredient, useInRecipe };
