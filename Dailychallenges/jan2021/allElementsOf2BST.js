/*
1305. All Elements in Two Binary Search Trees
Medium

1910

55

Add to List

Share
Given two binary search trees root1 and root2, return a list containing all the integers from both trees sorted in ascending order.

 

Example 1:


Input: root1 = [2,1,4], root2 = [1,0,3]
Output: [0,1,1,2,3,4]
Example 2:


Input: root1 = [1,null,8], root2 = [8,1]
Output: [1,1,8,8]
 

Constraints:

The number of nodes in each tree is in the range [0, 5000].
-105 <= Node.val <= 105
Accepted
140,492
Submissions
176,496
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    this.list = [];
    collection(root1);
    collection(root2);
    return list.sort((a,b) => a-b)
};
var collection= function(root){
    if(root == null) return;
    else{
        this.list.push(root.val);
        collection(root.left);
        collection(root.right);
    }
}
https://leetcode.com/submissions/detail/628362706/