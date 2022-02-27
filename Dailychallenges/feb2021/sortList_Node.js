/*
148. Sort List
Medium

6522

213

Add to List

Share
Given the head of a linked list, return the list after sorting it in ascending order.

 

Example 1:


Input: head = [4,2,1,3]
Output: [1,2,3,4]
Example 2:


Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is in the range [0, 5 * 104].
-105 <= Node.val <= 105
 

Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?

Accepted
455,953
Submissions
893,830
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
 * @return {ListNode}
 */
var sortList = function(head) {
     if(head == null || head.next == null){
         return head
     }
    const [left,right] = split(head);
    const root = new ListNode(null);
    return merge(root, sortList(left), sortList(right))
};

function split(node){
    let slow = node;
    let fast = node;
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next
    }
    const left = node;
    const right = slow.next;
    slow.next = null;
    
    return [left,right]
}
function merge(root,left,right){
    let pointer = root;
    while(left !== null || right !== null ){
        if(left === null){
            pointer.next = right;
            right = right.next;
        }else if(right === null){
            pointer.next = left;
            left = left.next;
        }else{
            if(left.val < right.val){
                pointer.next = left;
                left = left.next;
            }else{
               pointer.next = right;
             right = right.next;
            }
        }
         pointer = pointer.next;
    }
    return root.next;
}
https://leetcode.com/submissions/detail/648162052/