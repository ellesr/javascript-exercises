const reverseString = function(string) {
    let array = Array.from(string);
    let reversed = [...array].reverse();
    reversed = reversed.toString();
    return reversed.replaceAll(",","");
};

// Do not edit below this line
module.exports = reverseString;
