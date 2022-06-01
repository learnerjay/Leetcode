/*
354. Russian Doll Envelopes
Hard

3863

88

Add to List

Share
You are given a 2D array of integers envelopes where envelopes[i] = [wi, hi] represents the width and the height of an envelope.

One envelope can fit into another if and only if both the width and height of one envelope are greater than the other envelope's width and height.

Return the maximum number of envelopes you can Russian doll (i.e., put one inside the other).

Note: You cannot rotate an envelope.

 

Example 1:

Input: envelopes = [[5,4],[6,4],[6,7],[2,3]]
Output: 3
Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).
Example 2:

Input: envelopes = [[1,1],[1,1],[1,1]]
Output: 1
 

Constraints:

1 <= envelopes.length <= 105
envelopes[i].length == 2
1 <= wi, hi <= 105
Accepted
156,702
Submissions
403,864
*/ 
var maxEnvelopes = function(envelopes) {
     envelopes.sort((a,b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0])
    let len = envelopes.length, dp = []
    for (let i = 0; i < len; i++) {
        let height = envelopes[i][1], start = 0, end = dp.length   
        while (start < end) {
            let mid = (start + end) >> 1
            if (dp[mid] < height) start = mid + 1
            else end = mid
        }
        dp[start] = height
    }
    return dp.length
}


if (envelopes === null || envelopes.length === 0) {
        return 0;
    } 
    let dp = new Array(envelopes.length);
   envelopes.sort((a,b) => a[0] - b[0])
   let len = envelopes.length;
    for(let i=0;i<len;i++){
        let count =1;
        for(let j=0;j<i;j++){
            if(envelopes[i][0] > envelopes[j][0] && envelopes[i][1] > envelopes[j][1]){
                count = Math.max(count, dp[j] + 1);
            }
        }
        dp[i] = count;
    }
    return Math.max(...dp);
