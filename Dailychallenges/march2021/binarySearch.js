/*
704. Binary Search
Easy

4216

102

Add to List

Share
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 

Constraints:

1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.
*/
Solution
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(arr, target) {
    let left =0;
    let right = arr.length-1;
      let mid = Math.floor((left + right) / 2);
    while(right >=left){
        if(arr[mid] == target)    return mid;   
        if(target>arr[mid]){
             left= mid+1;
              mid = Math.floor((left + right ) / 2);
        }if(target<arr[mid]){
             right= mid-1;
             mid = Math.floor((right + left) / 2);
        }
    }
    return -1;
};
https://leetcode.com/submissions/detail/451858914/
