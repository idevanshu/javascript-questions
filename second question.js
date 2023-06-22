function higherOrder(callback) {
    let date = new Date;
    let n = date.getDate();
    setTimeout(callback, n * 1000);
}

function callBack() {
    console.log("Hello, Karan");
}

higherOrder(callBack);
