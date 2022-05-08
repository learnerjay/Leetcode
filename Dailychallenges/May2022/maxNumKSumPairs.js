/*
1679. Max Number of K-Sum Pairs
Medium

1544

36

Add to List

Share
You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

Return the maximum number of operations you can perform on the array.

 

Example 1:

Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.
Example 2:

Input: nums = [3,1,3,4,3], k = 6
Output: 1
Explanation: Starting with nums = [3,1,3,4,3]:
- Remove the first two 3's, then nums = [1,4,3]
There are no more pairs that sum up to 6, hence a total of 1 operation.
 

Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
1 <= k <= 109
Accepted
92,391
Submissions
160,968
*/
Solution
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums.sort((a,b) => a-b);
    let start = 0;
    let end = nums.length-1;
    let res = 0
    while(start < end ){
            if(nums[start] + nums[end] == k){
              res++;
                start++;
                end--;
            }else if(nums[start] + nums[end] < k){
                start++;   
            }else{
                end--;
            }
        }
        return res;
};
https://leetcode.com/submissions/detail/693119193/
