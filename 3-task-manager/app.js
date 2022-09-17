const http = require("http");
const express = require("express");


const task = require("./routes/tasks")
const connectDB = require("./db/connect")
require('dotenv').config()
const notFound = require("./middleware/not-fount");

const app = express();
app.use(express.json())
app.use(express.static('./public'))
// const server = http.createServer((req, res) => {

//     res.write("Hellow world")
//     res.end()


// });
// app.get("/Task", (req, res) => {


//     res.send("Welcome to task")
// });

app.use('/api/v1/tasks', task)

app.use(notFound);


// console.log("hello")
const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is working on post ${port}`))
    } catch (error) {
        console.log(error)
    }

}

start()



