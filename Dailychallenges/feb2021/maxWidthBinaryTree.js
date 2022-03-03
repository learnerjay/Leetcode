/*
662. Maximum Width of Binary Tree
Medium

4044

641

Add to List

Share
Given the root of a binary tree, return the maximum width of the given tree.

The maximum width of a tree is the maximum width among all levels.

The width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes are also counted into the length calculation.

It is guaranteed that the answer will in the range of 32-bit signed integer.

 

Example 1:


Input: root = [1,3,2,5,3,null,9]
Output: 4
Explanation: The maximum width existing in the third level with the length 4 (5,3,null,9).
Example 2:


Input: root = [1,3,null,5,3]
Output: 2
Explanation: The maximum width existing in the third level with the length 2 (5,3).
Example 3:


Input: root = [1,3,2,5]
Output: 2
Explanation: The maximum width existing in the second level with the length 2 (3,2).
 

Constraints:

The number of nodes in the tree is in the range [1, 3000].
-100 <= Node.val <= 100
Accepted
163,579
Submissions
409,632
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
var widthOfBinaryTree = function(root) {
    if (!root) return 0;
    let maxWidth = 0n;
    const queue = [];
    queue.push([root,0n])
    while(queue.length){
        const len = queue.length;
        let node, pos = 0n, right = 0n;
        for(let i=0;i<len;i++){
            [node,pos] = queue.shift()
            if(i === 0) first = pos;
            if(node.left) queue.push([node.left,pos*2n])
            
            if(node.right) queue.push([node.right,pos*2n+1n])
        }
        const currwidth = pos - first + 1n;
        maxWidth = maxWidth > currwidth ? maxWidth : currwidth;
    }
    return maxWidth;
};
https://leetcode.com/submissions/detail/650023156/