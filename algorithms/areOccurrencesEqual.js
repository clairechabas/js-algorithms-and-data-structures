/**
 * Check if All Characters Have Equal Number of Occurrences
 *
 * Given a string s, return true if s is a good string, or false otherwise.
 * A string s is good if all the characters that appear in s have the same
 * number of occurrences (i.e., the same frequency).
 *
 * @param {string} s
 * @return {boolean}
 */
// Solution 1 - With Hash Map - 71ms - Beats 46.2%
var areOccurrencesEqual = function (s) {
  // store letters frequencies in hash map
  let frequencies = new Map();
  for (let i = 0; i < s.length; i++) {
    frequencies.set(s[i], (frequencies.get(s[i]) || 0) + 1);
  }

  // check that all values are equal,
  // to do that we can create a Set from map.values()
  // and check if its size is 1
  let set = new Set(frequencies.values());

  return set.size === 1;
};

// Examples
console.log(areOccurrencesEqual("aabb")); // true
console.log(areOccurrencesEqual("abb")); // false
console.log(areOccurrencesEqual("abacbc")); // true
console.log(areOccurrencesEqual("aaabb")); // false
