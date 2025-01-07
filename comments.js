// Import the http module
const http = require('http');

// Define the port to listen on
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// Listen on the specified port
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});