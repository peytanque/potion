import {
  Box,
  Button,
  CardContent,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { PotionType } from "@types";
import { useEffect, useState } from "react";
import { useUserContext } from "@context";
import { DynamicBackgroundCard } from "./DynamicBackgroundCard";
import CardItemMedia from "./CardItemMedia";
import UserQuantityInfo from "./UserQuantityInfo";
import ItemDetails from "./ItemDetails";

export const PotionCard = ({ asset, name, slug, ingredients }: PotionType) => {
  const { getUserItem, haveAtLeastOneIngredient } = useUserContext();
  const [shownState, setIsRecipeShown] = useState(haveAtLeastOneIngredient(slug));
  const isQuantityAboveZero = !!(getUserItem(slug, "potion").quantity > 0);

  // useEffect(() => {
  //   setIsRecipeShown(isQuantityAboveZero);
  // }, [isQuantityAboveZero]);

  return (
    <DynamicBackgroundCard isNotEmpty={isQuantityAboveZero}>
      <CardItemMedia src={asset.src} alt={slug} />
      <Box 
        sx={{ display: "flex", flexDirection: "column", ml: 1, width: "100%" }}
      >
        <CardContent sx={{ flex: "1 0 auto", p: 0 }}>
          <Typography component="div" variant="h5" sx={{ mb: 1 }}>
            {name}
          </Typography>
          <UserQuantityInfo
            isNotEmpty={isQuantityAboveZero}
            userQuantity={getUserItem(slug, "potion").quantity}
          />
          <Divider sx={{ my: 1 }} />
          <ItemDetails
            items={{ingredients}}
            parentSlug={slug}
            shownState={shownState}
            setShownState={setIsRecipeShown}
            title="Ingrédients requis"
          />
         
          <Divider sx={{ my: 1 }} />
        </CardContent>
        <Box>
          <Button disabled variant="contained"  sx={{width: '100%'}}>Confectionner</Button>
        </Box>
      </Box>
    </DynamicBackgroundCard>
  );
};

export default PotionCard;
