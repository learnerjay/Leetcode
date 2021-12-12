/*
416. Partition Equal Subset Sum
Medium

6256

101

Add to List

Share
Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

 

Example 1:

Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].
Example 2:

Input: nums = [1,2,3,5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.
 

Constraints:

1 <= nums.length <= 200
1 <= nums[i] <= 100
*/
Solution
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  let sum = nums.reduce((a,b) => a + b);
    if (sum % 2 === 1 )return false; 
    sum /=2;
    
    let dp = new Array(nums.length + 1).fill(0).map(()=> new Array (sum+1));
    for(let i=0;i<dp[0].length;i++){
        dp[0][i] = false;
    }
     for(let i=0;i<dp.length;i++){
        dp[i][0] = true;
    }
    for(let i=1;i<dp.length;i++){
        for(let j=1;j<dp[i].length;j++){
            let val = nums[i-1];
            
            dp[i][j] = dp[i-1][j] || (j - val >= 0 ? dp[i-1][j-val]:false);
        }
    }
    return dp[nums.length][sum];
};
https://leetcode.com/submissions/detail/600798306/