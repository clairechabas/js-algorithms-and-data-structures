/**
 * Number of Steps to Reduce a Number to Zero
 *
 * Given an integer num, return the number of steps to reduce it to zero.
 * In one step, if the current number is even, you have to divide it by 2,
 * otherwise, you have to subtract 1 from it.
 *
 * @param {number} num
 * @return {number}
 */

// Solution 1 - 53ms - Beats 89.8%
var numberOfSteps = function (num) {
  let steps = 0;

  while (num > 0) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num--;
    }

    steps++;
  }

  return steps;
};

// Solution 2
var numberOfStepsRecursive = function (num) {
  if (num === 0) return 0;
  return recrusive(num, 0);
};
function recrusive(num, counter) {
  num = num % 2 === 0 ? num / 2 : num - 1;

  return num === 0 ? counter + 1 : recrusive(num, counter + 1);
}

// Examples
console.log(numberOfStepsRecursive(14)); // 6
console.log(numberOfStepsRecursive(8)); // 4
console.log(numberOfStepsRecursive(123)); // 12
