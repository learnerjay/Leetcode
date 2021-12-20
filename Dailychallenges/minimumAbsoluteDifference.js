/*
1200. Minimum Absolute Difference
Easy

1157

50

Add to List

Share
Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements. 

Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

a, b are from arr
a < b
b - a equals to the minimum absolute difference of any two elements in arr
 

Example 1:

Input: arr = [4,2,1,3]
Output: [[1,2],[2,3],[3,4]]
Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.
Example 2:

Input: arr = [1,3,6,10,15]
Output: [[1,3]]
Example 3:

Input: arr = [3,8,-10,23,19,-4,-14,27]
Output: [[-14,-10],[19,23],[23,27]]
 

Constraints:

2 <= arr.length <= 10^5
-10^6 <= arr[i] <= 10^6
*/
Solution
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a,b) =>{
        return a - b;
    })
    let min = Infinity;
    const arr2 = [];
    for(let i=0;i<arr.length-1;i++){
        min = Math.min(min,arr[i+1] - arr[i]);
    }
    for(let i=0;i<arr.length-1;i++){
        if( arr[i+1] - arr[i] === min ){
            arr2.push([arr[i],arr[i+1]]);
        }
    }
   return arr2;
};
https://leetcode.com/submissions/detail/604491441/