/*
147. Insertion Sort List
Medium

1653

766

Add to List

Share
Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list's head.

The steps of the insertion sort algorithm:

Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.
At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list and inserts it there.
It repeats until no input elements remain.
The following is a graphical example of the insertion sort algorithm. The partially sorted list (black) initially contains only the first element in the list. One element (red) is removed from the input data and inserted in-place into the sorted list with each iteration.


 

Example 1:


Input: head = [4,2,1,3]
Output: [1,2,3,4]
Example 2:


Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]
 

Constraints:

The number of nodes in the list is in the range [1, 5000].
-5000 <= Node.val <= 5000
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
var insertionSortList = function(head) {
    if (!head) return null;
    let sorted = head;
    head = head.next;
    sorted.next = null;
    while(head){
        let prev = null;
        let node = sorted;
        while(node && head.val > node.val){
            prev = node;
            node = node.next;
        }
        let insert = head;
        head = head.next;
        insert.next = node;
        if(prev){
            prev.next = insert;
        }else{
            sorted = insert;
        }
    }
    return sorted;
};
 https://leetcode.com/submissions/detail/602285346/