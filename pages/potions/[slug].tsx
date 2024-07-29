import Container from "@mui/material/Container";
import { NextPage } from "next";
import { PotionSlug } from "@types";
import { Link, PotionCard } from "@components";
import { useRouter } from "next/router";
import { usePotion } from "@hooks";
import { Box, Button } from "@mui/material";

export const Potion: NextPage = () => {
  const router = useRouter();

  const { data, isLoading } = usePotion(
    router.query.slug as PotionSlug,
    !!router.query.slug
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
      {data?.data && <PotionCard {...data.data} />}
    </Container>
  );
};

export default Potion;
