const http = require('http');
http.createServer((req, res) => {
 res.write("HaHa");
 res.end();
}).listen(3001);

console.log("Server started on port 3001.")
