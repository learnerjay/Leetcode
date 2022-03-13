/*
20. Valid Parentheses
Easy

11986

518

Add to List

Share
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
Accepted
2,061,551
Submissions
5,051,425
*/
Solution
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const arr = [];
    for(let i=0;i<s.length;i++){
        let c = s.charAt(i);
        switch(c){
            case '(': arr.push(')');
                break;
             case '[': arr.push(']');
            break;
                case '{': arr.push('}');
            break;
                default:
                if(c !=arr.pop()){
                    return false
                }
        }
    }
    return arr.length === 0;
};
https://leetcode.com/submissions/detail/659284294/
