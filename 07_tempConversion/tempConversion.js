const convertToCelsius = function(fTemp) {
  fTemp = (fTemp - 32) / 1.8;
  let rounded = Math.round(fTemp * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(cTemp) {
  cTemp = cTemp * 1.8 + 32;
  let rounded = Math.round(cTemp * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
