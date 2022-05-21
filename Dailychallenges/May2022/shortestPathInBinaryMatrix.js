/*
1091. Shortest Path in Binary Matrix
Medium

3206

144

Add to List

Share
Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.

A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:

All the visited cells of the path are 0.
All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
The length of a clear path is the number of visited cells of this path.

 

Example 1:


Input: grid = [[0,1],[1,0]]
Output: 2
Example 2:


Input: grid = [[0,0,0],[1,1,0],[1,1,0]]
Output: 4
Example 3:

Input: grid = [[1,0,0],[1,1,0],[1,1,0]]
Output: -1
 

Constraints:

n == grid.length
n == grid[i].length
1 <= n <= 100
grid[i][j] is 0 or 1
*/
Solution
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
      const n = grid.length - 1;
    
    if (grid[0][0] || grid[n][n]) {
        return -1;
    }

    if (n === 0 && grid[0][0] === 0) {
        return 1;
    }
    
    const queue = [[[0,0]]];
    const moves = [[-1,0], [0,-1], [-1,-1], [-1,1], [1,0], [0,1], [1,1], [1,-1]];
    
    grid[0][0] = 1;
    let distance = 0;
    
    while (queue.length > 0) {
        const tasks = queue.pop();
        const nextTasks = [];
        
        distance += 1;

        for (let [x,y] of tasks) {
            for (let [moveX,moveY] of moves) {
                const x2 = x + moveX;
                const y2 = y + moveY;
                
                if (x2 >= 0 && y2 >= 0 && x2 <= n && y2 <= n) {
                    if (grid[y2][x2] !== 1) {
                        nextTasks.push([x2, y2]);
                        
                        grid[y2][x2] = 1;
                        
                        if (x2 === n && y2 === n) {
                            return distance + 1;
                        }
                    }
                }
            }
        }
        
        if (nextTasks.length > 0) {
            queue.push(nextTasks);
        }
    }
    
    return -1;
};
