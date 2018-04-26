function IntRoman(number) {
    //converting a integer input into roman numerals

    //size is the numerical value, and numeral is the roman numeral
    //version of that number
    var size = [1, 5, 10, 50, 100, 500, 1000]
    var Numeral = ["I", "V", "X", "L", "C", "D", "M"]

    //create anm empty string that ill return 
    var word = "";

    for (var i = size.length; i >= 0; i--) {
        var count = 0;

        if (number / size[i] >= 1) {
            while (number >= size[i]) {
                count++;
                number -= size[i]
            }

            for (var j = 0; j < count; j++) {
                word += Numeral[i];
            }
        }
    }
    return word;


}

module.exports = {
    IntRoman
}