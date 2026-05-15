const express = require('express');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/todos', todoRoutes);

app.get('/', (req, res) => {
  res.send('Todo API is running...');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
