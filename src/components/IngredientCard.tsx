import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import { IngredientType } from "@types";
import { FC } from "react";
import Thumb from "./Thumb";
import { useInRecipe } from "@hooks";

const imageStyle = {
  height: "100%",
  objectFit: "contain",
  alignSelf: "center",
  width: "25%",
};

export const SkeletonIngredientCard: FC = () => {
  return (
    <Card
      sx={{
        display: "flex",
        padding: 0.5,
      }}
    >
      <Skeleton
        animation="wave"
        variant="circular"
        width={75}
        height={75}
        sx={{ alignSelf: "center" }}
      >
        <CardMedia></CardMedia>
      </Skeleton>
      <CardContent sx={{ width: "75%", paddingBottom: 0 }}>
        <Typography gutterBottom variant="h6" component="div">
          <Skeleton animation="wave" />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Skeleton animation="wave" />
        </Typography>
      </CardContent>
    </Card>
  );
};

export const IngredientCard = ({ asset, name, slug }: IngredientType) => {
  const { data, isLoading } = useInRecipe(slug);

  return (
    <Card
      sx={{
        display: "flex",
        padding: 0.5,
        height: "100%",
      }}
      variant="outlined"
    >
      <CardMedia
        image={asset.src}
        title={slug}
        component="img"
        sx={imageStyle}
      />
      <CardContent sx={{ width: "75%", paddingBottom: 0 }}>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Divider sx={{ my: 1 }} />
        {!isLoading && (
          <>
            <div>est présent dans :</div>
            <Grid container gap={{ xs: 4, md: 2 }}>
              {data?.map((potion) => (
                <Thumb
                  key={`${name}-${potion.name}`}
                  type="potion"
                  slug={potion.slug}
                />
              ))}
            </Grid>
          </>
        )}
      </CardContent>
    </Card>
  );
};
