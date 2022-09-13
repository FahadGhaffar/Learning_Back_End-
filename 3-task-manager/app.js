const http = require("http");


const server = http.createServer((req, res) => {

    res.write("Hellow world")
    res.end()


});

server.listen(5000) 