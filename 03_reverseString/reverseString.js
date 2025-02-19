const reverseString = function(string) {
    let array = Array.from(string);
    let reversed = [...array].reverse();
    return reversed.join('');
};

// Do not edit below this line
module.exports = reverseString;
