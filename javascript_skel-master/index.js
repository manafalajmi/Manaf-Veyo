function IntRoman(number) {
    //converting a integer input into roman numerals

    //size is the numerical value, and numeral is the roman numeral
    //version of that number
    var size = [1, 5, 10, 50, 100, 500, 1000]
    var Numeral = ["I", "V", "X", "L", "C", "D", "M"]

    //create an empty string that will be returned 
    var word = "";

    for (var i = size.length - 1; i >= 0; i = i - 2) {
        var count = 0;
        var value = Math.floor(number / size[i]);

        if (value >= 1) {

            if (value == 4) {
                value -= 4;
                number -= 4 * size[i];
                word += Numeral[i] + Numeral[i + 1];
            } else if (value == 9) {
                value -= 9;
                number -= 9 * size[i];
                word += Numeral[i] + Numeral[i + 2];
            } else {
                if (value >= 5) {
                    number -= size[i + 1]
                    value -= 5;
                    word += Numeral[i + 1];
                }

                for (var j = 0; j < value; j++) {
                    number -= size[i];
                    word += Numeral[i];
                }
            }
        }
    }
    return word;


}




module.exports = {
    IntRoman
}