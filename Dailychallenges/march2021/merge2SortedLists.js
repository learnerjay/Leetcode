/*
21. Merge Two Sorted Lists
Easy

11213

1013

Add to List

Share
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
     let head = new ListNode();
     let ans = head;
    
    if(list1 == null){
        return list2;   
    }
    if(list2 == null){
        return list1;  
    }
    
    while(list1 != null && list2 != null){
         if(list1.val > list2.val){
             ans.next = list2
             ans = ans.next
             list2 = list2.next
         }else {
             ans.next = list1
             ans = ans.next
             list1 = list1.next
         }else{
              ans.next = list2
            ans = ans.next
            list2 = list2.next
        
             ans.next = list1
             ans = ans.next
             list1 = list1.next
         }      
    }
    if(list1 != null){
         ans.next = list1
             ans = ans.next
             list1 = list1.next
    }
    if(list2 != null){
        ans.next = list2
            ans = ans.next
            list2 = list2.next
    }
    return head.next;
};
https://leetcode.com/submissions/detail/655295669/