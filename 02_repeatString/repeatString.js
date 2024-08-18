/*
first, create return value as string
while number of runtimes < int, append string to string

return combined string
*/

const repeatString = function (stringComponent, repeatTimes) {
    if (repeatTimes < 0) {
        return "ERROR";
    } else if (repeatTimes === 0) {
        return "";
    } else {
        let repeatedString = stringComponent
        for (i = 1; i < repeatTimes; i++) {
            repeatedString = repeatedString + stringComponent;
        }
        return repeatedString
    }
};

// Do not edit below this line
module.exports = repeatString;
