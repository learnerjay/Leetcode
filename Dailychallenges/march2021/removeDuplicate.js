/*
316. Remove Duplicate Letters
Medium

4628

310

Add to List

Share
Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

 

Example 1:

Input: s = "bcabc"
Output: "abc"
Example 2:

Input: s = "cbacdcbc"
Output: "acdb"
 

Constraints:

1 <= s.length <= 104
s consists of lowercase English letters.
 

Note: This question is the same as 1081: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/

Accepted
171,187
Submissions
401,504
*/
solution
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    var stack = [];
   for(let i=0;i<s.length;i++){
      var char = s[i]
      if(stack.indexOf(char) > -1)continue;
       while(stack.length > 0 && stack[stack.length-1]> char && s.indexOf(stack[stack.length-1],i) >i ){
        stack.pop()     
        }
        stack.push(char)
   } 
    return stack.join("");
};
https://leetcode.com/submissions/detail/662461604/
