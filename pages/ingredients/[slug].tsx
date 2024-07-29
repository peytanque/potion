import Container from "@mui/material/Container";
import { NextPage } from "next";
import { IngredientSlug } from "@types";
import { IngredientCard, Link } from "@components";
import { useRouter } from "next/router";
import { useIngredient } from "@hooks";
import { Button } from "@mui/material";

export const Ingredient: NextPage = () => {
  const { query, back } = useRouter();

  const { data, isLoading } = useIngredient(
    query.slug as IngredientSlug,
    !!query.slug
  );

  if (isLoading) return <p>Loading...</p>;

  return (
    <Container>
      <Button variant="contained" onClick={() => back()} sx={{mb: 4}}>Retour</Button>
      {data?.data && <IngredientCard {...data.data} />}
    </Container>
  );
};

export default Ingredient;
