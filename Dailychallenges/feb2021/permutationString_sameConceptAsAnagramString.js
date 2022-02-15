/*
567. Permutation in String
Medium

5012

132

Add to List

Share
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

 

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
 

Constraints:

1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.
Accepted
321,337
Submissions
716,080
*/
Solution
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
     let s1length = s1.length;
    let s2length = s2.length;
    
   if (s1length > s2length || s2 == null || s2.length === 0) return false;
    var s1Arr = new Array(26).fill(0);
    var s2Arr = new Array(26).fill(0);
   
    
    for(let i=0;i<s1length;i++){
        s1Arr[s1.charCodeAt(i)-97]++;
        s2Arr[s2.charCodeAt(i)-97]++;
    }
    for(let i=0;i<s2length-s1length;i++){
        if(Anagram(s1Arr,s2Arr)) return true;
        s2Arr[s2.charCodeAt(i)-97]--;
        s2Arr[s2.charCodeAt(i+s1length)-97]++;
    }
    if (Anagram(s1Arr, s2Arr)) return true;
    return false
}
    function Anagram(s1Arr,s2Arr){
        for(let i=0;i<s1Arr.length;i++){
            if(s1Arr[i] !== s2Arr[i])   return false;      
    }
     return true;
}
https://leetcode.com/submissions/detail/639346485/
