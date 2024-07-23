import { IngredientSlug } from "./../ingredient/type";

type RecipeSlug =
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

export type RecipeType = {
  slug: RecipeSlug;
  name: string;
  description: string;
  asset: {
    src: string;
  };
  ingredients: IngredientQuantityType[];
};

export type RecipesApiResponse = {
  data: RecipeType[];
};

export type RecipeApiResponse = {
  data: RecipeType | undefined;
  error?: string;
};
