import express from "express";

const app = express();

app.get("/product", (req, res) => {
  res.json({
    productName: "iPhone 16",
    price: 75000,
    category: "Electronics",
    brand: "Apple",
    available: true
  });
});

const port = 5007;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});