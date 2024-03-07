// Read a File.
// Sync
var fs = require("fs");
try {
    var data = fs.readFileSync('input.txt');
    console.log(data.toString());
} catch (err) {
    console.error("Error reading file:",err);
}
// Async
var fs = require("fs");
fs.readFile('output.txt',(err,data) =>
{
    if(err){
        return console.error(err);
    }
    else{
     console.log(data.toString()); 
    }
});
// Open a file
var fs2 = require('fs');
fs2.open('input1.txt','r',function(err,fd){
    if(err){
        return console.error(err);
    }
    console.log("File open");
})
// File Information 
var fs3 = require('fs');
fs3.stat('output.txt',function(err,stat){
    if(err){
        console.error(err);
    }
    console.log(stat);
})
// Write a file
var fs4 = require('fs');
fs4.writeFile('output3.txt','data is a Good',function(err){
    if(err){
        return console.error(err);
    }
    console.log("Data is Written")
})
fs4.readFile('output3.txt',function(err,data1){
    if(err){
        return console.error(err);
    }
    console.log(data1) // Buffer
    console.log(data1.toString());
})
// Delete a file.
var fr = require('fs');
fr.unlink('output4.txt',function(err){
    if(err)
    {
        console.error(err);
    }
    console.log("File is deleted")
})