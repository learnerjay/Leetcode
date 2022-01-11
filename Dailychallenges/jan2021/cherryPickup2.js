/*
1463. Cherry Pickup II
Hard

1460

14

Add to List

Share
You are given a rows x cols matrix grid representing a field of cherries where grid[i][j] represents the number of cherries that you can collect from the (i, j) cell.

You have two robots that can collect cherries for you:

Robot #1 is located at the top-left corner (0, 0), and
Robot #2 is located at the top-right corner (0, cols - 1).
Return the maximum number of cherries collection using both robots by following the rules below:

From a cell (i, j), robots can move to cell (i + 1, j - 1), (i + 1, j), or (i + 1, j + 1).
When any robot passes through a cell, It picks up all cherries, and the cell becomes an empty cell.
When both robots stay in the same cell, only one takes the cherries.
Both robots cannot move outside of the grid at any moment.
Both robots should reach the bottom row in grid.
 

Example 1:


Input: grid = [[3,1,1],[2,5,1],[1,5,5],[2,1,1]]
Output: 24
Explanation: Path of robot #1 and #2 are described in color green and blue respectively.
Cherries taken by Robot #1, (3 + 2 + 5 + 2) = 12.
Cherries taken by Robot #2, (1 + 5 + 5 + 1) = 12.
Total of cherries: 12 + 12 = 24.
Example 2:


Input: grid = [[1,0,0,0,0,0,1],[2,0,0,0,0,3,0],[2,0,9,0,0,0,0],[0,3,0,5,4,0,0],[1,0,2,3,0,0,6]]
Output: 28
Explanation: Path of robot #1 and #2 are described in color green and blue respectively.
Cherries taken by Robot #1, (1 + 9 + 5 + 2) = 17.
Cherries taken by Robot #2, (1 + 3 + 4 + 3) = 11.
Total of cherries: 17 + 11 = 28.
 

Constraints:

rows == grid.length
cols == grid[i].length
2 <= rows, cols <= 70
0 <= grid[i][j] <= 100
Accepted
43,669
Submissions
62,454
*/
Solution
/**
 * @param {number[][]} grid
 * @return {number}
 */

var cherryPickup = function(grid) {
    const rows = grid.length;
    const colmns = grid[0].length;
    
    const cache = {};
    
    function getKey(r,j0,j1){
        return j0 < j1 ? `${r},${j0},${j1}` : `${r},${j1},${j0}`;
    }
    
    function dfs(r,j0,j1){
        if(r >= rows || j0 < 0 || j1 < 0  || j1 >= colmns || j0>=colmns ) {
            return 0;
        }
        const key =  getKey(r,j0,j1);
        if(cache[key] !== undefined) {
            return cache[key];
        }
        
        let value = grid[r][j0];
        if(j0 !== j1){
          value += grid[r][j1];   
        }  
        
        let max = 0;
        let i,j,l,m;
        
       for (i = 0, l = 3; i < l; i++) {
            for (j = 0, m = 3; j < m; j++) {
                max = Math.max(max, dfs(r + 1, j0 + (i - 1), j1 + (j - 1) ));
            }
        }
        return cache[key] = value + max;
    }
    let result = dfs(0, 0, colmns - 1) ;
    
    return result;
};
https://leetcode.com/submissions/detail/615657794/