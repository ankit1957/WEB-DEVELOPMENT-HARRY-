const fs = require('fs');
const http = require("http")
const fileContent = fs.readFileSync('link_css.html')

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type': 'text/html'})
    res.end(fileContent)
})

server.listen(80, '127.0.0.2', ()=>{
    console.log("Listening on port 80")
})