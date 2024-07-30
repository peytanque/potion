import { useEffect, useState, FC } from "react";
import {
  Box,
  CardContent,
  Divider,
  Grid,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Add, ElderlyWoman, Remove } from "@mui/icons-material";

import { IngredientType } from "@types";
import { useInRecipe } from "@hooks";
import { useUserContext } from "@context";
import {
  DynamicBackgroundCard,
  CardItemMedia,
  UserQuantityInfo,
  ItemDetails,
} from "@components";

export const IngredientCard: FC<IngredientType> = ({ asset, name, slug }) => {
  const { data: potions } = useInRecipe(slug);
  const { getUserIngredient, updateIngredientQuantity } = useUserContext();
  const isQuantityAboveZero = !!(getUserIngredient(slug).quantity > 0);
  const [isRecipeShown, setIsRecipeShown] = useState<boolean>(false);
  const [specificQuantity, setSpecificQuantity] = useState<number>(1);

  const [isCheater, setIsCheater] = useState(false);

  const onClickCheaterMode = () => {
    setIsCheater(!isCheater);
    updateIngredientQuantity(slug, "add", 42);
    setSpecificQuantity(42);
  };

  useEffect(() => {
    setIsRecipeShown(isQuantityAboveZero);
  }, [isQuantityAboveZero]);

  useEffect(() => {
    if (specificQuantity === 0) {
      setSpecificQuantity(1);
    }
  }, [specificQuantity]);

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
            userQuantity={getUserIngredient(slug).quantity}
          />
          <Divider sx={{ my: 1 }} />
          {potions && (
            <ItemDetails
              title="Recette(s) associée(s)"
              items={{ potions }}
              parentSlug={slug}
              shownState={isRecipeShown}
              setShownState={setIsRecipeShown}
            />
          )}
          <Divider sx={{ my: 1 }} />
        </CardContent>
        <Grid container>
          <Grid
            item
            xs={5}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyItems: " center",
              justifyContent: " center",
            }}
          >
            <Tooltip title={`Supprimer ${specificQuantity} ${name}`}>
              <span>
                <IconButton
                  aria-label="remove"
                  color="error"
                  disabled={!isQuantityAboveZero}
                  onClick={() =>
                    updateIngredientQuantity(slug, "remove", specificQuantity)
                  }
                >
                  <Remove />
                </IconButton>
              </span>
            </Tooltip>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyItems: " center",
              justifyContent: " center",
            }}
          >
            {!isCheater ? (
              <Tooltip title="J'en ai marre de cliquer">
                <IconButton
                  aria-label="remove"
                  color="info"
                  onClick={() => onClickCheaterMode()}
                >
                  <ElderlyWoman />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="Vous pouvez spécifier le nombre">
                <TextField
                  id="specific"
                  size="small"
                  variant="standard"
                  color="info"
                  type="number"
                  value={specificQuantity}
                  InputProps={{
                    inputProps: { style: { textAlign: "center" } },
                  }}
                  onChange={(e) => setSpecificQuantity(Number(e.target.value))}
                />
              </Tooltip>
            )}
          </Grid>
          <Grid
            item
            xs={5}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyItems: " center",
              justifyContent: " center",
            }}
          >
            <Tooltip title={`Ajouter ${specificQuantity} ${name}`}>
              <IconButton
                aria-label="add"
                color="success"
                onClick={() =>
                  updateIngredientQuantity(slug, "add", specificQuantity)
                }
              >
                <Add />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Box>
    </DynamicBackgroundCard>
  );
};
