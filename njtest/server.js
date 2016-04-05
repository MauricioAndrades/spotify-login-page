/*load the http lib*/

var http = require("http");

/*create http server*/

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("hello World");
    response.end();
}).listen(8888);