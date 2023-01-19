const memo = {};

function fib(n) {
  if (memo[n]) {
    return memo[n];
  }

  if (n <= 2) {
    return 1;
  }

  return (memo[n] = fib(n - 1) + fib(n - 2));
}
