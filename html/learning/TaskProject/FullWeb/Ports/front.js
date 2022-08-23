const http = require('http');
const hostname = '127.0.0.1';
const port = 3004;
const fs = require("fs");

let front = fs.readFileSync("Files/new4.html", "utf-8");
let test = fs.readFileSync("Files/test.html", "utf-8");
let back = fs.readFileSync("Files/new4.js", "utf-8");



const server = http.createServer((req, res) => {
  url = req.url;
  console.log(url);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  // res.end(front);
  if(url == "/front"){
  res.end(front);
  }
  else if(url == "/back"){
    res.end(back);
  }
  else if(url == "/test"){
    res.end(test);
  }
  else{
    res.end("Errr");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});