const http = require('http')
const fs = require("fs")
const server = http.createServer((req, res)=>{
    const data = fs.readFileSync("./userJson.json", "utf-8");
     const objData = JSON.parse(data)
    if(req.url === "/") {
        res.end("you hitting server")
    }
    else if(req.url === "/userAPI") {
        //res.end("hellow")
        
        res.writeHead(200,{'Content-type':"application/json "})
        res.end(objData[2]?.name)
    }
    else {
        res.writeHead(404,{'Content-type':"text/html"})
        res.end("<h1>This page doesn't exsist</h1>")
    }
})
server.listen(8000, "127.0.0.1", ()=>{
    console.log("listening")
})