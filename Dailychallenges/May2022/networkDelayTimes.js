/*
743. Network Delay Time
Medium

4606

298

Add to List

Share
You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.

We will send a signal from a given node k. Return the time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.

 

Example 1:


Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
Output: 2
Example 2:

Input: times = [[1,2,1]], n = 2, k = 1
Output: 1
Example 3:

Input: times = [[1,2,1]], n = 2, k = 2
Output: -1
 

Constraints:

1 <= k <= n <= 100
1 <= times.length <= 6000
times[i].length == 3
1 <= ui, vi <= n
ui != vi
0 <= wi <= 100
All the pairs (ui, vi) are unique. (i.e., no multiple edges.)
Accepted
261,831
Submissions
528,751
*/
Solution
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function networkDelayTime(times, N, K) {
  const time = Array(N).fill(Infinity);
  time[K-1] = 0;
  let changed = true;
  while (changed) {
    changed = false;
    for (let [node1, node2, timeToNode] of times) {
	  node1--, node2--;
      if (time[node1] === Infinity) continue;
      if (time[node2] > time[node1] + timeToNode) {
          time[node2] = time[node1] + timeToNode;
          changed = true;
      }
    }
  }
  let res = Math.max(...time)
  return res === Infinity ? -1 : res;
};
