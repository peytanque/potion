import {
  IngredientApiResponse,
  IngredientType,
  IngredientsApiResponse,
  ingredientsData,
  IngredientSlug
} from "./ingredient";

import {
  PotionApiResponse,
  PotionType,
  PotionsApiResponse,
  potionsData,
  PotionSlug
} from "./potion";

import { routes, Route } from "./routes";

import { endpoints } from "./endpoints";

export { ingredientsData, potionsData, routes, endpoints };
export type {
  IngredientApiResponse,
  IngredientType,
  IngredientsApiResponse,
  PotionApiResponse,
  PotionType,
  PotionsApiResponse,
  Route,
  PotionSlug,
  IngredientSlug
};
