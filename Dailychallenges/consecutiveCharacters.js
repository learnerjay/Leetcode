*
1446. Consecutive Characters
Easy

798

18

Add to List

Share
The power of the string is the maximum length of a non-empty substring that contains only one unique character.

Given a string s, return the power of s.

 

Example 1:

Input: s = "leetcode"
Output: 2
Explanation: The substring "ee" is of length 2 with the character 'e' only.
Example 2:

Input: s = "abbcccddddeeeeedcba"
Output: 5
Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
Example 3:

Input: s = "triplepillooooow"
Output: 5
Example 4:

Input: s = "hooraaaaaaaaaaay"
Output: 11
Example 5:

Input: s = "tourist"
Output: 1
 

Constraints:

1 <= s.length <= 500
s consists of only lowercase English letters.
Accepted
89,522
Submissions
145,227
*/
Solution
/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let max = 0,char = s[0];freq=1;
    for(let i=1;i<s.length;i++){
        if(s[i] === char){
            freq++;
        }else{
            max = Math.max(max,freq);
            freq = 1;
            char = s[i];
        }
    }
    return Math.max(max,freq)
};
https://leetcode.com/submissions/detail/601078107/