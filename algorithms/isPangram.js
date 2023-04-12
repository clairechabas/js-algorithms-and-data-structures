/**
 * Check if the Sentence Is Pangram
 *
 * A pangram is a sentence where every letter of the English alphabet
 * appears at least once.
 *
 * Given a string sentence containing only lowercase English letters,
 * return true if sentence is a pangram, or false otherwise.
 *
 * @param {string} sentence
 * @return {boolean}
 */
// Solution 1 - With Array
var checkIfPangram = function (sentence) {
  let sentenceMap = new Array(26).fill(0);

  for (const letter of sentence) {
    sentenceMap[letter.charCodeAt(0) - 97] =
      (sentenceMap[letter.charCodeAt(0) - 97] || 0) + 1;
  }
  console.log(sentenceMap);

  return sentenceMap.every((letter) => letter);
};

// Solution 2 - With Hash Map - 51ms - Beats 95.55%
var checkIfPangram2 = function (sentence) {
  let sentenceMap = new Set();

  for (const letter of sentence) {
    sentenceMap.add(letter);
  }

  return sentenceMap.size === 26;
};

// Examples
console.log(checkIfPangram2("thequickbrownfoxjumpsoverthelazydog")); // true
console.log(checkIfPangram2("leetcode")); // false
