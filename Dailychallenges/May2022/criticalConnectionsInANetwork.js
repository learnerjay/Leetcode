/*
1192. Critical Connections in a Network
Hard

4200

152

Add to List

Share
There are n servers numbered from 0 to n - 1 connected by undirected server-to-server connections forming a network where connections[i] = [ai, bi] represents a connection between servers ai and bi. Any server can reach other servers directly or indirectly through the network.

A critical connection is a connection that, if removed, will make some servers unable to reach some other server.

Return all critical connections in the network in any order.

 

Example 1:


Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
Output: [[1,3]]
Explanation: [[3,1]] is also accepted.
Example 2:

Input: n = 2, connections = [[0,1]]
Output: [[0,1]]
 

Constraints:

2 <= n <= 105
n - 1 <= connections.length <= 105
0 <= ai, bi <= n - 1
ai != bi
There are no repeated connections.
Accepted
162,817
Submissions
304,707
*/
Solutions
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
    let graph = Array.from(Array(n), () => []); 
  let results = []; 
  let levels = [];
  for (let pair of connections) { 
    graph[pair[0]].push(pair[1]);
    graph[pair[1]].push(pair[0]);
  }
  let dfs = (parent, curr, level) => {
    levels[curr] = level + 1;
    let currLevel = levels[curr];
    for (let next of graph[curr]) {
      if (next === parent) continue;
      if (!levels[next]) dfs(curr, next, level + 1);
      levels[curr] = Math.min(levels[curr], levels[next]);
      if (currLevel < levels[next]) { 
        results.push([curr, next]);
      }
    }
  };
  dfs(-1, 0, 0);
  return results;
};
