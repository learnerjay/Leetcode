/*
790. Domino and Tromino Tiling
Medium

You have two types of tiles: a 2 x 1 domino shape and a tromino shape. You may rotate these shapes.

Given an integer n, return the number of ways to tile an 2 x n board. Since the answer may be very large, return it modulo 109 + 7.

In a tiling, every square must be covered by a tile. Two tilings are different if and only if there are two 4-directionally adjacent cells on the board such that exactly one of the tilings has both squares occupied by a tile.

 

Example 1:

Input: n = 3
Output: 5
Explanation: The five different ways are show above.

Example 2:

Input: n = 1
Output: 1

 

Constraints:

    1 <= n <= 1000

Accepted
30,093
Submissions
68,163
*/
Solution
/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    let md = 1e9;
    md += 7;
    const arr = new Array(1001).fill(0);
    arr[1] = 1;
    arr[2] = 2;
    arr[3] = 5;
    if(n<=3)
        return arr[n];
    for(let i=4;i<=n; ++i){
        arr[i] = 2 * arr[i-1] + arr[i-3]; 
        arr[i] %= md;
    }
    return arr[n];
};