/*
680. Valid Palindrome II
Easy

4853

271

Add to List

Share
Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

Example 1:

Input: s = "aba"
Output: true
Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
Example 3:

Input: s = "abc"
Output: false
 

Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.
Accepted
448,229
Submissions
1,149,618
*/
Solution
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
   let start = 0;
    let end = s.length-1;
    while(start<end){
        if(s.charAt(start) != s.charAt(end)){
            return palindrome(s,start+1,end) || palindrome(s,start,end-1);
        }
        start++;
        end--;
    }
     return true;
};
function palindrome(s,start,end){
     while(start<end){
        if(s.charAt(start) != s.charAt(end)){
            return false;
        }
        start++;
        end--;
    }
     return true;
}

https://leetcode.com/submissions/detail/672157393/
