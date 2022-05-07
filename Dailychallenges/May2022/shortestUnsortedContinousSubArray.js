/*
581. Shortest Unsorted Continuous Subarray
Medium

6296

227

Add to List

Share
Given an integer array nums, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.

Return the shortest such subarray and output its length.

 

Example 1:

Input: nums = [2,6,4,8,10,9,15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
Example 2:

Input: nums = [1,2,3,4]
Output: 0
Example 3:

Input: nums = [1]
Output: 0
 

Constraints:

1 <= nums.length <= 104
-105 <= nums[i] <= 105
 

Follow up: Can you solve it in O(n) time complexity?
Accepted
263,087
Submissions
733,153
*/
Solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    // let arr = [...nums];
    arr.sort((a, b) => a - b)
    // let res = []
    let count;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== arr[i]) {
            res.push(i);
        }
    }
    return res.length === 0 ? 0 : Math.max(...res) - Math.min(...res) + 1;
};
https://leetcode.com/submissions/detail/692489039/
