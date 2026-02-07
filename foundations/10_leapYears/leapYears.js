const leapYears = function (year) {

    let isLeap = false;

    //Regla general: un año es bisiesto si es divisble por 4
    if (year % 4 == 0) isLeap = true;
    //Excepción de siglos: los años divisibles por 100 no son bisiestos
    if (year % 100 == 0) {
        isLeap = false;
        //Excepción a la excepción: aquellos años divisibles por 100 sí son bisiestos si tambíen son divisibles por 400
        if (year % 400 == 0) isLeap = true;
    }        

    return isLeap;
};

// Do not edit below this line
module.exports = leapYears;
