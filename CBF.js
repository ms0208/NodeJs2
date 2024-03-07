var http = require("http");
// create server = req and res permanent
http.createServer(function(req,result,err){
    if(err)
    {
        return console.log("Error");
    }
    else{
        result.write("Hi Manav")
        result.end();
    }
}).listen(4002);