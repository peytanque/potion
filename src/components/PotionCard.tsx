import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { PotionType } from "@types";
import { IngredientCard } from "./IngredientCard";
import Thumb from "./Thumb";

export const PotionCard = ({
  asset,
  description,
  name,
  slug,
  ingredients,
}: PotionType) => {
  return (
    <Card
      sx={{
        display: "flex",
        padding: 0.5,
        height: '100%'
      }}
      variant="outlined"
    >
      <CardMedia
        image={asset.src}
        title={slug}
        component="img"
        sx={{
          height: "100%",
          objectFit: "contain",
          alignSelf: "center",
          width: "25%",
        }}
      />
      <CardContent sx={{ width: "75%", paddingBottom: 0 }}>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Grid container gap={{ xs: 4, md: 2 }}>
          {ingredients.map((ingredient) => (
            <Thumb
              key={`${name}-${ingredient.name}`}
              type="ingredient"
              name={ingredient.name}
              quantity={ingredient.quantity}
            />
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PotionCard;
