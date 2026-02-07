const reverseString = function (string) {
    let reverse = "";

    for (let i = string.length - 1; i >= 0; i--) {
        reverse += string.substr(i, 1);
    }

    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
