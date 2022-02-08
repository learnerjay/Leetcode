/*
525. Contiguous Array
Medium

4617

190

Add to List

Share
Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

 

Example 1:

Input: nums = [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
Example 2:

Input: nums = [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
 

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
Accepted
235,629
Submissions
516,435
*/
Solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let hash = {};
    let maxlen = 0; 
    let count = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] == 0){
            count--;
        }else if(nums[i] == 1){
            count++;
        }
    
        if(count === 0){
            maxlen = i+1;
        }
        if(count in hash){
          maxlen = Math.max(maxlen, i- hash[count]);
        }else{
            hash[count] = i;
        }
    }
    return maxlen;
};
https://leetcode.com/submissions/detail/634444044/