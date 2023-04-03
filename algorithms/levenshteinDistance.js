/**
 * Levenshtein Distance Algorithm
 *
 *  The Levenshtein distance measures the amount of difference
 * between two sequences, meaning its the minimum number of edits
 * needed to transform one string into the other.
 */

// First solution: O(n)
// function levenshteinDistance(str1, str2) {
//   // select the longer string
//   const longest = str1.length >= str2.length ? str1 : str2;
//   const otherString = longest === str1 ? str2 : str1;

//   // store the number of occurences of each letter of longest in a dictionary
//   let longestLetters = {};
//   for (const letter of longest) {
//     longestLetters[letter] = longestLetters[letter]
//       ? (longestLetters[letter] += 1)
//       : 1;
//   }
//   console.log("dictionary", longestLetters);

//   // loop over otherString and check each letter in the dictionary
//   let countForReplacement = 0;
//   for (const letter of otherString) {
//     // If we find a similar letter we decrement its amount in our dictionary
//     if (longestLetters[letter]) {
//       longestLetters[letter] -= 1;
//       console.log(`found letter ${letter}`, longestLetters);
//     } else {
//       // otherwise we found a difference so we increment our count
//       countForReplacement++;
//     }
//   }
//   console.log("countForReplacement after for loop", countForReplacement);

//   // After looping on the smallest string we add count what's left
//   // in our dictionary and add it to our count
//   const remainingLetters = Object.values(longestLetters).reduce(
//     (acc, next) => acc + next
//   );
//   console.log("remainingLetters remainingLetters", remainingLetters);

//   return remainingLetters - countForReplacement;
// }

function levenshteinDistance(str1, str2) {
  // Fail fast
  if (!str1.length) return str2.length;
  if (!str2.length) return str1.length;

  const letters = [];
  for (let i = 0; i <= str2.length; i++) {
    // we store as a subarray
    letters[i] = [i]; // letters[i] = [[d]]

    for (let j = 1; j < str1.length; j++) {
      // letters[i][j] = ?
      letters[i][j] =
        i === 0
          ? j
          : Math.min(
              arr[i - 1][j] + 1,
              arr[i][j - 1] + 1,
              arr[i - 1][j - 1] + (str1[j - 1] === str2[i - 1] ? 0 : 1)
            );
    }
  }

  return arr[str2.length][str1.length];
}

// Examples
console.log(levenshteinDistance("duck", "dark")); // 2
// console.log(levenshteinDistance("kitten", "sitting")); // 3
// console.log(levenshteinDistance("rosettacode", "raisethysword")); // 8
