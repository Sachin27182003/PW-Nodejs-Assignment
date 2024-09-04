// Write a Node.js program that creates an HTTP server and handles different routes. The server should
// respond with "Hello, World!" for the root route ("/") and "Page Not Found" for any other route.


const http = require('http');


const server = http.createServer((req, res) => {
    
    if (req.url === '/') {
        
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World!');
    } else {
        
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found');
    }
});


const port = 3000;


server.listen(port, () => {
    console.log(`Server is running and listening on port ${port}`);
});
