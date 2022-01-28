/*
1291. Sequential Digits
Medium

1482

96

Add to List

Share
An integer has sequential digits if and only if each digit in the number is one more than the previous digit.

Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.

 

Example 1:

Input: low = 100, high = 300
Output: [123,234]
Example 2:

Input: low = 1000, high = 13000
Output: [1234,2345,3456,4567,5678,6789,12345]
 

Constraints:

10 <= low <= high <= 10^9
Accepted
71,275
Submissions
117,246
*/
Solution
/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    let allPossibleNumbers = [12,23,34,45,56,67,78,89,
						123,234,345,456,567,678,789,
						1234,2345,3456,4567,5678,6789,
						12345,23456,34567,45678,56789,
						123456,234567,345678,456789,
						1234567,2345678,3456789,
						12345678,23456789,
						123456789];
    let length = allPossibleNumbers.length;
    let ans = [];
    for(let i=0;i<length;i++){
        if(low <= allPossibleNumbers[i] && allPossibleNumbers[i] <= high){
            ans.push(allPossibleNumbers[i])
        }
    }
      return ans;
};
https://leetcode.com/submissions/detail/626898736/