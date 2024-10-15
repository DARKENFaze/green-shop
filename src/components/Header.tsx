import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../sass/Header.scss";
import logoBrend from "../assets/icons/logoBrend.svg";
import serachIcon from "../assets/icons/search.svg";
import shopIcon from "../assets/icons/shopIcon.svg";
import loginIcon from "../assets/icons/loginIcon.svg";
import menuIcon from "../assets/icons/menu-toggle.svg"; // Menyu ikonasini import qiling

const Header: React.FC = () => {
  const [isNavVisible, setNavVisible] = useState(false); // Menyu ko'rsatish uchun holat

  const toggleNav = () => {
    setNavVisible((prev) => !prev); // Menyu holatini o'zgartiring
  };

  return (
    <div className="container">
      <header className="site-header">
        <div className="logo">
          <a href="/">
            <img src={logoBrend} alt="" />
            <h3>GREENSHOP</h3>
          </a>
        </div>

        <button className="menuToggle_btn">
          <div className="menu-icon" onClick={toggleNav}>
            <img src={menuIcon} alt="Menu" />
          </div>
        </button>

        {/* Menyu holatiga qarab ko'rsatiladi */}
        <nav className={isNavVisible ? "active" : ""}>
          <ul className="nav-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/plant-care">Plant Care</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </nav>

        <div className="header-caterogies">
          <img src={serachIcon} alt="" />
          <img className="shopICN" src={shopIcon} alt="" />
          <button className="LoginBtn">
            <img src={loginIcon} alt="" />
            <p>Login</p>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
