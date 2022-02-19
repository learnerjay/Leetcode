/*
24. Swap Nodes in Pairs
Medium

6183

276

Add to List

Share
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

 

Example 1:


Input: head = [1,2,3,4]
Output: [2,1,4,3]
Example 2:

Input: head = []
Output: []
Example 3:

Input: head = [1]
Output: [1]
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
var swapPairs = function(head) {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let prev = dummy;
    while(prev.next !== null &&  prev.next.next !== null ){
        let current = prev.next;
        console.log
        let forward = current.next;
        let temp = forward.next;
        
        prev.next = forward;
        forward.next = current;
        current.next = temp;
        prev = current;
    }
    return dummy.next;
};
https://leetcode.com/submissions/detail/642689195/