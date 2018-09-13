/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
function isNumber(arr){
  return arr.every (element => {
    return !isNaN(parseFloat(n)) && isFinite(n) && typeof n !== 'string';
  });

}
const max = arr =>{
  /* your logic here...*/
 return isNumber(arr) ?  Math.max.apply(null,arr): false;
 

};

export default max;
