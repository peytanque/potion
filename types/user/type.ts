import { IngredientType } from "types/ingredient";
import { PotionType } from "types/potion";

export type ItemWithQuantity = {
  item: PotionType | IngredientType;
  quantity: number;
};

export type User = {
  username: string;
  inventory: {
    potions: ItemWithQuantity[];
    ingredients: ItemWithQuantity[];
  };
};