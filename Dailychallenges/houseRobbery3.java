/*
337. House Robber III
Medium

The thief has found himself a new place for his thievery again. There is only one entrance to this area, called root.

Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that all houses in this place form a binary tree. It will automatically contact the police if two directly-linked houses were broken into on the same night.

Given the root of the binary tree, return the maximum amount of money the thief can rob without alerting the police.

 

Example 1:

Input: root = [3,2,3,null,3,null,1]
Output: 7
Explanation: Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.

Example 2:

Input: root = [3,4,5,1,3,null,1]
Output: 9
Explanation: Maximum amount of money the thief can rob = 4 + 5 = 9.

 

Constraints:

    The number of nodes in the tree is in the range [1, 104].
    0 <= Node.val <= 104

Accepted
255,404
Submissions
482,336
*/
Solution
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    Map<TreeNode,Integer> cache = new HashMap<>();
    public int rob(TreeNode root) {
        if(cache.containsKey(root)){
            return cache.get(root);
        }
          if (root == null) {
      return 0;
  }else{
      int leftLeftGrandChild =0;
      int leftRightGrandChild =0;
      
      int rightLeftGrandChild =0;
      int rightRightGrandChild =0;
      
      if(root.left != null){
          leftLeftGrandChild = rob(root.left.left); 
          leftRightGrandChild = rob(root.left.right);  

      }
      if(root.right != null){
          rightLeftGrandChild = rob(root.right.left);
          rightRightGrandChild = rob(root.right.right);  
      }

      int includeRoot = root.val + leftLeftGrandChild + leftRightGrandChild + rightLeftGrandChild + rightRightGrandChild;
      
      int leftChild = rob(root.left);
      int rightChild = rob(root.right);
      
      int withoutRoot  = leftChild + rightChild;
      
      cache.put(root,Math.max(withoutRoot,includeRoot));
        return cache.get(root);
    }
    }
}
https://leetcode.com/submissions/detail/597387400/