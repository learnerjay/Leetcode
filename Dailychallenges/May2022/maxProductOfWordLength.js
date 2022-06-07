/*
318. Maximum Product of Word Lengths
Medium

2656

107

Add to List

Share
Given a string array words, return the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. If no such two words exist, return 0.

 

Example 1:

Input: words = ["abcw","baz","foo","bar","xtfn","abcdef"]
Output: 16
Explanation: The two words can be "abcw", "xtfn".
Example 2:

Input: words = ["a","ab","abc","d","cd","bcd","abcd"]
Output: 4
Explanation: The two words can be "ab", "cd".
Example 3:

Input: words = ["a","aa","aaa","aaaa"]
Output: 0
Explanation: No such pair of words.
 

Constraints:

2 <= words.length <= 1000
1 <= words[i].length <= 1000
words[i] consists only of lowercase English letters.
Accepted
177,151
Submissions
297,588
*/
Solution'
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
     const common = (a, b) => {
      for (let i = 0; i < a.length; i++){
        if ( b.includes(a[i]) ){
           return false;
        }
      } 
      return true;
    };
    
    let output = 0;
    for (let i = 0; i < words.length-1; i++) {
        for (let j = i+1; j < words.length; j++) {
             const a = words[i];
              const b = words[j];
              let unique = true;
            if (common(words[i],words[j])) 
                output = Math.max(output,words[i].length*words[j].length);
        }
    }
    return output;
};
