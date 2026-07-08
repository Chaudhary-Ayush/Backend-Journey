// How to create server
const http = require('http');


const server = http.createServer((req, res)=>{
    res.end("First Server Created");
}) ;  // Here, req and res, both are objects. 

// How to listen the Server
server.listen(3000, ()=>{
    console.log("First Server is created")
});
