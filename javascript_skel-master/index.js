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
        var value = number / size[i];

        if (value >= 1) {

            if (value == 4) {
                number -= 4;
                word += 'IV';
            } else if (value == 9) {
                number -= 9;
                word += 'IX'
            }
            // while (number >= size[i]) {
            //     count++;
            //     number -= size[i]
            // }
            else {
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