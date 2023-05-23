/**
 * Reverse Words in a String III
 *
 * Given a string s, reverse the order of characters in each word
 * within a sentence while still preserving whitespace and initial
 * word order.
 *
 * @param {string} s
 * @return {string}
 */
// Solution - Without native methods I
var reverseWords = function (str) {
  let answer = [];
  // Init a stack to store each words
  let word = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/^\s/)) {
      // When crossing a white space,
      // we add the reversed word to our answer.
      while (word.length) {
        let lastLetter = word.pop();
        answer.push(lastLetter);
      }

      // If we have reached the end of the sentence
      // we add white spaces between words.
      if (i < str.length - 1) {
        answer.push(" ");
      }
    }

    // Construct the current word.
    if (!str[i].match(/^\s/)) {
      word.push(str[i]);
    }
  }

  // Adding the final word reversed to our answer,
  // skipping its white space.
  while (word.length) {
    let lastLetter = word.pop();
    answer.push(lastLetter);
  }

  return answer.join("");
};

// Solution - Without native methods II
var reverseWords2 = function (str) {
  function reverse(word) {
    let letters = word.split("");
    for (
      let left = 0, right = letters.length - 1;
      left < right;
      left++, right--
    ) {
      let tempLeft = letters[left];
      letters[left] = letters[right];
      letters[right] = tempLeft;
    }

    return letters.join("");
  }

  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = reverse(words[i]);
  }

  return words.join(" ");
};

// Solution - With native methods I
var reverseWordsWithMethods = function (str) {
  let answer = [];
  let strAsArray = str.split(" ");

  for (let i = 0; i < strAsArray.length; i++) {
    let reversed = strAsArray[i].split("").reverse().join("");
    answer.push(reversed);
  }

  return answer.join(" ");
};

// Solution - With native methods II
var reverseWordsWithMethods2 = function (str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
};

// Test examples
console.log(reverseWords2("Let's take LeetCode contest")); // "s'teL ekat edoCteeL tsetnoc"
console.log(reverseWords2("God Ding")); // "doG gniD"
