/*
402. Remove K Digits
Medium

5300

216

Add to List

Share
Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.

 

Example 1:

Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
Example 2:

Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
Example 3:

Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.
 

Constraints:

1 <= k <= num.length <= 105
num consists of only digits.
num does not have any leading zeros except for the zero itself.
Accepted
233,635
Submissions
781,192
*/
Solution
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let stack = [];
    let removed = 0;
    for(let n of num){
        while(stack.length && n < stack[stack.length-1] && removed<k){
          stack.pop();
        removed++
        }
        stack.push(n);
    }
    while(removed<k){
          stack.pop();
        removed++
    }
    console.log(stack)
    while (stack.length && stack[0] === '0')  stack.shift();
    
    return stack.join('') || '0';
};
https://leetcode.com/submissions/detail/643973672/