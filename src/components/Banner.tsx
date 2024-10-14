import React, { useEffect, useState } from "react";
import axios from "axios";
import "../sass/Banner.scss";

const Banner: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/banner-data");
        setData(response.data);
      } catch (error) {
        console.error("API ma'lumotlarini olishda xatolik:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <p>Yuklanmoqda...</p>; // Ma'lumotlar yuklanmaguncha kutish
  }

  return (
    <div className="container">
      <section className="main-banner">
        <div className="banner-content">
          <p>{data.welcomeMessage}</p>
          <h1>
            {data.title} <span>{data.highlightedWord}</span>
          </h1>
          <p className="lorem-text">{data.description}</p>
          <button className="banner-btn">{data.buttonText}</button>
        </div>

        <div className="flowers">
          <img
            className="smallFlower"
            src={data.smallFlowerUrl}
            alt="Small Flower"
          />
          <img src={data.bigFlowerUrl} alt="Big Flower" />
        </div>
      </section>
    </div>
  );
};

export default Banner;
