var http = require('http');
var url = require('url');
var fs = require('fs')

const server = http.createServer((req, res) => {
console.log(req);
res.writeHead(200, {'content-type': 'text/html'})
fs.createReadStream('index.html').pipe(res)

});


const port = process.env.PORT || 8000;
server.listen(port);

console.log("Server running at http://localhost:%d", port);