// Given an array of words, return a new array containing
// each word capitalized, meaning uppercased.

// Option 1: pure recursion
function capitalizeWords(words) {
  let result = [];

  while (words.length > 0) {
    result.push(words[0].toUpperCase());

    return result.concat(capitalizeWords(words.splice(1)));
  }

  return result;
}

// Option 2: with recusive helper function
function capitalizeWords(arr) {
  let result = [];

  function helper(inputArr) {
    while (inputArr.length > 0) {
      result.push(inputArr[0].toUpperCase());
      return helper(inputArr.slice(1));
    }
  }
  helper(arr);
  return result;
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
