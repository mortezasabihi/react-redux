import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "@/redux";
import { Home } from "@/pages";
import AxiosErrorHandler from "@/services/errorHandler/AxiosErrorHandler";
import DefaultLayout from "@/components/layouts/default";

function App() {
  return (
    <Provider store={store()}>
      <AxiosErrorHandler />

      {/* routes */}
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
