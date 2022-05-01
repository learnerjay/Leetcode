/*
1631. Path With Minimum Effort
Medium

2800

118

Add to List

Share
You are a hiker preparing for an upcoming hike. You are given heights, a 2D array of size rows x columns, where heights[row][col] represents the height of cell (row, col). You are situated in the top-left cell, (0, 0), and you hope to travel to the bottom-right cell, (rows-1, columns-1) (i.e., 0-indexed). You can move up, down, left, or right, and you wish to find a route that requires the minimum effort.

A route's effort is the maximum absolute difference in heights between two consecutive cells of the route.

Return the minimum effort required to travel from the top-left cell to the bottom-right cell.

 

Example 1:



Input: heights = [[1,2,2],[3,8,2],[5,3,5]]
Output: 2
Explanation: The route of [1,3,5,3,5] has a maximum absolute difference of 2 in consecutive cells.
This is better than the route of [1,2,2,2,5], where the maximum absolute difference is 3.
Example 2:



Input: heights = [[1,2,3],[3,8,4],[5,3,5]]
Output: 1
Explanation: The route of [1,2,3,4,5] has a maximum absolute difference of 1 in consecutive cells, which is better than route [1,3,5,3,5].
Example 3:


Input: heights = [[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]]
Output: 0
Explanation: This route does not require any effort.
 

Constraints:

rows == heights.length
columns == heights[i].length
1 <= rows, columns <= 100
1 <= heights[i][j] <= 106
Accepted
93,489
Submissions
172,885
*/
Solution
/**
 * @param {number[][]} heights
 * @return {number}
 */
const dir  = [[1,0],[0,1],[-1,0],[0,-1]]
var minimumEffortPath = function(heights) {
    let n = heights.length;
    let m = heights[0].length;
    let arr = [];
    let max = 0, min = 0;
    
    //max value
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(heights[i][j-1]){
              max = Math.max(max, Math.abs(heights[i][j]-heights[i][j-1]));
            }
             if(heights[i-1]){
                 max = Math.max(max, Math.abs(heights[i][j]-heights[i-1][j]));
            }
        }
    }
    
    function check(i, j, k) {
    if ((i === n - 1) && (j === m - 1)) {
        return true;
    }
    
    arr[i*m+j] = true;
    
    for (const [x, y] of dir) {
        if (heights[i+x] && heights[i+x][j+y] && !arr[(i+x)*m+j+y] && (Math.abs(heights[i+x][j+y] - heights[i][j]) <= k)) {
            if (check(i+x, j+y, k)) {
                return true;
            }
        }
    }
    
    return false;
    }
    
    //binary search
    while(min<max-1){
        let mid = Math.floor((max+min)/2);
        arr = [];
        
        if(check(0,0,mid) ){
            max = mid;
        }else{
            min = mid;
        }
    }
    return check (0,0,min) ? min : max;
};
https://leetcode.com/submissions/detail/689224316/
