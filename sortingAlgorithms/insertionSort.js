// Insertion sort
// For each element we look in the left portion of the array
// and insert it at the right spot. So we're sorting the array
// as we move forward in the array by inserting each item in
// the already sorted part of the array.
// Insertion sort is better than bubble and selection when you
// receive data in real time and need to sort them on the go.
// Time Complexity: O(n^2)
function insertionSort(arr) {
  let currentValue;

  for (let i = 1; i < arr.length; i++) {
    currentValue = arr[i];

    for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }

  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
