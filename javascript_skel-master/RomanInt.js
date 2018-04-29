function RomanInt(strg) {

    var size = [1, 5, 10, 50, 100, 500, 1000]
    var Numerals = ["I", "V", "X", "L", "C", "D", "M"]
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
    //Right to left
    for (i = 0; i < strg.length; i++) {
        //checks if the value after the current exists
        curr = myMap.get(strg.charAt(i));

        if (strg.charAt(i + 1) != "") {

            nex = myMap.get(strg.charAt(i + 1));

            //if it does, is the value of the next char larger than the current
            if (curr < nex) {
                //if it is it should be the 4 or 9 edge case so do larger - smaller

                var temp = (nex - curr);
                var temp2 = temp / curr;
                if (temp2 == 4 || temp2 == 9) {
                    number += (nex - curr);

                }
                //iterate again since we used 2 values
                i++;
                console.error(number);
            } else {
                //else just add
                number += curr;
                console.error(number);
            }
        } else {
            //else just add 
            number += curr;
            console.error(number);

        }
    }

    return number
}


module.exports = {
    RomanInt
}