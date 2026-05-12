const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/student", (req, res) => {
  const student_info = {
    name: "Taisin Nigar Tisha",
    id: "232031033",
    department: "Computer Science & Engineering",
    university: "Feni University",
    batch: "31st",
    email: "taisintisha@gmail.com",
    cgpa: 3.90,
  };

  res.json(student_info);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
