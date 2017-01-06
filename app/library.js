'use strict'

module.exports = {

 computeAverage : function (num1,num2,num3) {
   var number1 = (typeof num1 !== "number") ? parseInt(num1) : num1;
   var number2 = (typeof num2 !== "number") ? parseInt(num2) : num2;
   var number3 = (typeof num3 !== "number") ? parseInt(num3) : num3;
   return ((number1 + number2 + number3) / 3);
 },

 computeFactorial: function factorial(num) {
    var number = (typeof num !== "number") ? parseInt(num) : num;
    return (number <= 1 ? 1 : (number * factorial(number -1)));
 },

 convertTempCtoF: function(cTemp) {
     var celciusTemp = (typeof cTemp !== "number") ? parseInt(cTemp) : cTemp;
     return ((celciusTemp * (9/5)) + 32);
 },

 convertTempFtoC: function(fTemp) {
   var farenheitTemp = (typeof fTemp !== "number") ? parseInt(fTemp) : fTemp;
   return ((farenheitTemp- 32) / (9/5));
 }

}

