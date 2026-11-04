import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to City Hospital");
});

app.get("/patient", (req, res) => {
  res.status(201).json({
    message: "Patient registered successfully",
    name: "Alice",
    age: 25,
    disease: "Fever",
  });
});

app.get("/login", (req, res) => {
  res.status(401).send("Unauthorized: Please login first");
});

const port = 2002;

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`Server running on port ${port}`);
});