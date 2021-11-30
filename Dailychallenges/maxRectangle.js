/*
85. Maximal Rectangle
Hard

Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

 

Example 1:

Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 6
Explanation: The maximal rectangle is shown in the above picture.

Example 2:

Input: matrix = []
Output: 0

Example 3:

Input: matrix = [["0"]]
Output: 0

Example 4:

Input: matrix = [["1"]]
Output: 1

Example 5:

Input: matrix = [["0","0"]]
Output: 0

 

Constraints:

    rows == matrix.length
    cols == matrix[i].length
    0 <= row, cols <= 200
    matrix[i][j] is '0' or '1'.
*/
Solution
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    const n = matrix.length;
    if (n === 0) return 0;
    
    const m = matrix[0].length;
    
    const h = new Array(n).fill(0);
    let max = 0;
    for(let j=0;j<m;j++){
        for(let i=0;i<n;i++){
            if(matrix[i][j] === '1') h[i]++;
             else h[i] = 0;
    }
        
    for(let i=0;i<n;i++){
        let k1 = i - 1;
            while (k1 >= 0 && h[i] <= h[k1]) k1--;
            let k2 = i + 1;
            while (k2 < n && h[i] <= h[k2]) k2++;
            max = Math.max(max, h[i] * (k2 - k1 - 1));
        }
    }
    return max;
};
https://leetcode.com/submissions/detail/594991030/
