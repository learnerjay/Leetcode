/*
74. Search a 2D Matrix
Medium

6970

261

Add to List

Share
Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
 

Example 1:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
Example 2:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104
Accepted
730,121
Submissions
1,667,929
*/
Solution
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
             if(target == matrix[i][j]){
              return true
             }
        }
    }
    return false
};
https://leetcode.com/submissions/detail/670336027/
