import Container from "@mui/material/Container";
import { NextPage } from "next";
import { IngredientCard } from "@components";
import { Grid } from "@mui/material";
import { useIngredients } from "@hooks";

export const Ingredients: NextPage = () => {
  const { data } = useIngredients();

  return (
    <Container>
      <Grid container spacing={1} sx={{ justifyContent: "center" }}>
        {data?.data.map((ingredient) => (
          <Grid item key={ingredient.slug} xs={12} md={6} lg={4}>
            <IngredientCard {...ingredient} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Ingredients;
