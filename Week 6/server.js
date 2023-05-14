const http = require('http');
const express = require('express')
const app = express()

const hostname = '127.0.0.1';
const port = 3000;

const fs = require('fs');

let counter = 0;

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/"){
        res.statusCode = 200;
        fs.readFile('./index.html', (err, data)=>{
            if (err) {
                res.writeHead(500);
                res.end("Error!")
            }
            else {
                res.writeHead(200, {'Content-Type': "text/html"});
                res.end(data);
            }
        })
    }
    else if (req.url === "/about"){
        counter += 1
        res.statusCode = 200;
        res.setHeader('Content-Type', "text/plain");
        res.end("<h1> About </h1>");
    }
    else if (req.url === "/contact"){
        res.statusCode = 200;
        res.setHeader('Content-Type', "text/plain");
        res.end("" + counter);
    }
    else if (req.url === "/style.css")
    {
        fs.readFile('./style.css', (err, data)=>{
            if (err) {
                res.writeHead(500);
                res.end("Error!")
            }
            else {
                res.writeHead(200, {'Content-Type': "text/css"});
                res.end(data);
            }
        })   
    }
    else{
        res.writeHead(404);
        res.end("Page not found");
    }
});

// server.listen(port, hostname, ()=>{
//     console.log('server running!');
// })

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/*.css', (req, res) => res.send("CSS file"));