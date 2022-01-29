/*
941. Valid Mountain Array
Easy

1819

131

Add to List

Share
Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

 

Example 1:

Input: arr = [2,1]
Output: false
Example 2:

Input: arr = [3,5,5]
Output: false
Example 3:

Input: arr = [0,3,2,1]
Output: true
 

Constraints:

1 <= arr.length <= 104
0 <= arr[i] <= 104
Accepted
253,412
Submissions
755,727
*/
Solution
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if( arr.length == 0 ) return false;
    let i=0;
    for(;i<arr.length;i++){
        if(arr[i]<arr[i+1]){
        }else{
            break;
        }
    } 
    if(i ==0 || i==arr.length-1){
        return false;
    }
    for(;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
        }else{
            break;
        }
    } 
    return i==(arr.length-1)
};
https://leetcode.com/submissions/detail/627608088/