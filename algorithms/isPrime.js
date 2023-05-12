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
