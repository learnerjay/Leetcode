/*
63. Unique Paths II
Medium

5083

384

Add to List

Share
You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m-1][n-1]). The robot can only move either down or right at any point in time.

An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.

Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The testcases are generated so that the answer will be less than or equal to 2 * 109.

 

Example 1:


Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
Output: 2
Explanation: There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right
Example 2:


Input: obstacleGrid = [[0,1],[0,0]]
Output: 1
 

Constraints:

m == obstacleGrid.length
n == obstacleGrid[i].length
1 <= m, n <= 100
obstacleGrid[i][j] is 0 or 1.
Accepted
537,429
Submissions
1,404,734
*/
Solution
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
       if (obstacleGrid.length === 0 || obstacleGrid[0].length === 0) {
        return 0;
    }
    let height = obstacleGrid.length, width = obstacleGrid[0].length;
    if (obstacleGrid[0][0] === 1 || obstacleGrid[height-1][width-1] === 1) {
        return 0;
    }
    for (let row = height-1; row >= 0; row--) {
        for (let col = width-1; col >= 0; col--) {
            if (row === height-1 && col === width-1) {
                obstacleGrid[row][col] = 1;
                continue;
            }
            let right = col < width-1 ? obstacleGrid[row][col+1] : 0;
            let bottom = row < height-1 ? obstacleGrid[row+1][col] : 0;
            obstacleGrid[row][col] = (obstacleGrid[row][col] === 0) ? right + bottom : 0;
        }
    }
    return obstacleGrid[0][0];
};
