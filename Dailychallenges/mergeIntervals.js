/*
56. Merge Intervals
Medium

10935

460

Add to List

Share
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
Accepted
1,186,487
Submissions
2,716,671
*/
Solution
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length <2){
        return intervals;
    }
    const sortedIntervals =  intervals.sort((a,b) =>{
        return a[0]-b[0];
    });
    
    let stack = [];
    stack.push(sortedIntervals[0]);
 
    for(let i=1;i<sortedIntervals.length;i++){
        let currStartStack = sortedIntervals[i][0];
        let currEndStack = sortedIntervals[i][1];  
        
        let prevStartStack = stack[stack.length-1][0];
        let prevEndStack = stack[stack.length-1][1];
        
        if(currStartStack <= prevEndStack){
            stack[stack.length-1] =  [Math.min(currStartStack,prevStartStack),Math.max(prevEndStack,currEndStack)]
        }else{
            stack.push(sortedIntervals[i]);
            
        }
    }
    return stack;
};
https://leetcode.com/submissions/detail/606362822/