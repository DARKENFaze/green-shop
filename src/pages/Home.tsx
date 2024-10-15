import React, { useEffect, useState } from "react";
import "../sass/Home.scss";
import bigFlower from "../assets/img/bigFlower.svg";
import smallFlower from "../assets/img/smallFlower.svg";
import btnRightTo from "../assets/icons/Arrow - Right.svg";

const Home: React.FC = () => {
  const [bannerData, setBannerData] = useState<any>(null);

  useEffect(() => {
    fetch("http://localhost:5000/banner-data")
      .then((response) => response.json())
      .then((data) => setBannerData(data));
  }, []);

  if (!bannerData) return <div>Loading...</div>;

  return (
    <div className="container">
      <section className="main-banner">
        <div className="banner-content">
          <p className="welCome">{bannerData.welcomeMessage}</p>
          <h1>
            {bannerData.title} <span>{bannerData.highlightedWord}</span>
          </h1>
          <p className="lorem-text">{bannerData.description}</p>
          <button className="banner-btn">
            {bannerData.buttonText}
            <img src={btnRightTo} alt="" />
          </button>
        </div>

        <div className="flowers">
          <img className="smallFlower" src={smallFlower} alt="Small Flower" />
          <img className="bigFlower" src={bigFlower} alt="Big Flower" />
        </div>
      </section>
    </div>
  );
};

export default Home;
