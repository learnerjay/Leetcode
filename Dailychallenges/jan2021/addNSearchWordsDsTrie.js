/*
211. Design Add and Search Words Data Structure
Medium

4333

176

Add to List

Share
Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the WordDictionary class:

WordDictionary() Initializes the object.
void addWord(word) Adds word to the data structure, it can be matched later.
bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
 

Example:

Input
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
Output
[null,null,null,null,false,true,true,true]

Explanation
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True
 

Constraints:

1 <= word.length <= 500
word in addWord consists lower-case English letters.
word in search consist of  '.' or lower-case English letters.
At most 50000 calls will be made to addWord and search.
Accepted
363,979
Submissions
833,708
*/
Solution

var WordDictionary = function() {
    this.trie = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let root = this.trie;
    for(let i=0;i<word.length;i++){
        if(!root[word[i]]) root[word[i]] = {};
        root =  root[word[i]];
      }
     root.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    return this.dfs(word, 0 , this.trie);
};
WordDictionary.prototype.dfs = function(word,index,node){
    if (index == word.length) return node.isEnd == true;
     if (word[index] == '.') {
        for (let key in node) {
            if (this.dfs(word, index + 1, node[key])) return true;
        }
        
    } else {
        if (node[word[index]]!=null) {
            return this.dfs(word, index + 1, node[word[index]]);
        }
    }
    return false;
}

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
https://leetcode.com/submissions/detail/629697083/