var http = require("http")
http.createServer(function(req,res){
    res.writeHead(200,{'Context-type':'html'});
    res.write("Hi Radhikesh");
    res.end();
}).listen(4002);