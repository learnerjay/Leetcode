/*
897. Increasing Order Search Tree
Easy

2760

614

Add to List

Share
Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.

 

Example 1:


Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
Example 2:


Input: root = [5,1,7]
Output: [1,null,5,null,7]
 

Constraints:

The number of nodes in the given tree will be in the range [1, 100].
0 <= Node.val <= 1000
Accepted
187,848
Submissions
242,845
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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let head = root;
    let node;
     if(root.left){
         head = increasingBST(root.left);
         node = head;
         while(node.right) node = node.right;
         node.right = root;
         node = node.right;
   }
   else{
       node = root;
   }
    if(root.right){
       node.right = increasingBST(root.right);
   } 
    root.left = null; 
    return head;
};
https://leetcode.com/submissions/detail/682168477/
