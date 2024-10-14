const express = require("express");
const path = require("path"); // Rasmlar uchun to'g'ri yo'l olish uchun kerak
const app = express();
const port = 5000;

// CORS (React frontend bilan ishlash uchun kerak)
const cors = require("cors");
app.use(cors());

// Statik fayllar uchun yo'l (tasvirlar uchun)
app.use("/assets/img", express.static(path.join(__dirname, "arc/assets/img")));

// Oddiy API marshruti
app.get("/banner-data", (req, res) => {
  res.json({
    welcomeMessage: "Welcome to GreenShop",
    title: "Let’s Make a Better",
    highlightedWord: "Planet",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants...",
    buttonText: "SHOP NOW",
    smallFlowerUrl: "http://localhost:5000/assets/img/smallFlower.svg", // To'liq URL manzillar
    bigFlowerUrl: "http://localhost:5000/assets/img/bigFlower.svg",
  });
});

// Serverni ishga tushirish
app.listen(port, () => {
  console.log(`Server http://localhost:${port} da ishlayapti`);
});
