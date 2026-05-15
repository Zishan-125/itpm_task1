const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, '../data/todos.json');

// Read todos from file
const readTodos = async () => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// Write todos to file
const writeTodos = async (todos) => {
  await fs.writeFile(filePath, JSON.stringify(todos, null, 2));
};

module.exports = {
  readTodos,
  writeTodos,
};
