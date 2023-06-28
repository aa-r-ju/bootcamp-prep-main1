// YOUR CODE BELOW
function taxCalculator(price,state) {
   if (state === "NY") {
    return 4/100 * price + price 
   } else {
    return 6.625/100 * price + price 
   }
}

console.log(taxCalculator(100,"NY"));
taxCalculator(100,"NJ");