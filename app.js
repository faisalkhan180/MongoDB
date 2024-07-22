const express = require('express');
const mongoose = require('mongoose');
const todoListRouter = require('./Routers/route')
const app = express();

// connection strings
const URI = "mongodb+srv://faisalkhan:todo-list@todo-list.f7izm51.mongodb.net/?retryWrites=true&w=majority"

//routers
app.use(express.json());

app.use("/api/todo-list/", todoListRouter);

// DB connectivity
mongoose.connect(URI)
.then(()=>{
    app.listen(4000, ()=>{
        console.log("connect to DB and Listening on port 4000")
    })
})
.catch((Error)=>{
    console.log(Error)
})
