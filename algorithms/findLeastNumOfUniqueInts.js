/**
 * Least Number of Unique Integers after K Removals
 * Difficulty: Medium
 * Given an array of integers arr and an integer k. Find the least
 * number of unique integers after removing exactly k elements.
 * 0 <= k <= arr.length
 *
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

// SOLUTION 1 - 298ms
var findLeastNumOfUniqueInts = function (arr, k) {
  // 1. store integers' frequency in dictionnary
  const integers = {};
  arr.forEach((value) => {
    if (integers[value]) {
      integers[value] = integers[value] + 1;
    } else {
      integers[value] = 1;
    }
  });

  // 2. turn dictionnary into a priority queue
  const queue = Object.entries(integers).sort(([, a], [, b]) => b - a);

  // 3. update queue's items' values k times
  for (let i = 0; i < k; i++) {
    let item = queue.pop();
    if (item[1] === 1) {
      continue;
    } else {
      item = [item[0], item[1] - 1];
      queue.push(item);
    }
  }

  return queue.length;
};

// SOLUTION 2 - 216ms
var findLeastNumOfUniqueInts2 = function (arr, k) {
  let result = 0;

  // store frequency in dictionnary
  const integersByFrequency = arr.reduce((dictionnary, value) => {
    if (!dictionnary[value]) dictionnary[value] = 1;
    else dictionnary[value]++;
    return dictionnary;
  }, {});

  // Sort frequencies
  let frequencies = Object.values(integersByFrequency);
  frequencies.sort(function (a, b) {
    return a - b > 0 ? 1 : -1;
  });

  // ?
  frequencies.forEach((frequency) => {
    if (k > 0) {
      if ((k -= frequency) < 0) result++;
    } else {
      result++;
    }
  });

  return result;
};

// SOLUTION 1 - 168ms
var findLeastNumOfUniqueInts3 = function (arr, k) {
  // dictionnary
  let intsByFrequency = new Map();
  arr.forEach((int) =>
    intsByFrequency.set(int, intsByFrequency.get(int) + 1 || 1)
  );

  // priority queue
  let frequencies = Array.from(intsByFrequency.values());
  frequencies.sort((a, b) => a - b);

  let result = frequencies.length;
  for (let num of frequencies) {
    if (k >= num) {
      k -= num;
      result--;
    } else {
      return result;
    }
  }

  return result;
};
// SOLUTION 4 - 120ms
var findLeastNumOfUniqueInts4 = function (arr, k) {
  // 1. Map frequencies
  const freqMap = new Map();
  arr.forEach((num) => freqMap.set(num, (freqMap.get(num) || 0) + 1));

  // 2. Priority queue based on frequencies
  const frequencies = Array.from(freqMap.values()).sort((a, b) => a - b);

  // 3. Count down based on frequencies
  let uniqueIntsCount = frequencies.length;

  for (const frequency of frequencies) {
    if (k >= frequency) {
      k -= frequency;
      uniqueIntsCount--;
    } else {
      break;
    }
  }

  return uniqueIntsCount;
};

// Examples
console.log(findLeastNumOfUniqueInts4([5, 5, 4], 1)); // 1
// console.log(findLeastNumOfUniqueInts4([4, 3, 1, 1, 3, 3, 2], 3)); // 2
