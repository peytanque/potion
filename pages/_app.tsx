import Head from "next/head";
import { AppProps } from "next/app";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../src/theme";
import { PageLayout } from "@components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const App = (props: AppProps) => {
  const queryClient = new QueryClient();

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
        <QueryClientProvider client={queryClient}>
          <PageLayout>
            <Component {...pageProps} />
          </PageLayout>
        </QueryClientProvider>
        {/* </Box> */}
      </ThemeProvider>
    </AppCacheProvider>
  );
};

export default App;
