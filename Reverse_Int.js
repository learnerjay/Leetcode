/**Reverse Integer
Given a 32-bit signed integer, reverse digits of an integer.
Note:
Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [-231,  231 - 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
Example 1:
Input: x = 123
Output: 321
Example 2:
Input: x = -123
Output: -321
Example 3:
Input: x = 120
Output: 21
Example 4:
Input: x = 0
Output: 0
**/
const result = parseInt(x.toString().split('').reverse().join(''));
if(result >  0x7FFFFFFF){
    //For checking maximum positive value for a 32-bit signed binary integer
    return 0;
}
return Math.sign(x) * result;

