/* jshint esnext: true */

var http = require("http");

http.createServer(function(req, res) {

   res.writeHead(200, {"Content-Type": "text/html"});
   res.end(`<!DOCTYPE html>
     <html>
       <head>
         <title>Web Server</title>
       </head>
       <body>
         <h1>Hello Bill's Other World</h1>
     </html>
   `);

}).listen(8080);

console.log("Web Server running at http://localhost:8080");
