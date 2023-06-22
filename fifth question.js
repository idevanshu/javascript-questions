
// ### File Processing with Callback:
// - Write a function 'readFileCallback' that takes a filename and a callback function. 'readFileCallback' should read the contents of the file asynchronously and pass the data to the callback function.

const fs = require('fs');

function readFileCallback(filename,callBack){
    fs.readFile(filename,'utf8',callBack);
}

function callBack(err,data){
    if (err){
        console.error(err);
    }console.log(data)
};
let path = require('path');
let filename = path.join(__dirname, 'a.txt');

readFileCallback(filename,callBack);