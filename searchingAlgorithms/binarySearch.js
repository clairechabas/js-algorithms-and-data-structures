// Binary Search Algorithm
// When looking in an sorted array, binary search is the more efficient
// than linear search. It's a divide and conquer approach.
// Time Complexity: O(log(n))

// Option 1
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let middle;

  while (start <= end) {
    middle = Math.round((start + end) / 2);

    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
}

// Examples
console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
binarySearch(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
    99,
  ],
  10
); // 2
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
); // 16
binarySearch(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
    99,
  ],
  100
); // -1

// Option 2: recursively
// function binarySearch(target, start, end) {
//   // 1. Base condition
//   // Stop looping when reaching the end of the array
//   if (start > end) {
//     return "Not found";
//   }

//   // 2. Compute the middle index to compare it to the target
//   const middle = Math.floor((start + end) / 2);

//   // When middle equals the target you found the index
//   if (arr[middle] === target) {
//     return `Found it at index ${middle}`;
//   }

//   // 3. Continue searching
//   if (arr[middle] > target) {
//     // middle becomes end
//     return findMe(target, start, middle - 1);
//   }

//   if (arr[middle] < target) {
//     // middle becomes start
//     return findMe(target, middle + 1, end);
//   }
// }
