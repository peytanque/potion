import {
  Box,
  CardContent,
  Divider,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { IngredientType } from "@types";
import { useInRecipe } from "@hooks";
import { useUserContext } from "@context";
import { Add, Remove } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { DynamicBackgroundCard } from "./DynamicBackgroundCard";
import CardItemMedia from "./CardItemMedia";
import UserQuantityInfo from "./UserQuantityInfo";
import ItemDetails from "./ItemDetails";

export const IngredientCard = ({ asset, name, slug }: IngredientType) => {
  const { data: potions } = useInRecipe(slug);
  const { getUserItem, updateIngredientQuantity } = useUserContext();
  const isQuantityAboveZero = !!(getUserItem(slug, "ingredient").quantity > 0);
  const [isRecipeShown, setIsRecipeShown] = useState<boolean>(false);
  const [specificQuantity, setSpecificQuantity] = useState<number>(1);

  useEffect(() => {
    setIsRecipeShown(isQuantityAboveZero);
  }, [isQuantityAboveZero]);

  useEffect(() => {
    if (specificQuantity === 0) {
      setSpecificQuantity(1)
    }
  }, [specificQuantity])

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
            userQuantity={getUserItem(slug, "ingredient").quantity}
          />
          <Divider sx={{ my: 1 }} />
          {potions && (
            <ItemDetails
              title="Recette(s) associée(s)"
              items={{ potions }}
              parentSlug={slug}
              shownState={true}
              setShownState={setIsRecipeShown}
            />
          )}
          <Divider sx={{ my: 1 }} />
        </CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            aria-label="remove"
            color="error"
            disabled={!isQuantityAboveZero}
            onClick={() => updateIngredientQuantity(slug, "remove")}
          >
            <Remove />
          </IconButton>
          <TextField
            id="specific"
            size="small"
            label="Valeur"
            variant="standard"
            value={specificQuantity}
            onChange={(e) => setSpecificQuantity(Number(e.target.value))}
          />
          <IconButton
            aria-label="add"
            color="success"
            onClick={() =>
              updateIngredientQuantity(slug, "add", specificQuantity)
            }
          >
            <Add />
          </IconButton>
        </Box>
      </Box>
    </DynamicBackgroundCard>
  );
};
