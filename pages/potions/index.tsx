import { NextPage } from "next";
import Container from "@mui/material/Container";
import { Grid, Typography } from "@mui/material";

import { usePotions } from "@hooks";
import { PotionCard } from "@components";

export const Potions: NextPage = () => {
  const { data, isLoading } = usePotions();
  if (isLoading) return <p>Chargement de la liste des potions</p>;

  return (
    <Container>
      <Typography variant="h4" sx={{mb: 4, textAlign: 'center'}}>Liste des potions</Typography>

      <Grid container spacing={4} sx={{ justifyContent: "center" }}>
      {data?.data.map((potion) => (
          <Grid item key={potion.slug}xs={12} md={6}>
            <PotionCard {...potion} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Potions;
