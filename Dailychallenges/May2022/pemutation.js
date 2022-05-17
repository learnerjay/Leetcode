/*
47. Permutations II
Medium

5434

96

Add to List

Share
Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

 

Example 1:

Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]
Example 2:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 

Constraints:

1 <= nums.length <= 8
-10 <= nums[i] <= 10
Accepted
634,703
Submissions
1,153,197
*/
Solution
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort((a,b) => {
        return a-b
    })

    let temp = []
    let res = []

    function backtracking(nums, temp) {
        if(nums.length === 0) {
            res.push([...temp])
            return
        }
        
        for(let i=0; i<nums.length; i++) {
            if(i !== 0 && nums[i] == nums[i-1]) continue 
            temp.push(nums[i])
            nums.splice(i, 1)
            backtracking(nums, temp)
            nums.splice(i, 0, temp.pop())
        }
    }
    backtracking(nums, temp)
    return res 
};
