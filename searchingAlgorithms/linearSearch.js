// When looking in an unsorted array, linear search is the only approach.
// JS is doing that with indexOf, includes, find, findIndex. These methods
// are checking every items one at a time.
// Time Complexity: O(n)
function linearSearch(array, value) {
  // loop through the entire array
  for (let i = 0; i < array.length; i++) {
    // you find the value return its index in the array
    if (array[i] === value) {
      return i;
    }
  }

  // If you don't return -1
  return -1;
}

// Examples
console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1
// linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
// linearSearch([100], 100) // 0
// linearSearch([1,2,3,4,5], 6) // -1
// linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1
// linearSearch([100], 200) // -1
