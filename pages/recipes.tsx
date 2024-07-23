import Container from "@mui/material/Container";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { RecipesApiResponse } from "@types";
import { RecipeCard } from "@components";
import { Grid } from "@mui/material";

export const Recipes: NextPage = () => {
  const [data, setData] = useState<RecipesApiResponse | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/recipes")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <Container>
      <Grid container spacing={1} gap={1} sx={{ justifyContent: "center" }}>
        {data?.data.map((recipe) => (
          <Grid item key={recipe.slug} xs={12} md={5} lg={3}>
            <RecipeCard {...recipe} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Recipes;
