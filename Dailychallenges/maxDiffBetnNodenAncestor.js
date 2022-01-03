/*
1026. Maximum Difference Between Node and Ancestor
Medium

1810

54

Add to List

Share
Given the root of a binary tree, find the maximum value v for which there exist different nodes a and b where v = |a.val - b.val| and a is an ancestor of b.

A node a is an ancestor of b if either: any child of a is equal to b or any child of a is an ancestor of b.

 

Example 1:


Input: root = [8,3,10,1,6,null,14,null,null,4,7,13]
Output: 7
Explanation: We have various ancestor-node differences, some of which are given below :
|8 - 3| = 5
|3 - 7| = 4
|8 - 1| = 7
|10 - 13| = 3
Among all possible differences, the maximum value of 7 is obtained by |8 - 1| = 7.
Example 2:


Input: root = [1,null,2,null,0,3]
Output: 3
 

Constraints:

The number of nodes in the tree is in the range [2, 5000].
0 <= Node.val <= 105
Accepted
106,882
Submissions
148,865
*/
Solution
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function(root) {
    if (root == null){
        return 0 ;
    }
    let result = 0;
    helper(root, root.val, root.val);
    
    function helper(root, max, min){
         if(root == null) {
            result = Math.max(result, max-min);
            return;
        }
        max = Math.max(max,root.val);
        min = Math.min(min,root.val);
        
        helper(root.left,max,min);
        helper(root.right,max,min);
    }
    return result;
};

