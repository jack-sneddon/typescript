/*
  Given a 32-bit signed integer, reverse digits of an integer.

    Example 1:
        Input: 123
        Output: 321

    Example 2:
        Input: -123
        Output: -321
    
    Example 3:
        Input: 120
        Output: 21


    Note:

    Assume we are dealing with an environment which could 
    only store integers within the 32-bit signed integer range: [−231,  231 − 1]. 
    For the purpose of this problem, assume that your function returns 0 
    when the reversed integer overflows.

    clue:  https://medium.com/javascript-in-plain-english/simple-things-gone-wrong-how-to-find-out-the-number-of-digits-in-a-javascript-number-c0a78c6acbec

*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) { 
    var maxInteger = 2147483647;  
    let isNegative:boolean = (x < 0) ? true : false;
    x=Math.abs(x);
       
    let numStr = x.toString();
    let numReverse:string = (isNegative) ? "-" : "";

    for(var count = numStr.length-1; count >= 0; count--){
        numReverse += numStr[Number(count)];
    }

    let reverse = Number(numReverse);

    if (isNaN(reverse) || Math.abs(reverse) > maxInteger) {
        return 0;
    }
    
    return reverse;

};

function getDigits2(value) {
    const number = Number(value);
    const string = number.toString();
    const hasExponent = string.indexOf('e') !== -1; // is the number written using the scientific notation
    
    if (hasExponent) {
        const exponent = string.split('e')[1].substring(1);
        return parseInt(exponent) + 1;
    }

    return number.toString().length;
}

console.log('Reverse 28 ==>  ' + reverse (28));
console.log('Reverse -31 ==>  ' + reverse (-31));
console.log('Reverse 1534236469 ==>  ' + reverse (1534236469));
console.log('Reverse 123456789098765431234567890987654321 ==>  ' + reverse (123456789098765431234567890987654321));