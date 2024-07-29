import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Container,
  Paper,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { routes } from "@types";
import { usePathname, useRouter } from "next/navigation";

type PageLayoutProps = {
  children: React.ReactNode;
};

export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  const router = useRouter();

  const pathname = usePathname();
  const [currentRoute, setCurrentRoute] = useState<string>(pathname);
  
  useEffect(() => {
    routes.find((route) => route.path === pathname) && setCurrentRoute(pathname)
  }, [pathname, currentRoute, router]);

  const goTo = (newValue: string) => {
    setCurrentRoute(newValue)
    router.push(newValue)
  }

  return (
    <Container maxWidth="lg">
      <Box pt={5} pb={12}>
        {children}
      </Box>
      {currentRoute && (
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 1 }}
          elevation={20}
        >
          <BottomNavigation
            showLabels
            value={currentRoute}
            onChange={(event, newValue) => {
              goTo(newValue)
            }}
          >
            {routes
              .map((route) => (
                <BottomNavigationAction
                  key={route.label}
                  label={route.label}
                  value={route.path}
                />
              ))}
          </BottomNavigation>
        </Paper>
      )}
    </Container>
  );
};

export default PageLayout;
