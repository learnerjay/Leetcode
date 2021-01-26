/**
Max Consecutive Ones
Given a binary array, find the maximum number of consecutive 1s in this array.
Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
Note:
    The input array will only contain 0 and 1.
    The length of input array is a positive integer and will not exceed 10,000
**/
Solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let seccheck = 0;
    for(var i=0;i<nums.length;i++){
        if(nums[i] == 1){
            count +=1;
        }
        else{
            count = 0;
        }
        seccheck = count > seccheck ? count : seccheck ;
    }
    return seccheck;
};
/*
var findMaxConsecutiveOnes = function(nums) {
    var count = 0; 
        var result = 0; 
        for (var i = 0; i < nums.length; i++){ 
            if (nums[i] == 0) 
                count = 0; 
            else{ 
                count++;
                result = Math.max(result, count); 
            } 
        } 
        return result;  
};
*/
