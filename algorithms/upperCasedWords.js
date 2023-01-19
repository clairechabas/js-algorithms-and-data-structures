// Given an array of words, return a new array containing
// each word capitalized, meaning uppercased.
function capitalizeWords(words) {
  let result = [];

  while (words.length > 0) {
    result.push(words[0].toUpperCase());

    return result.concat(capitalizeWords(words.splice(1)));
  }

  return result;
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
