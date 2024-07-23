import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { green, teal } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: teal,
    secondary: green,
  },

  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
