const fs = require('fs');

function parallelFileOperation(callBack){
    let result = [];
    let path = require('path');
    let a = path.join(__dirname, 'a.txt');
    let b = path.join(__dirname, 'b.txt');
    fs.readFile(a,'utf8',(err,data) =>{
        if (err){
            callBack(err,null);
        }else{
            result[0] = data;
        }

        //writing
        fs.writeFile(b,'Hello', (err) =>{
            if (err) {
                result[1] = 0;
            }else{
                result[1] = 1;
            }
            callBack(null,result);
        })
    });
};

function callBack(err, data){
    let result = [];
    if (err){
        console.log(err);
    }else{
        console.log('Contents of a.txt: ', data[0]);
        console.log('Write operation result:',data[1] === 1 ? 'Done' : 'Failed');
    }
}

parallelFileOperation(callBack);