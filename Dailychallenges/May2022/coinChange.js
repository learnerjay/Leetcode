/*
322. Coin Change
Medium

11628

273

Add to List

Share
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

 

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0
 

Constraints:

1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104
Accepted
1,003,433
Submissions
2,482,271
*/
Solution
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let arr = new Array(amount+1).fill(Infinity); 
    arr[0] = 0;
    
    for(let i=1;i<=amount;i++){
        for(let coin of coins){
            if(i >= coin){
                arr[i] = Math.min(arr[i],arr[i-coin]+1)
            }
        }
    }
    return arr[amount] == Infinity  ? -1 : arr[amount];
};
