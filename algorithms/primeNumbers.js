/**
 * Is A Prime Number
 *
 * Given an integer number X, find out if it is a prime number.
 *
 * @param {number} n
 * @return {boolean}
 */
function isPrime(n) {
  // A prime number is greater than 1
  if (x === 0 || x === 1) return false;

  // Naïve solution: O(n)
  // for (let i = 2; i < Math.floor(Math.sqrt(n)) + 1; i++) {
  //   if (n % i === 0) return false;
  // }

  // Optimized solution: O(sqrt(n))
  let i = 2;
  while (i ** 2 < x) {
    if (n % i === 0) return false;
    i++;
  }

  // if we couldn't divide n by any number before it, it's prime
  return true;
}

/**
 * Prime numbers in range
 *
 * Given two integer numbers L and R, count how many prime integers
 * are in the interval [L, R].
 *
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
function primeCount(l, r) {
  let count = 0;

  for (let i = l; i <= r; i++) {
    if (isPrime(i)) count++;
  }

  return count;
}
