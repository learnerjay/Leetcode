/*
338. Counting Bits
Easy

6258

295

Add to List

Share
Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

 

Example 1:

Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10
Example 2:

Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
 

Constraints:

0 <= n <= 105
 

Follow up:

It is very easy to come up with a solution with a runtime of O(n log n). Can you do it in linear time O(n) and possibly in a single pass?
Can you do it without using any built-in function (i.e., like __builtin_popcount in C++)?
Accepted
520,161
Submissions
706,657
*/
Solution
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
     let ans = [0]
     for(let i=1;i<=n;i++){
      if(i% 2 == 0){
          ans[i] = ans[i/2];
      }else{
          ans[i] = ans[i-1]+1;
      }
  }
    return ans;
};
https://leetcode.com/submissions/detail/651351811/