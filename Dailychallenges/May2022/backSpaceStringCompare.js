/*
844. Backspace String Compare
Easy

4724

204

Add to List

Share
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

 

Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
Example 3:

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
 

Constraints:

1 <= s.length, t.length <= 200
s and t only contain lowercase letters and '#' characters.
 

Follow up: Can you solve it in O(n) time and O(1) space?
*/
Solution
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
   let first=[];
    let sec=[];
    for(let i= 0; i<s.length;i++){
        if(s[i]==='#')
           first.pop();
        else first.push(s[i]);
        
    }
      for(let i= 0; i<t.length;i++){
          if(t[i]==='#')
           sec.pop();
        else sec.push(t[i]);
    }
    return first.join('')===sec.join('');
}
https://leetcode.com/submissions/detail/691072191/