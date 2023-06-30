// YOUR CODE BELOW
function crazyCaps(name) {
    let value = "";
    for( let i = 0; i < name.length; i++) {
        if(i % 2 === 0 ) {
            value+=name[i].toLowerCase();
        } else {
            value+=name[i].toUpperCase()
        }
    }
     return value;
}

console.log(crazyCaps("this is crazy"));