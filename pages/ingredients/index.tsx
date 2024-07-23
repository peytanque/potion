import Container from "@mui/material/Container";
import { NextPage } from "next";
import { FC, useEffect, useState } from "react";
import { endpoints, IngredientsApiResponse } from "@types";
import { IngredientCard, SkeletonIngredientCard } from "@components";
import { Grid } from "@mui/material";
import { useIngredients } from "@hooks";

export const Ingredients: NextPage = () => {
  const { data, isLoading } = useIngredients()
  const skeletonData = [...Array(10)];

  return (
    <Container>
      <Grid container spacing={1} gap={1} sx={{ justifyContent: "center" }}>
        {isLoading
          ? skeletonData.map((_, index) => (
              <Grid item key={index} xs={12} md={5} lg={3}>
                <SkeletonIngredientCard />
              </Grid>
            ))
          : data?.data.map((ingredient) => (
              <Grid item key={ingredient.slug} xs={12} md={5} lg={3}>
                <IngredientCard {...ingredient} />
              </Grid>
            ))}
      </Grid>
    </Container>
  );
};

export default Ingredients;