/**
35. Search Insert Position
Easy
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4

Example 4:
Input: nums = [1,3,5,6], target = 0
Output: 0

Example 5:
Input: nums = [1], target = 0
Output: 0

 

Constraints:
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
**/
Solution
var searchInsert = function(nums, target) {
    for(i=0;i<nums.length;i++){
        if(nums[i] >= target){
            return i;
        }
    }
    return nums.length;
};
let i=0;
    while(nums[i]<target){
        i++;
        if(nums[i] == target){
            return i;
        }
    }
     return i;
/**
 let left = 0;
    let right = nums.length - 1;
    let middle;
    
    while(left <= right){
        middle = Math.floor((left + right) / 2);
        if(nums[middle] === target) return middle;
        else if(nums[middle] < target){
            left = middle + 1;
        } else{
            right = middle - 1;
        }
    }
    
    return left;
*/
