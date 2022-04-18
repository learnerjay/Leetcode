/*
59. Spiral Matrix II
Medium

3341

174

Add to List

Share
Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

 

Example 1:


Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]
Example 2:

Input: n = 1
Output: [[1]]
 

Constraints:

1 <= n <= 20
Accepted
340,283
Submissions
532,501
*/

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let res = new Array(n).fill(0).map(() => new Array(n).fill(0))
  let size = n*n;
    let count = 0;
    let left = 0;
    let right = n-1;
    let top=0;
    let bottom = n-1;
    while(count < size){
        //going right
        for(let i=left;i<=right;i++){
            count++;
            res[top][i] = count;
        }
        top++;
        //going bottom
        for(let i=top;i<=bottom;i++){
            count++;
            res[i][right] = count;
        }
        right--;
        //going left
        for(let i=right;i>=left;i--){
            count++;
            res[bottom][i] = count;
        }
        bottom--;
        //going top
        for(let i=bottom;i>=top;i--){
            count++;
            res[i][left] = count;
        }
        left++;
    }
    return res;
};
https://leetcode.com/submissions/detail/679482278/
