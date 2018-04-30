function IntRoman(number) {
    //converting a integer input into roman numerals

    if (Math.floor(number) !== number || number < 1) {
        return "invalid type";
    }
    //size is the numerical value, and numeral is the roman numeral
    //version of that number
    var size = [1, 5, 10, 50, 100, 500, 1000]
    var Numeral = ["I", "V", "X", "L", "C", "D", "M"]

    //create an empty string that will be returned 
    var word = "";

    for (var i = size.length - 1; i >= 0; i = i - 2) {
        var count = 0;
        //divides the inputed number by a multiple of 10, and reduced to an int
        var value = Math.floor(number / size[i]);

        //if the int is greater than or equal to 1 that means theres a factor of that 
        //multiple of 10 in the value
        if (value >= 1) {

            //if the reduced int value is 4 or 9 then it triggers the edge case
            if (value == 4) {

                value -= 4;
                number -= 4 * size[i];
                //if its 4 add the current numeral and the next one
                word += Numeral[i] + Numeral[i + 1];
            } else if (value == 9) {
                value -= 9;
                number -= 9 * size[i];
                //if iuts 9 add the current numeral and the one after the next
                word += Numeral[i] + Numeral[i + 2];
            } else {
                if (value >= 5) {
                    //if the value is greater than 5, remove 5 and check again 
                    number -= size[i + 1]
                    value -= 5;
                    word += Numeral[i + 1];
                }
                //here is the check again ^
                for (var j = 0; j < value; j++) {
                    number -= size[i];
                    word += Numeral[i];
                }
            }
        }
    }
    //return the numeral string
    return word;


}

module.exports = {
    IntRoman
}