import React, { useEffect, useState } from "react";
import "../sass/Home.scss";

// Rasmlarni to'g'ridan-to'g'ri import qilish
import bigFlower from "../assets/img/bigFlower.svg";
import smallFlower from "../assets/img/smallFlower.svg";

const Banner: React.FC = () => {
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
          <p>{bannerData.welcomeMessage}</p>
          <h1>
            {bannerData.title} <span>{bannerData.highlightedWord}</span>
          </h1>
          <p className="lorem-text">{bannerData.description}</p>
          <button className="banner-btn">{bannerData.buttonText}</button>
        </div>

        <div className="flowers">
          <img className="smallFlower" src={smallFlower} alt="Small Flower" />
          <img src={bigFlower} alt="Big Flower" />
        </div>
      </section>
    </div>
  );
};

export default Banner;
