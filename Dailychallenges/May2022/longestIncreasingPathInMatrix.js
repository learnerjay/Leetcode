/*
329. Longest Increasing Path in a Matrix
Hard

5931

95

Add to List

Share
Given an m x n integers matrix, return the length of the longest increasing path in matrix.

From each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).

 

Example 1:


Input: matrix = [[9,9,4],[6,6,8],[2,1,1]]
Output: 4
Explanation: The longest increasing path is [1, 2, 6, 9].
Example 2:


Input: matrix = [[3,4,5],[3,2,6],[2,2,1]]
Output: 4
Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.
Example 3:

Input: matrix = [[1]]
Output: 1
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 200
0 <= matrix[i][j] <= 231 - 1
Accepted
346,781
Submissions
684,006
*/
Solution
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    if (matrix.length == 0 || matrix ==  null) return null;
    let row = matrix.length;
    let column = matrix[0].length;
    let obj={};
    let ans = 0;
    for(let i=0;i<row;i++){
        for(let j=0;j<column;j++){
             ans=Math.max(ans,req(i,j,-1,0));
        }
    }
    return ans;
    function req(i,j,pre,k){
        if(i<0 || j<0 || i===row || j===column){ return k; }
        if(matrix[i][j]<=pre){ return k; }
        if(obj[i+" "+j]!==undefined){ return k+obj[i+" "+j]; }
        let value=matrix[i][j];
        matrix[i][j]=-1;
        obj[i+" "+j]= Math.max(req(i+1,j,value,k+1),req(i-1,j,value,k+1),req(i,j+1,value,k+1),req(i,j-1,value,k+1))-k;
        matrix[i][j]=value;
        return obj[i+" "+j]+k;
    }
};
