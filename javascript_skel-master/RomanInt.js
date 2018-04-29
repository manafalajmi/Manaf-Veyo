function RomanInt(strg) {

    var size = [1, 5, 10, 50, 100, 500, 1000]
    var Numerals = ["I", "V", "X", "L", "C", "D", "M"]
    var word = new String(strg)

    var myMap = new Map();

    var number = 0;
    //checks to add, 
    //everything in string should be in the map
    //everything in string should be caps
    //value passed in should be a string

    for (i = 0; i < size.length; i++) {
        myMap.set(Numerals[i], size[i]);
    }
    //Right to left
    for (i = 0; i < strg.length; i++) {
        //checks if the value after the current exists
        if (strg.charAt(i + 1) != "") {

            //if it does, is the value of the next char larger than the current
            if (myMap.get(strg.charAt(i)) < myMap.get(strg.charAt(i + 1))) {
                //if it is it should be the 4 or 9 edge case so do larger - smaller
                number += (myMap.get(strg.charAt(i + 1)) - myMap.get(strg.charAt(i)));
                //iterate again since we used 2 values
                i++;
                console.error(number);
            } else {
                //else just add
                number += myMap.get(strg.charAt(i));
                console.error(number);
            }
        } else {
            //else just add 
            number += myMap.get(strg.charAt(i));
            console.error(number);

        }
    }

    return number
}


module.exports = {
    RomanInt
}