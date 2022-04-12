/*
923. 3Sum With Multiplicity
Medium

1780

218

Add to List

Share
Given an integer array arr, and an integer target, return the number of tuples i, j, k such that i < j < k and arr[i] + arr[j] + arr[k] == target.

As the answer can be very large, return it modulo 109 + 7.

 

Example 1:

Input: arr = [1,1,2,2,3,3,4,4,5,5], target = 8
Output: 20
Explanation: 
Enumerating by the values (arr[i], arr[j], arr[k]):
(1, 2, 5) occurs 8 times;
(1, 3, 4) occurs 8 times;
(2, 2, 4) occurs 2 times;
(2, 3, 3) occurs 2 times.
Example 2:

Input: arr = [1,1,2,2,2,2], target = 5
Output: 12
Explanation: 
arr[i] = 1, arr[j] = arr[k] = 2 occurs 12 times:
We choose one 1 from [1,1] in 2 ways,
and two 2s from [2,2,2,2] in 6 ways.
 

Constraints:

3 <= arr.length <= 3000
0 <= arr[i] <= 100
0 <= target <= 300
Accepted
68,335
Submissions
155,770
*/
Solution
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function(arr, target) {
  let len =arr.length;
    const map = new Map();
  const modulo = 1000000007;
  let result = 0;

  for (let i = 0; i < len; i++) {
    result = (result + (map.get(target - arr[i]) || 0)) % modulo;

    for (let j = 0; j < i; j++) {
      let temp = arr[i] + arr[j];
      map.set(temp, (map.get(temp) || 0) + 1);
    }
  }

  return result;
};
https://leetcode.com/submissions/detail/675160978/
