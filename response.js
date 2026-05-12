const express = require('express');
const app = express();
const PORT = 3000;


app.get('/student', (req, res) => {
   
    const studentInfo = {
        id: 232031009,
        name: "Abdullah Al Mamun Zishan",
        department: "Computer Science and Engineering",
        gpa: 3.5,
        enrolled: true,
        courses: ["Data Structures", "Compiler Design", "Discrete Math"]
    };

  
    res.json(studentInfo);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});