// File Streams
// Read a file.
var fs = require("fs"); // file system module
var data  = " "; // data variablr to read and console   UTF-8  are use to encoding the text in computer
var createStream = fs.createReadStream('input.txt', 'utf8'); // File where they read
createStream.on('data',function(chunk){// function call back to store data in data variable
    data += chunk; // data is availabe contain by responsible for chunk.
});
createStream.on('end',function(){ // console the data and end use to indicate no more data.
    console.log(data);
});
// Write a file
var fs2 = require("fs");
var data1 = "Manav is Great";
var writeStream = fs2.createWriteStream('output.txt');
writeStream.write(data1,'utf-8');
writeStream.end();
writeStream.on('finish',function()
{
    console.log("Write Completed");
});
// Piping concept of file.
var fs3 = require("fs");
var RS = fs.createReadStream("input.txt");
var WS = fs.createWriteStream("output2.txt");
RS.pipe(WS);