import Head from "next/head";
import { AppProps } from "next/app";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../src/theme";
import { Box } from "@mui/material";
import { PageLayout } from "@components";

export const App = (props: AppProps) => {
  const { Component, pageProps } = props;
  return (
    <AppCacheProvider {...props}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {/* <Box component="section" sx={{ height: "100vh" }}> */}
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
        {/* </Box> */}
      </ThemeProvider>
    </AppCacheProvider>
  );
};

export default App;
