const PORT = 3000;
const fs = require("fs")
const http = require("http")
const server = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type' :'text/html'})
    fs.readFile('index.html',(error,data) => {
        res.write(data)
        res.end()
    })
})

server.listen(PORT,(err) => {
    if(err){
        console.log("There is an error");
    }
    else{
        console.log(`Server is running on ${PORT}`);
        
    }
})