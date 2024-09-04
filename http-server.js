// 1. Write a Node.js program that creates a simple HTTP server. When a client sends a request to the server,
// the server should respond with a "Hello, Students!" message!



const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    res.end('Hello, Students!');
});

const port = 3000;


server.listen(port, () => {
    console.log(`Server is running and listening on port ${port}`);
});
