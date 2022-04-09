/*
1721. Swapping Nodes in a Linked List
Medium

2207

87

Add to List

Share
You are given the head of a linked list, and an integer k.

Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

 

Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [1,4,3,2,5]
Example 2:

Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
Output: [7,9,6,6,8,7,3,0,9,5]
 

Constraints:

The number of nodes in the list is n.
1 <= k <= n <= 105
0 <= Node.val <= 100
Accepted
127,037
Submissions
188,464
*/
Solution
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    if(head == null){
        return null
    }
    
    let firstN = null;
    let secondN = null;
    
    let len = lengthOf(head);
    let nodes = head;
    for(let i=1;i<k;i++){
        nodes = nodes.next;
    }
    firstN = nodes;
   
    nodes = head;
    for(let i=1;i<len-k+1;i++){
        nodes = nodes.next;
    }
    secondN = nodes;

    let firstNodeVal = firstN.val;
    firstN.val = secondN.val;
    secondN.val = firstNodeVal;
    return head;
}
const lengthOf = (head) => {
    let len = 0;
    let nodes = head;
    while(nodes !== null){
        nodes = nodes.next
        len++;
    }
    return len;
} 
https://leetcode.com/submissions/detail/673625460/
