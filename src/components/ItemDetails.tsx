import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Grid, IconButton, Paper, Typography } from "@mui/material";
import { Dispatch, FC, SetStateAction } from "react";
import {
  IngredientQuantityType,
  PotionSlug,
  PotionType,
} from "types/potion/type";
import Thumb from "./Thumb";
import { IngredientSlug } from "@types";
import { useUserContext } from "@context";
import SmallCard from "./SmallCard";

type ItemDetailsProps = {
  title: string;
  shownState: boolean;
  setShownState: Dispatch<SetStateAction<boolean>>;
  items: {
    ingredients?: IngredientQuantityType[];
    potions?: PotionType[];
  };
  parentSlug: IngredientSlug | PotionSlug;
  withQuantity?: boolean;
};

export const ItemDetails: FC<ItemDetailsProps> = ({
  title,
  shownState,
  setShownState,
  items,
  parentSlug,
  withQuantity = false,
}) => {
  const { ingredients } = items;

  const isIngredient = !!ingredients;

  const childrens = isIngredient
    ? (items.ingredients as IngredientQuantityType[])
    : (items.potions as PotionType[]);

  return (
    <Grid container >
      <Grid item xs={12}>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          component="div"
          lineHeight={1}
          sx={{ mb: 1 }}
        >
          {title}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <IconButton
          aria-label="add"
          color="info"
          size="medium"
          onClick={() => setShownState(!shownState)}
        >
          {shownState ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </Grid>
      <Grid item xs={9} gap={0.5}>
        {shownState &&
          childrens.map((item) => {
            return (
              <Box  key={`${parentSlug}-${item.slug}`}>
                <SmallCard item={item} type={isIngredient ? "ingredient" : "potion"}/>
              </Box>
            );
          })}
      </Grid>
    </Grid>
  );
};

export default ItemDetails;
