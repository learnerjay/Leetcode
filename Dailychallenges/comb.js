/*
1286. Iterator for Combination
Medium

Design the CombinationIterator class:

    CombinationIterator(string characters, int combinationLength) Initializes the object with a string characters of sorted distinct lowercase English letters and a number combinationLength as arguments.
    next() Returns the next combination of length combinationLength in lexicographical order.
    hasNext() Returns true if and only if there exists a next combination.

 

Example 1:

Input
["CombinationIterator", "next", "hasNext", "next", "hasNext", "next", "hasNext"]
[["abc", 2], [], [], [], [], [], []]
Output
[null, "ab", true, "ac", true, "bc", false]

Explanation
CombinationIterator itr = new CombinationIterator("abc", 2);
itr.next();    // return "ab"
itr.hasNext(); // return True
itr.next();    // return "ac"
itr.hasNext(); // return True
itr.next();    // return "bc"
itr.hasNext(); // return False

 

Constraints:

    1 <= combinationLength <= characters.length <= 15
    All the characters of characters are unique.
    At most 104 calls will be made to next and hasNext.
    It's guaranteed that all calls of the function next are valid.

https://leetcode.com/submissions/detail/587096136/*/
Solution
/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function(characters, combinationLength) {
    this.arr = build(combinationLength, characters.split("").sort().join(""));
    this.pos = 0;
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
    if(this.pos<this.arr.length){
        return this.arr[this.pos++];
    }
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
    return this.pos<this.arr.length;
};

/** 
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
function build(max,str,output=[],current=""){
    if(current.length === max){
        output.push(current);
        return;
        
    }else{
        for(let i=0;i<str.length;i++){
            build(max,str.slice(i+1),output, current+str[i]);
        }
    }
    return output;
}
