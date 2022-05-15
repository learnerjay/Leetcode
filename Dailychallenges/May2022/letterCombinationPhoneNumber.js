/*
17. Letter Combinations of a Phone Number
Medium

10194

681

Add to List

Share
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



 

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].
*/
Solution
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length == 0 || digits == null){
        return [];
    }
    let res = [];
   let chars = { 2: "abc", 3:"def", 4:"ghi", 5:"jkl",6:"mno",7:"pqrs",8:"tuv",9:"wxyz"};
   function helper(i,cur){
        if(digits.length === cur.length ){
            res.push(cur)
            return;
        }
        
        [...chars[digits[i]]].forEach((s)=>helper(i+1,cur+s))
    }
    
    
    helper(0,"")
    return res
};
https://leetcode.com/submissions/detail/696115410/
