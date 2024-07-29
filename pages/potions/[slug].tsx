import Container from "@mui/material/Container";
import { NextPage } from "next";
import { PotionSlug } from "@types";
import { Link, PotionCard } from "@components";
import { useRouter } from "next/router";
import { usePotion } from "@hooks";

export const Potion: NextPage = () => {
  const router = useRouter();

  const { data, isLoading } = usePotion(
    router.query.slug as PotionSlug, !!router.query.slug
  );

  if (isLoading) return <p>Loading...</p>;

  return (
    <Container>
      <Link href={'/potions'}>Retour</Link>
      {data?.data && <PotionCard {...data.data} />}
    </Container>
  );
};

export default Potion;
