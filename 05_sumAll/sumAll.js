/* check if both numbers are int and positive
derive n as (max of IntOne, IntTwo) - (min of IntOne, IntTwo) -1
return (intOne + intTwo) * n / 2
*/

function isPositiveInteger(num) {
    return Number.isInteger(num) && num >0;
}

const sumAll = function(intOne, intTwo) {
    if (isPositiveInteger(intOne) && isPositiveInteger(intTwo)) {
        const biggerInt = Math.max(intOne, intTwo);
        const smallerInt = Math.min(intOne, intTwo);
        const nCount = biggerInt - smallerInt + 1;
        return (intOne + intTwo) * nCount / 2
    } else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = sumAll;
