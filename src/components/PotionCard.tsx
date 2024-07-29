import {
  Box,
  Button,
  CardContent,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { PotionType } from "@types";
import { useState } from "react";
import { useUserContext } from "@context";
import { DynamicBackgroundCard } from "./DynamicBackgroundCard";
import CardItemMedia from "./CardItemMedia";
import UserQuantityInfo from "./UserQuantityInfo";
import ItemDetails from "./ItemDetails";

export const PotionCard = ({ asset, name, slug, ingredients }: PotionType) => {
  const { getUserPotion, haveAtLeastOneIngredient, isPotionCraftable, craftPotion } = useUserContext();
  const [shownState, setIsRecipeShown] = useState(haveAtLeastOneIngredient(slug));
  const isQuantityAboveZero = !!(getUserPotion(slug).quantity > 0);

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
            userQuantity={getUserPotion(slug).quantity}
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
            <Button disabled={!isPotionCraftable(slug)} onClick={() => craftPotion(slug)} variant="contained" sx={{width: '100%'}}>Confectionner</Button>
        </Box>
      </Box>
    </DynamicBackgroundCard>
  );
};

export default PotionCard;
