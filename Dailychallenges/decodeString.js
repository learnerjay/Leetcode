/*
394. Decode String
Medium

6870

300

Add to List

Share
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

 

Example 1:

Input: s = "3[a]2[bc]"
Output: "aaabcbc"
Example 2:

Input: s = "3[a2[c]]"
Output: "accaccacc"
Example 3:

Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
Example 4:

Input: s = "abc3[cd]xyz"
Output: "abccdcdcdxyz"
 

Constraints:

1 <= s.length <= 30
s consists of lowercase English letters, digits, and square brackets '[]'.
s is guaranteed to be a valid input.
All the integers in s are in the range [1, 300].
*/
Solution
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const regEx = /(\d+)\[([a-zA-Z]+)\]/g;
    function replacer(match,number,letter){
        return letter.repeat(number);
    } 
    
    while(s.includes('[')){
        s = s.replace(regEx,replacer);
    }
    return s;
};
https://leetcode.com/submissions/detail/604055355/