/*
61. Rotate List
Medium

4532

1254

Add to List

Share
Given the head of a linked list, rotate the list to the right by k places.

 

Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
Example 2:


Input: head = [0,1,2], k = 4
Output: [2,0,1]
 

Constraints:

The number of nodes in the list is in the range [0, 500].
-100 <= Node.val <= 100
0 <= k <= 2 * 109
Accepted
512,267
Submissions
1,495,122
*/
Solution
  if(head == null || k == 0){
        return head;
    }
    var count = 0;
    var list = head;
    var tail = null;
    
    while(list != null){
        if(list.next == null){
            tail = list;
        }
        list = list.next;
        count+=1;
    }
    
    var moves = count - (k % count);
    tail.next = head;
    for(var i=0;i<moves;i++){
        tail = tail.next;
        head = head.next;
    }
    tail.next = null;
    return head;
https://leetcode.com/submissions/detail/657844863/
