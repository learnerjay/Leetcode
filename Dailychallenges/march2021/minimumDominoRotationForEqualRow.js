/*
1007. Minimum Domino Rotations For Equal Row
Medium

2161

228

Add to List

Share
In a row of dominoes, tops[i] and bottoms[i] represent the top and bottom halves of the ith domino. (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

We may rotate the ith domino, so that tops[i] and bottoms[i] swap values.

Return the minimum number of rotations so that all the values in tops are the same, or all the values in bottoms are the same.

If it cannot be done, return -1.

 

Example 1:


Input: tops = [2,1,2,4,2,2], bottoms = [5,2,6,2,3,2]
Output: 2
Explanation: 
The first figure represents the dominoes as given by tops and bottoms: before we do any rotations.
If we rotate the second and fourth dominoes, we can make every value in the top row equal to 2, as indicated by the second figure.
Example 2:

Input: tops = [3,5,1,2,3], bottoms = [3,6,3,3,4]
Output: -1
Explanation: 
In this case, it is not possible to rotate the dominoes to make one row of values equal.
 

Constraints:

2 <= tops.length <= 2 * 104
bottoms.length == tops.length
1 <= tops[i], bottoms[i] <= 6
Accepted
163,296
Submissions
313,620
*/
Solution
/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function(tops, bottoms) {
    let opt1 = conversion(tops[0]);
    let opt2 = conversion(bottoms[0]);
    
    if(opt1 >= 0 && opt2 >= 0) return Math.min(opt1,opt2)
    else if(opt1>0) return opt1
    else if (opt2>0) return opt2
    
    return -1
    function conversion(target){
        let b=0, c=0;
    for(let i=0;i<tops.length;i++){
        
        if(tops[i] !== target && bottoms [i]!== target) return -1
        
        if(tops[i] ==target && bottoms[i]!==target) b++
         if(tops[i] !==target && bottoms[i]==target) c++
    }
      return Math.min(b,c) 
    }
};
https://leetcode.com/submissions/detail/663836990/
