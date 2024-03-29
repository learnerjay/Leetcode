/*
23. Merge k Sorted Lists
Hard

10622

426

Add to List

Share
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

 

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []
 

Constraints:

k == lists.length
0 <= k <= 10^4
0 <= lists[i].length <= 500
-10^4 <= lists[i][j] <= 10^4
lists[i] is sorted in ascending order.
The sum of lists[i].length won't exceed 10^4.
Accepted
1,139,096
Submissions
2,471,793
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (!lists || !lists.length) return null;
    
    const arr = []
    
    lists.forEach(list => {
        while(list) {
            arr.push(list.val)
            list = list.next;
        }
    })

    
    if(!arr.length || !arr ) return null;
    
    const finalList = new ListNode()
    let current = finalList;
    
    arr.sort((a, b) => a - b).forEach((val, idx) => {
        current.val = val;
        
        if(idx < arr.length - 1) {
			current.next = new ListNode();
			current = current.next;
		}
    })
    return finalList;
};
https://leetcode.com/submissions/detail/634937948/