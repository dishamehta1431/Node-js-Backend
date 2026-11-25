import express from "express";

const app = express();

app.set("view engine", "ejs");

const productList = [
  {
    id: 1,
    name: "laptop",
    price: 50000,
  },
  {
    id: 2,
    name: "mobile",
    price: 20000,
  },
  {
    id: 3,
    name: "headphones",
    price: 1400,
  },
];

app.get("/", (req, res) => {
  res.render("product", { productList });
});

const port = 2005;

app.listen(port, (err) => {
  if (err) {
    return err;
  }

  console.log(`server running on port ${port}`);
});
