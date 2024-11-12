function knapsack(capacity, weight, value) {
  const n = weight.length;
  const dp = Array(n + 1)
    .fill()
    .map(() => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= capacity; j++) {
      dp[i][j] = dp[i - 1][j];
      if (weight[i - 1] <= j) {
        dp[i][j] = Math.max(
          dp[i][j],
          dp[i - 1][j - weight[i - 1]] + value[i - 1]
        );
      }
    }
  }
  return dp[n][capacity];
}

const weight = [10, 20, 30];
const value = [60, 100, 120];
const capacity = 50;

console.log(knapsack(capacity, weight, value));
