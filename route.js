const express = require('express');

const router = express();
const {
    getAllTodos, 
    getSingleTodo,
     createTodo,
      deleteTodo, 
      updateTodo
    } = require("../todoList-Controllers/todoListControllers")


// get all todo's
router.get("/", getAllTodos);

//Get Single todo
router.get("/:id", getSingleTodo);

//Create New Todo
router.post("/", createTodo);

//Delete todo
router.delete("/:id", deleteTodo);

//updata Todo
router.patch("/:id", updateTodo);

module.exports = router;