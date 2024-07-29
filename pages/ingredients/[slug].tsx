import Container from "@mui/material/Container";
import { NextPage } from "next";
import { IngredientSlug } from "@types";
import { IngredientCard, Link } from "@components";
import { useRouter } from "next/router";
import { useIngredient } from "@hooks";
import { Box, Button, colors } from "@mui/material";

export const Ingredient: NextPage = () => {
  const { query, back } = useRouter();
  const router = useRouter();

  const { data, isLoading } = useIngredient(
    query.slug as IngredientSlug,
    !!query.slug
  );


  if (isLoading) return <p>Loading...</p>;

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
