/*
847. Shortest Path Visiting All Nodes
Hard

1866

111

Add to List

Share
You have an undirected, connected graph of n nodes labeled from 0 to n - 1. You are given an array graph where graph[i] is a list of all the nodes connected with node i by an edge.

Return the length of the shortest path that visits every node. You may start and stop at any node, you may revisit nodes multiple times, and you may reuse edges.

 

Example 1:


Input: graph = [[1,2,3],[0],[0],[0]]
Output: 4
Explanation: One possible path is [1,0,2,0,3]
Example 2:


Input: graph = [[1],[0,2,4],[1,3,4],[2],[1,2]]
Output: 4
Explanation: One possible path is [0,1,4,2,3]
 

Constraints:

n == graph.length
1 <= n <= 12
0 <= graph[i].length < n
graph[i] does not contain i.
If graph[a] contains b, then graph[b] contains a.
The input graph is always connected.
Accepted
41,529
Submissions
70,737
*/
Solution
var shortestPathLength = function(graph) {
  const dist = [];
  const q = [];
  for (let i=0; i<graph.length; i++) {
    const path = getPathWithVisitedNode(i);
    dist[path] = [];
    dist[path][i] = 0;
    q.push({path, currentNode: i});
  }
  
  while(q.length > 0) {
    const {path, currentNode} = q.shift();
    
    if (path === fullyVisitedPath(graph.length)) {
      return dist[path][currentNode];
    }
    
    for (let i=0; i<graph[currentNode].length; i++) {
      const neighbor = graph[currentNode][i];
      const nextPath = markNodeVisitedAndReturnNewPath(path, neighbor);
      
      if (dist[nextPath]?.[neighbor] === undefined) {
        if (dist[nextPath] === undefined) {
          dist[nextPath] = [];
        }
        dist[nextPath][neighbor] = dist[path][currentNode] + 1;
        q.push({path: nextPath, currentNode:neighbor});
      }
    }
  }
};

const markNodeVisitedAndReturnNewPath = (path, node) => {
  return (path | (1<<node))
}

const getPathWithVisitedNode = (node) => {
  return 1<<node;
}

const fullyVisitedPath = (maxNodes) => {
  return (1<<maxNodes) - 1;
}
https://leetcode.com/submissions/detail/649309519/