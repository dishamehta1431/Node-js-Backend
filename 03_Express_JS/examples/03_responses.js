import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to ABC College");
});

app.get("/admin", (req, res) => {
  res.status(403).send("Access denied: Only admin allowed");
});

app.get("/server-error", (req, res) => {
  res.status(500).send("Internal Server Error");
});

const port = 3002;

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`Server running on port ${port}`);
});