//import Node.js core module
const http = require('http');//import http from 'http'
//creating server
const server = http.createServer(function(req, res){
    //handle incoming requested here
    if(req.url=="/"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('This is home Page.');
        res.end();
    }else if(req.url=="/student"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('This is student Page.');
        res.end();
    }else if(req.url=="/admin"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('This is admin Page.');
        res.end();
    }else if(req.url=="/data"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(JSON.stringify({"message":"Hello World JSON"}));
        res.end();
    }else{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('Invalid Request!');
        res.end();
    }
    
})
server.listen(8080)//listen for any incoming request
console.log('Node js web server as port 8080 is running..')