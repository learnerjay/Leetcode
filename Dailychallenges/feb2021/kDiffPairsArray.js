/*
532. K-diff Pairs in an Array
Medium

2122

1921

Add to List

Share
Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.

A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true:

0 <= i < j < nums.length
|nums[i] - nums[j]| == k
Notice that |val| denotes the absolute value of val.

 

Example 1:

Input: nums = [3,1,4,1,5], k = 2
Output: 2
Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
Although we have two 1s in the input, we should only return the number of unique pairs.
Example 2:

Input: nums = [1,2,3,4,5], k = 1
Output: 4
Explanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).
Example 3:

Input: nums = [1,3,1,5,4], k = 0
Output: 1
Explanation: There is one 0-diff pair in the array, (1, 1).
 

Constraints:

1 <= nums.length <= 104
-107 <= nums[i] <= 107
0 <= k <= 107
Accepted
222,435
Submissions
572,155
*/
Solution
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    nums = nums.sort((a,b) => a - b);
    let l = 0;
    let r = 0;
    
    const visited = new Set();

    let count = 0;

    while (r < nums.length) {
       
        if (l === r) {
            r++;
            continue;
        }
      
        const diff = Math.abs(nums[l] - nums[r]);
        
        if (diff > k) { 
            l++; 
        } else if (diff < k) { // If diff < k, then need to increase the upper bonud (increase the diff)
            r++; 
        } else { 
            if (!visited.has(nums[l]) || !visited.has(nums[r])) { 
                visited.add(nums[l]);
                visited.add(nums[r]);
                count++; 
            }
            r++;
        }
    }
    
    return count;
};
https://leetcode.com/submissions/detail/637873604/