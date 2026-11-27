import express from "express";

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const studentList = [
  {
    id: 1,
    name: "dexter",
  },
  { id: 2, name: "alice" },
  { id: 3, name: "kuromi" },
];
app.get("/", (req, res) => {
  res.render("home", { studentList });
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.post("/add", (req, res) => {
  const { name } = req.body;
  const newStudent = {
    id: studentList.length + 1,
    name,
  };

  studentList.push(newStudent);

  res.redirect("/");
});

app.get("/edit/:id", (req, res) => {
  const { id } = req.params;
  const student = studentList.find((s) => s.id === Number(id));

  res.render("edit", { student });
});

app.post("/edit/:id", (req, res) => {
  const { id } = req.params;

  const index = studentList.findIndex((s) => s.id === Number(id));
  const { name } = req.body;

  studentList[index] = {
    id: Number(id),
    name,
  };

  res.redirect("/");
});

app.get("/delete/:id", (req, res) => {
  const { id } = req.params;
  const index = studentList.findIndex((s) => s.id === Number(id));

  studentList.splice(index, 1);

  res.redirect("/");
});

const port = 2008;

app.listen(port, (err) => {
  if (err) {
    return err;
  }

  console.log(`server is running on port ${port}`);
});
