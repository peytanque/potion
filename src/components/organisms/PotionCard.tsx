import { useState, FC } from "react";
import {
  Box,
  Button,
  CardContent,
  Divider,
  Snackbar,
  Typography,
} from "@mui/material";

import { PotionType } from "@types";
import { useUserContext } from "@context";
import {
  DynamicBackgroundCard,
  CardItemMedia,
  UserQuantityInfo,
  ItemDetails,
} from "@components";

export const PotionCard: FC<PotionType> = ({
  asset,
  name,
  slug,
  ingredients,
}) => {
  const {
    getUserPotion,
    haveAtLeastOneIngredient,
    isPotionCraftable,
    craftPotion,
  } = useUserContext();
  const [shownState, setIsRecipeShown] = useState(
    haveAtLeastOneIngredient(slug)
  );
  const isQuantityAboveZero = !!(getUserPotion(slug).quantity > 0);
  const [showToast, setShowToast] = useState<boolean>(false);

  const onClickCraft = () => {
    craftPotion(slug);
    setShowToast(!showToast);
  };

  return (
    <DynamicBackgroundCard isNotEmpty={isQuantityAboveZero}>
      <>
      <Snackbar
        open={showToast}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        autoHideDuration={1500}
        onClose={() => setShowToast(!showToast)}
        message={`Félicitation vous avez confectionné avec brio ${name} !`}
      />
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
            items={{ ingredients }}
            parentSlug={slug}
            shownState={shownState}
            setShownState={setIsRecipeShown}
            title="Ingrédients requis"
          />

          <Divider sx={{ my: 1 }} />
        </CardContent>
        <Box>
          <Button
            disabled={!isPotionCraftable(slug)}
            onClick={onClickCraft}
            variant="contained"
            sx={{ width: "100%" }}
          >
            Confectionner
          </Button>
        </Box>
      </Box>
      </>
    </DynamicBackgroundCard>
  );
};

export default PotionCard;
