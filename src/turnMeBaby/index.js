import { isString } from "util";

/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
  /* your logic here...*/
  let temp;
  if(typeof str !== "string"){
    return false;
  }

  temp = str.split(" ").reverse();

  return temp.map( item =>{
    item.split("").reverse().join("");
  });


};

export default turnMeBaby;
