/*
454. 4Sum II
Medium

3385

103

Add to List

Share
Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, return the number of tuples (i, j, k, l) such that:

0 <= i, j, k, l < n
nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
 

Example 1:

Input: nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
Output: 2
Explanation:
The two tuples are:
1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
Example 2:

Input: nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
Output: 1
 

Constraints:

n == nums1.length
n == nums2.length
n == nums3.length
n == nums4.length
1 <= n <= 200
-228 <= nums1[i], nums2[i], nums3[i], nums4[i] <= 228
*/
Solution
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let result = 0;
    const map = new Map();
    for(let i=0;i<nums1.length;i++){
        for(let j=0;j<nums2.length;j++){
            sum = nums1[i] + nums2[j];
            map.set(sum,map.get(sum)? map.get(sum)+1 :1);
        }
    }
    for(let i=0;i<nums3.length;i++){
        for(let j=0;j<nums4.length;j++){
            sum = nums3[i] + nums4[j];
            result += (map.get((sum)*-1) || 0);
        }
    }
    return result;
};
https://leetcode.com/submissions/detail/633773849/