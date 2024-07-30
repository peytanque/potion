import Head from "next/head";
import { AppProps } from "next/app";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import theme from "../src/theme";

import { PageLayout } from "@components";
import { UserProvider } from "@context";

export const App = (props: AppProps) => {
  const queryClient = new QueryClient();

  const { Component, pageProps } = props;
  return (
    <AppCacheProvider {...props}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
            <UserProvider>
          <PageLayout>
              <Component {...pageProps} />
          </PageLayout>
            </UserProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </AppCacheProvider>
  );
};

export default App;
