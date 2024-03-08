/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let nstr = "" ;
  let reg  = /^[A-Za-z]+$/;
  for(let i = 0; i < str.length; i++){
    if(reg.test(str[i])){
      nstr += str[i];
    }
  }
  
  let left = 0;
  let right = nstr.length-1;
  while(left <= right){
     
    if(nstr[left] !== nstr[right]){
      return false
    }
    left++;
    right--;
  }
 
  return true;
}
  
module.exports = isPalindrome;
