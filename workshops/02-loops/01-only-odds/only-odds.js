function onlyOdds(number) {
    let val = 0;
    for(let i = 0; i <= number; i++ ) {
     if(i % 2 !== 0) {
        val+=i;
     }
    }
    return val
} 

console.log(onlyOdds(6));
console.log(onlyOdds(10)); 