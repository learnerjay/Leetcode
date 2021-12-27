/*
227. Basic Calculator II
Medium

3488

481

Add to List

Share
Given a string s which represents an expression, evaluate this expression and return its value. 

The integer division should truncate toward zero.

You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

 

Example 1:

Input: s = "3+2*2"
Output: 7
Example 2:

Input: s = " 3/2 "
Output: 1
Example 3:

Input: s = " 3+5 / 2 "
Output: 5
 

Constraints:

1 <= s.length <= 3 * 105
s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
s represents a valid expression.
All the integers in the expression are non-negative integers in the range [0, 231 - 1].
The answer is guaranteed to fit in a 32-bit integer.
*/
Solution
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    if (!s) return 0;
    let operator = '+';
    let currentNumber = 0, lastNumber = 0,result=0;
    
    for(let i=0;i<s.length;i+=1){
        if(isNum(s[i])){
            currentNumber = (currentNumber * 10) + (s[i]-'0');
        }
        if(!isNum(s[i]) && s[i] !== ' ' || i == s.length-1){
            if(operator === '+' || operator === '-'){
                result += lastNumber;
                lastNumber = (operator === '+') ? currentNumber : -currentNumber;
            }else if(operator == '*'){
                lastNumber = lastNumber * currentNumber;
            }else if(operator == '/'){
                lastNumber = lastNumber < 0 ? Math.ceil(lastNumber/currentNumber) : Math.floor(lastNumber/currentNumber) ;
            }
            operator = s[i];
            currentNumber = 0;
        }
    }
    result += lastNumber;
    return result;
};
const isNum = (str) => {
    return str >= '0' && str <= '9';
}
https://leetcode.com/submissions/detail/606871582/