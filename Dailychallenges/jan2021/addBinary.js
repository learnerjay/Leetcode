/*
67. Add Binary
Easy

4110

473

Add to List

Share
Given two binary strings a and b, return their sum as a binary string.

 

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 

Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
Accepted
742,490
Submissions
1,499,995
*/
Solution
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let aBin = `0b${a}`
    let bBin = `0b${b}`
    sum = BigInt(aBin) + BigInt(bBin)
    return sum.toString(2);
};
https://leetcode.com/submissions/detail/616809134/