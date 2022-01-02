/*
1015. Smallest Integer Divisible by K
Medium

686

613

Add to List

Share
Given a positive integer k, you need to find the length of the smallest positive integer n such that n is divisible by k, and n only contains the digit 1.

Return the length of n. If there is no such n, return -1.

Note: n may not fit in a 64-bit signed integer.

 

Example 1:

Input: k = 1
Output: 1
Explanation: The smallest answer is n = 1, which has length 1.
Example 2:

Input: k = 2
Output: -1
Explanation: There is no such positive integer n divisible by 2.
Example 3:

Input: k = 3
Output: 3
Explanation: The smallest answer is n = 111, which has length 3.
 

Constraints:

1 <= k <= 105
Accepted
40,761
Submissions
90,078
*/
Solution
/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(k) {
    if(k % 2 === 0 || k % 5 === 0){
        return -1;
    } 
    var len = 1;
    var num = 0;
    for(len=1;len<=k;len++){
        num = (num * 10 + 1)%k;
        if (num == 0){
            return len;
        }
    }
    return -1;
};
https://leetcode.com/submissions/detail/609725584/