/*
763. Partition Labels
Medium

6904

262

Add to List

Share
You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

Return a list of integers representing the size of these parts.

 

Example 1:

Input: s = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
Example 2:

Input: s = "eccbbbbdec"
Output: [10]
 

Constraints:

1 <= s.length <= 500
s consists of lowercase English letters.
Accepted
350,579
Submissions
443,142
*/
Solution
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const last = Array(26).fill(0);
    let arr = [];
    
    
    for(let i=0;i<s.length;i++){
        const idx = s[i].charCodeAt() - 97
       last[idx] = i;
    }
    
    let start =0, end = 0;
     for(let i=0;i<s.length;i++){
        const idx = s[i].charCodeAt() - 97
       end = Math.max(end,last[idx])
         
      if(end === i){
        arr.push(end-start+1)
        start = end+1
        }
    }
   
    return arr
};
https://leetcode.com/submissions/detail/664291542/
