/*
856. Score of Parentheses
Medium

3921

120

Add to List

Share
Given a balanced parentheses string s, return the score of the string.

The score of a balanced parentheses string is based on the following rule:

"()" has score 1.
AB has score A + B, where A and B are balanced parentheses strings.
(A) has score 2 * A, where A is a balanced parentheses string.
 

Example 1:

Input: s = "()"
Output: 1
Example 2:

Input: s = "(())"
Output: 2
Example 3:

Input: s = "()()"
Output: 2
 

Constraints:

2 <= s.length <= 50
s consists of only '(' and ')'.
s is a balanced parentheses string.
Accepted
119,283
Submissions
182,924
*/
Solution
/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    let stack = [];
    let count = 0;
    for(let i=0;i<s.length;i++){
        if(s[i] == '('){
            stack.push(count)
             count = 0;
        }
        else {
                count = stack.pop() + Math.max(1,count * 2);
            }
    }
    return count;
};
https://leetcode.com/submissions/detail/661950234/
