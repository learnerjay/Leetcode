/*
438. Find All Anagrams in a String
Medium

6502

241

Add to List

Share
Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
 

Constraints:

1 <= s.length, p.length <= 3 * 104
s and p consist of lowercase English letters.
Accepted
470,749
Submissions
989,186
*/
Solution
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let slength = s.length;
    let plength = p.length;
    
    let res = [];
    
    let sArr = new Array(26).fill(0);
    let pArr = new Array(26).fill(0);
    
    for(let i=0;i<plength;i++){
        sArr[s.charCodeAt(i)-97]++;
        pArr[p.charCodeAt(i)-97]++;
    }
    for(let i=0;i<slength;i++){
        if(Anagram(sArr,pArr)){
          res.push(i);   
        }
        sArr[s.charCodeAt(i)-97]--;
        sArr[s.charCodeAt(i+plength)-97]++;
    }
    function Anagram(sArr,pArr){
        for(let i=0;i<pArr.length;i++){
            if(sArr[i] !== pArr[i])
                return false;
        }
        return true;
    }
    return res;
};
https://leetcode.com/submissions/detail/633096412/