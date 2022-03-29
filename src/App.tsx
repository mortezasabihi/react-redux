import { Provider } from "react-redux";
import { Container, GlobalStyles, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "@/redux";
import { Home } from "@/pages";
import AxiosErrorHandler from "@/services/errorHandler/AxiosErrorHandler";
import { globalStyles, theme } from "@/styles";

function App() {
  return (
    <Provider store={store()}>
      <ThemeProvider theme={theme}>
        <AxiosErrorHandler />

        {/* global styles */}
        <GlobalStyles styles={globalStyles} />

        <Container component="main" sx={{ marginTop: 3 }}>
          {/* routes */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Routes>
          </BrowserRouter>
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
