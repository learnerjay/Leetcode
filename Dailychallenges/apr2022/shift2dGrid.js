/*
1260. Shift 2D Grid
Easy

1161

260

Add to List

Share
Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.

In one shift operation:

Element at grid[i][j] moves to grid[i][j + 1].
Element at grid[i][n - 1] moves to grid[i + 1][0].
Element at grid[m - 1][n - 1] moves to grid[0][0].
Return the 2D grid after applying shift operation k times.

 

Example 1:


Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
Output: [[9,1,2],[3,4,5],[6,7,8]]
Example 2:


Input: grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
Output: [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]
Example 3:

Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9
Output: [[1,2,3],[4,5,6],[7,8,9]]
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m <= 50
1 <= n <= 50
-1000 <= grid[i][j] <= 1000
0 <= k <= 100
Accepted
67,115
Submissions
99,632
*/
Solution
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    let m=grid.length; let n=grid[0].length;
    let totalLem=m*n;
    k=k%totalLem;
    if(k===0){return grid;}
    let flatenedArr=[];
    for(let i of grid){
        for(let j of i){
           flatenedArr.push(j);
        }
    }
   
  let arr1=[]; let arr2=[];
    let start=totalLem-k; let end=totalLem+totalLem-k;
    
    for(let i=start; i<end; i++){
        arr2.push(flatenedArr[i%totalLem]);
        if(arr2.length==n){arr1.push(arr2); arr2=[];}
    }
    return arr1;
};
https://leetcode.com/submissions/detail/678432208/
