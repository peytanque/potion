import {
  defaultUser,
  IngredientSlug,
  ItemWithQuantity,
  PotionSlug,
  PotionType,
  User,
} from "@types";
import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type ActionType = "add" | "remove";
export type ItemType = "ingredient" | "potion";

type UserContextProps = {
  user: User;
  setUsername: Dispatch<SetStateAction<User["username"]>>;
  updateIngredientQuantity: (
    ingredientSlug: IngredientSlug,
    action: ActionType,
    specificQuantity?: number
  ) => void;
  updatePotionQuantity: (potionSlug: PotionSlug, action: ActionType) => void;
  getUserItem: (
    slug: IngredientSlug | PotionSlug,
    type: ItemType
  ) => ItemWithQuantity;
  haveAtLeastOneIngredient: (slug: PotionSlug) => boolean
};

const UserContext = createContext<UserContextProps | undefined>(undefined);

const UserProvider: FC<React.PropsWithChildren> = ({ children }) => {
  const [username, setUsername] = useState(defaultUser.username);
  const [ingredients, setIngredients] = useState(
    defaultUser.inventory.ingredients
  );
  const [potions, setPotions] = useState(defaultUser.inventory.potions);

  const [user, setUser] = useState<User>({
    username: username,
    inventory: {
      potions: potions,
      ingredients: ingredients,
    },
  });

  const haveAtLeastOneIngredient = (slug: PotionSlug): boolean => {
    const potion  = getUserItem(slug, 'potion')
    const itemPotion = potion.item as PotionType

    console.log('itemPotion ', itemPotion);
    console.log('getIngredient ', itemPotion.ingredients.filter((ingredient) => getUserItem(ingredient.slug, 'ingredient')));

    console.log('supposé return ', itemPotion.ingredients.filter((ingredient) => getUserItem(ingredient.slug, 'ingredient').quantity > 0));
    return false;
    return !!(itemPotion.ingredients.filter((ingredient) => getUserItem(ingredient.slug, 'ingredient').quantity > 0))
  }

  const getUserItem = (
    slug: IngredientSlug | PotionSlug,
    type: ItemType
  ): ItemWithQuantity => {
    switch (type) {
      case "ingredient":
        return ingredients.find(
          (i) => i.item.slug === slug
        ) as ItemWithQuantity;
      case "potion":
        return potions.find((i) => i.item.slug === slug) as ItemWithQuantity;
    }
  };

  const calcQuantity = (item: ItemWithQuantity, action: ActionType, specificQuantity?: number): number => {
    switch (action) {
      case "add":
        return item.quantity + (specificQuantity ?? 1);
      case "remove":
        if (item.quantity > 0) {
          return item.quantity - (specificQuantity ?? 1);
        } else {
          return item.quantity;
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
    const ingredient = getUserItem(slug, "ingredient");
    setIngredients([
      {
        item: ingredient.item,
        quantity: calcQuantity(ingredient, action, specificQuantity),
      },
      ...ingredients,
    ]);
  };

  const updatePotionQuantity = (slug: PotionSlug, action: ActionType) => {
    const potion = getUserItem(slug, "potion");
    setPotions([
      {
        item: potion.item,
        quantity: calcQuantity(potion, action),
      },
      ...potions,
    ]);
  };

  useEffect(() => {
    setUser({
      username: username ?? user.username,
      inventory: {
        ingredients: ingredients ?? user.inventory.ingredients,
        potions: potions ?? user.inventory.potions,
      },
    });
  }, [username, ingredients, potions]);

  const value: UserContextProps = {
    user,
    setUsername,
    updateIngredientQuantity,
    updatePotionQuantity,
    getUserItem,
    haveAtLeastOneIngredient
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const useUserContext = () => {
  const {
    user,
    setUsername,
    updateIngredientQuantity,
    updatePotionQuantity,
    getUserItem,
    haveAtLeastOneIngredient
  } = useContext(UserContext) as UserContextProps;
  return {
    user,
    setUsername,
    updateIngredientQuantity,
    updatePotionQuantity,
    getUserItem,
    haveAtLeastOneIngredient
  };
};

export { UserContext, UserProvider, useUserContext };
