/**
 *  Given an integer n, return a string array answer (1-indexed) where:
 * - answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
 * - answer[i] == "Fizz" if i is divisible by 3.
 * - answer[i] == "Buzz" if i is divisible by 5.
 * - answer[i] == i (as a string) if none of the above conditions are true.
 *
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let array = [...Array(n + 1).keys()]; // [0, 1, 2, ...]
  array.shift(); // [1, 2, ...]

  const result = array.map((i) => {
    if (i % 3 === 0 && i % 5 === 0) return "FizzBuzz";
    if (i % 3 === 0) return "Fizz";
    if (i % 5 === 0) return "Buzz";

    return i.toString();
  });

  return result;
};

// Examples
console.log(fizzBuzz(3)); // ["1","2","Fizz"]
console.log(fizzBuzz(5)); // ["1","2","Fizz","4","Buzz"]
console.log(fizzBuzz(15)); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","Fizz"]
