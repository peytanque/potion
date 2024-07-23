export type IngredientSlug =
  | "argent"
  | "bave-de-lame"
  | "epine-de-herisson"
  | "plume-de-griffon"
  | "helium-liquide"
  | "poil-de-yeti"
  | "or"
  | "azote-liquide"
  | "queue-d-ecureil"
  | "crin-de-licorne"
  | "jus-de-horglup"
  | "noix-de-coco"
  | "yttrium"
  | "mandragore";

export type IngredientType = {
  slug: IngredientSlug;
  name: string;
  description: string;
  asset: {
    src: string;
  };
};

export type IngredientsApiResponse = {
  data: IngredientType[];
};

export type IngredientApiResponse = {
  data: IngredientType | undefined;
  error?: string;
};
