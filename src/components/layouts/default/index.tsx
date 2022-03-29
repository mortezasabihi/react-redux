import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Container, GlobalStyles, ThemeProvider } from "@mui/material";
import { globalStyles, theme } from "@/styles";

const DefaultLayout: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* global styles */}
      <GlobalStyles styles={globalStyles} />

      <Container component="main" sx={{ marginTop: 3 }}>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
};

export default DefaultLayout;
