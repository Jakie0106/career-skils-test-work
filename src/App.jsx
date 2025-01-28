import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import CatalogPage from "./pages/CatalogPage/CatalogPage.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";
import Header from "./components/Header/Header.jsx";
// import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
