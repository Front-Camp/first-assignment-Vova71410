/**
* This function should return sum of two numbers
*
* @param {number} a - this is a number value
* @param {number} b - this is a number value
* @return {number} result of the sum values
* @example
* sum(1, 2);   // 3
* sum(0, 5);   // 5
* sum(-1, 13); // 12
*/
function isNumber(n){
  return !isNaN(parseFloat(n)) && isFinite(n) && typeof n !== 'string';
}
var sum = (a, b) => {
  /* your logic here...*/
  return isNumber(a) && isNumber(b) ?  a + b: false;
  
};

export default sum;
