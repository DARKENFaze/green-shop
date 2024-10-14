import React from "react";
import { Link } from "react-router-dom";
import "../sass/Header.scss";
import logoBrend from "../assets/icons/logoBrend.svg";
import serachIcon from "../assets/icons/search.svg";
import shopIcon from "../assets/icons/shopIcon.svg";
import loginIcon from "../assets/icons/loginIcon.svg";

const Header: React.FC = () => {
  return (
    <div className="container">
      <header className="site-header">
        <div className="logo">
          <a href="/">
            <img src={logoBrend} alt="" />
            <h3>GREENSHOP</h3>
          </a>
        </div>
        <nav>
          <ul className="nav-menu">
            <li>
              <Link to="/">
                <a href="">Home</a>
              </Link>
            </li>
            <li>
              <Link to="/shop">
                <a href="">Shop</a>
              </Link>
            </li>
            <li>
              <Link to="/plant-care">
                <a href="">Plant Care</a>
              </Link>
            </li>
            <li>
              <Link to="/blogs">
                <a href="">Blogs</a>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-caterogies">
          <img src={serachIcon} alt="" />
          <img src={shopIcon} alt="" />
          <button>
            <img src={loginIcon} alt="" />
            <p>Login</p>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
