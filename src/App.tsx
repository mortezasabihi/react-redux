import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "@/pages";
import AxiosErrorHandler from "@/services/errorHandler/AxiosErrorHandler";

function App() {
  return (
    <>
      <AxiosErrorHandler />

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
    </>
  );
}

export default App;
