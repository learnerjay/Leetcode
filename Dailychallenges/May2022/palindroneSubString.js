/*
647. Palindromic Substrings
Medium

6933

158

Add to List

Share
Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

 

Example 1:

Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
Example 2:

Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 

Constraints:

1 <= s.length <= 1000
s consists of lowercase English letters.
Accepted
434,569
Submissions
664,365
*/
Solution
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
     let count = 0;
    
    for(let i = 0; i < (2 * s.length) - 1; i++) {
        let left = Math.floor(i / 2);
        let right = left +  i % 2;
        
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
    }
    return count;
};
