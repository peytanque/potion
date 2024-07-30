import { Dispatch, FC, SetStateAction } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Grid, IconButton, Tooltip, Typography } from "@mui/material";

import {
  IngredientSlug,
  IngredientQuantityType,
  PotionSlug,
  PotionType,
} from "@types";
import { SmallCardIngredient, SmallCardPotion } from "@components";

type ItemDetailsProps = {
  title: string;
  shownState: boolean;
  setShownState: Dispatch<SetStateAction<boolean>>;
  items: {
    ingredients?: IngredientQuantityType[];
    potions?: PotionType[];
  };
  parentSlug: IngredientSlug | PotionSlug;
};

export const ItemDetails: FC<ItemDetailsProps> = ({
  title,
  shownState,
  setShownState,
  items,
  parentSlug,
}) => {
  const { ingredients } = items;

  const isIngredient = !!ingredients;

  const childrens = isIngredient
    ? (items.ingredients as IngredientQuantityType[])
    : (items.potions as PotionType[]);

  return (
    <Grid container>
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
        <Tooltip
          title={!shownState ? "Voir les recettes" : "Masquer les recettes"}
        >
          <IconButton
            aria-label="add"
            color="info"
            size="medium"
            onClick={() => setShownState(!shownState)}
          >
            {shownState ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item xs={9}>
        {shownState &&
          childrens.map((item) => {
            return (
              <Box key={`${parentSlug}-${item.slug}`}>
                {isIngredient && (
                  <SmallCardIngredient item={item as IngredientQuantityType} />
                )}
                {!isIngredient && <SmallCardPotion item={item as PotionType} />}
              </Box>
            );
          })}
      </Grid>
    </Grid>
  );
};

export default ItemDetails;
