/*
287. Find the Duplicate Number
Medium

12834

1448

Add to List

Share
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

 

Example 1:

Input: nums = [1,3,4,2,2]
Output: 2
Example 2:

Input: nums = [3,1,3,4,2]
Output: 3
 

Constraints:

1 <= n <= 105
nums.length == n + 1
1 <= nums[i] <= n
All the integers in nums appear only once except for precisely one integer which appears two or more times.
 

Follow up:

How can we prove that at least one duplicate number must exist in nums?
Can you solve the problem in linear runtime complexity?
Accepted
783,585
Submissions
1,335,943
*/
Solution
Slow- approach 
nums.sort((a,b)=> a-b)
   let ind
   for(let i=0;i<nums.length-1;i++){
           if(nums[i] == nums[i+1]){
               ind = nums[i];
               break;
           }
   } 
    return ind

fast - approach
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
   let slow = 0,
    fast = 0;
  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    console.log(fast)
    if (slow === fast) break;
  }
  let newSlow = 0;
  while (slow !== newSlow) {
    slow = nums[slow];
    newSlow = nums[newSlow];
  }
  return newSlow;
};
https://leetcode.com/submissions/detail/669782996/