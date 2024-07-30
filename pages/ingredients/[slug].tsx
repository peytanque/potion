import { NextPage } from "next";
import { useRouter } from "next/router";
import { Box, Button } from "@mui/material";
import Container from "@mui/material/Container";

import { IngredientSlug } from "@types";
import { useIngredient } from "@hooks";
import { IngredientCard } from "@components";

export const Ingredient: NextPage = () => {
  const { query } = useRouter();
  const router = useRouter();

  const { data, isLoading } = useIngredient(
    query.slug as IngredientSlug,
    !!query.slug
  );

  if (isLoading) return <p>Chargement de l'ingrédient...</p>;

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "fit-content",
          gap: 2,
          mb: 2,
        }}
      >
        {router.back && (
          <Button variant="text" color="primary" onClick={router.back}>
            Retour
          </Button>
        )}
      </Box>
      {data?.data && <IngredientCard {...data.data} />}
    </Container>
  );
};

export default Ingredient;
