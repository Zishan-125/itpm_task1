const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/student", (req, res) => {
  res.json({
    name: "Shifatun Mohsin Abisha",
    studentId: "232031056",
    department: "CSE",
    batch: "31st(UG)"
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});