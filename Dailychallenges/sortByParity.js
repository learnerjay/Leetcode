/* week 4 - sept 22 - 28th challenge
Sort Array By Parity II
Given an array of integers nums, half of the integers in nums are odd, and the other half are even.

Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

Return any answer array that satisfies this condition.

Example 1:

Input: nums = [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

Example 2:

Input: nums = [2,3]
Output: [2,3]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
   
    let j = 1;
    for (let i = 0; i < nums.length; i += 2)
      if (nums[i] % 2 == 1) {
        while (nums[j] % 2 == 1)
          j += 2;

        // Swap A[i] and A[j]
        let tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
      }

    return nums;
};
