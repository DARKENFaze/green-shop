const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors());

// API orqali matnlarni yuborish
app.get("/banner-data", (req, res) => {
  res.json({
    welcomeMessage: "Welcome to GreenShop",
    title: "Let’s Make a Better",
    highlightedWord: "Planet",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants...",
    buttonText: "SHOP NOW",
  });
});

app.listen(port, () => {
  console.log(`Server http://localhost:${port} da ishlayapti`);
});
