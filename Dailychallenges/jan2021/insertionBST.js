/*
701. Insert into a Binary Search Tree
Medium

2731

126

Add to List

Share
You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

 

Example 1:


Input: root = [4,2,7,1,3], val = 5
Output: [4,2,7,1,3,5]
Explanation: Another accepted tree is:

Example 2:

Input: root = [40,20,60,10,30,50,70], val = 25
Output: [40,20,60,10,30,50,70,null,null,25]
Example 3:

Input: root = [4,2,7,1,3,null,null,null,null,null,null], val = 5
Output: [4,2,7,1,3,5]
 

Constraints:

The number of nodes in the tree will be in the range [0, 104].
-108 <= Node.val <= 108
All the values Node.val are unique.
-108 <= val <= 108
It's guaranteed that val does not exist in the original BST.
Accepted
258,112
Submissions
344,157
*/
SOLUTION
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
 * @param {number} val
 * @return {TreeNode}
 */
const insertIntoBST = function(root, val) {
    if(!root){
        root = new TreeNode(val);
    }else{
        let temp = root;
        while(temp){
        if(temp.val < val){
            if(temp.right === null){
                temp.right = new TreeNode(val);
                break;
            }else{
                temp = temp.right;
            }
        }else{
        if(temp.val > val){
            if(temp.left === null){
                temp.left = new TreeNode(val);
                break;
            }else{
                temp = temp.left;
            }
        }
    }
}
}
    return root;
};
https://leetcode.com/submissions/detail/618417215/