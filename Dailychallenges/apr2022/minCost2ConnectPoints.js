/*
1584. Min Cost to Connect All Points
Medium

1901

59

Add to List

Share
You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].

The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi - xj| + |yi - yj|, where |val| denotes the absolute value of val.

Return the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points.

 

Example 1:


Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
Output: 20
Explanation: 

We can connect the points as shown above to get the minimum cost of 20.
Notice that there is a unique path between every pair of points.
Example 2:

Input: points = [[3,12],[-2,5],[-4,1]]
Output: 18
 

Constraints:

1 <= points.length <= 1000
-106 <= xi, yi <= 106
All pairs (xi, yi) are distinct.
Accepted
73,541
Submissions
117,027
*/
Solutions
/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
  let cost = 0;
    let n  = points.length;
    let dis = Array(n).fill(Infinity);
    dis[0] = 0;
    let next =0;
    
    for(let j=1;j<n;j++){
        let min = Infinity;
        let point = -1;
        for(let i=1;i<n;i++){
            if(dis[i]>0){
                 dis[i] = Math.min(dis[i], Math.abs(points[i][0] - points[next][0]) + Math.abs(points[i][1] - points[next][1]));
                 if(dis[i]<min){
                    min = dis[i];
                     point = i;
                     }    
            }  
        }
        cost += min;
        dis[point] = 0;
        next = point;
    }
    return cost;
};
https://leetcode.com/submissions/detail/687807616/
