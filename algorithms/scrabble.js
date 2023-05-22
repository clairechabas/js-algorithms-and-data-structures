/**
 * Scrabble score calculator
 *
 * Given a string, calculate the score that it would get
 * in a game of Scrabble.
 * For extra credit, try verifying if the string is a valid word,
 * or take into account premium squares!
 *
 * 1 point: E, A, I, O, N, R, T, L, S, U
 * 2 points: D, G
 * 3 points: B, C, M, P
 * 4 points: F, H, V, W, Y
 * 5 points: K
 * 8 points: J, X
 * 10 points: Q, Z
 */
function getScrabbleScore(string) {
  // store scores
  const scores = [
    1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4,
    10,
  ];

  let score = 0;

  // loop on string and increment score along the way.
  // Note that a regular loop would be more efficient.
  // I go for a for...of to optimize for readability.
  for (const letter of string) {
    // In ASCII table alphabet lowercased letters range from 97 ("a") to 122 ("z")
    score += scores[letter.toLowerCase().charCodeAt() - 97];
  }

  return score;
}

// Examples
console.log(getScrabbleScore("hello")); // 8
console.log(getScrabbleScore("FIZZBUZZ")); // 49
