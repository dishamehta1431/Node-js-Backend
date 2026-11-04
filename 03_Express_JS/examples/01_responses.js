import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Shopping Store");
});

app.get("/about", (req, res) => {
  res.send("We sell electronic products");
});

app.get("/product", (req, res) => {
  res.send({
    name: "Laptop",
    price: 45000,
    brand: "HP",
  });
});

const product = {
  name: "iPhone",
  price: 75000,
  brand: "Apple",
};

app.get("/json", (req, res) => {
  res.status(200).json({
    message: "Product fetched successfully",
    product,
  });
});

const port = 2000;

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`Server running on port ${port}`);
});