var events = require('events');
var http = require("http");
var eventemit = new events.EventEmitter(); 
// Event handler to handle a event
var EH = function(req,res) { // emit handler
        console.log("Manav")
        console.log("Radhikesh Mishra");
}
var EREH = function(err){
    if(err)
    {
        console.log("Server is not wroking");
    }
}
http.createServer(function(req,res){
    res.write("Radhikesh");
    console.log("4001 SERVER IS WORKING");
    eventemit.on("Name", EH);
    eventemit.emit("Name");
    eventemit.on("Error",EREH);
    eventemit.emit("Error");
    res.end();
}).listen(4001);
// Emit or release
//eventemit.on("Name", EH);
//eventemit.emit("Name");
