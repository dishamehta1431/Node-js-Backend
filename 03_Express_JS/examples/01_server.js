import express from "express";

const app = express();

app.get("/user", (req, res) => {
  res.json({
    name: "Disha",
    age: 19,
    role: "Developer"
  });
});

const port = 5002;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});