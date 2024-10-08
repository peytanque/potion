import { IngredientSlug } from "./../ingredient/type";

export type PotionSlug =
  | "potion-invisibilite"
  | "potion-amour"
  | "potion-jeunesse"
  | "potion-immortalite"
  | "potion-clairvoyance"
  | "potion-force"
  | "potion-vitesse"
  | "potion-guerison"
  | "potion-transformation";

export type IngredientQuantityType = {
  slug: IngredientSlug;
  requiredQuantity: number;
};

export type PotionType = {
  slug: PotionSlug;
  name: string;
  asset: {
    src: string;
  };
  ingredients: IngredientQuantityType[];
};

export type PotionsApiResponse = {
  data: PotionType[];
};

export type PotionApiResponse = {
  data: PotionType | undefined;
  error?: string;
};
