/*
344. Reverse String
Easy

4522

925

Add to List

Share
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.
Accepted
1,500,992
Submissions
2,018,311
*/
Solution
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let arr = []
   for(let i=s.length-1;i>=0;i--){
       arr.push(s[i])
   }
     for(let i = 0; i < s.length; i++){
        s[i] = arr[i];
    }
};
https://leetcode.com/submissions/detail/671580350/
More faster
s.reverse()
