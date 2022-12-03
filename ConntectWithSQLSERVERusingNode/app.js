// require("dotenv").config();

// require("express-async-errors");


// // const { application } = require("express");
// const express = require("express")
// // const bp = require('body-parser')

// const app = express();


// const connectDB = require("./db/connect")

// const autnenticateUser = require("./middlerware/authentication")
// // const connectDB = require("./db/connect");
// // route
// // const productsRouter = require("./routes/products");
// const authRouter = require("./routes/auth");
// const jobRouter = require("./routes/jobs");



// const errorHandlerMiddleware = require("./middlerware/error-handler")
// const notFoundMiddleware = require("./middlerware/not-found");

// app.use(express.json())

// app.get('/', (req, res) => {

//     res.send(`<h1>Store APi</h1 ><a href="#"> Products route</a>`)

// })

// // app.use('/api/v1/', mainRouter);

// app.get("/check", (req, res) => {

//     res.send('hello')

// })
// app.use("/api/v1/auth", authRouter);
// app.use("/api/v1/jobs", autnenticateUser, jobRouter);

// app.use(errorHandlerMiddleware);
// app.use(notFoundMiddleware);
// const Port = process.env.PORT || 5000


// const start = async () => {
//     try {
//         // await connectDB(process.env.MONGO_URI);
//         await connectDB(process.env.MONGO_URI);
//         app.listen(Port, console.log(`you current Port is ${Port}`));
//     } catch (error) {
//         console.log(error);
//     }
//     //   connectDB

// }

// start()



// const dboperations = require("./controllers/dboperation")

// dboperations.getOrders().then(result => {

//     console.log(result);
// })
// const express = require("express")
// var app = express();
// const sql = require('mssql');
// const connect = {
//     user: 'DESKTOP-MICC6SV',
//     server: 'localhost',
//     database: 'WideWorldImporters',
//     requestTimeout: 15000,
//     stream: true,
//     pool: {
//         max: 10,
//         min: 0,
//         idleTimeoutMillis: 30000,
//     },
//     options: {
//         keepAlive: true,
//         encrypt: true,
//         enableArithAbort: true,
//         trustedconnection: true,
//         instancename: 'MSSQLSERVERR'
//     },
//     port: 49677
// };
// // const connect = {
// //     user: 'DESKTOP-MICC6SV',
// //     server: '127.0.0.1',
// //     database: 'WideWorldImporters',
// //     options: {
// //         trustedconnection: true,
// //         enableArithAbort: true,
// //         instancename: 'MSSQLSERVERR'
// //     },
// //     port: 49677
// // }


// app.get('/', function (req, res) {
//     var request = new sql.Request();
//     request
//         .query('select *  from Application.Cities', function (
//             err,
//             recordset,
//         ) {
//             if (err) {
//                 return console.error(err);
//             }
//             res.send(recordset);
//         });
// });

// // only start the express app once the DB connection is established
// sql.connect(connect, (err, pool) => {
//     if (err) {
//         return console.error(err);
//     }
//     console.log('DB connection established - starting web server');
//     const server = app.listen(49677, function () {
//         console.log('Web server is running.....');
//     });
//     server.on('close', sql.close.bind(sql));
// });


require('dotenv').config(); //to access the process.env params

const sql = require("mssql/msnodesqlv8"); //mssql object


// var dbConfig = {
//     user: "test123",
//     password: "123",
//     server: "127.0.0.1",
//     port: 49677,
//     database: "WideWorldImporters",
//     options: {
//         database: 'WideWorldImporters',
//         trustServerCertificate: true,
//         instancename: 'MSSQLSERVERR'
//     }
// };

var dbConfig = {
    server: '127.0.0.1',
    port: 49677,
    database: "WideWorldImporters",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
};

// try {

//     sql.connect(dbConfig,
//         function (err) {
//             if (err) {
//                 console.log("Error while connecting database: " + err)
//             } else {
//                 console.log("connected to database: " + dbConfig.server)

//             }
//         }
//     ).then(async function () {
//                             // Function to retrieve the data from table
//                             const result = await sql.query(`select *  from Application.Cities`)
//                             console.log(result)

// } catch (error) {

// }
// dbConnect()
try {
    //connection config will be used here to connect to the local/remote db
    sql.connect(dbConfig)
        .then(async function () {
            // Function to retrieve the data from table
            const result = await sql.query(`select *  from Application.Cities`)
            console.log(result)

        }).catch(function (error) {
            console.log(error);
        });
} catch (error) {
    console.log(error);
}