import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
<<<<<<< HEAD
// Sahifalar komponentlarini import qilish
<<<<<<< HEAD
=======
=======
>>>>>>> 16618be529007c1f6f1ab527f0b0930d7e18af74
>>>>>>> 5c985a7240b091c731f0e7ef81bc38168d14d732
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import PlantCare from "./pages/PlantCare";
import Blogs from "./pages/Blogs";
import ProductPage from "./pages/ProductChekout";
import "./App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/plant-care" element={<PlantCare />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/ProductChekout" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
