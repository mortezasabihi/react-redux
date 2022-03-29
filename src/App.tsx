import { Provider } from "react-redux";
import { Container } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "@/redux";
import { Home } from "@/pages";
import AxiosErrorHandler from "@/services/errorHandler/AxiosErrorHandler";

function App() {
  return (
    <Provider store={store()}>
      <AxiosErrorHandler />

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
    </Provider>
  );
}

export default App;
