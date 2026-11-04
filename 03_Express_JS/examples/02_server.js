import express from "express";

const app = express();

app.get("/doctor", (req, res) => {
  res.json({
    doctorName: "Dr. Rahul",
    age: 40,
    specialization: "Cardiologist",
    experience: "10 Years",
    hospital: "City Hospital"
  });
});

const port = 5004;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});