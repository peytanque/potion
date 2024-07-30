import { FC } from "react";
import { useRouter } from "next/router";
import {
  Avatar,
  Badge,
  Button,
  colors,
  Paper,
  Typography,
} from "@mui/material";

import { IngredientSlug, PotionType, IngredientQuantityType, PotionSlug } from "@types";
import { useUserContext } from "@context";

type SmallCardIngredientProps = {
  item: IngredientQuantityType;
};

type SmallCardPotionProps = {
  item: PotionType;
};

export const SmallCardIngredient: FC<SmallCardIngredientProps> = ({ item }) => {
  const { requiredQuantity } = item;

  const router = useRouter();
  const redirectionRoute = `/ingredients/${item.slug}`;

  const { getUserIngredient } = useUserContext();
  const ingredient = getUserIngredient(item.slug as IngredientSlug);

  const { quantity: userQuantity } = ingredient;

  const haveEnoughIngredients = !!(userQuantity >= requiredQuantity);

  return (
    <Button sx={{ width: "100%" }}>
      <Paper
        sx={{
          display: "flex",
          alignItems: " center",
          gap: 1,
          width: "100%",
          backgroundColor: haveEnoughIngredients ? colors.green[50] : "default",
        }}
        variant="outlined"
        onClick={() => router.push(redirectionRoute)}
      >
        <Badge
          overlap="circular"
          color="primary"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={`${userQuantity}/${requiredQuantity}`}
        >
          <Avatar alt={ingredient.item.slug} src={ingredient.item.asset.src} />
        </Badge>
        <Typography
          variant="caption"
          lineHeight={1}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            pr: 1,
          }}
        >
          {getUserIngredient(item.slug).item.name}
        </Typography>
      </Paper>
    </Button>
  );
};

export const SmallCardPotion: FC<SmallCardPotionProps> = ({ item }) => {
  const router = useRouter();
  const redirectionRoute = `/potions/${item.slug}`;

  const { getUserPotion } = useUserContext();
  const potion = getUserPotion(item.slug as PotionSlug);

  return (
    <Button sx={{ width: "100%" }}>
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
        <Avatar alt={item.name} src={item.asset.src} />
        <Typography
          variant="caption"
          lineHeight={1}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            pr: 1,
          }}
        >
          {potion.item.name}
        </Typography>
      </Paper>
    </Button>
  );
};

export default { SmallCardIngredient, SmallCardPotion };
