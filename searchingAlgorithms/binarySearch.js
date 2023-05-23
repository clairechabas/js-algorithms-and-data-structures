/**
 * Binary Search
 *
 * Find an element in a sorted array in a O(log(n)) time complexity.
 */
function binarySearchRecursive(
  array,
  target,
  start = 0,
  end = array.length - 1
) {
  if (start > end) {
    console.log("Not found");

    return -1;
  }

  const middle = Math.floor((start + end) / 2);

  if (array[middle] === target) return middle;

  if (array[middle] > target) {
    binarySearchRecursive(array, target, start, middle - 1);
  }
  if (array[middle] < target) {
    binarySearchRecursive(array, target, middle + 1, end);
  }
}

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let middle;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);

    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  // target not found
  return -1;
}

// Examples
console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(
  binarySearch(
    [5, 6, 10, 13, 14, 18, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99],
    95
  )
); // 14
console.log(
  binarySearch(
    [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 64, 79, 84, 86, 95, 96, 98, 99],
    100
  )
); // -1
