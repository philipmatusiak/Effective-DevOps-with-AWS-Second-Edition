var http = require("http");

http.createServer(function (request, response) {

   response.writeHead(200, {'Content-Type': 'text/plain'});

    response.end('Hello World\n');
   
}).listen(3000);

// Console will print the message
console.log('Server running');
