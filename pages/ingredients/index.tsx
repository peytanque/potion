import { NextPage } from "next";
import { Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";

import { IngredientCard } from "@components";
import { useIngredients } from "@hooks";

export const Ingredients: NextPage = () => {
  const { data, isLoading } = useIngredients();

  if (isLoading) return <p>Chargement de la liste des ingrédients</p>;

  return (
    <Container>
      <Typography variant="h4" sx={{mb: 4, textAlign: 'center'}}>Liste des ingrédients</Typography>
      <Grid container spacing={4} sx={{ justifyContent: "center" }}>
        {data?.data.map((ingredient) => (
          <Grid item key={ingredient.slug} xs={12} md={6}>
            <IngredientCard {...ingredient} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Ingredients;
