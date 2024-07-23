import { IngredientSlug } from "./../ingredient/type";

type PotionSlug =
  | "potion-invisibilite"
  | "potion-amour"
  | "potion-jeunesse"
  | "potion-immortalite"
  | "potion-clairvoyance"
  | "potion-force"
  | "potion-vitesse"
  | "potion-guerison"
  | "potion-transformation";

type IngredientQuantityType = {
  name: IngredientSlug;
  quantity: number;
  userQuantity?: number;
};

export type PotionType = {
  slug: PotionSlug;
  name: string;
  description: string;
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
