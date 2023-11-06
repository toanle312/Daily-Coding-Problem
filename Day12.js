/**
  This problem was asked by Amazon.

  There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time.
  Given N, write a function that returns the number of unique ways you can climb the staircase.
  The order of the steps matters.

  For example, if N is 4, then there are 5 unique ways:

  1, 1, 1, 1
  2, 1, 1
  1, 2, 1
  1, 1, 2
  2, 2

  What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set 
  of positive integers X ? For example, if X = { 1, 3, 5}, you could climb 1, 3, or 5 steps at a time.
*/

const recursive_solutions = (n, memo) => {
  if (n === 0) return 1;
  if (n === 1 || n === 2) return n;
  if (memo[n] !== undefined) return memo[n];
  return memo[n] = recursive_solutions(n - 1, memo) + recursive_solutions(n - 2, memo);
}

const dp_solutions = (n) => {
  if (n === 0) return 1;
  if (n === 1 || n === 2) return n;
  const dp = [];
  dp[2] = 2;
  dp[0] = dp[1] = 1;
  for (let i = 3; i <= n; ++i) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

const advanced_dp_solutions = (n, X) => {
  if (n === 0) return 1;
  if (n === 1 || n === 2) return n;
  const dp = [];
  dp[2] = 2;
  dp[0] = dp[1] = 1;
  for (let i = 3; i <= n; ++i) {
    let temp = 0;
    for (let j = 0; j < X.length; ++j) {
      if (X[j] <= i) {
        temp += dp[i - X[j]];
      }
    }
    dp[i] = temp;
  }
  return dp[n];
}

console.log(recursive_solutions(47, {}));
console.log(dp_solutions(47));
console.log(advanced_dp_solutions(4, [1, 2, 3, 4]));