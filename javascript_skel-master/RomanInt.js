function RomanInt(Numeral) {

    var size = [1, 5, 10, 50, 100, 500, 1000]
    var Numerals = ["I", "V", "X", "L", "C", "D", "M"]
    var word = new String(Numeral)

    var myMap = new Map();

    var number = 0;
    //checks to add, 
    //everything in string should be in the map
    //everything in string should be caps
    //value passed in should be a string

    for (i = 0; i < size.length; i++) {
        myMap.set(Numeral[i], size[i]);
    }

    for (i = 0; i < Numeral.length; i++) {
        number += myMap.get(Numeral.charAt(i));

    }

    return number
}


module.exports = {
    RomanInt
}