const add = function(numOne, numTwo) {
  result = numOne + numTwo;
  return result;
};

const subtract = function(numOne, numTwo) {
  result = numOne - numTwo;
	return result;
};

/*

const sum = function(arr) {
  result = 0
  while (arr.length > 0) {
    result = result + arr.pop()
  }
	return result;
};
*/

const sum = function(arr) {
  return arr.reduce((acc, current) => acc+ current, 0)
};

const multiply = function(arr) {
  return arr.reduce((acc, current) => acc * current, 1)
};

const power = function(numOne, numTwo) {
  return numOne ** numTwo;
};

const factorial = function(num) {
	result = 1
  for (let i = num; i > 0; i--) {
    result = result * i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
