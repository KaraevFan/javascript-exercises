/*
Fahrent>Celsius
Take fahrenheit
(fahrenheit - 32) * 5/9
round to 1 decimal
*/

function roundToOneDecimal(num) {
  return Math.round(num * 10)/ 10;
}

const convertToCelsius = function(fahrenheit) {
  celsius = roundToOneDecimal((fahrenheit - 32) * 5 / 9);
  return celsius 
};

const convertToFahrenheit = function(celsius) {
  fahrenheit = roundToOneDecimal(celsius * 9 / 5 + 32);
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
