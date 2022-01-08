/*
131. Palindrome Partitioning
Medium

5541

164

Add to List

Share
Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

A palindrome string is a string that reads the same backward as forward.

 

Example 1:

Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
Example 2:

Input: s = "a"
Output: [["a"]]
 

Constraints:

1 <= s.length <= 16
s contains only lowercase English letters.
Accepted
397,994
Submissions
692,663
*/
Solution
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let temp = [];
    let index = 0;
    let result = [];
    function backTracking(temp,index){
        if (index ===  s.length) result.push([...temp]);
    
        for(let i=index;i<s.length;i++){
            if(isPalindrome(index,i)){
                temp.push(s.slice(index,i+1));
                backTracking(temp,i+1);
                temp.pop();
            }
        }   
    }
    backTracking(temp,index);
    
    function isPalindrome(left,right){
        while(left<right){
            console.log(left,right)
           if(s[left++] !== s[right--]) return false
        }
        return true;
    }
    return result;
};
https://leetcode.com/submissions/detail/613648979/