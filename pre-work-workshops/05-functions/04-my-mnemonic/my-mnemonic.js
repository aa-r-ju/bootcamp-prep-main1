function myMnemonic(a,b,c,d) {
   let name = "";
   if(a !== undefined) {
    name+=a[0];
   } 
   if (b !== undefined) {
    name+=b[0]
   }
   if(c !== undefined) {
    name+=c[0];
   }
   if (d !== undefined) {
    name+=d[0]
   };
   return name;
}
console.log(myMnemonic('Must', 'Accept', 'Sugar', 'Happiness')); // => MASH
console.log(myMnemonic('We', 'Eat', 'Eggs')); // => WEE
console.log(myMnemonic('Frankly', 'Umbrellas', 'Love', 'Leather'))

