/*
347. Top K Frequent Elements
Medium

8586

355

Add to List

Share
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/
Solution
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let m = new Map();
    let len= nums.length;
    for(let i=0;i<len;i++){
        m.set(nums[i],m.get(nums[i])+1||1);
    }
    let arr = Array.from(m.entries());
    arr.sort((a,b) => b[1]-a[1]);
    let res = [];
    for(let i=0;i<k;i++){
        res.push(arr[i][0]);
    }
    return res;
}
https://leetcode.com/submissions/detail/677048788/
