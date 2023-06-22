function mapArray(myArray,callBack){
    return callBack(myArray);
}

function callBack(array){
    for (let i = 0; i < array.length; i++) {
        array[i] *= array[i] * (i+1);
    };
    return array;
}


let array = [1,2,3,4,5,6];
console.log(mapArray(array,callBack));