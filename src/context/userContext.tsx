import {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  defaultUser,
  IngredientSlug,
  ItemWithQuantity,
  PotionSlug,
  PotionType,
  User,
} from "@types";

type ActionType = "add" | "remove";

type UserContextProps = {
  updateIngredientQuantity: (
    ingredientSlug: IngredientSlug,
    action: ActionType,
    specificQuantity?: number
  ) => void;

  getUserIngredient: (slug: IngredientSlug) => ItemWithQuantity;
  getUserPotion: (slug: PotionSlug) => ItemWithQuantity;

  haveAtLeastOneIngredient: (slug: PotionSlug) => boolean;
  isPotionCraftable: (slug: PotionSlug) => boolean;
  craftPotion: (slug: PotionSlug) => void;
  updatePotionQuantity: (potionSlug: PotionSlug, action: ActionType) => void;
};

const UserContext = createContext<UserContextProps | undefined>(undefined);

const UserProvider: FC<React.PropsWithChildren> = ({ children }) => {
  const [ingredients, setIngredients] = useState(
    defaultUser.inventory.ingredients
  );
  const [potions, setPotions] = useState(defaultUser.inventory.potions);

  const [user, setUser] = useState<User>({
    inventory: {
      potions: potions,
      ingredients: ingredients,
    },
  });

  const isPotionCraftable = (slug: PotionSlug) => {
    const potion = getUserPotion(slug);
    const itemPotion = potion.item as PotionType;
    const userIngredients = itemPotion.ingredients.map((i) =>
      getUserIngredient(i.slug)
    );

    const ingredientList = itemPotion.ingredients;

    return !!(
      userIngredients.filter((userIngredient) =>
        ingredientList.some(
          (ingredient) => ingredient.requiredQuantity <= userIngredient.quantity
        )
      ).length === itemPotion.ingredients.length
    );
  };

  const haveAtLeastOneIngredient = (slug: PotionSlug): boolean => {
    const potion = getUserPotion(slug);
    const itemPotion = potion.item as PotionType;
    const userIngredients = itemPotion.ingredients.map((i) =>
      getUserIngredient(i.slug)
    );

    return (
      userIngredients.filter((ingredient) => ingredient.quantity > 0).length > 0
    );
  };

  const getUserIngredient = (slug: IngredientSlug): ItemWithQuantity => {
    return ingredients.find((i) => i.item.slug === slug) as ItemWithQuantity;
  };

  const getUserPotion = (slug: PotionSlug): ItemWithQuantity => {
    return potions.find((i) => i.item.slug === slug) as ItemWithQuantity;
  };

  const calcQuantity = (
    item: ItemWithQuantity,
    action: ActionType,
    specificQuantity?: number
  ): number => {
    switch (action) {
      case "add":
        return item.quantity + (specificQuantity ?? 1);
      case "remove":
        if (item.quantity - (specificQuantity ?? 1) <= 0) {
          return 0
        } else {
          return item.quantity - (specificQuantity ?? 1)
        }
      default:
        return item.quantity;
    }
  };

  const updateIngredientQuantity = (
    slug: IngredientSlug,
    action: ActionType,
    specificQuantity?: number
  ) => {
    const ingredient = getUserIngredient(slug);
    setIngredients([
      ...ingredients.filter((p) => p.item.slug !== slug),
      {
        item: ingredient.item,
        quantity: calcQuantity(ingredient, action, specificQuantity),
      },
    ]);
  };

  const updatePotionQuantity = (slug: PotionSlug, action: ActionType) => {
    const potion = getUserPotion(slug);
    setPotions([
      ...potions.filter((p) => p.item.slug !== slug),
      {
        item: potion.item,
        quantity: calcQuantity(potion, action),
      },
    ]);
  };

  const craftPotion = (slug: PotionSlug) => {
    const potion = getUserPotion(slug);
    const itemPotion = potion.item as PotionType;

    const userIngredients = itemPotion.ingredients.map((i) =>
      getUserIngredient(i.slug)
    );

    const ingredientsState = [...ingredients]
    const restIngredients = ingredientsState.filter((ingredient) => !userIngredients.includes(ingredient))

    const updatedIngredientsQuantity = userIngredients.filter((userIngredient) => userIngredient.quantity = userIngredient.quantity - itemPotion.ingredients.find((requis) => requis.slug === userIngredient.item.slug)!.requiredQuantity)

    setPotions([...updatedIngredientsQuantity, ...restIngredients])
    updatePotionQuantity(slug, 'add')
  };

  useEffect(() => {
    setUser({
      inventory: {
        ingredients: ingredients ?? user.inventory.ingredients,
        potions: potions ?? user.inventory.potions,
      },
    });
  }, [ingredients, potions]);

  const value: UserContextProps = {
    isPotionCraftable,
    updateIngredientQuantity,
    updatePotionQuantity,
    getUserIngredient,
    getUserPotion,
    haveAtLeastOneIngredient,
    craftPotion,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const useUserContext = () => {
  const {
    updateIngredientQuantity,
    updatePotionQuantity,
    getUserIngredient,
    getUserPotion,
    haveAtLeastOneIngredient,
    isPotionCraftable,
    craftPotion,
  } = useContext(UserContext) as UserContextProps;
  return {
    updateIngredientQuantity,
    updatePotionQuantity,
    getUserIngredient,
    getUserPotion,
    haveAtLeastOneIngredient,
    isPotionCraftable,
    craftPotion,
  };
};

export { UserContext, UserProvider, useUserContext };
