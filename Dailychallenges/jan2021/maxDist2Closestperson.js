/*
849. Maximize Distance to Closest Person
Medium

2208

154

Add to List

Share
You are given an array representing a row of seats where seats[i] = 1 represents a person sitting in the ith seat, and seats[i] = 0 represents that the ith seat is empty (0-indexed).

There is at least one empty seat, and at least one person sitting.

Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized. 

Return that maximum distance to the closest person.

 

Example 1:


Input: seats = [1,0,0,0,1,0,1]
Output: 2
Explanation: 
If Alex sits in the second open seat (i.e. seats[2]), then the closest person has distance 2.
If Alex sits in any other open seat, the closest person has distance 1.
Thus, the maximum distance to the closest person is 2.
Example 2:

Input: seats = [1,0,0,0]
Output: 3
Explanation: 
If Alex sits in the last seat (i.e. seats[3]), the closest person is 3 seats away.
This is the maximum distance possible, so the answer is 3.
Example 3:

Input: seats = [0,1]
Output: 1
 

Constraints:

2 <= seats.length <= 2 * 104
seats[i] is 0 or 1.
At least one seat is empty.
At least one seat is occupied.
Accepted
150,389
Submissions
321,691
*/
Solution
/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    const leftDist = Array(seats.length).fill(Infinity);
    const rightDist = Array(seats.length).fill(Infinity);
    const res = Array(seats.length).fill(0);

      let dist = Infinity;

      for (let i = 0; i < seats.length; i++) {
        if (seats[i] === 1) {
          dist = 0;
          leftDist[i] = 0;
        } else {
          leftDist[i] = ++dist;
        }
      }

      dist = Infinity;
      for (let i = seats.length - 1; i >= 0; i--) {
        if (seats[i] === 1) {
          rightDist[i] = 0;
          dist = 0;
        } else {
          rightDist[i] = ++dist;
        }
      }

      for (let i = 0; i < seats.length; i++) {
        res[i] = Math.min(leftDist[i], rightDist[i]);
      }

      return Math.max(...res);
};
https://leetcode.com/submissions/detail/621098962/