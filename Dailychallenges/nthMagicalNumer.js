/*
Nth Magical Number
Hard

714

113

Add to List

Share
A positive integer is magical if it is divisible by either a or b.

Given the three integers n, a, and b, return the nth magical number. Since the answer may be very large, return it modulo 109 + 7.

 

Example 1:

Input: n = 1, a = 2, b = 3
Output: 2
Example 2:

Input: n = 4, a = 2, b = 3
Output: 6
Example 3:

Input: n = 5, a = 2, b = 4
Output: 10
Example 4:

Input: n = 3, a = 6, b = 4
Output: 8
 

Constraints:

1 <= n <= 109
2 <= a, b <= 4 * 104
Accepted
21,881
Submissions
64,209
*/
Solution
/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var nthMagicalNumber = function(n, a, b) {
const MOD = Math.pow(10, 9) + 7;
  let gcd = getGcd(a, b);
  let lcm = (a * b / gcd);
  let lo = Math.min(a, b) - 1, hi = Math.min(a, b) * n;
  while (lo + 1 < hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    let count = Math.floor(mid / a) + Math.floor(mid / b) - Math.floor(mid / lcm);
    if (count >= n) {
      hi = mid;
    } else {
      lo = mid;
    }
  }
  
  return hi % MOD;
};
function getGcd(a, b) {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
}
https://leetcode.com/submissions/detail/600301675/