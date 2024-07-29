import Container from "@mui/material/Container";
import { NextPage } from "next";
import { Box, Button, Typography } from "@mui/material";
import { FormEvent, useState } from "react";
import { useUserContext } from "src/context/userContext";

export const Home: NextPage = () => {
  // const { user, setUsername } = useUserContext();

  const [test, setTest] = useState("");

  const update = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

  }
  return (
    <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: "calc(100vh-4rem))" }}>
      <Box>
        <Typography variant="h4" component="h1" sx={{ mb: 6, textAlign: 'center' }}>
          Bienvenue sur le jeu des potions
        </Typography>
        <Button variant="contained" size="large">
          commencer l'aventure
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
