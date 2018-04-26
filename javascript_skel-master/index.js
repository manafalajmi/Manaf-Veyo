function IntRoman(number) {
    //converting a integer input into roman numerals

    if (number == 1)
        return 'I';
    else if (number == 2)
        return 'II';
    else if (number == 3)
        return 'III';
    else if (number == 4)
        return 'IV';
}

module.exports = {
    IntRoman
}