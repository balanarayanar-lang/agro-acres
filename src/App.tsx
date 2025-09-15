import {BrowserRouter, Routes, Route} from "react-router-dom";
import Gallery from "./components/gallery/Gallery";
import {LandingPage} from "./components/landingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LandingPage />}
        />
        <Route
          path="/gallery"
          element={<Gallery />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
