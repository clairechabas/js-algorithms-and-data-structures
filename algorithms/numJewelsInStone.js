/**
 * Jewels and Stones
 *
 * You're given strings jewels representing the types of stones that are jewels,
 * and stones representing the stones you have. Each character in stones is a type
 * of stone you have. You want to know how many of the stones you have are also jewels.
 *
 * Letters are case sensitive, so "a" is considered a different type of stone from "A".
 *
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
// Solution 1 - With hash map - 59ms - Beats 76.73%
var numJewelsInStones = function (jewels, stones) {
  let jewelsMap = new Map();
  for (const letter of jewels) {
    jewelsMap.set(letter, (jewelsMap.get(letter) || 0) + 1);
  }

  let count = 0;
  for (const letter of stones) {
    if (jewelsMap.has(letter)) {
      count++;
    }
  }

  return count;
};

// Solution 2 - 60ms - Beats 72.93%
var numJewelsInStones2 = function (jewels, stones) {
  let count = 0;

  for (const letter of stones) {
    if (jewels.indexOf(letter) >= 0) count++;
  }

  return count;
};

// Examples
console.log(numJewelsInStones("Claire", "caalireou")); // 6
console.log(numJewelsInStones("aA", "aAAbbbb")); // 3
console.log(numJewelsInStones("z", "ZZ")); // 0
