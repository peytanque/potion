import { useQuery } from "@tanstack/react-query";
import {
  endpoints,
  PotionApiResponse,
  PotionsApiResponse,
  PotionSlug,
} from "@types";

const getPotionsFn = async (): Promise<PotionsApiResponse> => {
  const response = await fetch(endpoints.potions);
  const data = await response.json();
  return data;
};

const getPotionFn = async (slug: PotionSlug): Promise<PotionApiResponse> => {
  const response = await fetch(endpoints.potions + slug);
  const data = await response.json();
  return data;
};

const usePotions = () => {
  return useQuery({
    queryKey: ["potions"],
    queryFn: () => getPotionsFn(),
  });
};

const usePotion = (slug: PotionSlug, enabled: boolean = true) => {
  return useQuery({
    queryKey: ["potion", slug],
    queryFn: () => getPotionFn(slug),
    enabled: enabled
  });
};

export { usePotions, usePotion };
