/**
 * Maximum Number of Balloons
 *
 * Given a string text, you want to use the characters of text to form
 * as many instances of the word "balloon" as possible.
 *
 * You can use each character in text at most once.
 *
 * Return the maximum number of instances that can be formed.
 *
 * @param {string} text
 * @return {number}
 */
// Solution 1 - With Hash Map - 83ms - Beats 12.86%
var maxNumberOfBalloons = function (text) {
  // Return early possible case are text length < balloon length
  if (text.length < "balloon".length) return 0;

  // 1. store balloon letters from text in a frequency map
  let lettersFreq = new Map();
  for (const letter of text) {
    if ("balon".includes(letter)) {
      lettersFreq.set(letter, (lettersFreq.get(letter) || 0) + 1);
    }
  }

  // 2. Check that we have at least each letters needed
  if (
    lettersFreq.size === "balon".length &&
    lettersFreq.get("l") >= 2 &&
    lettersFreq.get("o") >= 2
  ) {
    // 3. check the min number for each possible letter (careful when checking "l" and "o")
    let min = lettersFreq.get("b") || 0;
    for (const [letter, count] of lettersFreq) {
      min =
        letter === "l" || letter === "o"
          ? Math.min(min, Math.floor(count / 2))
          : Math.min(min, count);
    }

    return min;
  }

  return 0;
};

// Solution 2 - 70ms - Beats 54.9%
var maxNumberOfBalloons2 = function (text) {
  // Return early possible case are text length < balloon length
  if (text.length < "balloon".length) return 0;

  // 1. store balloon letters from text in a frequency map
  let letters = {};
  for (const letter of text) {
    if ("balon".includes(letter)) {
      letters[letter] = (letters[letter] || 0) + 1;
    }
  }

  // 2. Return the min number for each possible letter (careful when checking "l" and "o")
  return (
    Math.floor(
      Math.min(letters.b, letters.a, letters.l / 2, letters.o / 2, letters.n)
    ) || 0
  );
};

// Solution 3 - 63ms - Beats 83.47%
var maxNumberOfBalloons3 = function (text) {
  // Return early possible case are text length < balloon length
  if (text.length < "balloon".length) return 0;

  // 1. Store balloon letters in an initialized object
  const letters = { b: 0, a: 0, l: 0, o: 0, n: 0 };
  for (const letter of text) {
    letters[letter]++;
  }

  // 2. Return the min number for each possible letter (careful when checking "l" and "o")
  return (
    Math.floor(
      Math.min(letters.b, letters.a, letters.l / 2, letters.o / 2, letters.n)
    ) || 0
  );
};

// Examples
console.log(maxNumberOfBalloons("nlaebolko")); // 1
console.log(maxNumberOfBalloons("loonbalxballpoon")); // 2
console.log(maxNumberOfBalloons("leetcode")); // 0
