'use strict';

function thousands_separators(num) {
    var numString = splitString(num.toString());

    var integerPortion = integerAddComma(numString[0]);

    if (numString.length == 1) {
        return integerPortion;
    } else {
        return integerPortion + '.' + numString[1];
    }
}

function integerAddComma(integerString) {

    if (integerString.length <= 3) {

        return integerString;
    } else {
        var reverseString = integerString.split("").reverse().join("");
        var covertString = reverseString.replace(/(\d{3})(?=[^$])/g, "$1,");

        return covertString.split('').reverse().join('');
    }
}

function splitString(string) {

    return string.split('.');
}

module.exports = thousands_separators;
