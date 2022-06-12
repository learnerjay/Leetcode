/*
304. Range Sum Query 2D - Immutable
Medium

3714

295

Add to List

Share
Given a 2D matrix matrix, handle multiple queries of the following type:

Calculate the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
Implement the NumMatrix class:

NumMatrix(int[][] matrix) Initializes the object with the integer matrix matrix.
int sumRegion(int row1, int col1, int row2, int col2) Returns the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
 

Example 1:


Input
["NumMatrix", "sumRegion", "sumRegion", "sumRegion"]
[[[[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]], [2, 1, 4, 3], [1, 1, 2, 2], [1, 2, 2, 4]]
Output
[null, 8, 11, 12]

Explanation
NumMatrix numMatrix = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]);
numMatrix.sumRegion(2, 1, 4, 3); // return 8 (i.e sum of the red rectangle)
numMatrix.sumRegion(1, 1, 2, 2); // return 11 (i.e sum of the green rectangle)
numMatrix.sumRegion(1, 2, 2, 4); // return 12 (i.e sum of the blue rectangle)
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 200
-104 <= matrix[i][j] <= 104
0 <= row1 <= row2 < m
0 <= col1 <= col2 < n
At most 104 calls will be made to sumRegion.
Accepted
280,864
Submissions
550,291

*/
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
     if (matrix.length == 0 || matrix[0].length == 0) return;
    this.matrix = matrix;
    this.dp = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length));
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            let left = col > 0 ? this.dp[row][col-1] : 0;
            let up = row > 0 ? this.dp[row-1][col] : 0;
            let overlap = row > 0 && col > 0 ? this.dp[row-1][col-1] : 0;
            this.dp[row][col] = this.matrix[row][col] + left + up - overlap;
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let height = this.matrix.length, width = this.matrix[0].length;
    if (row1 < 0 || row1 >= height || row2 < 0 || row2 >= height 
        || col1 < 0 || col1 >= width || col2 < 0 || col2 >= width) return 0;
    let biggerR = this.dp[row2][col2];
    let upperR = row1 > 0 ? this.dp[row1-1][col2] : 0;
    let leftR = col1 > 0 ? this.dp[row2][col1-1] : 0;
    let overlapR = row1 > 0 && col1 > 0 ? this.dp[row1-1][col1-1] : 0;
    return biggerR - upperR - leftR + overlapR;
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
