const http = require('http');

const HOSTNAME = process.env.HOSTNAME || 'localhost';

const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello World');
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server runnint at http://${HOSTNAME}:${PORT}/`);
});

console.log(__filename);
console.log(__dirname);
