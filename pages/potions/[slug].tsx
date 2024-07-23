import Container from "@mui/material/Container";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { PotionsApiResponse, endpoints } from "@types";
import { PotionCard } from "@components";
import { Grid } from "@mui/material";

export const Potions: NextPage = () => {
  const [data, setData] = useState<PotionsApiResponse | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(endpoints.potions)
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
