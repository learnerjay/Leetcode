/*
32. Longest Valid Parentheses
Hard

8470

282

Add to List

Share
Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

 

Example 1:

Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".
Example 2:

Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".
Example 3:

Input: s = ""
Output: 0
 

Constraints:

0 <= s.length <= 3 * 104
s[i] is '(', or ')'.
Accepted
510,622
Submissions
1,594,615
*/
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    if(s == null || s.length == 0) return 0;
    let stack = [-1];
    
    let count =0;
    for(let i=0;i<s.length;i++){
        if(s[i] == '(' ){
            stack.push(i);
    }else{
        stack.pop();
        if(stack.length === 0){
            stack.push(i);
        }else{
            count = Math.max(count, i-stack[stack.length-1]);
        }
     }
    }
    return count
};
