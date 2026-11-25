import express from "express";

const app = express();

app.set("view engine", "ejs");

const studentList = [
  {
    id: 1,
    name: "dexter",
  },
  { id: 2, name: "alice" },
  { id: 3, name: "kuromi" },
];
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/add", (req, res) => {
  res.render("add", { studentList });
});

const port = 2008;

app.listen(port, (err) => {
  if (err) {
    return err;
  }

  console.log(`server is running on port ${port}`);
});
