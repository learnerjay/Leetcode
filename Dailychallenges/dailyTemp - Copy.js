/*
739. Daily Temperatures
Medium

Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 

Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

Example 2:

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]

Example 3:

Input: temperatures = [30,60,90]
Output: [1,1,0]

 

Constraints:

    1 <= temperatures.length <= 105
    30 <= temperatures[i] <= 100
*/
Solution
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temp) {
    let result = new Array(temp.length).fill(0);
    for(let i=0;i<temp.length;i++){
        const currDay = temp[i];
        for(let j=i+1;j<temp.length;j++){
            if(currDay<temp[j]){
                result[i] = j-i;
                break;
            }   
        }
    }
    return result;
};
/* 
let result = new Array(temp.length).fill(0);
    let stack = [];
    for(let i=0;i<temp.length;i++){
        while(stack.length > 0 && temp[i] > temp[stack[stack.length-1]]){
        let index = stack.pop();
            result[index]= i-index;
            
        }
        stack.push(i);
    }
    return result;
*/
