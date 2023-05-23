/**
 * Create a function takes an array of numbers and returns a number that is the sum of all values in the array.
 */
// OPTION 1: with reduce()
function cumulativeSumWithReduce(numbers) {
  return numbers.reduce((total, next) => total + next);
}

// OPTION 2: without JS built-in array methods
export function cumulativeSum(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total;
}

// Examples
console.log(cumulativeSum([1, 2, 3, 4, 5])); // 15
console.log(cumulativeSum([1, 1, 1, 1, 1])); // 5
