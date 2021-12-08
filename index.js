const fs = require('fs')
const http = require('http')
const url = require('url')
const server = http.createServer((req,res) => {
    const reqPath = req.url
    if(reqPath === '/firstname'){
       res.end("welcome DHANUSH")
    }else if(reqPath === '/fullname'){
        res.end("welcome kamarthi")
    }
    else if(reqPath === reqPath){
         res.end("welcome...!")
    }
   else{
    res.end("<h1>404 error<\h1>")
   }
    console.log(req.url)
    
})

server.listen(8000,'127.0.0.1',() => {
    console.log('listening on port 8000')
})