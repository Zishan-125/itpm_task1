const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

const FILE_PATH = "./todos.json";

function readTodos() {
  const data = fs.readFileSync(FILE_PATH);
  return JSON.parse(data);
}

function writeTodos(todos) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(todos, null, 2));
}

app.get("/", (req, res) => {
  res.send("Todo API is running");
});

app.get("/todos", (req, res) => {
  const todos = readTodos();
  res.json(todos);
});

app.get("/todos/:id", (req, res) => {
  const todos = readTodos();

  const todo = todos.find((t) => t.id === Number(req.params.id));

  if (!todo) {
    return res.status(404).json({
      message: "Todo not found"
    });
  }

  res.json(todo);
});

app.post("/todos", (req, res) => {
  const todos = readTodos();

  const newTodo = {
    id: todos.length + 1,
    title: req.body.title,
    completed: req.body.completed || false
  };

  todos.push(newTodo);

  writeTodos(todos);

  res.status(201).json(newTodo);
});

app.put("/todos/:id", (req, res) => {
  const todos = readTodos();

  const todo = todos.find((t) => t.id === Number(req.params.id));

  if (!todo) {
    return res.status(404).json({
      message: "Todo not found"
    });
  }

  todo.title = req.body.title || todo.title;
  todo.completed = req.body.completed ?? todo.completed;

  writeTodos(todos);

  res.json(todo);
});

app.delete("/todos/:id", (req, res) => {
  let todos = readTodos();

  const todo = todos.find((t) => t.id === Number(req.params.id));

  if (!todo) {
    return res.status(404).json({
      message: "Todo not found"
    });
  }

  todos = todos.filter((t) => t.id !== Number(req.params.id));

  writeTodos(todos);

  res.json({
    message: "Todo deleted successfully"
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Todo API running on port ${PORT}`);
});