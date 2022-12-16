const convertToCelsius = function(temp) {
    celcius = (temp - 32)*(5/9);
    return Math.round(10*celcius)/10;
};

const convertToFahrenheit = function(temp) {
    farenheit = temp*(9/5) + 32;
    return Math.round(10*farenheit)/10;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
