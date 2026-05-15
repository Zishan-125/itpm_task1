const todoService = require('../services/todoService');

    res.status(200).json({
      success: true,
      data: todo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Todo
const updateTodo = async (req, res) => {
  try {
    const updatedTodo = await todoService.updateTodo(
      req.params.id,
      req.body
    );

    if (!updatedTodo) {
      return res.status(404).json({
        success: false,
        message: 'Todo not found',
      });
    }

    res.status(200).json({
      success: true,
      data: updatedTodo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Todo
const deleteTodo = async (req, res) => {
  try {
    const deleted = await todoService.deleteTodo(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: 'Todo not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Todo deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createTodo,
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo,
};
