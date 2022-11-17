require("dotenv").config();

require("express-async-errors");


// const { application } = require("express");
const express = require("express")
// const bp = require('body-parser')

const app = express();
const router = express.Router();

// const connectDB = require("./db/connect");

// const productsRouter = require("./routes/products");

const errorHandlerMiddleware = require("./middlerware/error-handler")
const notFoundMiddleware = require("./middlerware/not-found");

app.use(express.json())

app.get('/', (req, res) => {

    res.send(`<h1>Store APi</h1 ><a href="#"> Products route</a>`)

})

// app.use('/api/v1/', mainRouter);

app.get("/check", (req, res) => {

    res.send('hello')

})
app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);
const Port = process.env.PORT || 5000


const start = () => {
    try {
        // await connectDB(process.env.MONGO_URI);
        app.listen(Port, console.log(`you current Port is ${Port}`));
    } catch (error) {
        console.log(error);
    }
    //   connectDB

}

start()