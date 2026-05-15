const { v4: uuidv4 } = require('uuid');
      matched =
        matched &&
        todo.title.toLowerCase().includes(query.title.toLowerCase());
    }

    return matched;
  });
};

// Update Todo
const updateTodo = async (id, updatedData) => {
  const todos = await readTodos();

  const index = todos.findIndex((todo) => todo.id === id);

  if (index === -1) {
    return null;
  }

  todos[index] = {
    ...todos[index],
    ...updatedData,
    updatedAt: new Date().toISOString(),
  };

  await writeTodos(todos);

  return todos[index];
};

// Delete Todo
const deleteTodo = async (id) => {
  const todos = await readTodos();

  const index = todos.findIndex((todo) => todo.id === id);

  if (index === -1) {
    return false;
  }

  todos.splice(index, 1);

  await writeTodos(todos);

  return true;
};

module.exports = {
  createTodo,
  getAllTodos,
  getTodoById,
  getTodosByQuery,
  updateTodo,
  deleteTodo,
};
