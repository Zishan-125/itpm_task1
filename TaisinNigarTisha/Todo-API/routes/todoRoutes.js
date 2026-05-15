const express = require('express');
const router = express.Router();

const {
  createTodo,
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/todoController');

// Create Todo
router.post('/', createTodo);

// Get All Todos or Query Todos
router.get('/', getTodos);

// Get Single Todo
router.get('/:id', getTodo);

// Update Todo
router.put('/:id', updateTodo);

// Delete Todo
router.delete('/:id', deleteTodo);

module.exports = router;
