// Hello World 
console.log("Hello World");
// Server -> Hello 
var http = require("http");
http.createServer(function(req,res){
    res.write("Hello Radhikesh Mishra");
    res.end();
}).listen(8081);