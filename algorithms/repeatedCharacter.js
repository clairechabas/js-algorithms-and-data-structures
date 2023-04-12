/**
 * First Letter to Appear Twice
 *
 * Given a string s consisting of lowercase English letters,
 * return the first letter to appear twice.
 *
 * A letter `a` appears twice before another letter `b` if the second
 * occurrence of `a` is before the second occurrence of `b`.
 * s will contain at least one letter that appears twice.
 *
 * @param {string} s
 * @return {character}
 */
// Solution 1 - With Hash Map - 65ms - Beats 30%
var repeatedCharacter = function (s) {
  let stringMap = new Map();

  for (let letter of s) {
    if (stringMap.has(letter)) return letter;

    stringMap.set(letter, 1);
  }
};

// Solution 2 - With Array - 56ms - Beats 70.41%
var repeatedCharacter2 = function (s) {
  let occurrences = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    if (occurrences[s.charCodeAt(i) - 97]) return s[i];

    occurrences[s.charCodeAt(i) - 97] = 1;
  }
};

// Solution 3 - With Set - 64ms - Beats 33.67%
var repeatedCharacter3 = function (s) {
  let stringSet = new Set();

  for (const letter of s) {
    if (stringSet.has(letter)) return letter;
    stringSet.add(letter);
  }

  return "";
};

// Examples
console.log(repeatedCharacter("abccbaacz")); // c
console.log(repeatedCharacter("abcdd")); // d
