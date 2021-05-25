/*
Sort Array By Parity

Given an array nums of non-negative integers, return an array consisting of all the even elements of nums, followed by all the odd elements of nums.

You may return any answer array that satisfies this condition.

 

Example 1:

Input: nums = [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

 

Note:

    1 <= nums.length <= 5000
    0 <= nums[i] <= 5000
*/
Solution
class Solution {
    public int[] sortArrayByParity(int[] nums) {
        int[] result = new int[nums.length];        
        int start = 0;
        int end = nums.length - 1;        
        for (int k : nums) {
            if (k % 2 == 0) {
                result[start] = k;
                start++;
            } else {
                result[end] = k;
                end--;
            }
        }
        return result;
    }
}
