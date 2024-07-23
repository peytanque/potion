import Container from "@mui/material/Container";
import { NextPage } from "next";
import { PotionCard } from "@components";
import { Grid } from "@mui/material";
import { usePotions } from "@hooks";

export const Potions: NextPage = () => {
  const { data, isLoading } = usePotions();
  if (isLoading) return <p>Loading...</p>;

  return (
    <Container>
      <Grid container spacing={1} gap={1} sx={{ justifyContent: "center" }}>
        {data?.data.map((potion) => (
          <Grid item key={potion.slug} xs={12} md={5} lg={3}>
            <PotionCard {...potion} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Potions;
