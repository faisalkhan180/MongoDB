const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoListSchema = new Schema({
    title :{
        type : String,
        required : true
    },
    description :{
        type : String,
        required : true
    }
}, {timestamps : true})

const TodoList = mongoose.model("todoList", todoListSchema);
module.exports = TodoList;
