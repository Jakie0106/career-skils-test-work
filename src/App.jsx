import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import CatalogPage from "./pages/CatalogPage/CatalogPage.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";
import Header from "./components/Header/Header.jsx";
import CamperDetailsPage from "./pages/CamperDetailsPage/CamperDetailsPage.jsx";
// import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/campers/:id" element={<CamperDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
