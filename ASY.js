// Asynchronius
setTimeout(function(){
    console.log("Radhikesh");
},10000);
console.log("Manav");
var http = require("http")
http.createServer (function(req,res,err){
    if(err){
        return console.log("error");
    }
    else{
    setTimeout(function(){
        res.write("Hi Radhikesh");
        res.end();
    },1000);
    res.write("Manav ")
    console.log("Servser Is Working");
}
   // res.end();
}).listen(4000);
