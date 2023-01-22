// A naive implementation of string search
function naiveStringSearch(longString, shortString) {
  // Counting the number of matches we find.
  let count = 0;

  for (let i = 0; i < longString.length; i++) {
    for (let j = 0; j < shortString.length; j++) {
      // Looking for a match to the first letter of the shortString in the longString.
      // If no match, we break out of the inner for loop and i get incremented.
      if (shortString[j] !== longString[i + j]) break;

      // If there's a match, j will get incremented.
      // And if j comes to equal the last index of the shortString we found a match.
      if (j === shortString.length - 1) count++;
    }
  }

  return count > 0 ? `Found ${count} match(es).` : "No matches found.";
}

console.log(naiveStringSearch("coucouomgbijou", "omg")); // 1 match
console.log(naiveStringSearch("coucouomgbijou", "claire")); // 0 match
