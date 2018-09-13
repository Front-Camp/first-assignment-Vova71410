/**
 *  This function should return sum of
 *  all numbers and strings which can be converted to numbers
 *  in passed array
 *
 * @param {Array<number|string>} arr - this is an array of numbers or strings
 * @return {number} - sum of all numbers of array
 * @example
 * sumElements([1, 2, 3]);          // 6
 * sumElements(['1', 'hi', 3]);     // 4
 * sumElements([Infinity, NaN, 1]); // 1
 */
function isNumber(arr){
  let result = arr.map(function(n){
    let temp = n;
	if(isFinite(temp)){
      temp=+temp;
       if(typeof temp == "number"){
        return temp;
      }
    }
    else if(typeof temp == "string" && !isNaN(+temp))
    {
      return parseInt(temp);
    }else return 0;
	
   });

   return result;
 }

const sumElements = arr => {
  return  isNumber(arr).reduce(function(sum, current) {
    return sum + current;
  }, 0);
};

export default sumElements;
