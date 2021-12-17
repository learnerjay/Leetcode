/*
221. Maximal Square
Medium

6210

133

Add to List

Share
Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

 

Example 1:


Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 4
Example 2:


Input: matrix = [["0","1"],["1","0"]]
Output: 1
Example 3:

Input: matrix = [["0"]]
Output: 0
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 300
matrix[i][j] is '0' or '1'.
Accepted
433,308
Submissions
1,027,824
*/
Solution
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    //if (!matrix.length) return 0;
    let max = 0;
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j] === "0") continue
               if( i> 0 && j>0)
                   matrix[i][j] = Math.min(matrix[i-1][j],matrix[i][j-1],matrix[i-1][j-1])+1
                   max =Math.max(matrix[i][j],max)
            }
        }
    return max ** 2;
};
https://leetcode.com/submissions/detail/603187213/