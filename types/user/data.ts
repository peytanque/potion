import { ingredientsData } from "types/ingredient";
import { potionsData } from "types/potion";
import { ItemWithQuantity, User } from "./type";

const getDefaultIngredientsQuantity = (): ItemWithQuantity[] => {
  return ingredientsData.map((ingredient) => {
    return { item: ingredient, quantity: 0 };
  });
};

const getDefaultPotionsQuantity = (): ItemWithQuantity[] => {
  return potionsData.map((potion) => {
    return { item: potion, quantity: 0 };
  });
};

export const defaultUser: User = {
  username: "",
  inventory: {
    ingredients: getDefaultIngredientsQuantity(),
    potions: getDefaultPotionsQuantity(),
  },
};
