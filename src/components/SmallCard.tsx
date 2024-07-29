import { Paper, Typography } from "@mui/material";
import { PotionType } from "@types";
import { FC } from "react";
import { ItemType, useUserContext } from "src/context/userContext";
import { IngredientQuantityType } from "types/potion/type";
import Thumb from "./Thumb";
import { useRouter } from "next/router";

type SmallCardProps = {
  type: ItemType;
  item: PotionType | IngredientQuantityType;
};

export const SmallCard: FC<SmallCardProps> = ({ type, item }) => {
  const isIngredient = type === "ingredient";
  const isPotion = type === "potion";

  const router = useRouter();
  const ingredientRoute = "/ingredients/"
  const potionRoute = "/potions/"

  const redirectionRoute = (isIngredient ? ingredientRoute : potionRoute) + item.slug

  const { getUserItem } = useUserContext();
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: " center",
        gap: 1,
        width: "100%",
      }}
      variant="outlined"
      onClick={() => router.push(redirectionRoute)}
    >
      <Thumb
        type={type}
        slug={item.slug}
      />
      <Typography variant="caption" lineHeight={1}>
        {isIngredient && getUserItem(item.slug, "ingredient").item.name}
        {isPotion && getUserItem(item.slug, "potion").item.name}
      </Typography>
    </Paper>
  );
};

export default SmallCard;
