/*
421. Maximum XOR of Two Numbers in an Array
Medium

3378

294

Add to List

Share
Given an integer array nums, return the maximum result of nums[i] XOR nums[j], where 0 <= i <= j < n.

 

Example 1:

Input: nums = [3,10,5,25,2,8]
Output: 28
Explanation: The maximum result is 5 XOR 25 = 28.
Example 2:

Input: nums = [14,70,53,83,49,91,36,80,92,51,66,70]
Output: 127
 

Constraints:

1 <= nums.length <= 2 * 105
0 <= nums[i] <= 231 - 1
Accepted
108,401
Submissions
200,431
*/
Solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(num) {
    let nums =[...new Set(num)];
    if (nums.length == 1) return 0;
    let ans = nums[0]^nums[1];
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            ans = Math.max(nums[i]^nums[j],ans);
        }
    }
    return ans;
};
https://leetcode.com/submissions/detail/629029664/