import { NextPage } from "next";
import { useRouter } from "next/router";
import Container from "@mui/material/Container";
import { Box, Button } from "@mui/material";

import { PotionSlug } from "@types";
import { PotionCard } from "@components";
import { usePotion } from "@hooks";

export const Potion: NextPage = () => {
  const router = useRouter();

  const { data, isLoading } = usePotion(
    router.query.slug as PotionSlug,
    !!router.query.slug
  );

  if (isLoading) return <p>Chargement de la potion</p>;

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
      {data?.data && <PotionCard {...data.data} />}
    </Container>
  );
};

export default Potion;
