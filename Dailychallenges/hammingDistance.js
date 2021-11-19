/*
461. Hamming Distance
Easy

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, return the Hamming distance between them.

 

Example 1:

Input: x = 1, y = 4
Output: 2
Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ?   ?
The above arrows point to positions where the corresponding bits are different.

Example 2:

Input: x = 3, y = 1
Output: 1
*/
Solution
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let c = x ^ y;
    console.log(c);
    let setBits = 0;
    while(c > 0){
        setBits += c & 1;
        console.log(setBits);
        c >>= 1;
    }
    return setBits;
};