const sumAll = function(first, second) {
    let sum = 0;

    if (isValid(first) && isValid(second)) {

        //Works with lage numbers first
        if (first > second) {
            for (i = second; i <= first; i++) {
            sum += i;
            }
        }

        for (i = first; i <= second; i++) {
            sum += i;
        }

    } else { 
        return 'ERROR';
    }

    return sum;
};

function isValid(number){ 
    //NOT negative
    if (number < 0) return false;
    //NOT integer and NOT number
    if (!Number.isInteger(number)) return false;

    return true;
}
    

// Do not edit below this line
module.exports = sumAll;
