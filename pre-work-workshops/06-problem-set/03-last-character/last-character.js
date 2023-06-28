// YOUR CODE BELOW
function lastCharacter(name1,name2) {
 if(name1[name1.length -1] === name2[name2.length -1]) {
    return true;
} else {
    return false;
}
}
 console.log(lastCharacter('apples', 'pumpkins')); // => true

console.log(lastCharacter('marker', 'pen')); // => false
