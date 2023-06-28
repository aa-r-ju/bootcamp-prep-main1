// YOUR CODE BELOW
function everyWhichWay(a,b,c){
    if(a+b === c) {
        return "sum";
    } else if (a - b === c) {
        return "difference";
    } else if ((a === b) === c) {
        return "square";
    } else if(a / b === c ) {
        return "fraction";
    }  else if (a * b === c ) {
        return "product"
    }
    else { 
        return null
    }
}

everyWhichWay(10, 20, 30); // => sum

everyWhichWay(50, 20, 30); // => difference

everyWhichWay(4, 4, 16); // => product

everyWhichWay(100, 10, 10); // => fraction

everyWhichWay(1, 1000, 50); // => null
everyWhichWay(10, 5, 50)