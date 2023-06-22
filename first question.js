// Write a function 'higherOrder' that takes a callback function as an argument. Inside 'higherOrder', call the callback function synchronously.

function highOrder(callBack){
    callBack();
}

function callBack(){
    console.log("Hello, Karan");
}


highOrder(callBack);