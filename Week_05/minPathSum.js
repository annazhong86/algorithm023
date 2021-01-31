var minPathSum = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    dp[0][0] = grid[0][0];
    for(let i = 0; i < m; i++){
        for(let j = 0; j< n; j++){
            if(i > 0 && j == 0){
                dp[i][0] = dp[i-1][0] + grid[i][0];
            }
            if(i == 0 && j > 0){
                dp[0][j] = dp[0][j-1] + grid[0][j]
            }

            if(i > 0 && j > 0){
                dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
            }
        }
    }

    return dp[m-1][n-1];
};