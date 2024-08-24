/*
if modulo 400 = 0, then true OR
if modulo 100 = 0, then false
if modulo 4 = 0, then true
else false
*/

const leapYears = function(year) {
    if (year % 400 === 0) {
        return true
    } else if (year % 100 === 0) {
        return false
    } else if (year % 4 === 0) {
        return true
    } else {
        return false
    };
};

/*
alternative
const leapYears = function(year) {
    return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
};


*/

// Do not edit below this line
module.exports = leapYears;
