var http = require("http")
http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'})
   response.end('Hello World using the daemon service helloworld.conf \n')
}).listen(3000)
console.log('Server running')
