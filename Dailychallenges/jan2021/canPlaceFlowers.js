/*
605. Can Place Flowers
Easy
2482

597

Add to List

Share
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

 

Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
 

Constraints:

1 <= flowerbed.length <= 2 * 104
flowerbed[i] is 0 or 1.
There are no two adjacent flowers in flowerbed.
0 <= n <= flowerbed.length
Accepted
254,048
Submissions
775,353
*/
Solution
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
   let count = 0;
    for(let i=0;i<flowerbed.length ;i++){
        if(flowerbed[i-1] !==1 && flowerbed[i] !==1 && flowerbed[i+1]!==1){
            flowerbed[i] = 1;
            count++;
        }
    }
    if (count >= n) {
        return true;
    } else {
        return false;
    }
};
https://leetcode.com/submissions/detail/622583257/