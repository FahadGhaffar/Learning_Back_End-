const http = require("http");
const express = require("express");


const task = require("./routes/tasks")
const connectDB = require("./db/connect")
require('dotenv').config()
const app = express();

app.use(express.json())
// const server = http.createServer((req, res) => {

//     res.write("Hellow world")
//     res.end()


// });
app.get("/Task", (req, res) => {


    res.send("Welcome to task")
});

app.use('/api/v1/tasks', task)
// console.log("hello")


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(5000, console.log("server is working on post 5000"))
    } catch (error) {
        console.log(error)
    }

}

start()



