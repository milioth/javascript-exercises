const repeatString = function(string, num) {
    if(num < 0){
        return 'ERROR';
    }

    let fullstr = "";
    for (let i = 0; i < num; i++) { 
        fullstr = fullstr + string;   
    }

    return fullstr;
};

// Do not edit below this line
module.exports = repeatString;
