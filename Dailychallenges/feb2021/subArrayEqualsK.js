/*
560. Subarray Sum Equals K
Medium

11715

364

Add to List

Share
Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.

 

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2
 

Constraints:

1 <= nums.length <= 2 * 104
-1000 <= nums[i] <= 1000
-107 <= k <= 107
Accepted
696,602
Submissions
1,582,095
*/
Solution
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
	let map = {0: 1};
    
    let sum = 0;
    let count = 0;
   
    for(let num of nums) {
        sum += num;
         let difference = sum-k;
        if(map[difference]) {
            count += map[difference];
        } 
        map[sum] = map[sum] +1 || 1 ;
    }
    return count;
};
