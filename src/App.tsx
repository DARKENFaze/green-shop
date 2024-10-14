import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
// Sahifalar komponentlarini import qilish
// import Home from "./pages/Home";
import Shop from "./pages/Shop";
import PlantCare from "./pages/PlantCare";
import Blogs from "./pages/Blogs";
import "./App";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/plant-care" element={<PlantCare />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
