// Radix sort
// We sort the numbers by relying on their digits. We create 10 buckets
// and loop over each number to sort them in the bucket corresponding to
// their digit at the current position.
// Time Complexity: O(nk) (where n is the amount of numbers and k the number of digits)
// Space Complexity: O(n+k)
import { getDigit, mostDigits } from "./sortingAlgorithms.helpers.js";

function radixSort(numbers) {
  let maxDigitCount = mostDigits(numbers);

  for (let k = 0; k < maxDigitCount; k++) {
    // Init an array of arrays to represent our buckets
    let digitsBuckets = Array.from({ length: 10 }, () => []);

    // sort the numbers in their respective bucket
    for (let i = 0; i < numbers.length; i++) {
      const bucketIndex = getDigit(numbers[i], k);
      digitsBuckets[bucketIndex].push(numbers[i]);
    }

    // concat the arrays
    numbers = [].concat(...digitsBuckets);
  }

  return numbers;
}

console.log(radixSort([23, 345, 5467, 12, 4567, 9876]));
