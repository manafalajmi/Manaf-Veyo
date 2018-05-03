function RomanIntLess(strg) {

    //I'm gonna assume only valid strings are inputted
    // if (typeof strg !== 'string') {
    //     return 'not string'

    // }
    var size = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
    var Numerals = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"]
    var word = new String(strg)
    var curr;
    var nex;
    var myMap = new Map();

    var number = 0;
    //checks to add, 
    //everything in string should be in the map
    //everything in string should be caps
    //value passed in should be a string

    for (i = 0; i < size.length; i++) {
        myMap.set(Numerals[i], size[i]);
    }
    //left to Right
    for (i = 0; i < strg.length; i++) {
        currstrg = strg.charAt(i).toUpperCase();
        nexstrg = strg.charAt(i + 1).toUpperCase() + "" + strg.charAt(i).toUpperCase();
        curr = myMap.get(strg.charAt(i).toUpperCase());
        nex = myMap.get(strg.charAt(i).toUpperCase() + "" + strg.charAt(i + 1).toUpperCase());
        console.log(currstrg);
        console.error(nexstrg);

        if (nex != undefined) {
            number += nex;
            i++
            console.error(nex)
        } else {
            number += curr;

        }
    }
    return number;
}


module.exports = {
    RomanIntLess
}