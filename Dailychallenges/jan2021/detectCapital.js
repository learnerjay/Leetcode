/*
520. Detect Capital
Easy

1423

344

Add to List

Share
We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Given a string word, return true if the usage of capitals in it is right.

 

Example 1:

Input: word = "USA"
Output: true
Example 2:

Input: word = "FlaG"
Output: false
 

Constraints:

1 <= word.length <= 100
word consists of lowercase and uppercase English letters.
Accepted
242,372
Submissions
436,847
*/
Solution
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
     let l = word.charCodeAt(0), r = word.charCodeAt(word.length-1);
     if(l<91 && r<91){
         for(let i=1;i<word.length;i++){
             if(word.charCodeAt(i) > 90 ) return false;
         }
     }else{
         for (let i = 1; i < word.length; i++) {
            if (word.charCodeAt(i) < 91) return false;
        }
     }
    return true;
};
https://leetcode.com/submissions/detail/626886274/