import React from "react";
import "../sass/Shop.scss";
import Pro from "../assets/img-shop/product-img.svg";
import imgpro from "../assets/img-shop/img-pro.svg";
import fonimgPro from "../assets/img-shop/fon-img.svg";
import search from "../assets/img-shop/search.svg";
import star from "../assets/img-shop/Star.svg";

const Shop: React.FC = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="home-span">
            <a href="/">Home</a>
            <a href="./Shop">Shop</a>
          </div>
          <div className="section-fon">
            <div className="section-left">
              <div className="about-img-left">
                <div className="imgs">
                  <img src={Pro} alt="No img" />
                </div>
                <div className="imgs">
                  <img src={imgpro} alt="No img" />
                </div>
                <div className="imgs">
                  <img src={Pro} alt="No img" />
                </div>
                <div className="imgs">
                  <img src={imgpro} alt="No img" />
                </div>
              </div>
              <div className="about-img-right">
                <div className="serch">
                  <img src={search} alt="" />
                </div>
                <div className="img-fonname">
                  <img src={fonimgPro} alt="" />
                </div>
              </div>
            </div>
            <div className="section-right">
              <h1>Barberton Daisy</h1>
              <div className="price">
                <h2>$119.00</h2>
                <div className="stars">
                  <img src={star} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
