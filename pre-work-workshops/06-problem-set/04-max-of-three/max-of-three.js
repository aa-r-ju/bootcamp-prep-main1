// YOUR CODE BELOW
function maxOfThree(val1,val2,val3) {
    if(val1 > val2 && val1 > val3 ) {
        return val1;
    }
    else if (val2 > val1 && val2 > val3 ) {
        return val2;
    }
    else {
         return val3;
}

}

console.log(maxOfThree(5, 4, 10)); // => 10

console.log(maxOfThree(7, 7, 4)); // => 7
