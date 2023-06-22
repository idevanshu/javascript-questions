function filterArray(myArray, callBack) {
    let even = [];
    let odd = [];
    for (let i = 0; i < myArray.length; i++) {
        if (callBack(myArray[i])) {
            even.push(myArray[i]);
        }else{
            odd.push(myArray[i])
        }
    }
    let final = `Odd Numbers: ${odd} , Even Numbers: ${even}`;
    return final;
};

// returning even elements
function callBack(n) {
    return n % 2 == 0
}
let array = [16, 17, 3, 54, 55, 76];
console.log(filterArray(array, callBack));