/*
290. Word Pattern
Easy

2996

343

Add to List

Share
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
 

Constraints:

1 <= pattern.length <= 300
pattern contains only lower-case English letters.
1 <= s.length <= 3000
s contains only lowercase English letters and spaces ' '.
s does not contain any leading or trailing spaces.
All the words in s are separated by a single space.
Accepted
322,659
Submissions
810,765
*/
Solution
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let words = s.split(" ");
    let m = new Map;
    let used = new Set();
    if(pattern.length != words.length){
        return false;
    }
    for(let i=0;i<s.length;i++){
        if(m.has(pattern[i])){
            if(m.get(pattern[i]) !== words[i]){
                return false;
            }
        }else{
            if(used.has(words[i])){
                return false;
            }
        }
        m.set(pattern[i],words[i]);
        used.add(words[i]);
    }
    return true;
};
https://leetcode.com/submissions/detail/621799501/