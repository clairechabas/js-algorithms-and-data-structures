// Bubble sort compares each value of an array with the next
// and swaps them to move the higher values up to the end of the array.
// At each loop you compare a smaller version of the array.
// Time Complexity: O(n^2)
// ES5
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// ES6
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}

// ES6 Optimized version for a nearly sorted array
// We use an indicator to break the loop when we know we don't need to
// swap. This avoids us to check each value of the array again while we
// already did in the previous loop and saw that there was no need to swap.
// Time Complexity: O(n)
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = arr.length; i > 0; i--) {
    let shouldNotSwap;

    for (let j = 0; j < i - 1; j++) {
      shouldNotSwap = true;
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        shouldNotSwap = false;
      }
    }
    if (shouldNotSwap) break;
  }

  return arr;
}
