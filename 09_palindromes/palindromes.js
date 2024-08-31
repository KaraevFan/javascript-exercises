/*
get version of string with no lowercaps, punctuations, whitespaces
check if cleaned string is same as reversed
*/

const palindromes = function (str) {
    phraseCleaned = str.replace(/[^\w]/g, '').toLowerCase();
    return phraseCleaned == phraseCleaned.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
