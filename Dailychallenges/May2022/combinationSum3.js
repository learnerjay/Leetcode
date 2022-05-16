/*
216. Combination Sum III
Medium

3373

82

Add to List

Share
Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

Only numbers 1 through 9 are used.
Each number is used at most once.
Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

 

Example 1:

Input: k = 3, n = 7
Output: [[1,2,4]]
Explanation:
1 + 2 + 4 = 7
There are no other valid combinations.
Example 2:

Input: k = 3, n = 9
Output: [[1,2,6],[1,3,5],[2,3,4]]
Explanation:
1 + 2 + 6 = 9
1 + 3 + 5 = 9
2 + 3 + 4 = 9
There are no other valid combinations.
Example 3:

Input: k = 4, n = 1
Output: []
Explanation: There are no valid combinations.
Using 4 different numbers in the range [1,9], the smallest sum we can get is 1+2+3+4 = 10 and since 10 > 1, there are no valid combination.
 

Constraints:

2 <= k <= 9
1 <= n <= 60
Accepted
312,652
Submissions
479,210
*/
Solution
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let temp = [];
    let res = [];
    let sum = 0;
    let index = 1;
    function backtrack(temp, sum,index){
        if(sum > n || temp.length > k ) return 
        
        if(sum == n && temp.length == k ){
            res.push([...temp])
            return
        }
        
        for(let i=index;i<=9;i++){
            temp.push(i)
            backtrack(temp, sum+i,i+1 );
            temp.pop()
        }
    }
    backtrack(temp, sum,index );
    return res;
};
https://leetcode.com/submissions/detail/696880237/
